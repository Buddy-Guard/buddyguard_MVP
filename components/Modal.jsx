import React from 'react';
import {View, Modal as RNModal, TouchableOpacity, Text} from 'react-native';

function Modal({onClickToggleModal, children}) {
  return (
    <RNModal
      visible={true} // Set this to the state controlling the visibility of the modal
      animationType="fade" // Choose animation type as per your requirement
      transparent={true} // Make the modal background transparent
      onRequestClose={onClickToggleModal} // Handle the modal close event
    >
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}
          onPress={onClickToggleModal}
        />
        <View style={{backgroundColor: 'white', padding: 20, borderRadius: 10}}>
          {children}
        </View>
      </View>
    </RNModal>
  );
}

export default Modal;
