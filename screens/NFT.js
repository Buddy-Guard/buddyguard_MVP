import React from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {nft1, nft2, nft3, nft4} from '../assets/images';

export default function NFT() {
  return (
    <View className="h-56 w-full p-2 border-2 border-[#1B75BC] rounded-lg">
      <View className="flex">
        <Text className="font-bold mb-4">Search NFT</Text>
        <TextInput
          placeholder="Search Name or Paste NFT Address"
          className=" p-4  border-2 border-[#1B75BC] rounded-lg"
          // value={numberOfPeople}
          // onChangeText={setNumberOfPeople}
        />
        {/* NFT list */}
        <View>
          <Text className="font-bold my-4">Choose NFT in the list</Text>
          <View className="flex flex-row justify-between">
            <TouchableOpacity className="rounded-md w-16 h-16 border-2 border-gray-400 flex justify-center items-center">
              <Image source={nft1} className="w-14 h-14" />
            </TouchableOpacity>
            <TouchableOpacity className="rounded-md w-16 h-16 border-2 border-gray-400 flex justify-center items-center">
              <Image source={nft2} className="w-14 h-14" />
            </TouchableOpacity>
            <TouchableOpacity className="rounded-md w-16 h-16 border-2 border-gray-400 flex justify-center items-center">
              <Image source={nft3} className="w-14 h-14" />
            </TouchableOpacity>
            <TouchableOpacity className="rounded-md w-16 h-16 border-2 border-gray-400 flex justify-center items-center">
              <Image source={nft4} className="w-14 h-14" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
