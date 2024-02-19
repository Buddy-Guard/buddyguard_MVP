import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import {poap1, poap2, poap3, poap4} from '../assets/images';
import {CovalentClient} from '@covalenthq/client-sdk';
import {useState} from 'react';

export default function POAP() {
  const [responseData, setResponseData] = useState({});

  const ApiServices = async () => {
    const client = new CovalentClient('cqt_rQVHbKdXh4dCVhvPBx8fXtWgBPCB');
    const resp = await client.BalanceService.getTokenBalancesForWalletAddress(
      'eth-mainnet',
      'raigal.eth',
    );
    setResponseData(resp.data);
    console.log(resp.data);
  };

  return (
    <View className="h-56 w-full p-2 border-2 border-[#1B75BC] rounded-lg ">
      <View className="flex">
        <Text className="font-bold mb-4">Search POAP</Text>
        <TextInput
          placeholder="Search Name or Paste POAP Address"
          className=" p-4  border-2 border-[#1B75BC] rounded-lg"
          // value={numberOfPeople}
          // onChangeText={setNumberOfPeople}
        />
        {/* POAP list */}
        <View>
          <Text className="font-bold my-4">Choose POAP in the list</Text>
          <View className="flex flex-row justify-between">
            <TouchableOpacity className="rounded-full w-16 h-16 border-2 border-gray-400 flex justify-center items-center">
              <Image source={poap1} className="w-14 h-14" />
            </TouchableOpacity>
            <TouchableOpacity
              className="rounded-full w-16 h-16 border-2 border-gray-400 flex justify-center items-center"
              onPress={() => ApiServices()}>
              <Image source={poap2} className="w-14 h-14" />
            </TouchableOpacity>
            <TouchableOpacity className="rounded-full w-16 h-16 border-2 border-gray-400 flex justify-center items-center">
              <Image source={poap3} className="w-14 h-14" />
            </TouchableOpacity>
            <TouchableOpacity className="rounded-full w-16 h-16 border-2 border-gray-400 flex justify-center items-center">
              <Image source={poap4} className="w-14 h-14" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
