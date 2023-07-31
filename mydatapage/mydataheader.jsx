import { Pressable, StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import leftarrow from '../assests/leftarrow.png';
import { Image } from 'react-native';
import verticaldots from '../assests/verticaldots.png';
import verifiedBadge from '../assests/verifiedBadge.png';
import notification from '../assests/notification.png';
import lock from '../assests/lockmydata.png';
import down from '../assests/downmydata.png';
import reels from '../assests/addmydata.png';
import menu from '../assests/menu.png';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseconfig';
const MydataHeader = ({ navigation }) => {
  return (
    <View style={styles.profileWrapper}>
      <View style={styles.imgNameWrap}>
        <Image source={lock} style={styles.lockImg} />
        <View style={{ flexDirection: 'row', gap: 7 }}>
          <Text style={styles.profilerName}>00_chandhra</Text>
          <Image
            source={down}
            style={{
              height: 10,
              width: 10,
              padding: 4,
              resizeMode: 'contain',
              alignSelf: 'center',
            }}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 18,
          paddingRight: 10,
        }}
      >
        <Image source={reels} style={styles.notify} />
        <Pressable
          onPress={() => {
            navigation.replace('LoginScreen');
            signOut(auth);
          }}
        >
          <Image source={menu} style={styles.VertiDots} />
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  profileWrapper: {
    // backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 2.5,
    paddingBottom: 20,
    paddingTop: 10,
  },
  profilerName: {
    color: 'whitesmoke',
    fontSize: 18,
    fontWeight: '600',
  },
  lockImg: {
    height: 23,
    width: 23,
    objectFit: 'contain',
  },
  VertiDots: {
    height: 32,
    width: 32,
    resizeMode: 'contain',
  },
  notify: {
    height: 25,
    width: 25,
  },
  imgNameWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
export default MydataHeader;
