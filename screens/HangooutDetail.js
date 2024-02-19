import React, {useState, useLayoutEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {MaterialIcons} from '@expo/vector-icons';
import {
  Avatar1,
  Hangout5,
  Map,
  group,
  outdoor,
  sports,
  talk,
  verified,
} from '../assets/images';

const HangoutDetail = () => {
  const navigation = useNavigation();
  const [joined, setJoined] = useState(false); // State to track if user joined the event

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleJoinEvent = () => {
    // Update the state to indicate that the user has joined the event
    setJoined(true);
  };

  return (
    <SafeAreaView className="bg-white flex-1 relative">
      <ScrollView contentContainerStyle={{padding: 12, paddingBottom: 60}}>
        <View className="pt-4 px-4 flex space-y-4 ">
          {/* Hangout detail */}
          <View className="flex space-y-4">
            <TouchableOpacity onPress={() => navigation.navigate('Hangout')}>
              <Image
                className="w-full h-52 mb-2 rounded-lg relative"
                source={Hangout5}
              />
              <View className="absolute bottom-0 w-full">
                <View className="flex flex-row items-cente ">
                  {/* title and date */}
                  <View className="absolute left-3 bottom-3">
                    <Text className="text-white font-bold text-4xl">
                      Tennis Night
                    </Text>
                  </View>
                  <View className="absolute right-3 bottom-5  ">
                    <Text className="text-white text-xs font-bold">
                      2024/02/21
                    </Text>
                    <Text className="text-white text-xs font-bold">
                      5/10 People
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          {/* description box */}
          <View className="rounded-lg bg-gray-200 p-4 flex space-y-4">
            {/* tags */}
            <View className="flex flex-row justify-around items-center">
              <View className="flex flex-row bg-yellow-400 py-1 px-2 justify-center items-center rounded-2xl">
                <Image source={sports} className="w-8 h-8" />
                <Text className="text-white ml-1">Sports</Text>
              </View>
              <View className="flex flex-row bg-green-700 py-1 px-2 justify-center items-center rounded-2xl">
                <Image source={group} className="w-8 h-8" />
                <Text className="text-white ml-1">Group</Text>
              </View>
              <View className="flex flex-row bg-red-600 py-1 px-2 justify-center items-center rounded-2xl">
                <Image source={outdoor} className="w-8 h-8" />
                <Text className="text-white ml-1">Outdoor</Text>
              </View>
            </View>
            <View className="flex space-y-2">
              <Text className="font-bold">Description</Text>
              <Text>
                Hi! I'm Coach Criss. I have a small group of beginners looking
                to have some fun on Friday nights.
              </Text>
            </View>
            {/* Location */}
            <View className="flex space-y-2">
              <Text className="font-bold">Location</Text>
              <Text>Hawaii, Waikiki Island</Text>
            </View>
            {/* Orgnizer */}
            <View className="flex flex-row justify-between">
              <View className="flex space-y-2">
                <Text className="font-bold">Organizer</Text>
                <View className="flex flex-row items-end">
                  <Image
                    className="w-12 h-12 rounded-full border-gray-200 border-2 relative"
                    source={Avatar1}
                  />
                  <View className="absolute left-11 bottom-1">
                    <Image source={verified} className="w-7 h-7" />
                    <Text className="font-medium text-sm">Verified</Text>
                  </View>
                </View>
              </View>
              <View className="flex space-y-2">
                <Text className="font-bold">Event Ends</Text>
                <Text>2hr 14mins</Text>
              </View>
            </View>
            {/* Bottom Menu */}
            <View className="flex flex-row justify-between items-center">
              <View>
                <Image source={talk} className="w-16 h-16" />
              </View>
              <TouchableOpacity
                className="bg-blue-600 w-3/4 h-12 justify-center items-center rounded-full"
                onPress={handleJoinEvent}>
                <Text className="text-white font-bold text-2xl">
                  Join Event
                </Text>
              </TouchableOpacity>
            </View>
            {joined && (
              <View className=" bg-red-400 w-full h-12 rounded-md flex justify-center items-center">
                <Text className="font-bold text-lg text-white ">
                  You successfully joined !!!
                </Text>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HangoutDetail;
