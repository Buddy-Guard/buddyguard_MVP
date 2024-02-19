import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useCallback, useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  BarcodeImg,
  ProfileImg,
  coin,
  group,
  group2,
  lock,
  verified,
} from '../assets/images';

import Modal from '../components/Modal';

const Profile = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [isOpenBarcodeModal, setOpenBarcodeModal] = useState(false);
  const [isOpenPersonalInfoModal, setOpenPersonalInfoModal] = useState(false);
  const [isPersonalInfoSaved, setPersonalInfoSaved] = useState(false);

  const onClickToggleBarcodeModal = useCallback(() => {
    setOpenBarcodeModal(!isOpenBarcodeModal);
  }, [isOpenBarcodeModal]);

  const onClickTogglePersonalInfoModal = useCallback(() => {
    setOpenPersonalInfoModal(!isOpenPersonalInfoModal);
  }, [isOpenPersonalInfoModal]);

  //   Encryption After
  const onSaveAndEncrypt = useCallback(() => {
    setPersonalInfoSaved(true); // Update state when user saves and encrypts personal info
    setOpenPersonalInfoModal(false); // Close the modal after saving
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1 relative">
      <ScrollView contentContainerStyle={{padding: 12, paddingBottom: 60}}>
        <View className="pt-4 px-4 flex space-y-4 ">
          {/* Top Section */}
          <View className="flex space-y-2 ">
            <View className="flex justify-center items-center w-100 h-50 px-8 py-6 bg-[#F2F2F2] rounded-xl relative">
              {/* barcode img */}
              <TouchableOpacity
                className="absolute top-2 right-3 "
                onPress={onClickToggleBarcodeModal}>
                <Image source={BarcodeImg} className="w-12 h-12" />
              </TouchableOpacity>
              {isOpenBarcodeModal && (
                <Modal onClickToggleModal={onClickToggleBarcodeModal}>
                  <Image
                    source={BarcodeImg}
                    style={{width: 200, height: 200}}
                  />
                </Modal>
              )}
              {/* profile img */}
              <View className="flex justify-center items-center border-4 border-[#022952] rounded-full h-24 w-24">
                <Image
                  source={ProfileImg}
                  className=" w-20 h-20 rounded-full "
                />
              </View>

              <View>
                <View className="flex flex-row">
                  <Text className="font-bold text-2xl text-center">Vita C</Text>
                  {/* Verified Icon */}
                  {isPersonalInfoSaved && (
                    <Image source={verified} className="w-9 h-9" />
                  )}
                </View>
                <Text className="font-bold text-base text-center">
                  0x123412312
                </Text>
              </View>
            </View>
          </View>
          {/* Info Section */}
          <View className="flex space-y-5">
            {/* Group Info */}
            <View>
              <Text className="font-bold mb-1 ">Group Info</Text>
              <View className="flex flex-row space-x-2">
                <View className="flex flex-row pl-5 justify-start items-center space-x-5 rounded-lg bg-[#F2F2F2] w-[80%] h-16">
                  <Image source={group2} className="w-11 h-11" />

                  <Text className="font-medium text-base">
                    Team Buddy Guard
                  </Text>
                </View>
                <TouchableOpacity className="rounded-2xl bg-green-500 w-16 h-16 flex justify-center items-center">
                  <Text className="font-medium text-white">Edit</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Personal Info */}
            <View>
              <Text className="font-bold mb-1">S0S Private Info</Text>
              <View className="flex flex-row space-x-2">
                <View className="flex flex-row pl-5 justify-start items-center space-x-5 rounded-lg bg-[#F2F2F2] w-[80%] h-16">
                  <Image source={lock} className="w-10 h-10" />
                  <Text className="font-medium text-base">
                    Encrypted Personal Info
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={onClickTogglePersonalInfoModal}
                  className="rounded-2xl w-16 h-16 flex justify-center items-center bg-green-500">
                  <Text className="font-medium text-white">Add</Text>
                </TouchableOpacity>
                {/* Personal Information Modal */}
                {isOpenPersonalInfoModal && (
                  <Modal
                    onClickToggleModal={onClickTogglePersonalInfoModal}
                    className="flex space-y-2">
                    <Text className="font-bold text-lg pb-2">
                      Type Your Personal Information for SOS
                    </Text>
                    <Text className="font-semibold">Your Personal Name</Text>
                    <TextInput
                      placeholder="Full Name"
                      className="p-4 my-2 border-2 border-green-600 rounded-lg"
                    />
                    <Text className="font-semibold">SOS Contact Name</Text>
                    <TextInput
                      placeholder="SOS Contact Name"
                      className="p-4 my-2 border-2 border-green-600 rounded-lg"
                    />
                    <Text className="font-semibold">SOS Contact Number</Text>
                    <TextInput
                      placeholder="SOS Contact Number"
                      className="p-4 my-2 border-2 border-green-600 rounded-lg"
                    />
                    {/* Save button */}
                    <TouchableOpacity
                      onPress={onSaveAndEncrypt}
                      className="bg-green-600 rounded-lg p-4 mt-2 flex justify-center items-center">
                      <Text className="text-white font-bold text-lg">
                        Save & Encrypt
                      </Text>
                    </TouchableOpacity>
                  </Modal>
                )}
              </View>
            </View>
            {/* Reward Info */}
            <View>
              <Text className="font-bold mb-1">Reward & Reputation Info</Text>
              <View className="flex flex-row space-x-2">
                <View className="flex flex-row pl-4 pr-10 justify-between items-center space-x-5 rounded-lg bg-[#F2F2F2] w-[80%] h-16">
                  <Image source={coin} className="w-12 h-12" />
                  <Text className="font-medium text-base ">188 BG Token</Text>
                </View>
                <TouchableOpacity className="rounded-2xl bg-green-500 w-16 h-16 flex justify-center items-center">
                  <Text className="font-medium text-white">Show</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* Social Graph */}
            <View>
              <Text className="font-bold mb-1">Social Graph</Text>
              <View className="flex flex-row space-x-2">
                <TouchableOpacity className="rounded-xl bg-[#F2F2F2] w-full h-40 flex justify-center items-center"></TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
