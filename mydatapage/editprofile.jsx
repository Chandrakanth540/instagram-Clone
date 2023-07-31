import { Image, Pressable } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import wrong from '../assests/wrongbold.png';
import correct from '../assests/correct.png';
const EditProfile = ({ visible, setVisible }) => {
  return (
    <View>
      <Modal
        isVisible={visible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        backdropOpacity={0}
        animationInTiming={400}
        style={{
          backgroundColor: '#282828',
          //   marginTop: 460,
          marginBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          marginTop: 0,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 28 }}>
            <Pressable onPress={() => setVisible(false)}>
              <Image source={wrong} style={{ height: 30, width: 30 }} />
            </Pressable>
            <Text
              style={{
                color: 'white',
                fontWeight: '700',
                fontSize: 16.5,
              }}
            >
              Edit profile
            </Text>
          </View>
          <Pressable>
            <Image source={correct} style={{ height: 30, width: 30 }} />
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};
export default EditProfile;
const styles = StyleSheet.create({});
