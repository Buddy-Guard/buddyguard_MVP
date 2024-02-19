import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {
  hand,
  hand1,
  home,
  home1,
  home3,
  profile,
  profile1,
  search,
  search1,
  walk,
  walk2,
} from '../assets/images';

const BottomTab = ({activeScreen}) => {
  console.log('Active Screen (BottomTab):', activeScreen);

  const navigation = useNavigation();
  return (
    <View className="absolute bottom-0 w-full ">
      <View className="bg-[#231f20] px-4 py-6  flex-row items-center justify-around">
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          {activeScreen === 'Home' ? (
            <Image source={home1} className="w-11 h-11" />
          ) : (
            <Image source={home} className="w-10 h-10" />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Hangout')}>
          {activeScreen === 'Hangout' ? (
            <Image source={search1} className="w-11 h-11" />
          ) : (
            <Image source={search} className="w-10 h-10" />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('WalkRequestInfo')}>
          {activeScreen === 'WalkRequestInfo' ? (
            <Image source={walk2} className="w-11 h-11" />
          ) : (
            <Image source={walk} className="w-10 h-10" />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SupportRequestInfo')}>
          {activeScreen === 'SupportRequestInfo' ? (
            <Image source={hand1} className="w-11 h-11" />
          ) : (
            <Image source={hand} className="w-10 h-10" />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          {activeScreen === 'Profile' ? (
            <Image source={profile1} className="w-11 h-11" />
          ) : (
            <Image source={profile} className="w-11 h-11" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomTab;
