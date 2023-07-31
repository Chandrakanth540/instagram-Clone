import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import HomeScreenHeader from '../homescreen/header';
import Stories from '../homescreen/stories';
import PostCard from '../homescreen/post';
import ContextData, { MyProvider } from '../contexts/context';
import MyContext from '../contexts/context';
const Homescreen = ({ navigation }) => {
  const { allPosts } = useContext(MyContext);
  // console.log(allPosts);
  // console.log('cone');

  return (
    <SafeAreaView style={styles.wrapper}>
      <HomeScreenHeader navigation={navigation} />
      <ScrollView>
        <Stories />
        <PostCard navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 30,
    backgroundColor: 'black',
    flex: 1,
  },
});

export default Homescreen;
