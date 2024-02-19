import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const AutoComplete = () => {
  return (
    <GooglePlacesAutocomplete
      minLength={2}
      placeholder="Search Your Destination"
      query={{
        key: 'AIzaSyB04Usw4Si3XB_dO9uZdtGYk-kYSeW4CvA',
        language: 'en',
        components: 'country:es',
      }}
      keyboardShouldPersistTaps={'handled'}
      fetchDetails={true}
      onPress={(data, details) => {
        console.log(data, details);
      }}
      onFail={error => console.log(error)}
      onNotFound={() => console.log('no results')}
      keepResultsAfterBlur={true}
      enablePoweredByContainer={false}
    />
  );
};

export default AutoComplete;
