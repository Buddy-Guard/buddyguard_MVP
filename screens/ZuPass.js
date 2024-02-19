import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {devcon, vitalia, zuberlin, zuzalu1} from '../assets/images';

export default function ZuPass() {
  return (
    <View className="h-56 w-full p-2 border-2 border-[#1B75BC] rounded-lg">
      <Text className="font-bold ">Choose Your Zuzalu Pass Event</Text>
      <View className="flex justify-between items-center">
        <TouchableOpacity className="rounded-md w-60 h-12 px-4  flex items-start justify-center">
          <View className="flex flex-row space-x-3">
            <Image source={zuzalu1} className="w-32 h-8" />
            <Text className="self-center font-bold">ZuConnect</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="rounded-md w-60 h-12 px-4  flex items-start justify-center">
          <View className="flex flex-row space-x-3">
            <Image source={vitalia} className="w-32 h-8" />
            <Text className="self-center font-bold">Vitalia</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="rounded-md w-64 h-12 px-4 flex items-start justify-center">
          <View className="flex flex-row space-x-3">
            <Image source={devcon} className="w-32 h-8 " />
            <Text className="self-center font-bold">Devcon 2024</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="rounded-md w-64 h-12 px-4 flex items-start justify-center">
          <View className="flex flex-row space-x-3">
            <Image source={zuberlin} className="w-32 h-8  " />
            <Text className="self-center font-bold">ZuBerlin</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
