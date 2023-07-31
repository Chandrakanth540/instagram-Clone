import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import title_logo from '../assests/title-logo.png';
import love_logo from '../assests/love-symbol.png';
import message_logo from '../assests/message-symbol.png';

const HomeScreenHeader = ({ navigation }) => {
  return (
    <View style={styles.headerwrapper}>
      <View style={styles.titleView}>
        <Image source={title_logo} style={styles.title} />
      </View>
      <View style={styles.likemessageView}>
        <View>
          <Image source={love_logo} style={styles.lovelogo} />
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.push('ChatScreen')}>
            <Image source={message_logo} style={styles.messagelogo} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headerwrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  title: {
    width: 130,
    height: 60,
    objectFit: 'contain',
  },
  likemessageView: { flexDirection: 'row', gap: 20, alignItems: 'center' },
  lovelogo: {
    height: 28,
    width: 28,
    objectFit: 'contain',
  },
  messagelogo: {
    height: 29,
    width: 29,
    objectFit: 'contain',
  },
});

export default HomeScreenHeader;
