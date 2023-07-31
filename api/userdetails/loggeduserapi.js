import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';
import { auth, firestore } from '../../firebaseconfig';

let UserRef = collection(firestore, 'users');
export const LoggedUserApi = async (setLoggedUser) => {
  const currenUserQuery = await query(
    UserRef,
    where('userEmail', '==', auth.currentUser.email),
  );
  onSnapshot(currenUserQuery, (response) => {
    let LoggedUserone = response.docs.map((item) => {
      setLoggedUser({ ...item.data(), userId: item.id });
    });
  });
};

export const UserDetailById = async (findIdDetails) => {
  const docRef = doc(UserRef, findIdDetails);
  const docSnap = await getDoc(docRef);
  const docData = docSnap.data();
  return { ...docData, userId: findIdDetails };
};
