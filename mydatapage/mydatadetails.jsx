import { Image, ScrollView, StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import defImg from '../assests/user13.jpg';
const MydataDetails = ({ mydata, navigation }) => {
  // console.log(mydata, 'magic');

  return (
    <View style={styles.profileDetailWrap}>
      <View>
        <Image
          source={{ uri: mydata.profilePicUrl } || defImg}
          style={styles.ProfileImage}
        />
        {/* <Text style={styles.textColor}>ProfileDetails</Text> */}
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <View style={styles.threeCompWrap}>
          <Text style={styles.textValueWrap}>0</Text>
          <Text style={styles.textColor}>Posts</Text>
        </View>
        <View style={styles.threeCompWrap}>
          <Text style={styles.textValueWrap}>10M</Text>
          <Text style={styles.textColor}>Followers</Text>
        </View>
        <View style={styles.threeCompWrap}>
          <Text style={styles.textValueWrap}>74</Text>
          <Text style={styles.textColor}>Following</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  threeCompWrap: {
    alignItems: 'center',
    paddingRight: 35,
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
    height: 80,
    width: 80,
    borderRadius: 100,
    resizeMode: 'contain',
  },
  profileDetailWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    gap: 50,
    paddingHorizontal: 5,
  },
});
export default MydataDetails;
