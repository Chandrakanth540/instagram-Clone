import { View, Text, StyleSheet, Pressable } from 'react-native';
import ProfileBio from './profilebio';
import { Image } from 'react-native';
import profileLock from '../assests/secure.png';
import { Divider } from 'react-native-elements';
const ProfileFooter = () => {
  return (
    <View>
      <ProfileBio />
      <FollowButton />
      <ProfileLock />
    </View>
  );
};

const FollowButton = () => (
  <View style={styles.followBtnWrap}>
    <Pressable>
      <Text style={{ color: 'white', fontSize: 14 }}>Follow</Text>
    </Pressable>
  </View>
);
const ProfileLock = () => (
  <View>
    <Divider color="#454545" marginBottom={17} />

    <View style={styles.lockWrap}>
      <View>
        <Image source={profileLock} style={styles.lockImg} />
      </View>
      <View>
        <Text style={styles.secureText}>This Account is Private</Text>
        <Text style={{ color: 'gray' }}>
          Follow this account to see their photos and videos.
        </Text>
      </View>
    </View>
  </View>
);
const styles = StyleSheet.create({
  followBtnWrap: {
    backgroundColor: 'rgb(0, 149, 256)',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 30,
  },
  lockImg: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },
  secureText: {
    color: 'whitesmoke',
  },
  lockWrap: {
    flexDirection: 'row',
    gap: 10,
    padding: 2,
    marginBottom: 20,
  },
});
export default ProfileFooter;
