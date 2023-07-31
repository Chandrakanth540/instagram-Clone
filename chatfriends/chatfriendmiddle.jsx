import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import defaultImage from '../assests/user10.jpg';
import verifiedaccount from '../assests/verifiedBadge.png';
const ChatFriendMiddle = () => {
  return (
    <View style={{ paddingTop: 6, alignItems: 'center', gap: 1 }}>
      <View>
        <Image
          source={defaultImage}
          style={{ height: 100, width: 100, borderRadius: 100 }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 5,
          marginTop: 9,
        }}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 15.5,
            fontWeight: '900',
          }}
        >
          Pawan Kalyan
        </Text>
        <Image
          source={verifiedaccount}
          style={{ height: 13, width: 13, resizeMode: 'contain' }}
        />
      </View>
      <View style={{ flexDirection: 'row', gap: 5 }}>
        <Text style={{ color: 'white' }}>pawankalyan</Text>
        <Text style={{ color: 'white' }}>&#x2022;</Text>
        <Text style={{ color: 'white' }}>Instagram</Text>
      </View>
      <View style={{ flexDirection: 'row', gap: 5 }}>
        <Text style={{ color: '#888888' }}>2.2M followers</Text>
        <Text style={{ color: '#888888' }}>&#x2022;</Text>
        <Text style={{ color: '#888888' }}>0 posts</Text>
      </View>
      <View>
        <Text style={{ color: '#888888' }}>
          You've followed this Instagram account since 2023
        </Text>
      </View>
      <View>
        <Text style={{ color: '#888888' }}>New Instagram account</Text>
      </View>
    </View>
  );
};
export default ChatFriendMiddle;
const styles = StyleSheet.create({});
