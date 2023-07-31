import { Image } from 'react-native';
import { View, Text } from 'react-native';
import loveSymbol from '../assests/love-symbol.png';
const CommentSection = ({ index, comment }) => {
  return (
    <View style={{ marginBottom: 12 }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          flexDirection: 'row',
          marginLeft: 10,
          marginBottom: 10,
          marginRight: 10,
        }}
      >
        <Image
          source={comment.userProfilePic}
          style={{
            height: 25,
            width: 25,
            borderRadius: 100,
            borderColor: '#bbb',
            borderWidth: 1,
          }}
        />

        <Text
          style={{
            // backgroundColor: 'black',
            color: 'white',
            flex: 1,
            alignItems: 'center',
            marginLeft: 5,
            marginRight: 10,
          }}
        >
          <Text
            style={{
              fontWeight: '800',
            }}
          >
            {comment.username + '  '}
          </Text>
          Power is only given to those who are prepared to lower themselves to
          pick it up.
        </Text>
        <Image source={loveSymbol} style={{ height: 10, width: 10 }} />
      </View>
      <View>
        <Text
          style={{ color: '#bbb', marginLeft: 40, padding: 1, marginTop: -6 }}
        >
          Reply
        </Text>
      </View>
    </View>
  );
};
export default CommentSection;
