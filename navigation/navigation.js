import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import Homescreen from '../screens/homescreen';
// import EmptyScreen from '../screens/emptyscreen';
import 'react-native-gesture-handler';
import ChatScreen from '../screens/chatscreen';
import ProfileScreen from '../screens/profilescreen';
import FourSectionScreen from '../screens/foursectionscreen';
import TabNavigate from '../screens/tabnavigate';
import SectionBroker from '../foursection/sectionbroker';
import FourSectionWrapper from '../foursection/foursectionwrapper';
import GroupPageScreen from '../screens/grouppagescreen';
import ChattingFriends from '../screens/chattingfriend';
import MyData from '../screens/mydata';
import LoginScreen from '../screens/loginscreen';
import RegisterScreen from '../screens/register';
import ContextData, { MyProvider } from '../contexts/context';
import HomeToProfile from '../homescreen/hometoprofile';
import MainNavigate from './mainnavigate';
// import HomeNavigate from './homescreennavigate';
export const LogInNavigation = () => {
  const Stack = createStackNavigator();
  const screenOptions = {
    headerShown: false,
    ...TransitionPresets.SlideFromRightIOS,
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="mainnavigate"
        screenOptions={screenOptions}
      >
        <Stack.Screen name="HomeScreen" component={Homescreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="FourSection" component={FourSectionScreen} />
        <Stack.Screen
          name="foursectionwrapper"
          component={FourSectionWrapper}
        />
        <Stack.Screen name="TabNavigate" component={TabNavigate} />
        <Stack.Screen name="SectionBroker" component={SectionBroker} />
        <Stack.Screen name="grouppagescreen" component={GroupPageScreen} />
        <Stack.Screen name="chattingfriends" component={ChattingFriends} />
        <Stack.Screen name="mydata" component={MyData} />
        <Stack.Screen name="hometoprofile" component={HomeToProfile} />
        <Stack.Screen name="mainnavigate" component={MainNavigate} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export const LogOutNavigation = () => {
  const Stack = createStackNavigator();
  const screenOptions = {
    headerShown: false,
    ...TransitionPresets.SlideFromRightIOS,
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={screenOptions}
      >
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
