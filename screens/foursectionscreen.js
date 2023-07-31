import { View, StyleSheet } from 'react-native';
import FourSectionWrapper from '../foursection/foursectionwrapper';
const FourSectionScreen = ({ navigation }) => {
  return (
    <View style={styles.foursectionWrapper}>
      <FourSectionWrapper navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  foursectionWrapper: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 35,
    paddingHorizontal: 10,
  },
});
export default FourSectionScreen;
