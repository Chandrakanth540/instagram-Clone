import { useState } from 'react';
import { Text, View } from 'react-native';

const bioText = `I have lived through many ages, through the eyes of kings, and queens, and gods. But now, at long last, I have come back to this place, where my story began. And yours ends`;
const ProfileBio = () => {
  const [fullbio, setFullbio] = useState(bioText.length > 100);
  return (
    <View>
      <Text
        style={{
          color: 'white',
          paddingTop: 7,
          fontSize: 16.2,
          fontWeight: '500',
        }}
      >
        Ivar the boneless
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
            <Text style={{ color: 'white', fontSize: 14 }}>{bioText}</Text>
          </View>
        )}
      </View>
    </View>
  );
};
export default ProfileBio;
