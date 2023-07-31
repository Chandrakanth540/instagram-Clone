import { View } from 'react-native';
import FourSectionHeader from './foursectionheader';
import FourSectionMiddle from './foursectionmiddle';

import { StyleSheet } from 'react-native';
import { useContext } from 'react';
import MyContext from '../contexts/context';
const FourSectionWrapper = ({ navigation, route }) => {
  // const route = useRoute();
  const initial_Route = route?.params;
  const context = useContext(MyContext);
  console.log(context);

  return (
    <View style={styles.foursectionWrapper}>
      <FourSectionHeader navigation={navigation} />
      <FourSectionMiddle initial_Route={initial_Route} />
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
export default FourSectionWrapper;
