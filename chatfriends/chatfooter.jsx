import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Keyboard,
  Pressable,
} from 'react-native';
import cameracolor from '../assests/cameracolor.png';
import { Image } from 'react-native';
import { useEffect, useState } from 'react';
import search from '../assests/searchcolor.png';
import micc from '../assests/micc.png';
import imagecolor1 from '../assests/imagecolor1.png';
import sticker from '../assests/sticker.png';
import * as ImagePicker from 'expo-image-picker';
const ChatFriendFooter = ({ scrollToBottom }) => {
  const [messageIn, setMessageIn] = useState('');
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  // if (isKeyboardVisible) {
  //   scrollToBottom();
  // }
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      handleKeyboardDidShow,
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      handleKeyboardDidHide,
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleKeyboardDidShow = () => {
    setIsKeyboardVisible(true);
  };

  const handleKeyboardDidHide = () => {
    setIsKeyboardVisible(false);
  };
  // console.log(messageIn);

  return (
    <View style={styles.chatfriendfooterWrapper}>
      <View
        style={[
          styles.camerawrap,
          { backgroundColor: isKeyboardVisible ? '#6A5ACD' : '#1E90FF' },
        ]}
      >
        <Image
          source={messageIn.length == 0 ? cameracolor : search}
          style={styles.cameraImg}
        />
      </View>
      <TextInput
        selectable
        placeholder="Message..."
        placeholderTextColor={'gray'}
        style={styles.input}
        caretColor="red"
        keyboardAppearance="dark"
        selectTextOnFocus={true}
        onChangeText={(text) => setMessageIn(text)}
        multiline
        onChange={scrollToBottom}
      />

      {messageIn.length == 0 ? (
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            right: 10,
            gap: 10,
          }}
        >
          <Pressable onPress={() => console.log('camera1')}>
            <Image source={micc} style={styles.cameraImg} />
          </Pressable>
          <ImageIcon />
          <Pressable onPress={() => console.log('camera3')}>
            <Image source={sticker} style={styles.cameraImg} />
          </Pressable>
        </View>
      ) : (
        <View>
          <Text
            style={{
              color: isKeyboardVisible ? '#6A5ACD' : '#1E90FF',
              fontSize: 18,
              fontWeight: 'bold',
            }}
          >
            Send
          </Text>
        </View>
      )}
    </View>
  );
};
const ImageIcon = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const ImagePicking = async () => {
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();

      if (status === 'granted') {
        console.log('Camera permission granted');
        captureImage();
      } else {
        console.log('Camera permission denied');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const captureImage = async () => {
    try {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        // allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setSelectedImage(result.assets[0]);
        console.log(result.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const ImagePickinggallery = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        // allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.canceled) {
        console.log(result.assets[0].uri);
        setSelectedImage(result.assets[0]);
      }

      // setSelectedImage(result.assets[0].uri);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Pressable
      onPress={() => {
        ImagePickinggallery();
      }}
    >
      <Image
        source={selectedImage ? selectedImage : imagecolor1}
        style={styles.cameraImg}
      />
    </Pressable>
  );
};
export default ChatFriendFooter;
const styles = StyleSheet.create({
  chatfriendfooterWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#282828',
    borderRadius: 100,
    marginRight: 10,
    paddingRight: 100,
  },
  camerawrap: {
    borderRadius: 100,
    //   width: 20,
    marginLeft: 10,
    padding: 5,
    justifyContent: 'center',
  },
  cameraImg: {
    height: 26,
    width: 26,

    resizeMode: 'contain',
  },
  input: {
    color: 'black',
    height: 50,

    width: '98%',
    paddingHorizontal: 10,
    color: 'whitesmoke',
  },
});
