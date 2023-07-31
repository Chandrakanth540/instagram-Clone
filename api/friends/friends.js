import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';
import { auth, firestore } from '../../firebaseconfig';

let UserRef = collection(firestore, 'users');
export const followingPeople = async (setFollowing, setFollowPeopleIds) => {
  const maindocCollection = await query(
    UserRef,
    where('userEmail', '==', auth.currentUser.email),
  );
  const getDoc = await getDocs(maindocCollection);
  // console.log(getDoc.docs[0].ref.id);
  const userId = getDoc.docs[0].ref;
  const collectionData = collection(userId, 'Following');

  try {
    const unsubscribe = await onSnapshot(collectionData, (snapshot) => {
      const updatedFollowingPeople = [];
      const followPeopleIds = [];
      snapshot.forEach((doc) => {
        updatedFollowingPeople.push({ userId: doc.id, ...doc.data() });
        followPeopleIds.push(doc.id);
      });
      setFollowing(updatedFollowingPeople);
      setFollowPeopleIds(followPeopleIds);
    });
  } catch (err) {
    return [];
  }
};
