import React, { useEffect } from 'react';

import { View } from 'react-native';
import { auth } from './firebaseconfig';
import { signInWithEmailAndPassword } from '@firebase/auth';
import AuthNavigation from './navigation/authnavigation';
import SharePost from './screens/sharepost';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <AuthNavigation />
      {/* <SharePost /> */}
    </View>
  );
}
