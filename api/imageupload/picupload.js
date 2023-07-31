import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebaseconfig';

export const ImageUploadApi = async (imageFile) => {
  try {
    // Destructure necessary properties from the imageFile object
    const { uri, type } = imageFile;

    // Fetch the image file using the provided URI
    const response = await fetch(uri);
    const blob = await response.blob();

    // Generate a filename with a timestamp and file type extension
    const filename = `image_${Date.now()}.${type.split('/')[1]}`;

    // Create a Firebase Storage reference using the filename
    const storageRef = ref(storage, `files/${filename}`);

    // Upload the image file to Firebase Storage using a resumable upload
    const uploadTask = uploadBytesResumable(storageRef, blob);

    // Set up an event listener for tracking upload progress and handling completion
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Calculate and log the upload progress
        const progress = Math.floor(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        );
        console.log(`Upload is ${progress}% done`);
      },
      (error) => {
        // Handle errors during the upload process
        console.error('Error during upload:', error);
      },
      () => {
        // Upload completed successfully
        console.log('Upload completed successfully');

        // Get the download URL of the uploaded image file
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) => {
            console.log('Download URL:', downloadURL);
          })
          .catch((error) => {
            console.error('Error getting download URL:', error);
          });
      },
    );
  } catch (error) {
    // Handle errors that occur during the image upload process
    console.error('Error uploading image to Firebase:', error);
    throw error;
  }
};
