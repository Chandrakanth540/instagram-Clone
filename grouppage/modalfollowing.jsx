import { Pressable } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import closefrndstar from '../assests/closefrndstar.png';
import { Image } from 'react-native';
import favouritestar from '../assests/favouritestar.png';
import greaterthan from '../assests/greaterthan.png';
import closefrndgreen from '../assests/closefrndgreen.png';
import { useState } from 'react';
import redstar from '../assests/redstar.png';

import MuteMain from './modalinside/mutemain';
const ModalFollowing = ({ setVisible, visible }) => {
  const [showMuteInside, setShowMuteInside] = useState(false);
  return (
    <View>
      <Modal
        isVisible={visible}
        onBackdropPress={() => {
          setVisible(false);
          setShowMuteInside(false);
        }}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        backdropOpacity={0}
        // statusBarTranslucent
        animationInTiming={400}
        style={{
          backgroundColor: '#282828',
          marginTop: 460,
          marginBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }}
      >
        {showMuteInside ? (
          <>
            <MuteMain
              setShowMuteInside={setShowMuteInside}
              showMuteInside={showMuteInside}
            />
          </>
        ) : (
          <View style={{ marginTop: 0 }}>
            <ModalHeader />
            <View style={{ marginTop: 10, gap: 30 }}>
              <AddToCloseFrnd />

              <AddToFavorites />
              <Mute
                showMuteInside={showMuteInside}
                setShowMuteInside={setShowMuteInside}
              />
              <Restrict />
              <UnFollow />
            </View>
          </View>
        )}
      </Modal>
    </View>
  );
};
const ModalHeader = () => {
  return (
    <View style={{ marginTop: -20 }}>
      <View
        style={{
          width: 40,
          alignSelf: 'center',
          height: 3,
          backgroundColor: '#BEBEBE',
          borderRadius: 100,
          marginBottom: 10,
          marginTop: -20,
        }}
      />
      <View>
        <Text
          style={{
            alignSelf: 'center',
            color: 'white',
            fontSize: 15,
            fontWeight: '600',
          }}
        >
          pawankalyan
        </Text>
      </View>
      <View style={{ height: 1, backgroundColor: '#202020', marginTop: 10 }} />
    </View>
  );
};

const UnFollow = () => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
    }}
  >
    <Text style={{ color: 'white', fontSize: 15 }}>Unfollow</Text>
  </View>
);
const Restrict = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
      }}
    >
      <Text style={{ color: 'white', fontSize: 15 }}>Restrict</Text>
      <Image
        source={greaterthan}
        style={{ height: 22, width: 22, resizeMode: 'contain' }}
      />
    </View>
  );
};
const AddToCloseFrnd = () => {
  const [closeFrnd, setCloseFrnd] = useState(false);
  return (
    <Pressable onPress={() => setCloseFrnd(!closeFrnd)}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          marginTop: 20,
        }}
      >
        <Text style={{ color: 'white', fontSize: 15 }}>
          {closeFrnd ? 'Close friend' : 'Add to Close Friends list'}
        </Text>
        <Image
          source={closeFrnd ? closefrndgreen : closefrndstar}
          style={[
            {
              height: 22,
              width: 22,
              resizeMode: 'contain',
            },
            closeFrnd
              ? {
                  backgroundColor: 'white',
                  borderRadius: 100,
                  borderWidth: 2.4,
                  borderColor: '#282828',
                }
              : {},
          ]}
        />
      </View>
    </Pressable>
  );
};
const AddToFavorites = () => {
  const [favorite, setFavorite] = useState(false);
  return (
    <Pressable onPress={() => setFavorite(!favorite)}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}
      >
        <Text style={{ color: 'white', fontSize: 15 }}>
          {favorite ? 'Remove from favorite' : 'Add to favorites'}
        </Text>
        <Image
          source={favorite ? redstar : favouritestar}
          style={{ height: 22, width: 22, resizeMode: 'contain' }}
        />
      </View>
    </Pressable>
  );
};
const Mute = ({ showMuteInside, setShowMuteInside }) => {
  return (
    <Pressable onPress={() => setShowMuteInside(!showMuteInside)}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}
      >
        <Text style={{ color: 'white', fontSize: 15 }}>Mute</Text>
        <Image
          source={greaterthan}
          style={{ height: 22, width: 22, resizeMode: 'contain' }}
        />
      </View>
    </Pressable>
  );
};
export default ModalFollowing;
const styles = StyleSheet.create({});
