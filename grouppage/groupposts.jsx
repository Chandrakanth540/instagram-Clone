import { Image } from 'react-native';
import { Text } from 'react-native';
import gallerygray from '../assests/gallerygray.png';
import gallerywhite from '../assests/gallerywhite.png';
import followergray from '../assests/followergray.png';
import followerwhite from '../assests/followerwhite.png';

import GroupImages from './groupallimages';
import nopost from '../assests/nopostcam.png';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { ScrollView } from 'react-native';

const Tab = createMaterialTopTabNavigator();

const GroupPosts = () => {
  return (
    // <View>
    <Tab.Navigator
      contentInset={{ bottom: 10 }}
      overScrollMode="always"
      initialRouteName="home"
      shifting={true}
      options={{}}
      activeColor="black"
      barStyle={{}}
      screenOptions={{
        // tabBarScrollEnabled: true,
        tabBarActiveTintColor: 'green',
        tabBarStyle: { backgroundColor: 'black' },
        tabBarActiveTintColor: 'white',
        tabBarIndicatorStyle: {
          backgroundColor: '#808080',
        },
      }}
    >
      <Tab.Screen
        name="king"
        component={FollowersTab}
        options={{
          title: 'Home',
          tabBarColor: 'white',
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Image
                name="home"
                source={focused ? gallerywhite : gallerygray}
                size={size}
                style={{ height: 27, width: 27 }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="foryousuggest"
        component={GalleryTab}
        options={{
          title: 'Home',
          tabBarColor: 'white',
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Image
                name="home"
                source={focused ? followerwhite : followergray}
                size={size}
                style={{ height: 27, width: 27 }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const GalleryTab = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: 'black',
        flex: 1,
        paddingHorizontal: '36%',
        // paddingTop: 224,
        paddingBottom: 200,
      }}
    >
      <Text>
        <GroupImages nopost={followerwhite} />;
      </Text>
    </ScrollView>
  );
};

const FollowersTab = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: 'black',
        flex: 1,
        paddingHorizontal: '36%',
        // paddingTop: 224,
        paddingBottom: 200,
      }}
    >
      <Text>
        <GroupImages nopost={nopost} />;
      </Text>
    </ScrollView>
  );
};

export default GroupPosts;
