import { StyleSheet, Text, View } from 'react-native';
import MydataHeader from './mydataheader';
import MydataDetails from './mydatadetails';
import MydataBio from './mydatabio';
import MydataFooter from './mydatafooter';
import GroupPosts from '../grouppage/groupposts';
import GroupStories from '../grouppage/groupstories';

const MydataWrapper = ({ mydata, navigation }) => {
  // console.log(mydata, 'com');

  return (
    <View style={{ backgroundColor: 'black', flex: 1 }}>
      <MydataHeader navigation={navigation} />
      <MydataDetails mydata={mydata} navigation={navigation} />
      <MydataBio mydata={mydata} />
      <MydataFooter />
      {/* <GroupStories /> */}

      <GroupPosts />
    </View>
  );
};
export default MydataWrapper;
const styles = StyleSheet.create({});
