import React, {Component} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  Linking,
  View,
  Dimensions,
} from 'react-native';
import axios from 'axios';
import {Icon} from 'react-native-elements'

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import DeviceInfo from 'react-native-device-info';
import Geolocation from '@react-native-community/geolocation';
import {ScannerContext} from '../logic/context';
const {height, width} = Dimensions.get('window');
export default function Scanner(props) {
  const [scannerState, setScannerState] = React.useState({
    model: '',
    brand: '',
    timeStap: '',
    location: {},
  });
  const {state, setState} = React.useContext(ScannerContext);
  console.log(state);
  React.useEffect(() => {
    Geolocation.getCurrentPosition(position => {
      setScannerState({
        ...scannerState,
        timeStap: new Date(position.timestamp).toLocaleTimeString(),
        location: position.coords,
        model: DeviceInfo.getModel(),
        brand: DeviceInfo.getBrand(),
      });
    });
  }, []);

  const onSuccess = async e => {
    console.log(e.data);
    let mData ={"data":  e.data }
    setState([...state, {...scannerState, ...mData } ]);
    props.navigation.goBack();
    // props.navigation.navigate('HistoryScreen')
    // alert('ok')
  };

  return (
    <ImageBackground
      source={require('../assets/bg2.jpg')}
      style={{height, width}}>
      <QRCodeScanner
        // containerStyle={{height: 30, width:30}}
        onRead={onSuccess}
        // cameraStyle={[{height:30}]}
        // flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={
          <View style={styles.centerText}>
            <Icon type="antdesign" name="back" raised size={height* 0.03} onPress={() => props.navigation.goBack()}/>
            {/* Go to{' '} */}
            <Text style={styles.textBold}>Scan Your QR Code</Text>
          </View>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            {/* <Text style={styles.buttonText}>OK. Got it!</Text> */}
          </TouchableOpacity>
        }
      />
    </ImageBackground>
    // </View>
  );
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    alignItems:"center",
    // justifyContent: "center",
    // padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: 'bold',
    color: '#934',
    shadowColor:'#fff',
    shadowOpacity: 0.5,
    shadowOffset:{width: 1, height:-1},
    shadowRadius:5,
    fontSize: height * 0.04,
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
