import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Map, coin, group, group2, pin2} from '../assets/images';
import {Icon} from '@rneui/themed';

const AcceptRequest = () => {
  const navigation = useNavigation();

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
              <Image className="w-full h-40  rounded-lg" source={Map} />
            </TouchableOpacity>
          </View>
          {/* Card Section */}
          <View className="flex space-y-2">
            <Text className="text-[#121418] font-bold text-xl mt-2">
              Accept Buddy-Guard Request
            </Text>
            <View className="rounded-lg bg-[#F2F2F2] p-4 flex space-y-6">
              {/* Card Section */}
              {/* User Info */}
              <View className="flex flex-row items-center ml-2">
                <View className="flex w-full ">
                  <Text className="font-bold text-base">User Info</Text>
                  <View className=" flex space-y-2">
                    <View className="w-full h-16  flex-row justify-start  items-center    ">
                      <Image source={group2} className="w-12 h-12" />
                      <Text className="text-base font-medium ml-4">
                        ZuSocial Group{' '}
                      </Text>
                    </View>
                    <Text className="font-bold text-base">Reward</Text>
                    <View className="w-full h-16  flex-row justify-start  items-center    ">
                      <Image source={coin} className="w-12 h-12" />
                      <Text className="text-base font-medium ml-4">
                        10 BG token / 20 mins duration
                      </Text>
                    </View>
                    <Text className="font-bold text-base">Location</Text>
                    <View className="w-full h-16  flex-row justify-start  items-center    ">
                      <Image source={pin2} className="w-12 h-12" />
                      <Text className="text-base font-medium ml-4">
                        C/ de Mallorca, 401, L'Eixample, 08013 Barcelona, Spain
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              {/* Next Button */}
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <View
                  className="bg-[#3998FF]"
                  style={{
                    width: '98%',
                    height: 60,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 25,
                  }}>
                  <Text className="text-white font-bold text-2xl">
                    Accept Request
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AcceptRequest;
