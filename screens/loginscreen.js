import { StyleSheet, View } from 'react-native';
import LoginWrapper from '../login/loginwrapper';
const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <LoginWrapper navigation={navigation} />
    </View>
  );
};
export default LoginScreen;
const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 30,
    paddingLeft: 15,
    flex: 1,
    backgroundColor: 'black',
  },
});
