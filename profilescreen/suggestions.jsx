import { ScrollView, StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import commentsdata from '../data/commentsdata';
import { Image } from 'react-native';
import { Pressable } from 'react-native';
import wrong from '../assests/wrong.png';
import React, { useState } from 'react';

const Suggestion = ({ navigation }) => {
  // const navigation = useNavigation();
  const [suggestionData, setSuggestionData] = useState(commentsdata);

  return (
    <View>
      <View style={styles.suggestWrap}>
        <Text style={{ color: 'white' }}>Suggested for you</Text>
        <Text
          style={{ color: '#1E90FF' }}
          onPress={() =>
            navigation.push('foursectionwrapper', {
              initial_Route: 'foryou',
            })
          }
        >
          view all
        </Text>
      </View>
      <ScrollView
        horizontal
        style={{ paddingVertical: 15, paddingHorizontal: 10 }}
      >
        {suggestionData.map((suggest, index) => {
          return (
            <SuggestComponent
              key={index}
              index={index}
              suggest={suggest}
              suggestionData={suggestionData}
              setSuggestionData={setSuggestionData}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const SuggestComponent = ({
  suggest,
  suggestionData,
  setSuggestionData,
  index,
}) => {
  const HandleRemoveSuggestion = () => {
    const NewSuggestion = suggestionData.filter(
      (item, itemIndex) => index != itemIndex,
    );
    setSuggestionData(NewSuggestion);
  };

  return (
    <View style={styles.suggestionWrapper}>
      <View style={{ alignSelf: 'flex-end', padding: 2 }}>
        <Pressable onPress={() => HandleRemoveSuggestion()}>
          <Image
            source={wrong}
            style={{
              height: 20,
              width: 20,
            }}
          />
        </Pressable>
      </View>

      <View style={styles.suggestCompWrapinside}>
        <Image source={suggest.userProfilePic} style={styles.suggestImg} />
        {suggest.username.length > 10 ? (
          <Text style={{ color: 'whitesmoke' }}>
            {suggest.username.slice(0, 10) + '..'}
          </Text>
        ) : (
          <Text style={{ color: 'whitesmoke' }}> {suggest.username}</Text>
        )}
      </View>
      <FollowButton index={index} />
    </View>
  );
};
const FollowButton = ({ index }) => {
  const handleBtn = () => {
    console.log('second' + index);
  };
  return (
    <View style={styles.followBtnWrap}>
      <Pressable>
        <Text style={{ color: 'white', fontSize: 14 }}>Follow</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  suggestWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  suggestImg: {
    height: 100,
    width: 100,
    borderRadius: 100,
    resizeMode: 'contain',
  },
  suggestCompWrapinside: {
    alignItems: 'center',
    flexDirection: 'column',
    // paddingTop: 10,
    paddingHorizontal: 22,
    gap: 10,
  },
  suggestionWrapper: {
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#454545',
    marginRight: 5,
    position: 'relative',
  },
  followBtnWrap: {
    backgroundColor: 'rgb(0, 149, 256)',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 25,
    marginBottom: 15,
    width: '90%',
    alignSelf: 'center',
  },
});
export default Suggestion;
