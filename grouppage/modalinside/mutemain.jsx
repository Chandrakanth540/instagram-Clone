import { useState } from 'react';
import { Image, Pressable } from 'react-native';
import { Switch } from 'react-native';
import { Text } from 'react-native';
import { View } from 'react-native';
import leftarrow from '../../assests/leftarrow.png';
const InsideMuteHeader = ({ setShowMuteInside }) => {
  return (
    <View>
      <View
        style={{
          marginTop: -78,
          flexDirection: 'row',
          gap: 130,
          alignItems: 'center',
          marginLeft: 10,
        }}
      >
        <Pressable onPress={() => setShowMuteInside(false)}>
          <Image source={leftarrow} style={{ height: 37, width: 37 }} />
        </Pressable>
        <View style={{ alignSelf: 'center' }}>
          <View
            style={{
              width: 40,
              alignSelf: 'center',
              height: 3,
              backgroundColor: '#BEBEBE',
              borderRadius: 100,
              marginBottom: 10,
            }}
          />
          <Text style={{ alignSelf: 'center', color: 'white', fontSize: 15 }}>
            Mute
          </Text>
        </View>
      </View>
      <View
        style={{
          height: 0.7,
          backgroundColor: '#303030',
          marginTop: 10,
        }}
      />
    </View>
  );
};

const MuteMain = ({ showMuteInside, setShowMuteInside }) => {
  return (
    <>
      <InsideMuteHeader
        showMuteInside={showMuteInside}
        setShowMuteInside={setShowMuteInside}
      />
      <View style={{ gap: 12, paddingHorizontal: 20, marginTop: -20 }}>
        {['Posts', 'Stories', 'Notes'].map((item, index) => {
          return <MuteComponent item={item} key={index} />;
        })}
        <View>
          <Text style={{ color: '#B0B0B0', fontSize: 12, marginTop: 16 }}>
            Instagram won't let them know you muted them.
          </Text>
        </View>
      </View>
    </>
  );
};

const MuteComponent = ({ item }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <View>
        <Text style={{ color: '#F5F5F5', fontSize: 16 }}>{item}</Text>
      </View>
      <View>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#81b0ff' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
};
export default MuteMain;
