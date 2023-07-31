import { StyleSheet } from 'react-native';
import Homescreen from './homescreen';
import ChatScreen from './chatscreen';
import ProfileScreen from './profilescreen';

import home from '../assests/home.png';
import homefilled from '../assests/homefilled.png';
import { Image } from 'react-native';
import defaultImage from '../assests/user6.jpg';
import search from '../assests/homesearch.png';
import searchfilled from '../assests/homesearchfilled.png';
import addnew from '../assests/addnew.png';
import addnewfilled from '../assests/addnewfilled.png';
import reelsfilled from '../assests/reelsfilled.png';
import reels from '../assests/reels.png';
import GroupPageScreen from './grouppagescreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChattingFriends from './chattingfriend';
import { createContext } from 'react';
import { MyProvider } from '../contexts/context';
import MyData from './mydata';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigate from '../navigation/homescreennavigate';
import SharePost from './sharepost';

const Tab = createMaterialTopTabNavigator();

const TabNavigate = () => {
  return (
    <MyProvider>
      <Tab.Navigator
        initialRouteName="home"
        screenOptions={{
          headerShown: false,
          swipeEnabled: false,
          tabBarShowLabel: false,
          tabBarStyle: { backgroundColor: '#080808' },
          tabBarActiveTintColor: 'white',
          tabBarIndicatorStyle: {
            backgroundColor: '#808080',
            display: 'none',
          },
        }}
        tabBarPosition="bottom"
      >
        <Tab.Screen
          name="home"
          component={Homescreen}
          options={{
            title: 'Home',
            tabBarColor: 'white',
            tabBarButton: () => null,

            tabBarIcon: ({ focused, color, size }) => {
              return (
                <Image
                  name="home"
                  source={focused ? homefilled : home}
                  size={size}
                  style={{ height: 27, width: 27 }}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="chat"
          component={ChatScreen}
          // tabBarColor="green"
          options={{
            title: 'Search',
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <Image
                  name="home"
                  source={focused ? searchfilled : search}
                  size={size}
                  style={{ height: 27, width: 27 }}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="profile"
          component={SharePost}
          options={{
            title: 'Post',

            tabBarIcon: ({ focused, color, size }) => {
              return (
                <Image
                  name="newpost"
                  source={focused ? addnewfilled : addnew}
                  size={size}
                  style={{ height: 27, width: 27 }}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="chatting"
          component={ChattingFriends}
          options={{
            title: 'Reels',

            tabBarIcon: ({ focused, color, size }) => {
              return (
                <Image
                  name="home"
                  source={focused ? reelsfilled : reels}
                  size={size}
                  style={{ height: 27, width: 27 }}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="foursectionwrapper"
          component={GroupPageScreen}
          options={{
            title: 'Profile',

            tabBarIcon: ({ focused, color, size }) => {
              return (
                <Image
                  name="home"
                  source={focused ? defaultImage : defaultImage}
                  size={size}
                  style={{
                    height: 27,
                    width: 27,
                    borderRadius: 100,
                    resizeMode: 'contain',
                    borderWidth: 1,
                    borderColor: focused ? 'white' : 'black',
                  }}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="mydata"
          component={MyData}
          options={{
            title: 'Profile',

            tabBarIcon: ({ focused, color, size }) => {
              return (
                <Image
                  name="mydata"
                  source={focused ? defaultImage : defaultImage}
                  size={size}
                  style={{
                    height: 27,
                    width: 27,
                    borderRadius: 100,
                    resizeMode: 'contain',
                    borderWidth: 1,
                    borderColor: focused ? 'white' : 'black',
                  }}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </MyProvider>
  );
};
export default TabNavigate;
const styles = StyleSheet.create({});
