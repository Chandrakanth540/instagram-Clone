import { StyleSheet } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ForYouSuggest from './foryousuggest';
const Tab = createMaterialTopTabNavigator();
const FourSectionMiddle = ({ initial_Route }) => {
  return (
    // <View>
    <Tab.Navigator
      initialRouteName={initial_Route ? initial_Route.initial_Route : 'mutual'}
      shifting={true}
      options={{}}
      activeColor="black"
      barStyle={{}}
      screenOptions={{
        tabBarActiveTintColor: 'green',

        tabBarStyle: { backgroundColor: 'black' },
        tabBarActiveTintColor: 'white',
        tabBarIndicatorStyle: {
          backgroundColor: '#808080',
        },
      }}
    >
      <Tab.Screen
        name="mutual"
        component={ForYouSuggest}
        // options={{
        //   title: 'Home',
        //   tabBarColor: 'white',
        // }}
      />
      <Tab.Screen
        name="following"
        component={ForYouSuggest}
        // tabBarColor="green"
        // options={{
        //   title: 'Search',
        // }}
      />
      <Tab.Screen
        name="followers"
        component={ForYouSuggest}
        // options={{
        //   title: 'Post',
        // }}
      />
      <Tab.Screen
        name="foryou"
        component={ForYouSuggest}
        // options={{
        //   title: 'Reels',
        // }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});
export default FourSectionMiddle;
{
  /* <Divider width={1} color="#454545" style={{ marginVertical: 15 }} /> */
}
