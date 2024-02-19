import React, {Component} from 'react';
import {View, Text} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

class UserMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      permissionDenied: false, // Add state to track permission denial
    };
    this.mapRef = React.createRef();
  }

  componentDidMount() {
    this.getMyLocation();
  }

  getMyLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        this.setState({latitude, longitude}, () => {
          this.mapRef.current.animateToRegion({
            latitude,
            longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
        });
      },
      error => {
        console.log('Error getting location:', error);
        if (error.code === 1) {
          // Permission denied
          this.setState({permissionDenied: true});
        }
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };

  render() {
    const {latitude, longitude, permissionDenied} = this.state;
    if (permissionDenied) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Location permission denied. Please enable it in settings.</Text>
        </View>
      );
    }

    return (
      <View style={{flex: 1}}>
        {latitude !== null && longitude !== null && (
          <MapView
            style={{flex: 1}}
            provider={PROVIDER_GOOGLE}
            ref={this.mapRef}
            initialRegion={{
              latitude,
              longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            <Marker coordinate={{latitude, longitude}} title="Your Location" />
          </MapView>
        )}
        {/* Additional UI components */}
      </View>
    );
  }
}

export default UserMap;
