import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Map, help, when, where} from '../assets/images';
import {Icon} from '@rneui/base';
import AutoComplete from '../components/AutoComplete';

const SupportRequestInfo = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1 relative">
      <FlatList
        contentContainerStyle={{padding: 12, paddingBottom: 60}}
        data={[{key: 'dummy'}]} // Provide some dummy data
        renderItem={({item}) => (
          <View className="pt-4 px-4 flex space-y-4 ">
            {/* Top Section */}
            <View className="flex space-y-2">
              <Text className="text-[#121418] font-medium text-lg">
                Do You Need Some help?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Hangout')}>
                <Image className="w-full h-40  mb-2 rounded-lg" source={Map} />
              </TouchableOpacity>
            </View>
            {/* Card Section */}
            <View className="flex space-y-2">
              <View className="rounded-lg bg-[#F2F2F2] p-4 flex space-y-6">
                {/* Card Section */}
                {/* Request Info */}
                <View className="flex flex-row items-center ml-2">
                  <View className="flex space-y-2">
                    <Text className="font-bold">Request Description</Text>
                    {/* Support Description */}
                    <View className="relative">
                      <TextInput
                        placeholder="Type what you need"
                        multiline
                        className="w-72 p-5 pl-14  border-[#1B75BC] border-2  tex-lg rounded-lg"
                      />
                    </View>
                    <View className="absolute left-2 top-7">
                      <Image source={help} className="w-10 h-10" />
                    </View>
                  </View>
                </View>
                {/* Time Info */}
                <View className="flex flex-row items-center ml-2">
                  <View className="flex space-y-2 ">
                    <Text className="font-bold mb-2">
                      When Do you need this help
                    </Text>
                    <View className="relative">
                      <TextInput
                        placeholder="Type when do you need this help"
                        className="w-72 p-5 pl-12 border-[#1B75BC] border-2  tex-lg rounded-lg"
                      />
                    </View>
                    <View className="absolute left-3 top-8">
                      <Image source={when} className="w-10 h-10" />
                    </View>
                  </View>
                </View>
                {/* Location Info */}
                <View className="flex flex-row items-center ml-2">
                  <View className="flex space-y-2">
                    <Text className="font-bold">Where do you need help</Text>
                    {/* Input box - location */}
                    <View className="w-72 p-1 pl-12 border-[#1B75BC] border-2  tex-lg rounded-lg">
                      {/* <TextInput
                        placeholder="Type your location for support"
                        multiline
                        className="w-72 p-5 pl-12 border-[#1B75BC] border-2  tex-lg rounded-lg"
                      /> */}
                      <AutoComplete />
                    </View>
                    <View className="absolute left-2 top-7">
                      <Image source={where} className="w-10 h-10" />
                    </View>
                  </View>
                </View>
                {/* Next Button */}
                <TouchableOpacity
                  onPress={() => navigation.navigate('SupportConfirm')}>
                  <View
                    style={{
                      backgroundColor: '#1B75BC',
                      width: '98%',
                      height: 60,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 25,
                    }}>
                    <Text className="text-white font-bold text-2xl">Next</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default SupportRequestInfo;
