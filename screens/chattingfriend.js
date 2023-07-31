import { StyleSheet, View } from 'react-native';
import ChatFriendWrap from '../chatfriends/chatfriendwrap';
const ChattingFriends = () => {
  return (
    <View style={styles.chatfriendwrapper}>
      <ChatFriendWrap />
    </View>
  );
};
export default ChattingFriends;
const styles = StyleSheet.create({
  chatfriendwrapper: {
    paddingTop: 30,
    paddingLeft: 15,
    flex: 1,
    backgroundColor: 'black',
  },
});
