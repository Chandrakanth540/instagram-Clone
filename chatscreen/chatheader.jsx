import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import goback from '../assests/goback.png';
import { Image } from 'react-native';
// Image
import edit from '../assests/edit.png';
import calls from '../assests/calls.png';
// TouchableOpacity
import namedown from '../assests/namedown.png';
const ChatHeader = ({ navigation }) => {
  return (
    <View style={styles.mainWrapper}>
      <View style={{ paddingVertical: 3 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={goback} style={styles.gobackImage} />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
        <Text style={styles.topname}>RagnarLothbrok</Text>
        <Image source={namedown} style={{ height: 10, width: 10 }} />
      </View>
      <View style={styles.headright}>
        <View>
          <Image source={calls} style={styles.callsImage} />
        </View>
        <View>
          <Image source={edit} style={styles.editImage} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headright: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    paddingHorizontal: 10,
  },
  callsImage: { height: 30, width: 30 },
  gobackImage: {
    height: 40,
    width: 40,
  },
  editImage: { height: 28, width: 28 },
  topname: {
    color: 'white',
    fontWeight: '600',
    fontSize: 17,
  },
  mainWrapper: {
    // flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    // paddingHorizontal: 10,
    paddingRight: 10,
    paddingVertical: 6,
  },
});
export default ChatHeader;
