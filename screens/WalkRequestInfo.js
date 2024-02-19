/* eslint-disable react-native/no-inline-styles */
import React, {useLayoutEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Map, live, timer} from '../assets/images';
import AutoComplete from '../components/AutoComplete';

const WalkRequestInfo = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1 relative">
      <FlatList
        contentContainerStyle={{padding: 12, paddingBottom: 60}}
        data={[{key: 'dummy'}]}
        renderItem={({item}) => (
          <View className="pt-4 px-4 flex space-y-4">
            {/* Top Section */}
            <View className="flex space-y-2">
              <Text className="text-[#121418] font-medium text-lg">
                Where Do You Wanna Go?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Hangout')}>
                <Image className="w-full h-40 mb-2 rounded-lg" source={Map} />
              </TouchableOpacity>
            </View>

            {/* Card Section */}
            <View className="flex space-y-2">
              <View className="rounded-lg bg-[#F2F2F2] p-4 flex space-y-6">
                {/* Choose Buddy */}
                <View className="flex flex-row items-center">
                  <View className="flex space-y-2 w-full">
                    <Text className="font-bold">Address</Text>
                    <View className="w-full border-2 border-[#4F9171]">
                      <AutoComplete />
                    </View>
                  </View>
                </View>

                {/* Choose Options */}
                <View className="flex flex-row items-center">
                  <View className="flex space-y-2 w-full">
                    <Text className="font-bold mb-2">Choose Your Buddy</Text>
                    <View className="flex space-y-3">
                      <TouchableOpacity
                        className={`w-full h-16 flex-row justify-start items-center px-4 border-2 border-[#4F9171] rounded-3xl ${
                          selectedOption === 'timer'
                            ? 'bg-[#4F9171] '
                            : 'border-[#4F9171]'
                        }`}
                        onPress={() => setSelectedOption('timer')}>
                        <Image source={timer} className="w-10 h-10" />
                        <Text className="text-md font-semibold ml-4">
                          Set Safety Timer
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        className={`w-full h-16 flex-row justify-start items-center px-4 border-2 border-[#4F9171] rounded-3xl ${
                          selectedOption === 'live'
                            ? 'bg-[#4F9171]'
                            : ' border-[#4F9171]'
                        }`}
                        onPress={() => setSelectedOption('live')}>
                        <Image source={live} className="w-10 h-10" />
                        <Text className="text-md font-semibold ml-2">
                          Request Live Monitoring
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                {/* Next Button */}
                <TouchableOpacity
                  onPress={() => navigation.navigate('WalkConfirm')}
                  style={{
                    backgroundColor: selectedOption ? '#4F9171' : '#ccc',
                    width: '100%',
                    height: 60,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 25,
                  }}
                  disabled={!selectedOption}>
                  <Text className="text-white font-bold text-2xl">Next</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default WalkRequestInfo;
