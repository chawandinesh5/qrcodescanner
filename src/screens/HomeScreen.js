import React from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
const {height, width} = Dimensions.get('window');
export default function HomeScreen(props) {
  return (
    <ImageBackground
      source={require('../assets/bg1.jpg')}
      style={{height: height, width: width}}>
      <View
        style={{
          height: height * 0.3,
          justifyContent: 'center',
          width: width * 0.8,
        }}>
        <View
          style={{
            height: height * 0.1,
            borderTopRightRadius: height * 0.03,
            justifyContent: 'center',
            borderBottomWidth: 5,
            backgroundColor: 'cyan',
          }}>
          <Text
            style={{
              fontSize: height * 0.04,
              textAlign: 'center',
              fontWeight: 'bold',
              color: '#a50',
            }}>
            Easy Scanner
          </Text>
        </View>
      </View>
      <View
        style={{
          height: height * 0.3,
          width: width,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../assets/pic2.png')}
          style={{height: height * 0.2, width: width * 0.5}}
        />
      </View>
      <View
        style={{
          height: height * 0.3,
          width: width,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Scanner')}
          style={{
            height: height * 0.1,
            width: height * 0.2,
            borderRadius: height * 0.05,
            backgroundColor: '#fff',
            alignItems: 'center',
            borderTopWidth: 5,
            borderRightWidth: 5,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: height * 0.03,
              color: '#000',
              fontWeight: 'bold',
              fontWeight: 'bold',
            }}>
            START
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: height * 0.1,
          width: width,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('HistoryScreen')}
          style={{
            height: height * 0.1,
            backgroundColor: '#ff9',
            borderTopRightRadius: height * 0.04,
            borderTopLeftRadius: height * 0.04,
            width: width * 0.7,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: height * 0.03,
              color: '#907',
            }}>
            Check History
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
