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
import TabNavigate from '../screens/tabnavigate';
import ChatScreen from '../screens/chatscreen';

const Tab = createMaterialTopTabNavigator();

const MainNavigate = () => {
  return (
    <MyProvider>
      <Tab.Navigator
        initialRouteName="hiome"
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
        <Tab.Screen name="chat" component={ChatScreen} />
        <Tab.Screen name="hiome" component={TabNavigate} />
      </Tab.Navigator>
    </MyProvider>
  );
};
export default MainNavigate;
const styles = StyleSheet.create({});
