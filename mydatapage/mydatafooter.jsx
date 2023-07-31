import { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import down from '../assests/down.png';
import { Image } from 'react-native';
import profileLock from '../assests/secure.png';
import { Divider } from 'react-native-elements';
// import GroupBio from './groupbio';
// GroupBio
import adduser from '../assests/adduser.png';
import Suggestion from '../profilescreen/suggestions';
import adduserfilled from '../assests/adduserfilled.png';
import Modal from 'react-native-modal';
import { TouchableOpacity } from 'react-native';
// import GroupPosts from './groupposts';
import { ScrollView } from 'react-native';
import GroupPosts from '../grouppage/groupposts';
import GroupBio from '../grouppage/groupbio';
import EditProfile from './editprofile';

const MydataFooter = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: 'black' }}>
      {/* <GroupBio /> */}
      <FollowButton navigation={navigation} />
      {/* <GroupPosts /> */}
    </View>
  );
};

const FollowButton = ({ navigation }) => {
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [visible, setVisible] = useState(false);
  return (
    <View>
      <View style={styles.followBtnWrap}>
        <View>
          <View>
            <Pressable style={{}} onPress={() => setVisible(true)}>
              <Text style={styles.singleBtn}>
                {'Edit profile '}
                {/* <Image source={down} style={{ height: 9, width: 9 }} /> */}
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.leftButtons}>
          <Pressable>
            <Text style={styles.singleBtn}>Message</Text>
          </Pressable>
          <Pressable onPress={() => setShowSuggestion(!showSuggestion)}>
            <View
              style={{
                width: 26,
                backgroundColor: '#282828',
                borderRadius: 5,
                alignSelf: 'center',
              }}
            >
              <Image
                source={showSuggestion ? adduserfilled : adduser}
                style={{
                  backgroundColor: '#282828',
                  paddingVertical: 16,
                  resizeMode: 'contain',

                  height: 20,
                  width: 20,

                  paddingLeft: 11,
                  paddingRight: 11,
                  borderRadius: 4,
                }}
              />
            </View>
          </Pressable>
        </View>
      </View>
      {showSuggestion && <Suggestion navigation={navigation} />}
      <EditProfile setVisible={setVisible} visible={visible} />
    </View>
  );
};

const styles = StyleSheet.create({
  singleBtn: {
    color: 'white',
    fontSize: 14,
    backgroundColor: '#282828',
    paddingVertical: 7,
    paddingHorizontal: 52,
    borderRadius: 10,
  },
  followBtnWrap: {
    flexDirection: 'row',
    gap: 8,

    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 30,
    paddingHorizontal: 4,
  },
  lockImg: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },
  leftButtons: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
});
export default MydataFooter;
