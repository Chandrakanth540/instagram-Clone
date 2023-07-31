import { StyleSheet, Text, View } from 'react-native';
import ChattingNew from '../data/chatting';

const ChatChatting = () => {
  return (
    <View style={{ marginTop: 25 }}>
      {ChattingNew.map((item, index) => {
        return <MessageComponent item={item} key={index} />;
      })}
    </View>
  );
};
const MessageComponent = ({ item }) => {
  return (
    <View style={{}}>
      {item.sender == 'Bob' ? (
        <View style={styles.receiver}>
          <Text style={styles.receiverText}>{item.content}</Text>
        </View>
      ) : (
        <View style={styles.sender}>
          <Text style={styles.senderText}>{item.content}</Text>
        </View>
      )}
    </View>
  );
};
export default ChatChatting;
const styles = StyleSheet.create({
  sender: {
    alignSelf: 'flex-end',
    width: '60%',
    // borderColor: 'orange',
    borderWidth: 1,
    marginRight: 5,
    marginBottom: 8,
  },
  receiver: {
    alignSelf: 'flex-start',
    width: '60%',
    borderWidth: 1,
    // borderColor: 'blue',
    marginBottom: 8,
  },
  senderText: {
    color: 'white',
    alignSelf: 'flex-end',
    paddingVertical: 11,
    paddingHorizontal: 15,
    borderWidth: 1,
    backgroundColor: 'rgb(0, 149, 256)',
    borderRadius: 20,
  },
  receiverText: {
    color: 'white',
    paddingVertical: 11,
    paddingHorizontal: 15,
    borderWidth: 1,
    backgroundColor: '#282828',
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
});
