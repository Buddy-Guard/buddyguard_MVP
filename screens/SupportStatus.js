import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Icon} from '@rneui/themed';
import {Avatar2, Map, pin2} from '../assets/images';

const SupportStatus = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1 relative">
      <ScrollView contentContainerStyle={{padding: 12, paddingBottom: 60}}>
        <View className="pt-4 px-4 flex space-y-4 ">
          {/* Hangout detail */}
          <View className="flex space-y-4">
            <TouchableOpacity onPress={() => navigation.navigate('Hangout')}>
              <Image
                className="w-full h-52  mb-2 rounded-lg relative"
                source={Map}
              />
            </TouchableOpacity>
          </View>
          {/* Card Section */}
          {/* Status */}
          <View className="rounded-lg bg-[#F2F2F2] p-4 flex space-y-6">
            {/* tags */}

            <View className="flex space-y-2">
              <Text className="font-bold">Status</Text>
              <Text>Buddy-Guard(Local) has been helping you about 7mins.</Text>
            </View>
            {/* Buddy Guard Near User */}
            <View className="flex flex-row">
              <View className="flex space-y-2">
                <Text className="font-bold mb-2">
                  Currently Buddy Guard is helping you{' '}
                </Text>
                <View className="w-full flex ">
                  <TouchableOpacity>
                    <Image
                      className="w-14 h-14 rounded-full relative"
                      source={Avatar2}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {/* Current Location */}
            <View className="flex space-y-2">
              <View className="flex flex-row justify-between">
                <Text className="font-bold">Current Location</Text>
                <Text className="font-bold text-red-500">8 mins left</Text>
              </View>
              <View className=" rounded-3xl bg-[#dcd9e2] px-4 py-4 flex flex-row items-center space-x-2s">
                <Image source={pin2} className="w-10 h-10" />
                <Text className="text-base"> 2321st, Bogota, Columbia</Text>
              </View>
            </View>

            {/* Bottom Menu */}
            <View className="flex flex-row justify-around items-center">
              {/* <View>
                <FontAwesome name="commenting" size={50} color={"#CAC6D1"} />
              </View> */}
              <TouchableOpacity
                onPress={() => navigation.navigate('SupportRequestInfo')}>
                <View
                  style={{
                    backgroundColor: '#FF5757',
                    width: 140,
                    height: 60,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 25,
                    paddingHorizontal: 15,
                  }}>
                  <Text className="text-white font-bold text-2xl">Cancel</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <View
                  style={{
                    backgroundColor: '#1B75BC',
                    width: 140,
                    height: 60,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 25,
                    paddingHorizontal: 15,
                  }}>
                  <Text className="text-white font-bold text-2xl">
                    Finished
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

export default SupportStatus;
