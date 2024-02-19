import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {LogoImage} from '../assets/images';

const TopLogo = ({activeScreen}) => {
  console.log('Active Screen (TopLogo):', activeScreen);
  const navigation = useNavigation();
  return (
    <View style={{position: 'absolute', top: 40, width: '100%'}}>
      <View
        style={{
          paddingTop: 10,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          style={{width: 20, height: 24}}
          source={LogoImage}
        />
        <Text
          style={{
            fontSize: 16,
            paddingLeft: 4,
            fontWeight: 'bold',
            color: '#FE8606',
          }}>
          Buddy Guard
        </Text>
      </View>
    </View>
  );
};

export default TopLogo;
