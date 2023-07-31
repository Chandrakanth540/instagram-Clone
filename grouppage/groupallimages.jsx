import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';

const GroupImages = ({ nopost }) => {
  return (
    <ScrollView
      style={{
        paddingHorizontal: '36%',
        paddingTop: 224,
        paddingBottom: 200,
        backgroundColor: 'black',
      }}
    >
      <View
        style={{
          borderWidth: 2,
          borderColor: 'whitesmoke',
          borderRadius: 100,
          alignItems: 'center',
          justifyContent: 'center',
          height: 90,
          width: 90,
        }}
      >
        <Image
          source={nopost}
          style={{
            height: 60,
            width: 60,
            resizeMode: 'contain',
            // borderRadius: 100,
          }}
        />
      </View>
      <Text
        style={{
          color: 'whitesmoke',
          fontSize: 18.5,
          fontWeight: '600',
          marginTop: 5,
        }}
      >
        No Posts Yet
      </Text>
    </ScrollView>
  );
};
export default GroupImages;
const styles = StyleSheet.create({});
