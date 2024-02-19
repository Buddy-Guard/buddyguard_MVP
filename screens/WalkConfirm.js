import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  Avatar1,
  Avatar2,
  Hangout1,
  Hangout3,
  LogoImage,
  Map,
} from '../assets/images';

import {ethers} from 'ethers';

const WalkConfirm = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  // const addGuardian = async () => {
  //   try {
  //     const contractAddress = '0xD2646C2629F237Ec1a03fc1d6ef7f953410BC788';
  //     const orderId = 0;
  //     const guardianAddress = '0x0721b65EEB4CbFebe48684b363D8053924925EA1';

  //     // Set up the provider
  //     const provider = new ethers.providers.JsonRpcProvider(
  //       'https://avalanche-fuji.infura.io/v3/06105ced913047cc9dfb22a446cd008e',
  //     );
  //     const signer = provider.getSigner();

  //     // Assuming BuddyGuard is the contract name and you have the ABI
  //     const buddyGuardABI = []; // You need to define your contract's ABI here
  //     const buddyGuardContract = new ethers.Contract(
  //       contractAddress,
  //       buddyGuardABI,
  //       signer,
  //     );

  //     const tx = await buddyGuardContract.addGuardian(orderId, guardianAddress);
  //     await tx.wait();

  //     console.log('Guardian Added Successfully');
  //   } catch (error) {
  //     console.error('Failed to add guardian:', error);
  //   }
  // };

  const handleContractInteraction = async () => {
    const contractAddress = '0x4EeFA835A807c36DD0a643A7D97cD6E2b8Ca29c2';
    const tokenAddress = '0xD21341536c5cF5EB1bcb58f6723cE26e8D8E90e4';
    const guardians = ['0xE1e5E0b3830454d68aE7B8926540a8AC0FdcabC0'];
    const payment = ethers.utils.parseUnits('100', 1);

    const provider = new ethers.providers.JsonRpcProvider(
      'https://avalanche-fuji.infura.io/v3/06105ced913047cc9dfb22a446cd008e',
    );

    const wallet = new ethers.Wallet(
      '21ecce1087ee67a64fbce1435c25eb7feceacca5ae68a340be4002211455c1a6',
      provider,
    );

    const buddyGuardAbi = [
      'function createOrder(address _token, address[] calldata _guardians, uint256 _payment) external',
    ];

    const buddyGuardContract = new ethers.Contract(
      contractAddress,
      buddyGuardAbi,
      wallet,
    );

    console.log(`Creating order with payment: ${payment.toString()} tokens...`);

    try {
      console.log(
        `Creating order with payment: ${payment.toString()} tokens...`,
      );

      const tokenAbi = [
        'function approve(address spender, uint256 amount) external returns (bool)',
      ];

      const tokenContract = new ethers.Contract(tokenAddress, tokenAbi, wallet);
      await tokenContract.approve(contractAddress, payment);

      const tx = await buddyGuardContract.createOrder(
        tokenAddress,
        guardians,
        payment,
      );
      await tx.wait();

      console.log(`Order created successfully. Transaction hash: ${tx.hash}`);
    } catch (error) {
      console.error('Failed to create order:', error);
    }
  };

  return (
    <SafeAreaView className="bg-white flex-1 relative">
      <ScrollView contentContainerStyle={{padding: 12, paddingBottom: 60}}>
        <View className="pt-4 px-4 flex space-y-4 ">
          {/* Top Section */}
          <View className="flex space-y-2">
            <Text className="text-gray-900 font-medium text-lg">
              Where Do You Wanna Go?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Hangout')}>
              <Image className="w-full h-40  mb-1 rounded-lg" source={Map} />
            </TouchableOpacity>
          </View>
          {/* Card Section */}
          <View className="flex ">
            <View className="rounded-lg bg-[#F2F2F2] p-4 flex space-y-3">
              {/* Card Section */}
              <View className="flex flex-row items-center ">
                <View className="flex space-y-1 w-full">
                  <Text className="font-bold mb-2">Choose Your Buddy</Text>
                  {/* Choose Options */}
                  <View className=" flex space-y-3 w-full justify-center items-center">
                    <TouchableOpacity
                      className={`w-full h-16 flex-row justify-start px-2 items-center border-[#4F9171] border-2 rounded-lg ${
                        selectedOption === 'buddyGuard' ? 'bg-[#4F9171]' : ''
                      }`}
                      onPress={() => setSelectedOption('buddyGuard')}>
                      <Image
                        className="w-10 h-12 rounded-full relative"
                        source={LogoImage}
                      />
                      <View className="flex space-y-1">
                        <Text className="text-md font-semibold ml-4">
                          {' '}
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
                    {/* Add similar TouchableOpacity for other options */}
                    <TouchableOpacity
                      className={`w-full h-16 flex-row justify-start px-2 items-center border-[#4F9171] border-2 rounded-lg ${
                        selectedOption === 'julietK' ? 'bg-[#4F9171]' : ''
                      }`}
                      onPress={() => setSelectedOption('julietK')}>
                      <Image
                        className="w-11 h-11 rounded-full relative"
                        source={Avatar1}
                      />
                      <View className="flex space-y-1">
                        <Text className="text-md font-semibold ml-4">
                          {' '}
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
                    {/* Add similar TouchableOpacity for other options */}
                    <TouchableOpacity
                      className={`w-full h-16 flex-row justify-start px-2 items-center border-[#4F9171] border-2 rounded-lg ${
                        selectedOption === 'jamesLee' ? 'bg-[#4F9171]' : ''
                      }`}
                      onPress={() => setSelectedOption('jamesLee')}>
                      <Image
                        className="w-11 h-11 rounded-full relative"
                        source={Avatar2}
                      />
                      <View className="flex space-y-1">
                        <Text className="text-md font-semibold ml-4">
                          {' '}
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
                  {/* Total and duration */}
                  <View>
                    <View className="flex flex-row justify-end items-center space-x-3">
                      <Text className="font-bold text-2xl text-red-500 my-2">
                        Total
                      </Text>
                      <Text className="font-bold text-lg">25 Buddy Token</Text>
                    </View>
                    <Text className="font-bold text-red-500 text-right">
                      15 mins Away to Your Destination
                    </Text>
                  </View>
                </View>
              </View>
              {/* Confirm Button */}
              <TouchableOpacity
                onPress={async () => {
                  await handleContractInteraction();
                  navigation.navigate('WalkStatus');
                }}>
                <View
                  style={{
                    backgroundColor: selectedOption ? '#4F9171' : '#ccc',
                    width: '100%',
                    height: 60,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 25,
                  }}>
                  <Text className="text-white font-bold text-2xl">
                    Confirm Buddy Guard
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

export default WalkConfirm;
