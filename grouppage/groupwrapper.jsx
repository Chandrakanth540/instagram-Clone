import { StyleSheet, View } from 'react-native';

import GroupHeader from './groupheader';
import GroupDetails from './groupmiddle';
import GroupFooter from './groupfooter';

import GroupPosts from './groupposts';

// import nopost from '../assests/nopostcam.png';
// NavigationContainer
const GroupWrapper = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: 'black', flex: 1 }}>
      {/* <ScrollView> */}
      <GroupHeader />
      <GroupDetails />
      <GroupFooter navigation={navigation} />
      <GroupPosts />
      {/* </ScrollView> */}
    </View>
  );
};
export default GroupWrapper;
const styles = StyleSheet.create({});
