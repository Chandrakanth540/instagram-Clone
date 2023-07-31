import { Pressable, StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import leftarrow from '../assests/leftarrow.png';
import { Image } from 'react-native';
const FourSectionHeader = ({ navigation }) => {
  return (
    <View style={styles.profileWrapper}>
      <View style={styles.imgNameWrap}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={leftarrow} style={styles.leftarrowImg} />
        </Pressable>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
          <Text style={styles.profilerName}>RagnarLothbrok</Text>
        </View>
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
    paddingBottom: 25,
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
  imgNameWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 50,
  },
});
export default FourSectionHeader;
