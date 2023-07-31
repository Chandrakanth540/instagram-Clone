import { SafeAreaView, StyleSheet } from 'react-native';
import ChatHeader from '../chatscreen/chatheader';
import ChatMiddle from '../chatscreen/chatmiddle';
import ChatEnd from '../chatscreen/chatend';
import { ScrollView } from 'react-native';
import { useContext } from 'react';
import MyContext from '../contexts/context';

const ChatScreen = () => {
  return (
    <SafeAreaView style={styles.MainWrapper}>
      <ChatHeader />
      <ScrollView>
        <ChatMiddle />
        <ChatEnd />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  MainWrapper: {
    paddingTop: 30,
    paddingLeft: 15,
    flex: 1,
    backgroundColor: 'black',
  },
});
export default ChatScreen;
