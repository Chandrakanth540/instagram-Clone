import { View, Text, StyleSheet } from 'react-native';
// Image
// ScrollView
import searchImg from '../assests/search.png';
import { Image } from 'react-native';
import { ScrollView } from 'react-native';
import { storiesData } from '../data/storiesdata';
import defaultImg from '../assests/user7.jpg';
import noteplus from '../assests/noteplus.png';
const ChatMiddle = () => {
  return (
    <View>
      <View style={{ paddingVertical: 10 }}>
        <View
          style={{
            height: 35,
            width: '96%',
            backgroundColor: '#303030',
            borderRadius: 11,
            alignItems: 'center',
            flexDirection: 'row',
            gap: 7,
            paddingHorizontal: 15,
          }}
        >
          <Image
            source={searchImg}
            style={{ height: 18, width: 18, objectFit: 'contain' }}
          />
          <Text style={{ padding: 3, color: 'snow', fontSize: 18 }}>
            search
          </Text>
        </View>
      </View>
      <View style={styles.secondWrapper}>
        <ScrollView horizontal>
          <View style={{ position: 'relative' }}>
            <Image
              source={noteplus}
              style={{
                backgroundColor: 'white',
                position: 'absolute',
                zIndex: 999,
                height: 25,
                width: 25,
                borderRadius: 100,
                borderWidth: 1,
                borderColor: '#303030',

                // backgroundColor: 'white',
              }}
            />
            <View style={{ alignItems: 'center', gap: 10 }}>
              <Image source={defaultImg} style={styles.noteImg} />
              <Text style={{ color: 'gray' }}>Your note</Text>
            </View>
          </View>
          {storiesData.slice(0, 2).map((note, index) => {
            return <Notes note={note} key={index} />;
          })}
        </ScrollView>
      </View>
    </View>
  );
};
const Notes = ({ note }) => (
  <View style={styles.noteWrap}>
    <View>
      <Image source={note.userProfilePic} style={styles.noteImg} />
    </View>
    <View>
      <Text style={{ color: 'white' }}>
        {note.username.length > 11
          ? note.username.slice(0, 11) + '...'
          : note.username}
      </Text>
    </View>
  </View>
);
const styles = StyleSheet.create({
  noteImg: {
    height: 95,
    width: 95,
    objectFit: 'contain',
    borderRadius: 100,
    // borderWidth: 1,
    // borderColor: '#bbb',
  },
  secondWrapper: {
    paddingVertical: 20,
    // flexDirection: 'row',
  },
  noteWrap: {
    marginLeft: 15,
    alignItems: 'center',
    gap: 10,
  },
});
export default ChatMiddle;
