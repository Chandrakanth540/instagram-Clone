import { StyleSheet, Text, View } from 'react-native';
import MyContext from '../contexts/context';
import { useContext } from 'react';
import { useRoute } from '@react-navigation/native';
import ProfileScreen from '../screens/profilescreen';
import MyData from '../screens/mydata';
const HomeToProfile = ({ navigation }) => {
  const { following, followPeopleIds } = useContext(MyContext);
  const route = useRoute();

  const { profileId } = route.params;

  if (followPeopleIds.includes(profileId)) {
    return <MyData />;
  } else {
    return <ProfileScreen />;
  }
};
export default HomeToProfile;
const styles = StyleSheet.create({});
