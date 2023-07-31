import { Pressable, StyleSheet, Text, View } from 'react-native';
import leftarrow from '../assests/leftarrow.png';
import { Image } from 'react-native';
import { ImageUploadApi } from '../api/imageupload/picupload';
const SharePostHeader = ({ selectedImage }) => {
  const firebaseImageUpload = async () => {
    await ImageUploadApi(selectedImage);
  };
  const ShareBtnHandler = () => {
    if (selectedImage) {
      firebaseImageUpload();
      return;
    }
    alert('select image and then try again');
  };
  return (
    <View style={styles.headerWrapper}>
      <View style={styles.innerWrap}>
        <View>
          <Image source={leftarrow} style={styles.leftArrowImg} />
        </View>
        <View>
          <Text style={styles.newPostText}> New Post</Text>
        </View>
      </View>
      <Pressable onPress={() => ShareBtnHandler()}>
        <View>
          <Text style={styles.shareText}>Share</Text>
        </View>
      </Pressable>
    </View>
  );
};
export default SharePostHeader;
const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 3,
  },
  innerWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 35,
  },
  newPostText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
  },
  shareText: {
    color: 'rgb(0, 149, 256)',
    fontSize: 16,
  },
  leftArrowImg: {
    height: 35,
    objectFit: 'contain',
    width: 35,
  },
});
