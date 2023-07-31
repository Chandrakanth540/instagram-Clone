import { collection, onSnapshot } from 'firebase/firestore';
import { firestore } from '../../firebaseconfig';
let dbRef = collection(firestore, 'postData');
export const PostCollection = async (setAllPosts) => {
  await onSnapshot(dbRef, (resp) => {
    setAllPosts(
      resp.docs.map((doc) => {
        return { ...doc.data(), postid: doc.id };
      }),
    );
  });
};

export const DeletePost = () => {};
