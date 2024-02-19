/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {SearchBar, Button} from '@rneui/themed';
import {search, undo} from '../assets/images';
import Geolocation from '@react-native-community/geolocation';
import AutoComplete from '../components/AutoComplete';

const hangoutData = [
  {
    id: '1',
    title: 'Arco de Triunfo de Barcelona',
    group: 'ZuSocial',
    time: 'Today, 10AM',
    image: require('../assets/images/arco.png'),
    latitude: 41.39218782850737,
    longitude: 2.1833596091062,
  },
  {
    id: '2',
    title: 'Visit Casa Mila',
    group: 'RamenDAO',
    time: 'Today, 1PM',
    image: require('../assets/images/casa.png'),
    latitude: 41.39482777666461,
    longitude: 2.1613869520476627,
  },
  {
    id: '3',
    title: 'Tour La Sagrada Familia',
    group: 'HER DAO',
    time: 'Today, 4PM',
    image: require('../assets/images/sagrada.png'),
    latitude: 41.40438064044464,
    longitude: 2.1785255205402874,
  },
  {
    id: '4',
    title: 'Night Tour - Magic Fountain of Montjuïc',
    group: 'Web3 Nomads',
    time: 'Today, 8PM',
    image: require('../assets/images/fountain.png'),
    latitude: 41.3712561906769,
    longitude: 2.151748397811569,
  },
  {
    id: '5',
    title: 'Night Tennis',
    group: 'Web3 Nomads',
    time: 'Today, 9PM',
    image: require('../assets/images/hangout5.png'),
    latitude: 41.380985812152396,
    longitude: 2.162306965964739,
  },
];

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 41.38707262727212,
      longitude: 2.1700450041329127,
      events: [],
      searchSting: '',
      distance: 40,
      selectedPlace: null,
      region: {
        latitude: 41.3851,
        longitude: 2.1734,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      hangouts: [], // Initialize hangouts as an empty array
    };
    this.mapRef = React.createRef();
  }

  componentDidMount() {
    this.setState({
      hangouts: hangoutData,
    });
    this.getMyLocation();
  }

  getMyLocation = () => {
    Geolocation.getCurrentPosition(loc => {
      this.mapRef.current.animateToRegion({
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
      this.setState({
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
        region: {
          latitude: loc.coords.latitude,
          longitude: loc.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
      });
    });
  };

  render() {
    return (
      <View style={{flex: 1}}>
        {this.state.hangouts.length > 0 && (
          <MapView
            style={{flex: 1}}
            provider={PROVIDER_GOOGLE}
            ref={this.mapRef}
            initialRegion={this.state.region}>
            {this.state.hangouts.map(iHangout => (
              <Marker
                key={iHangout.id}
                coordinate={{
                  latitude: iHangout.latitude,
                  longitude: iHangout.longitude,
                }}>
                <Callout
                  className="w-40 h-auto"
                  onPress={() => {
                    this.setState({selectedPlace: iHangout});
                  }}>
                  <View className="flex space-y-1 ">
                    <Text className="font-bold">{iHangout.title}</Text>
                    <Text className="text-sm">Time : {iHangout.time}</Text>
                    <Text className="text-sm">Group : {iHangout.group}</Text>
                    <Image
                      className="w-[96%] h-28 self-center "
                      source={iHangout.image}
                    />
                    <Text style={{fontStyle: 'italic'}}>
                      Tap for more details
                    </Text>
                  </View>
                </Callout>
              </Marker>
            ))}
          </MapView>
        )}
        <SearchSection />
      </View>
    );
  }
}

const SearchSection = () => {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: '10.5%',
        width: '100%',
        backgroundColor: '#e0e0e0',
        padding: 8,
      }}>
      {/* <SearchBar
        placeholder="Search your destination.."
        lightTheme={true}
        round={true}
        inputContainerStyle={{
          backgroundColor: 'white',
          paddingLeft: 10,
        }}
        containerStyle={{
          backgroundColor: 'transparent',
        }}
      /> */}
      <AutoComplete />
      <View style={{marginTop: 8, flexDirection: 'row'}}>
        <Button
          onPress={() => {}}
          containerStyle={{
            width: '48%',
            borderRadius: 5,
            marginHorizontal: 2,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              marginRight: 4,
              color: 'white',
              fontSize: 16,
              padding: 4,
            }}>
            Reset
          </Text>
          <Image source={undo} style={{width: 32, height: 32}} />
        </Button>
        <Button
          onPress={() => {}}
          containerStyle={{
            width: '48%',
            borderRadius: 5,
            marginHorizontal: 2,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              marginRight: 4,
              color: 'white',
              fontSize: 16,
              padding: 4,
            }}>
            Search
          </Text>
          <Image source={search} style={{width: 32, height: 32}} />
        </Button>
      </View>
    </View>
  );
};

export default Map;
