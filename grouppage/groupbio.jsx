import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import defaultImage from '../assests/user11.jpg';
import defaultImage1 from '../assests/user12.jpg';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const bioText = `ఎలుగెత్తు, ఎదురించు, ఎన్నుకో..Jai Hind!`;
const bioEng = 'Rise up, face up, choose.. Hail India!';
const GroupBio = () => {
  const [fullbio, setFullbio] = useState(bioText.length > 120);
  const [bioTranslate, setBioTranslate] = useState(false);
  const navigation = useNavigation();
  return (
    <View>
      <Text
        style={{
          color: 'white',
          paddingTop: 7,
          fontSize: 16.2,
        }}
      >
        Pawan Kalyan
      </Text>

      <View>
        {fullbio ? (
          <View
            style={{
              paddingTop: 4,
            }}
          >
            <Text style={{ color: 'white', fontSize: 14 }}>
              {bioText.slice(0, 100)}
              <Text
                style={{
                  color: 'gray',
                  fontSize: 15,
                }}
                onPress={() => setFullbio(!fullbio)}
              >
                ... more
              </Text>
            </Text>
          </View>
        ) : (
          <View
            style={{
              paddingTop: 4,
              alignItems: 'center',
              flexDirection: 'row',
            }}
          >
            <Text style={{ color: 'whitesmoke', fontSize: 14 }}>
              {!bioTranslate && bioText}
              {bioTranslate && bioEng}
            </Text>
          </View>
        )}
        <View>
          <Text
            style={{ color: 'whitesmoke', fontSize: 15, paddingTop: 1 }}
            onPress={() => setBioTranslate(!bioTranslate)}
          >
            {!bioTranslate && 'See translation'}
            {bioTranslate && 'See original'}
          </Text>
        </View>
      </View>
      <Pressable
        onPress={() =>
          navigation.navigate('foursectionwrapper', { initial_Route: 'mutual' })
        }
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 5,
            gap: 6,
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={{
                height: 20,
                width: 20,
                borderRadius: 100,
                resizeMode: 'contain',
                zIndex: 999,

                marginTop: -1,
                transform: [{ rotate: '10deg' }],
              }}
              source={defaultImage}
            />
            <Image
              style={{
                height: 20,
                width: 20,
                borderRadius: 100,
                resizeMode: 'contain',
                marginLeft: -5,
                zIndex: 777,
                transform: [{ rotate: '-4deg' }],
              }}
              source={defaultImage1}
            />
          </View>
          <View>
            <Text style={{ color: 'whitesmoke', fontSize: 13 }}>
              Followed by{' '}
              <Text
                style={{
                  fontWeight: '600',
                }}
              >
                alwaysramcharan
              </Text>
              ,{' '}
              <Text
                style={
                  {
                    // fontWeight: 600
                  }
                }
              >
                alluarjunonline
              </Text>{' '}
              and{' '}
              <Text
                style={
                  {
                    //  fontWeight: 600
                  }
                }
              >
                5 others
              </Text>
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};
export default GroupBio;
