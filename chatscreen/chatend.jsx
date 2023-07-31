import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import camera from '../assests/camera.png';
import commentsdata from '../data/commentsdata';

const ChatEnd = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingRight: 15,
          paddingLeft: 10,
        }}
      >
        <Text style={{ color: 'white' }}>Messages</Text>
        <Text style={{ color: '#1E90FF' }}> Requests</Text>
      </View>
      <View>
        <ScrollView>
          {commentsdata.map((chat, index) => {
            return <ChatComponent chat={chat} key={index} />;
          })}
        </ScrollView>
      </View>
    </View>
  );
};
const ChatComponent = ({ chat }) => (
  <View style={styles.chatWrapper}>
    <View style={styles.endleftwrap}>
      <Image
        source={chat.userProfilePic}
        style={{ height: 70, width: 70, borderRadius: 100 }}
      />
      <View>
        <Text style={{ color: 'white' }}>{chat.username}</Text>
        <Text style={{ color: 'gray' }}> sent 3m ago</Text>
      </View>
    </View>
    <View>
      <Image source={camera} style={{ height: 30, width: 30 }} />
    </View>
  </View>
);
const styles = StyleSheet.create({
  endleftwrap: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  chatWrapper: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    // paddingHorizontal: 5,
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 14,
  },
});
export default ChatEnd;
