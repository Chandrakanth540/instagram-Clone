// MyContext.js
import React, { createContext, useEffect, useState } from 'react';
import { auth, firestore } from '../firebaseconfig';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { LoggedUserApi } from '../api/userdetails/loggeduserapi';
import { PostCollection } from '../api/posts/postcollection';
import { followingPeople } from '../api/friends/friends';
const MyContext = createContext();
let UserRef = collection(firestore, 'users');
export const MyProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState({});
  const [allPosts, setAllPosts] = useState([]);
  const [following, setFollowing] = useState([]);
  const [followPeopleIds, setFollowPeopleIds] = useState([]);
  const GetUserDetails = async () => {
    await LoggedUserApi(setLoggedUser);
    await PostCollection(setAllPosts);
    await followingPeople(setFollowing, setFollowPeopleIds);
  };
  useEffect(() => {
    GetUserDetails();
  }, []);
  // console.log(following, followPeopleIds, 'king');

  return (
    <MyContext.Provider
      value={{ loggedUser, allPosts, following, followPeopleIds }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
