import { Divider } from 'react-native-elements';
// import { postData } from '../data/postdata';
import { View, StyleSheet } from 'react-native';
import { useContext, useState } from 'react';
import SinglePostCard from './wrapperpost';
import MyContext from '../contexts/context';
// SinglePostC
const PostCard = ({ navigation }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const { allPosts } = useContext(MyContext);

  // const [commentVisible, setCommentVisible] = useState(false);
  return (
    <View>
      <View style={{ height: 0.2, backgroundColor: '#282828' }} />
      {allPosts.map((post, index) => {
        return (
          <View style={styles.PostWrapper} key={index}>
            <SinglePostCard navigation={navigation} post={post} />
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  PostWrapper: {
    flex: 1,
    flexDirection: 'column',
  },
});
export default PostCard;
