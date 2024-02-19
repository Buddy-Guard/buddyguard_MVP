import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import {LogoImage} from '../assets/images';
import * as Animatable from 'react-native-animatable';

const StartScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-[#F6D268] flex-1 items-center justify-center relative">
      {/* loading page start */}
      <View className="flex space-y-2 items-center justify-center">
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          className="w-20 h-24 mb-2  "
          source={LogoImage}
        />
        <Text className="text-center text-3xl font-extrabold text-[#FE8606]">
          Buddy Guard
        </Text>
        <Text className="text-center text-base font-bold text-[#121418]">
          Safety Social dApp
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Onboarding')}
        className="absolute bottom-20 w-24 h-24 border-r-2 border-l-2 border-t-4 border-[#FE8606] rounded-full items-center justify-center">
        <Animatable.View
          animation="pulse"
          easing="ease-in-out"
          iterationCount="infinite"
          className="w-20 h-20 items-center justify-center rounded-full bg-[#FE8606]">
          <Text className="text-[#E5E7ED] font-semibold text-xl">Go</Text>
        </Animatable.View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default StartScreen;
