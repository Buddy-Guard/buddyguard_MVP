/* eslint-disable react-native/no-inline-styles */
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useLayoutEffect, useCallback, useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Ionicons} from '@expo/vector-icons';
import {Icon} from '@rneui/themed';

import {Avatar1, Avatar2, LogoImage, Map, pin, pin2} from '../assets/images';
import {LinearGradient} from 'expo-linear-gradient';
import Modal from '../components/Modal';
import {TextInput} from 'react-native';
import {SafetyTimer} from '.';

const WalkStatus = () => {
  const navigation = useNavigation();
  const [isSosModal, setIsSosModal] = useState(false);
  const onSosRequestModal = useCallback(() => {
    setIsSosModal(!isSosModal);
  }, [isSosModal]);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('SafetyTimer');
    }, 7000);
    return () => clearTimeout(timer);
  }, [navigation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1 relative">
      <ScrollView contentContainerStyle={{padding: 12, paddingBottom: 60}}>
        <View className="pt-4 px-4 flex space-y-4 ">
          {/* Walk to home detail */}
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
              <Text>
                Buddy-Guard(Local) has been walking with you about 7mins.
              </Text>
            </View>
            {/* Current Location */}
            <View className="flex space-y-2">
              <View className="flex flex-row justify-between">
                <Text className="font-bold">Current Location</Text>
                <Text className="font-bold text-red-500">1 min left</Text>
              </View>
              <View className=" rounded-3xl bg-[#dcd9e2] px-4 py-4 flex flex-row items-center space-x-2">
                <Image source={pin2} className="w-10 h-10" />
                <Text className="text-base">
                  C/ de Mallorca, 401, L'Eixample, 08013 Barcelona, Spain
                </Text>
              </View>
            </View>
            {isSosModal && (
              <Modal
                onClickToggleModal={onSosRequestModal}
                className="flex space-y-2 h-auto">
                <Text className="font-bold text-lg pb-2">SOS Message</Text>
                <Text className="font-semibold">
                  We Will Send This Msg to the Buddy Guard :
                </Text>
                <View className="bg-yellow-400 w-30 h-34 mb-3 flex justify-center space-y-2 p-3 rounded-lg">
                  <Text className="font-bold">
                    SOS Time: 21:34, February 21st, 2024
                  </Text>
                  <Text className="font-bold">
                    SOS Location Link : 1212st, Bogota, Colombia
                  </Text>
                  <Text className="font-bold">
                    Personal Contact Number : 987-232-1829
                  </Text>
                </View>
                <View className="my-3">
                  <Text className="text-red-500 font-bold leading-5 ">
                    Help will be on the way soon. If possible, provide any
                    additional information or updates to the Buddy Guard Group
                    once they arrive
                  </Text>
                </View>
                {/* <TextInput
                  placeholder="Full Name"
                  className="p-4 my-2 border-2 border-green-600 rounded-lg"
                /> */}
                {/* Add additional input fields as needed */}
                <TouchableOpacity
                  onPress={() => {
                    SafetyTimer;
                  }}
                  style={{
                    backgroundColor: '#FF5757',
                    padding: 12,
                    borderRadius: 8,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: '#E5E7ED',
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}>
                    Send SOS Message Now
                  </Text>
                </TouchableOpacity>
              </Modal>
            )}

            {/* Buddy Guard Near User */}
            <View className="flex flex-row justify-between">
              <View className="flex space-y-2">
                <Text className="font-bold mb-2">Buddy Guards Near By You</Text>
                <View className="w-full flex flex-row justify-around">
                  <TouchableOpacity>
                    <View>
                      <Image
                        className="w-14 h-14 rounded-full relative"
                        source={LogoImage}
                      />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      className="w-14 h-14 rounded-full relative"
                      source={Avatar1}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      className="w-14 h-14 rounded-full relative"
                      source={Avatar2}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {/* Bottom Menu */}
            <View className="flex flex-row justify-around items-center">
              {/* <View>
                <FontAwesome name="commenting" size={50} color={"#CAC6D1"} />
              </View> */}

              <TouchableOpacity
                onPress={() => navigation.navigate('SafetyTimer')}>
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
                  <Text className="text-white font-bold text-2xl">
                    Send SOS
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <View
                  style={{
                    backgroundColor: '#4F9171',
                    width: 140,
                    height: 60,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 25,
                    paddingHorizontal: 15,
                  }}>
                  <Text className="text-white font-bold text-2xl">Arrived</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WalkStatus;
