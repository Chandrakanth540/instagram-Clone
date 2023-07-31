import { StyleSheet, View } from 'react-native';
import MydataWrapper from '../mydatapage/mydatawrapper';
import { useContext } from 'react';
import MyContext from '../contexts/context';
const MyData = ({ navigation }) => {
  const { loggedUser } = useContext(MyContext);
  // console.log(mydata);

  return (
    <View style={styles.wrapper}>
      <MydataWrapper mydata={loggedUser} navigation={navigation} />
    </View>
  );
};
export default MyData;
const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 30,
    paddingLeft: 15,
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 10,
  },
});
