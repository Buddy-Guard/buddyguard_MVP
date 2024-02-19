import React, {useState, useLayoutEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Avatar1, Avatar2, LogoImage, Map, talk} from '../assets/images';

const SupportConfirm = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView className="bg-white flex-1 relative">
      <ScrollView contentContainerStyle={{padding: 12, paddingBottom: 60}}>
        <View className="pt-4 px-4 flex space-y-4 ">
          {/* Top Section */}
          <View className="flex space-y-2">
            <TouchableOpacity onPress={() => navigation.navigate('Hangout')}>
              <Image className="w-full h-40 rounded-lg" source={Map} />
            </TouchableOpacity>
          </View>
          {/* Card Section */}
          <View className="flex space-y-2">
            <View className="rounded-lg bg-[#fff] p-4 flex space-y-2">
              <View className="flex flex-row items-center ml-2">
                <View className="flex space-y-2 ">
                  <Text className="font-bold mb-2 text-lg ">
                    I lost my passport. Anyone can help me?
                  </Text>
                  <Text className="font-bold mb-1">Choose Your Buddy</Text>
                  {/* Choose Options */}
                  <View className=" flex space-y-2">
                    <TouchableOpacity
                      onPress={() => setSelectedOption('Buddy-Guard(Local)')}
                      className={`w-76 h-16  flex-row justify-start px-2 items-center border-[#1B75BC] border-2  rounded-lg ${
                        selectedOption === 'Buddy-Guard(Local)'
                          ? 'bg-[#1B75BC]'
                          : ''
                      }`}>
                      <Image
                        className="w-10 h-12 rounded-full relative"
                        source={LogoImage}
                      />
                      <View className="flex space-y-1">
                        <Text className="text-md font-semibold ml-4">
                          Buddy-Guard(Local)
                        </Text>
                        <View className="flex flex-row justify-between">
                          <Text className="text-sm ml-4"> Near 200m</Text>
                          <Text className="text-sm ml-4 font-medium text-[#FF5757]">
                            High Reputation
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => setSelectedOption('Juliet K')}
                      className={`w-76 h-16  flex-row justify-start items-center px-2  border-[#1B75BC] border-2 rounded-lg ${
                        selectedOption === 'Juliet K' ? 'bg-[#1B75BC]' : ''
                      }`}>
                      <Image
                        className="w-11 h-11 rounded-full relative"
                        source={Avatar1}
                      />
                      <View className="flex space-y-1">
                        <Text className="text-md font-semibold ml-4">
                          Juliet K
                        </Text>
                        <View className="flex flex-row justify-between">
                          <Text className="text-sm ml-4"> Near 200m</Text>
                          <Text className="text-sm ml-4 font-medium text-[#FF5757]">
                            High Reputation
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => setSelectedOption('James Lee')}
                      className={`w-76 h-16  flex-row justify-start items-center px-2 border-[#1B75BC] border-2  rounded-lg ${
                        selectedOption === 'James Lee' ? 'bg-[#1B75BC]' : ''
                      }`}>
                      <Image
                        className="w-11 h-11 rounded-full relative"
                        source={Avatar2}
                      />
                      <View className="flex space-y-1">
                        <Text className="text-md font-semibold ml-4">
                          James Lee
                        </Text>
                        <View className="flex flex-row justify-between">
                          <Text className="text-sm ml-4"> Near 200m</Text>
                          <Text className="text-sm ml-4 font-medium text-[#FF5757]">
                            Medium Reputation
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <View className="flex flex-row justify-end items-center space-x-2">
                      <Text className="font-bold text-2xl text-red-500 ">
                        Total
                      </Text>
                      <Text className="font-bold text-lg">2 Buddy Token</Text>
                    </View>
                  </View>
                </View>
              </View>
              {/* Support confirm button */}
              <View className="flex flex-row w-full justify-between ">
                <View>
                  <Image source={talk} className="w-16 h-16" />
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('SupportStatus')}>
                  <View
                    style={{
                      backgroundColor: '#1B75BC',
                      width: '100%',
                      height: 60,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 25,
                      paddingHorizontal: 35,
                    }}>
                    <Text className="text-white font-bold text-lg ">
                      Support Request
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SupportConfirm;
