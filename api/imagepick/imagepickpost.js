import * as ImagePicker from 'expo-image-picker';
export const ImagePickinggallery = async (setDefaultImage) => {
  try {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      //   allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      //   console.log(result.assets[0].uri);
      setDefaultImage(result.assets[0]);
    }
  } catch (error) {
    alert(error.message);
    // console.log(error, 'punka error');
  }
};
