import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import logo from '../assests/logo.png';
import { TextInput } from 'react-native';
import { useState } from 'react';
const RegisterDetails = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: 'black', flex: 1 }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 30,
        }}
      >
        <Text style={{ color: 'grey' }}>English(India)</Text>
      </View>
      <View style={{ alignItems: 'center', paddingVertical: 40 }}>
        <Image
          source={logo}
          style={{ height: 100, width: 100, resizeMode: 'contain' }}
        />
      </View>
      <View>
        <DetailComponent navigation={navigation} />
      </View>
    </View>
  );
};
const DetailComponent = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={{}}>
      <View style={styles.inputView}>
        {password.length > 0 && (
          <Text
            style={{
              color: 'grey',
              position: 'absolute',
              paddingHorizontal: 10,
              paddingVertical: 8,
            }}
          >
            username
          </Text>
        )}
        <TextInput
          onChangeText={(text) => setPassword(text)}
          placeholder="username"
          secureTextEntry={true}
          cursorColor={'pink'}
          placeholderTextColor={'grey'}
          style={{
            color: 'whitesmoke',
            height: 50,
            paddingTop: 20,
            fontSize: 18,
          }}
        />
      </View>
      <View style={styles.inputView}>
        {email.length > 0 && (
          <Text
            style={{
              color: 'grey',
              position: 'absolute',
              paddingHorizontal: 10,
              paddingVertical: 8,
            }}
          >
            Email
          </Text>
        )}
        <TextInput
          placeholder="Email"
          placeholderTextColor={'grey'}
          textBreakStrategy="highQuality"
          style={{
            color: 'whitesmoke',
            height: 50,
            paddingTop: 20,
            fontSize: 18,
            color: 'white',
          }}
          autoFocus={true}
          cursorColor={'pink'}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.inputView}>
        {password.length > 0 && (
          <Text
            style={{
              color: 'grey',
              position: 'absolute',
              paddingHorizontal: 10,
              paddingVertical: 8,
            }}
          >
            Password
          </Text>
        )}
        <TextInput
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          secureTextEntry={true}
          cursorColor={'pink'}
          placeholderTextColor={'grey'}
          style={{
            color: 'whitesmoke',
            height: 50,
            paddingTop: 20,
            fontSize: 18,
          }}
        />
      </View>

      <Pressable>
        <View
          style={{
            height: 50,
            backgroundColor: 'rgb(1,159,256)',
            alignItems: 'center',
            justifyContent: 'center',
            // borderRadius: 10,
            marginRight: 10,
          }}
        >
          <Text
            style={{
              color: 'whitesmoke',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 19,
              fontWeight: '600',
              color: 'whitesmoke',
            }}
          >
            Register
          </Text>
        </View>
      </Pressable>

      <Pressable onPress={() => navigation.push('RegisterScreen')}>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#4169E1',
            paddingHorizontal: 5,
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 15,
            marginRight: 10,
            marginBottom: 10,
            marginTop: 140,
          }}
        >
          <Text style={{ color: '#4169E1' }}>Already had account</Text>
        </View>
      </Pressable>
    </View>
  );
};
export default RegisterDetails;
const styles = StyleSheet.create({
  inputView: {
    // backgroundColor: '#282828',
    borderWidth: 0.2,
    borderBottomColor: '#282828',
    color: 'whitesmoke',
    width: '97%',
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 25,
    // borderRadius: 5,
    // borderTopRightRadius: 5,
  },
});
