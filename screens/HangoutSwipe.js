import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Animated,
  PanResponder,
  ImageBackground,
} from 'react-native';
import React, {useLayoutEffect, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Icon} from '@rneui/themed';

import {
  Hangout1,
  Hangout2,
  Hangout3,
  Hangout4,
  Hangout5,
  Map,
  group,
  no,
  outdoor,
  pin,
  sports,
  yes,
} from '../assets/images';

const HangoutSwipe = () => {
  const navigation = useNavigation();
  const hangoutImages = [Hangout1, Hangout2, Hangout3, Hangout4, Hangout5]; // Assuming you have an array of hangout images

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  // swipe feature
  // Values
  const scale = useRef(new Animated.Value(1)).current;
  const position = useRef(new Animated.Value(0)).current;
  const rotation = position.interpolate({
    inputRange: [-250, 250],
    outputRange: ['-15deg', '15deg'],
  });
  const secondScale = position.interpolate({
    inputRange: [-300, 0, 300],
    outputRange: [1, 0.7, 1],
    extrapolate: 'clamp',
  });
  // Animations
  const onPressOut = Animated.spring(scale, {
    toValue: 1,
    useNativeDriver: true,
  });
  const onPressIn = Animated.spring(scale, {
    toValue: 0.95,
    useNativeDriver: true,
  });
  const goCenter = Animated.spring(position, {
    toValue: 0,
    useNativeDriver: true,
  });
  const goLeft = Animated.spring(position, {
    toValue: -500,
    tension: 5,
    useNativeDriver: true,
    restDisplacementThreshold: 100,
    restSpeedThreshold: 100,
  });
  const goRight = Animated.spring(position, {
    toValue: 500,
    tension: 5,
    useNativeDriver: true,
  });
  // Pan Responders
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, {dx}) => {
        position.setValue(dx);
      },
      onPanResponderGrant: () => onPressIn.start(),
      onPanResponderRelease: (_, {dx}) => {
        if (dx < -250) {
          goLeft.start(onDismiss);
        } else if (dx > 250) {
          goRight.start(onDismiss);
        } else {
          Animated.parallel([onPressOut, goCenter]).start();
        }
      },
    }),
  ).current;
  // State
  const [index, setIndex] = useState(0);
  const onDismiss = () => {
    scale.setValue(1);
    setIndex(prev => prev + 1);
    position.setValue(0);
    // Animated.timing(position, { toValue: 0, useNativeDriver: true }).start();
  };
  const closePress = () => {
    goLeft.start(onDismiss);
  };
  const checkPress = () => {
    goRight.start(onDismiss);
  };

  return (
    <SafeAreaView className="bg-white flex-1 relative">
      <ScrollView contentContainerStyle={{padding: 12, paddingBottom: 60}}>
        <View className="pt-9 px-4 flex space-y-4 ">
          {/* Top Section */}
          <View className="flex-row justify-between items-center">
            <Text className="text-[#231f20] font-semibold  text-base">
              Gm, Joy
            </Text>
            <View className="flex flex-row justify-center items-center">
              <Image source={pin} className="w-8 h-8" />

              <Text className="text-[#231f20] font-medium text-base ml-1">
                100m away
              </Text>
            </View>
          </View>
          {/* Swipe Card Section */}
          <View className="flex justify-center items-center space-y-10 ">
            <View className="flex-3 justify-center items-center w-full ">
              <Animated.View
                style={{transform: [{scale: secondScale}]}}
                className=" w-[83vw] h-[55vh] justify-center items-center shadow-lg absolute top-1">
                <ImageBackground
                  source={hangoutImages[index + 1]}
                  className="w-full h-full  "
                  style={{
                    borderRadius: 12,
                    overflow: 'hidden', // Ensure the border radius is applied
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                />
                {/* <Ionicons name={icons[index + 1]} color="#192a56" size={98} /> */}
              </Animated.View>
              <Animated.View
                {...panResponder.panHandlers}
                className=" w-[83vw] h-[55vh] justify-center items-center shadow-lg absolute top-1 "
                style={{
                  transform: [
                    {scale},
                    {translateX: position},
                    {rotateZ: rotation},
                  ],
                }}>
                {/* <Ionicons name={icons[index]} color="#192a56" size={98} /> */}
                <ImageBackground
                  source={hangoutImages[index]}
                  className="w-full h-full   "
                  style={{
                    borderRadius: 12,
                    overflow: 'hidden', // Ensure the border radius is applied
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                />
              </Animated.View>
            </View>
            <View className="flex justify-center items-center  w-full h-60 top-14 ">
              {/* hangout title */}
              <View className="absolute top-52  w-full px-4 ">
                <Text className="text-4xl font-bold text-white text-left">
                  Beach Volleyball
                </Text>
              </View>
              {/* tags */}
              <View className="absolute top-64  w-full px-4 ">
                <View className="flex flex-row justify-around items-center ">
                  <View className="flex flex-row bg-[#F8C145] py-1 px-2 justify-center items-center rounded-2xl mr-1">
                    <Image source={sports} className="w-8 h-8" />

                    <Text className="text-white ml-1">Sports</Text>
                  </View>
                  <View className="flex flex-row bg-[#337B58] py-1 px-2 justify-center items-center rounded-2xl">
                    <Image source={group} className="w-8 h-8" />

                    <Text className="text-white ml-1">Group</Text>
                  </View>
                  <View className="flex flex-row bg-[#FF5757] py-1 px-2 justify-center items-center rounded-2xl">
                    <Image source={outdoor} className="w-8 h-8" />

                    <Text className="text-white ml-1">Outdoor</Text>
                  </View>
                </View>
              </View>
              {/* Date and number of people */}
              <View className="absolute top-72 mt-4 flex flex-row justify-between items-center w-full px-6">
                <Text className="text-base font-bold text-white">
                  2024/02/21
                </Text>
                <Text className="text-base font-bold text-white">
                  5/10 People
                </Text>
              </View>
              {/* button section */}
              <View className="absolute top-80  mt-20">
                <View className="flex-row space-x-8 ">
                  <TouchableOpacity
                    style={{
                      width: 64,
                      height: 64,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: '#FF5757',
                      borderRadius: 32,
                    }}
                    onPress={closePress}>
                    <Image source={no} className="w-8 h-8" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      width: 64,
                      height: 64,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: '#4F9171',
                      borderRadius: 32,
                    }}
                    onPress={checkPress}>
                    <Image source={yes} className="w-12 h-12" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          {/* User Info */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HangoutSwipe;
