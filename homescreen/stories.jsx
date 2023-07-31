import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { storiesData } from '../data/storiesdata';
const Stories = () => {
  return (
    <View>
      <ScrollView horizontal>
        {storiesData.map((story, index) => {
          return (
            <View key={index} style={styles.storieswrapper}>
              <Image
                source={story.userProfilePic}
                style={styles.profileImage}
              />
              <Text style={{ color: 'white' }} key={index}>
                {story.username}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  storieswrapper: {
    marginHorizontal: 10,
    alignItems: 'center',
    marginVertical: 7,
  },
  profileImage: {
    height: 100,
    width: 100,
    borderRadius: 100,
    objectFit: 'contain',
    borderWidth: 1,

    alignItems: 'center',
  },
});
export default Stories;
