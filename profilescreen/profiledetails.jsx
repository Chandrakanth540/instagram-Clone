import { Image, StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import defImg from '../assests/user6.jpg';
const ProfileDetails = () => {
  return (
    <View style={styles.profileDetailWrap}>
      <View>
        <Image source={defImg} style={styles.ProfileImage} />
        {/* <Text style={styles.textColor}>ProfileDetails</Text> */}
      </View>
      <View style={styles.threeCompWrap}>
        <Text style={styles.textValueWrap}>0</Text>
        <Text style={styles.textColor}>Posts</Text>
      </View>
      <View style={styles.threeCompWrap}>
        <Text style={styles.textValueWrap}>258</Text>
        <Text style={styles.textColor}>Followers</Text>
      </View>
      <View style={styles.threeCompWrap}>
        <Text style={styles.textValueWrap}>201</Text>
        <Text style={styles.textColor}>Following</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  threeCompWrap: {
    alignItems: 'center',
  },
  textColor: {
    color: 'whitesmoke',
    fontSize: 14.5,
  },
  textValueWrap: {
    color: 'whitesmoke',
    fontSize: 19,
    fontWeight: '700',
  },
  ProfileImage: {
    height: 95,
    width: 95,
    borderRadius: 100,
    resizeMode: 'contain',
  },
  profileDetailWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
});
export default ProfileDetails;
