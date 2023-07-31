import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import leftarrow from '../assests/leftarrow.png';
import { Image } from 'react-native';
import verticaldots from '../assests/verticaldots.png';
import verifiedBadge from '../assests/verifiedBadge.png';
import notification from '../assests/notification.png';
const GroupHeader = () => {
  return (
    <View style={styles.profileWrapper}>
      <View style={styles.imgNameWrap}>
        <Image source={leftarrow} style={styles.leftarrowImg} />
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
          <Text style={styles.profilerName}>pawankalyan</Text>
          <Image
            source={verifiedBadge}
            style={{
              height: 14,
              width: 14,
              padding: 4,
            }}
          />
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 25 }}>
        <Image source={notification} style={styles.notify} />
        <Image source={verticaldots} style={styles.VertiDots} />
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
  },
  profilerName: {
    color: 'whitesmoke',
    fontSize: 18,
    fontWeight: '600',
  },
  leftarrowImg: {
    height: 40,
    width: 40,
    objectFit: 'contain',
  },
  VertiDots: {
    height: 22,
    width: 22,
  },
  notify: {
    height: 33,
    width: 33,
  },
  imgNameWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 50,
  },
});
export default GroupHeader;
