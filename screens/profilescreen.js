import { StyleSheet, SafeAreaView } from 'react-native';
import ProfileWrapper from '../profilescreen/profilewrapper';
import { useRoute } from '@react-navigation/native';
import { useEffect } from 'react';

const ProfileScreen = ({ navigation }) => {
  const route = useRoute();
  const { profileId } = route.params;
  const RetrieveData = async () => {};

  useEffect(() => {}, [profileId]);
  return (
    <SafeAreaView style={styles.mainProfileWrap}>
      <ProfileWrapper navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainProfileWrap: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 35,
    paddingHorizontal: 10,
  },
});
export default ProfileScreen;
