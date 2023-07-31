import { StyleSheet, Text, View } from 'react-native';
import SharePostHeader from './sharepostheader';
import SharePostMiddle from './sharepostmiddle';
import { useState } from 'react';
const SharePostWrapper = () => {
  const [selectedImage, setSelectedImage] = useState('');
  return (
    <View>
      <SharePostHeader selectedImage={selectedImage} />
      <SharePostMiddle
        setSelectedImage={setSelectedImage}
        selectedImage={selectedImage}
      />
    </View>
  );
};
export default SharePostWrapper;
const styles = StyleSheet.create({});
