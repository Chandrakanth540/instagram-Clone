import { StyleSheet, View } from 'react-native';
import GroupWrapper from '../grouppage/groupwrapper';
const GroupPageScreen = ({ navigation }) => {
  return (
    <View style={styles.groupPageWrapper}>
      <GroupWrapper navigation={navigation} />
    </View>
  );
};
export default GroupPageScreen;
const styles = StyleSheet.create({
  groupPageWrapper: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 35,
    paddingHorizontal: 10,
  },
});
