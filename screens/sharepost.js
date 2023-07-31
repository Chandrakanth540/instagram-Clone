import { StyleSheet, Text, View } from 'react-native';
import SharePostWrapper from '../sharepost/sharepostwrapper';
const SharePost = () => {
  return (
    <View style={styles.wrapper}>
      <SharePostWrapper />
    </View>
  );
};
export default SharePost;
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 35,
    paddingHorizontal: 4,
  },
});
