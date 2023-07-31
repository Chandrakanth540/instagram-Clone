import { StyleSheet, Text, View } from 'react-native';
import { auth } from '../firebaseconfig';
import { useEffect, useState } from 'react';
import { LogInNavigation, LogOutNavigation } from './navigation';
import { MyProvider } from '../contexts/context';

const AuthNavigation = () => {
  const [currentStatus, setCurrentStatus] = useState(null);
  const [isLoad, setIsLoad] = useState(true);

  const userHandler = (user) => {
    user ? setCurrentStatus(user) : setCurrentStatus(null);
    setIsLoad(false);
  };
  useEffect(() => auth.onAuthStateChanged((user) => userHandler(user)));
  if (isLoad) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: 'white', fontSize: 26 }}>Loading...</Text>
      </View>
    );
  }
  return currentStatus ? (
    <MyProvider>
      <LogInNavigation />
    </MyProvider>
  ) : (
    <LogOutNavigation />
  );
};
export default AuthNavigation;
const styles = StyleSheet.create({});
