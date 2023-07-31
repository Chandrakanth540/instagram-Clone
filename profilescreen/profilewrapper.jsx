import { View } from 'react-native';
import ProfileHeader from './profileheader';
import ProfileDetails from './profiledetails';
import ProfileFooter from './profilefooter';
import Suggestion from './suggestions';
const ProfileWrapper = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <ProfileHeader />
      <ProfileDetails />
      <ProfileFooter navigation={navigation} />
      <Suggestion navigation={navigation} />
    </View>
  );
};
export default ProfileWrapper;
