import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import addImage from '../assests/addimage.png';
import { ImagePickinggallery } from '../api/imagepick/imagepickpost';
import { useState } from 'react';
// import Swiper from 'react-native-swiper';
const SharePostMiddle = ({ setSelectedImage, selectedImage }) => {
  const PickImage = async () => {
    await ImagePickinggallery(setSelectedImage);
  };
  console.log(selectedImage, 'from sharepostmiddle');

  return (
    <View style={styles.wrapper}>
      <View style={styles.contentWrap}>
        <Pressable onPress={() => PickImage()}>
          <View>
            <Image
              source={selectedImage ? selectedImage : addImage}
              style={styles.addImage}
            />
          </View>
        </Pressable>
        <View>
          <TextInput
            selectable
            placeholder="Message..."
            placeholderTextColor={'gray'}
            style={styles.postContent}
            caretColor="red"
            keyboardAppearance="dark"
            selectTextOnFocus={true}
            multiline
          />
        </View>
      </View>
      <View style={styles.extraFeatures}>
        <ExtraFeature />
      </View>
    </View>
  );
};
const ExtraFeature = () => (
  <>
    <View>
      <Text style={styles.featureText}> Tag people </Text>
    </View>
    <View>
      <Text style={styles.featureText}> Add location </Text>
    </View>
    <View>
      <Text style={styles.featureText}> Add music </Text>
    </View>
    <View>
      <Text style={styles.featureText}> Also post to </Text>
    </View>
    <View>
      <Text style={styles.featureText}> share to Facebook </Text>
    </View>
    <View>
      <Text style={styles.featureText}>Advanced settings</Text>
    </View>
  </>
);
export default SharePostMiddle;
const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 10,
  },
  postContent: {
    color: 'white',
    paddingRight: 100,
  },
  contentWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  addImage: {
    height: 90,
    width: 90,
    objectFit: 'contain',
  },
  extraFeatures: {
    gap: 23,
    paddingLeft: 4,
    paddingTop: 10,
  },
  featureText: {
    color: 'white',
    fontWeight: '500',
    borderBottomWidth: 1,
    paddingBottom: 8,
    borderBottomColor: '#181818',
    fontSize: 16,
  },
});
