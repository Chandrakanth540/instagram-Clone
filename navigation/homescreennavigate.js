import { StyleSheet } from 'react-native';
// import Homescreen from './homescreen';
// import ChatScreen from './chatscreen';
// import ProfileScreen from './profilescreen';

import home from '../assests/home.png';
import homefilled from '../assests/homefilled.png';
import { Image } from 'react-native';
// import defaultImage from '../assests/user6.jpg';
import search from '../assests/homesearch.png';
import searchfilled from '../assests/homesearchfilled.png';
// import addnew from '../assests/addnew.png';
// import addnewfilled from '../assests/addnewfilled.png';
// import reelsfilled from '../assests/reelsfilled.png';
// import reels from '../assests/reels.png';
// import GroupPageScreen from './grouppagescreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import ChattingFriends from './chattingfriend';
// import { createContext } from 'react';
import { MyProvider } from '../contexts/context';
// import MyData from './mydata';
// import TabNavigate from '../screens/tabnavigate';
import ChatScreen from '../screens/chatscreen';
import Homescreen from '../screens/homescreen';
import SharePost from '../screens/sharepost';
// import TabNavigate from '../screens/tabnavigate';
// import MainNavigate from './mainnavigate';

const Tab = createMaterialTopTabNavigator();

const HomeNavigate = () => {
  return (
    <MyProvider>
      <Tab.Navigator
        initialRouteName="chat"
        options={{}}
        activeColor="black"
        barStyle={{ backgroundColor: 'black' }}
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: 'black',
            position: 'absolute',
            bottom: 0,
          },
          tabBarIndicatorStyle: {
            backgroundColor: '#808080',

            display: 'none',
          },
          tabBarShowIcon: false,
        }}
        tabBarPosition="bottom"
      >
        <Tab.Screen name="chat" component={Homescreen} />
        <Tab.Screen
          name="hiome"
          component={SharePost}
          options={{ tabBarStyle: { backgroundColor: 'red', display: 'none' } }}
        />
      </Tab.Navigator>
    </MyProvider>
  );
};
export default HomeNavigate;
const styles = StyleSheet.create({});
