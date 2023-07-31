import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { storiesData } from '../data/storiesdata';
const GroupStories = () => {
  return (
    <View>
      <ScrollView horizontal>
        {storiesData.map((story, index) => {
          return (
            <View key={index} style={styles.storieswrapper}>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#282828',
                  padding: 3,
                  borderRadius: 100,
                }}
              >
                <Image
                  source={story.userProfilePic}
                  style={styles.profileImage}
                />
              </View>
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
    height: 75,
    width: 75,
    borderRadius: 100,
    objectFit: 'contain',
    borderWidth: 1,
    alignItems: 'center',
    // padding: 5,
    borderColor: '#282828',
  },
});
export default GroupStories;
