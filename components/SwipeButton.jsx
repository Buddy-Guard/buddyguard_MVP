import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const SwipeButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('HangoutSwipe')}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        className="bg-[#FF5757]"
        style={{
          width: '98%',
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 25,
        }}>
        <Text className="text-white font-bold text-2xl">Swipe Hangout</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SwipeButton;
