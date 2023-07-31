import { StyleSheet, View } from 'react-native';

import RegisterWrapper from '../register/registerwrapper';
const RegisterScreen = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <RegisterWrapper navigation={navigation} />
    </View>
  );
};
export default RegisterScreen;
const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 30,
    paddingLeft: 15,
    flex: 1,
    backgroundColor: 'black',
  },
});
