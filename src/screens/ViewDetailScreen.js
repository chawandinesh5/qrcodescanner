import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  FlatList,
  Linking,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {ScannerContext} from '../logic/context';
const {height, width} = Dimensions.get('window');

export default function ViewDetailScreen(props) {
  const {state, setState} = React.useContext(ScannerContext);
  console.log(state[props.route.params.idxValue]);
  const scanData = state[props.route.params.idxValue];
  const latitude = scanData.location.latitude;
  const longitude = scanData.location.longitude;
  // const label = "New York, NY, USA";

  const openMaps = () => {
    const url = Platform.select({
      ios:
        'maps:' +
        latitude +
        ',' +
        longitude +
        '?q=' +
        latitude +
        ',' +
        longitude,
      android:
        'geo:' +
        latitude +
        ',' +
        longitude +
        '?q=' +
        latitude +
        ',' +
        longitude,
    });

    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        return Linking.openURL(url);
      } else {
        const browser_url =
          'https://www.google.de/maps/@' +
          latitude +
          ',' +
          longitude +
          '?q=' +
          label;
        return Linking.openURL(browser_url);
      }
    });
  };

  return (
    <ImageBackground
      source={require('../assets/bg4.jpg')}
      style={{width, height}}>
      <View style={{height: height * 0.1, width}}>
        <Icon
          type="antdesign"
          name="back"
          raised
          size={height * 0.03}
          onPress={() => props.navigation.goBack()}
        />
      </View>
      <View
        style={{
          height: height * 0.8,
          width,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: width * 0.85,
            height: height * 0.6,
            backgroundColor: 'rgba(234,234,234,0.8)',
            paddingHorizontal: 20,
            borderRadius: height * 0.03,
            justifyContent: 'space-around',
          }}>
          <View>
            <View>
              <Text
                style={{
                  fontSize: height * 0.023,
                  color: '#068',
                  fontWeight: 'bold',
                }}>
                QR data:
              </Text>
            </View>
            <View style={{padding: 5}}>
              {scanData.data.slice(0, 4) === 'http' ? (
                <Text
                  style={{
                    color: 'blue',
                    fontSize: height * 0.023,
                    fontWeight: 'bold',
                  }}
                  onPress={() => Linking.openURL(scanData.data)}>
                  {scanData.data}
                </Text>
              ) : (
                <Text
                  style={{
                    fontSize: height * 0.023,
                    fontWeight: 'bold',
                    color: '#73001F',
                  }}>
                  {scanData.data}
                </Text>
              )}
            </View>
          </View>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            <View>
              <Text
                style={{
                  fontSize: height * 0.023,
                  color: '#068',
                  fontWeight: 'bold',
                }}>
                Time:
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: height * 0.023,
                  fontWeight: 'bold',
                  color: '#73001F',
                }}>
                {scanData.timeStap}
              </Text>
            </View>
          </View>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            <View>
              <Text
                style={{
                  fontSize: height * 0.023,
                  color: '#068',
                  fontWeight: 'bold',
                }}>
                Device Modal:
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: height * 0.023,
                  fontWeight: 'bold',
                  color: '#73001F',
                }}>
                {scanData.model}
              </Text>
            </View>
          </View>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            <View>
              <Text
                style={{
                  fontSize: height * 0.023,
                  color: '#068',
                  fontWeight: 'bold',
                }}>
                Device Brand:
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: height * 0.023,
                  fontWeight: 'bold',
                  color: '#73001F',
                }}>
                {scanData.brand}
              </Text>
            </View>
          </View>


          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            <View>
              <Text
                style={{
                  fontSize: height * 0.023,
                  color: '#068',
                  fontWeight: 'bold',
                }}>
                Device Location:
              </Text>
            </View>
            <TouchableOpacity onPress={() => openMaps()}>
              <Text
                style={{
                  fontSize: height * 0.023,
                  fontWeight: 'bold',
                  color: 'blue',
                }}>
                Open
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        
      </View>
      {/* Go to{' '} */}
      {/* <Text style={s}>Scan Your QR Code</Text> */}
    </ImageBackground>
  );
}
