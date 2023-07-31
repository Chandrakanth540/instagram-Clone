import { Divider } from 'react-native-elements';
import React, { useState, useRef, useEffect } from 'react';

import {
  View,
  Modal,
  PanResponder,
  Animated,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Pressable,
  Easing,
} from 'react-native';
import defaultImage from '../assests/user7.jpg';
import dots from '../assests/dots.png';
import loveSymbol from '../assests/love-symbol.png';
import comment from '../assests/comment.png';
import send from '../assests/send.png';
import save from '../assests/save.png';
import savefilled from '../assests/savefilled.png';
import lovefillred from '../assests/lovefillredf.png';
import CommentSection from '../post/comment';
import commentsdata from '../data/commentsdata';
import { TextInput, Dimensions } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { UserDetailById } from '../api/userdetails/loggeduserapi';
let globalUserDetails = {};
const SinglePostCard = ({ navigation, post }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const veal = 300;
  const [topgest, setTopgest] = useState(veal);
  const [postUser, setPostUser] = useState([]);
  const getUserDetails = async () => {
    if (globalUserDetails[post.userId]) {
      setPostUser(globalUserDetails[post.userId]);
    } else {
      const result = await UserDetailById(post.userId);
      globalUserDetails[post.userId] = result;
      setPostUser(result);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, [post.userId]);

  return (
    <View style={styles.PostWrapper}>
      <PostHeader post={post} postUser={postUser} navigation={navigation} />
      <PostImage post={post} />
      <PostFooter
        post={post}
        navigation={navigation}
        setIsLiked={setIsLiked}
        setIsSaved={setIsSaved}
        isLiked={isLiked}
        isSaved={isSaved}
        topgest={topgest}
        setTopgest={setTopgest}
      />
    </View>
  );
};
const PostFooter = ({
  post,
  navigation,
  setIsLiked,
  setIsSaved,
  isLiked,
  isSaved,
  topgest,
  setTopgest,
}) => {
  const [showComments, setShowComments] = useState(false);

  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (e, gestureState) => {
      if (gestureState.dy > 0) {
        pan.setValue({ x: 0, y: 4 });
      }
    },
    onPanResponderRelease: (e, gestureState) => {
      if (gestureState.dy < 50) {
        setTopgest(0);
      } else if (gestureState.dy > 50) {
        setTopgest(300);
        setShowComments(false);
        // }
      } else {
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: true,
          easing: Easing.poly(10),
        }).start();
      }
    },
  });

  const commentSectionStyle = [
    styles.commentSection,
    {
      transform: pan.getTranslateTransform(),
      // height: 100,
    },
  ];
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 5,
          paddingTop: 10,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 10,
            marginVertical: 10,
            gap: 20,
          }}
        >
          <Pressable onPress={() => setIsLiked(!isLiked)}>
            {isLiked ? (
              <Image source={lovefillred} style={styles.footerIcon} />
            ) : (
              <Image source={loveSymbol} style={styles.footerIcon} />
            )}
          </Pressable>
          <Image source={comment} style={styles.footerIcon} />
          <Image source={send} style={styles.footerIcon} />
        </View>
        <View>
          <TouchableOpacity onPress={() => setIsSaved(!isSaved)}>
            {isSaved ? (
              <Image source={savefilled} style={styles.footerIcon} />
            ) : (
              <Image source={save} style={styles.footerIcon} />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={{ color: 'white', paddingHorizontal: 20 }}>
          1667 Likes
        </Text>

        <TouchableOpacity onPress={() => setShowComments(true)}>
          <Text
            style={{
              color: 'gray',
              paddingHorizontal: 20,
              paddingTop: 10,
            }}
          >
            View all 20 comments
          </Text>
        </TouchableOpacity>
      </View>
      <Modal
        visible={showComments}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowComments(false)}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: '#202020',
            justifyContent: 'flex-end',
            borderTopEndRadius: 25,
            borderTopStartRadius: 25,
            height: '30%',
            top: topgest,
          }}
        >
          <Animated.View
            style={commentSectionStyle}
            {...panResponder.panHandlers}
          >
            <View
              style={{
                height: 4,
                width: 30,
                backgroundColor: 'gray',
                marginLeft: 'auto',
                marginRight: 'auto',
                padding: 1,
                borderRadius: 20,
              }}
            ></View>
            <Text
              style={{
                color: 'white',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 'auto',
                marginRight: 'auto',
                padding: 2,
                marginTop: 7,
                // backgroundColor: 'blue',
              }}
            >
              comments
            </Text>
            <Divider width={2} style={{ top: 14, marginBottom: 4 }} />
          </Animated.View>
          <ScrollView>
            <View style={{ marginTop: 10, marginBottom: 300 }}>
              {commentsdata.map((comment, index) => (
                <CommentSection key={index} index={index} comment={comment} />
              ))}
            </View>
          </ScrollView>
        </View>
        <View
          style={{
            // flex: 1,
            alignItems: 'center',
            flexDirection: 'row',
            paddingBottom: 10,
            paddingHorizontal: 9,
            width: '100%',
            backgroundColor: 'black',
          }}
        >
          <Image
            source={defaultImage}
            style={{ height: 20, width: 20, padding: 1, borderRadius: 100 }}
          />
          <TextInput
            style={{
              height: 50,
              backgroundColor: 'black',
              borderWidth: 1,
              // borderColor: 'gray',
              width: '99%',
              color: 'white',
              fontSize: 15,
              // lineHeight: 10,
              paddingHorizontal: 10,
              paddingTop: 10,
              paddingBottom: 7,
            }}
            placeholder={`Add a comment`}
            placeholderTextColor={'gray'}
          />
        </View>
      </Modal>
    </View>
  );
};
export const PostImage = ({ post }) => {
  const { width, height } = Dimensions.get('window');
  return (
    <View
      style={[styles.postImageView, { width: width, objectFit: 'contain' }]}
    >
      {/* <Text style={{ color: 'white' }}>{post.userPost}</Text> */}
      {post.postImageUrl && (
        <Image
          source={{ uri: post.postImageUrl } || post.userProfilePic}
          style={styles.postImage}
        />
      )}

      {post.postVideoUrl && (
        // <View style={{ width: '100%', height: 500 }}>
        <Video
          source={{
            uri: post.postVideoUrl,
          }}
          useNativeControls
          resizeMode="contain"
          isLooping
          shouldPlay={false}
          style={{ flex: 1 }}
        />
        // </View>
      )}
    </View>
  );
};
export const PostHeader = ({ post, postUser, navigation }) => (
  <View style={styles.postHeaderWrapper}>
    <Pressable
      style={styles.postHeaderInner}
      onPress={() =>
        navigation.push('hometoprofile', {
          profileId: post.userId,
        })
      }
    >
      <Image
        source={{ uri: postUser.profilePicUrl }}
        style={styles.postProfilePic}
      />
      <Text style={styles.postUsername}>{postUser.username}</Text>
    </Pressable>

    <View style={styles.HeaderOptions}>
      <TouchableOpacity>
        <Text style={styles.FollowIcon}>Follow</Text>
      </TouchableOpacity>
      <Image
        source={dots}
        style={{ height: 12, width: 3, resizeMode: 'cover' }}
      />
    </View>
    <Text></Text>
  </View>
);

const styles = StyleSheet.create({
  PostWrapper: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 30,
    // marginBottom: 30,
    backgroundColor: 'black',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  postHeaderWrapper: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  postHeaderInner: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  postProfilePic: {
    height: 40,
    width: 40,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#282828',
    resizeMode: 'contain',
  },
  postUsername: {
    fontSize: 15,
    color: 'white',
  },
  postImage: {
    height: 500,
    // width: '100%',
    resizeMode: 'contain',
    padding: 5,
  },
  postImageView: {
    padding: 7,
    width: '100%',
    height: 500,
    resizeMode: 'contain',
  },
  HeaderOptions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 40,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  FollowIcon: {
    borderWidth: 1,
    color: 'white',
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: '#1B1B1B',
  },
  footerIcon: {
    height: 28,
    width: 28,
    objectFit: 'contain',
  },
  commentSection: {
    backgroundColor: '#202020',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: '8%',
    // top: 100,
    padding: 10,
    borderWidth: 2,
    borderTopColor: '#bbb',
    // height: 10,
    // bottom: 20,
  },
  container: {
    padding: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  viewAllButton: {
    alignSelf: 'flex-start',
    paddingHorizontal: 4,
    paddingVertical: 2,
    backgroundColor: '#ccc',
  },
  viewAllButtonText: {
    color: 'blue',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'flex-end',
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    height: '30%',
    top: 300,
  },
});

export default SinglePostCard;
