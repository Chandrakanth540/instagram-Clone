import { StyleSheet, View } from 'react-native';
import ChatFriendHeader from './chatfriendheader';
import ChatFriendMiddle from './chatfriendmiddle';
import ChatFriendFooter from './chatfooter';
import ChatChatting from './chatchatting';
import { ScrollView } from 'react-native';
import { useEffect, useRef } from 'react';
// ScrollView
const ChatFriendWrap = () => {
  const scrollViewRef = useRef(null);

  useEffect(() => {
    // Scrolls to the bottom when the component is mounted or the text box is focused
    scrollToBottom();
  }, []);

  const scrollToBottom = () => {
    scrollViewRef.current.scrollToEnd({ animated: true });
  };
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <ChatFriendHeader />
      <ScrollView ref={scrollViewRef}>
        <ChatFriendMiddle />
        <ChatChatting />
      </ScrollView>
      <ChatFriendFooter scrollToBottom={scrollToBottom} />
    </View>
  );
};
export default ChatFriendWrap;
const styles = StyleSheet.create({});
