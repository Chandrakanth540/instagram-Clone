import { View, Text, StyleSheet } from 'react-native';
import commentsdata from '../data/commentsdata';
import { Image } from 'react-native';
import { Pressable } from 'react-native';
import wrong from '../assests/wrong.png';
import { ScrollView } from 'react-native';

const ForYouSuggest = () => {
  return (
    <ScrollView style={{ backgroundColor: 'black' }}>
      {commentsdata.map((forYouSuggest, index) => {
        return <FourSuggestion key={index} suggest={forYouSuggest} />;
      })}
    </ScrollView>
  );
};

const FourSuggestion = ({ suggest }) => (
  <View>
    <View style={styles.fourWrapper}>
      <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
        <Image source={suggest.userProfilePic} style={styles.suggesImg} />
        <View>
          <Text
            style={{
              color: 'whitesmoke',
              fontWeight: '600',
              fontSize: 14,
            }}
          >
            {suggest.username}
          </Text>
          <Text style={{ color: 'gray' }}>{'Pawan Kalyan'}</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
        <FollowButton />
        <Image source={wrong} style={{ height: 12, width: 13 }} />
      </View>
    </View>
  </View>
);

const FollowButton = () => (
  <View style={styles.followBtnWrap}>
    <Pressable>
      <Text
        style={{
          color: 'white',
          fontSize: 14,
          paddingHorizontal: 17,
        }}
      >
        Follow
      </Text>
    </Pressable>
  </View>
);
const styles = StyleSheet.create({
  fourWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 13,
    marginBottom: 25,
  },
  suggesImg: {
    height: 60,
    width: 60,
    resizeMode: 'contain',
    borderRadius: 100,
  },
  followBtnWrap: {
    backgroundColor: 'rgb(0, 149, 256)',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
});
export default ForYouSuggest;
