/* eslint-disable react-native/no-inline-styles */
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useCallback, useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Hangout1, Hangout3, Map, inbox, sos} from '../assets/images';
import SwipeButton from '../components/SwipeButton';
import {sendMsg} from './SendMsg';
import {Modal} from '../components';

const Home = () => {
  const navigation = useNavigation();
  const hangoutImages = [Hangout1, Hangout3]; // Assuming you have an array of hangout images
  const [isSosModal, setIsSosModal] = useState(false);
  const onSosRequestModal = useCallback(() => {
    setIsSosModal(!isSosModal);
  }, [isSosModal]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1 relative">
      <ScrollView contentContainerStyle={{padding: 12, paddingBottom: 60}}>
        <View className="pt-9 px-4 flex space-y-4 ">
          <View className="flex-row justify-between items-center">
            <Text className="text-[#121418] font-semibold text-base">
              Gm, Joy Mun
            </Text>
            <View className="flex flex-row space-x-3">
              <TouchableOpacity
                onPress={() => navigation.navigate('AcceptRequest')}>
                <Image source={inbox} className="w-12 h-12 mr-1" />
              </TouchableOpacity>
              <TouchableOpacity onPress={onSosRequestModal}>
                <View className="w-12 h-12 ml-3 bg-red-500 rounded-2xl flex justify-center items-center">
                  <Text className="text-white font-bold">SOS</Text>
                </View>
              </TouchableOpacity>
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
              <View className="bg-red-400 w-30 h-34 mb-3 flex justify-center space-y-2 p-3 rounded-lg">
                <Text className="font-bold">
                  **Emergency Situation! Please Help Me!
                </Text>
                <Text className="font-bold">SOS User : Joy M</Text>
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
                onPress={() => navigation.navigate('Home')}
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

          {/* Explore Your Neighborhood*/}
          <View className="flex space-y-2">
            <Text className="text-[#121418] font-medium text-lg">
              Explore Your Neighborhood
            </Text>
            <View className="p-1 z-0 rounded-lg ">
              <TouchableOpacity
                onPress={() => navigation.navigate('Map')}
                className="z-50">
                <Image className="w-full h-40   rounded-lg" source={Map} />
              </TouchableOpacity>
            </View>
          </View>
          {/* Upcoming Events*/}
          <View className="flex space-y-2">
            <View className="mb-6">
              <Text className="text-[#121418] font-medium text-lg">
                Upcoming Events
              </Text>
            </View>
            <View className="flex-row align-baseline">
              {/* timeline */}
              <View className="basis-[11%] w-full h-14 flex justify-center items-center space-y-20 mt-12 mr-2 ">
                {hangoutImages.map((image, index) => (
                  <View
                    key={index}
                    className="rounded-full w-5 h-5 bg-[#FF5757] flex justify-center items-center">
                    <View
                      key={index}
                      className="rounded-full w-2 h-2 bg-white"></View>
                  </View>
                ))}
              </View>
              {/* event list */}
              <View className="flex w-full space-y-[47px]">
                {hangoutImages.map((image, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => navigation.navigate('Hangout')}
                    className="w-[85%] h-14  flex justify-center items-center">
                    <Image className="w-full h-24 rounded-lg" source={image} />
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
          {/* Swipe Button */}
          <View className="flex">
            <View className="mt-6 mb-3">
              <Text className="text-[#121418] font-medium text-lg ">
                Swipe Hangout
              </Text>
            </View>
            {/* swipe button */}

            <SwipeButton />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
