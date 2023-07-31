import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import leftarrow from '../assests/leftarrow.png';
import defaultImage from '../assests/user10.jpg';
import verifiedaccount from '../assests/verifiedBadge.png';
import phonecall from '../assests/phonecall.png';
import videocall from '../assests/videocall.png';
const ChatFriendHeader = () => {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 18,
        paddingTop: 12,
        marginBottom: 10,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 20,
        }}
      >
        <View>
          <Image
            source={leftarrow}
            style={{ height: 34, width: 34, resizeMode: 'contain' }}
          />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <View>
            <Image
              source={defaultImage}
              style={{
                height: 30,
                width: 30,
                borderRadius: 100,
                resizeMode: 'contain',
              }}
            />
          </View>
          <View style={{}}>
            <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}
            >
              <Text
                style={{
                  color: 'whitesmoke',
                  fontWeight: 'bold',
                  fontSize: 16,
                }}
              >
                Pawan Kalyan
              </Text>
              <Image
                source={verifiedaccount}
                style={{ height: 15, width: 15, resizeMode: 'contain' }}
              />
            </View>
            <Text style={{ color: '#888888' }}>pawankalyan</Text>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: 'row', gap: 15 }}>
        <Image
          source={phonecall}
          style={{ height: 28, width: 28, resizeMode: 'contain' }}
        />
        <Image
          source={videocall}
          style={{ height: 28, width: 28, resizeMode: 'contain' }}
        />
      </View>
    </View>
  );
};
export default ChatFriendHeader;
const styles = StyleSheet.create({});
