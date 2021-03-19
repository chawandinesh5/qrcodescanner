import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  FlatList,
  Linking,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {ScannerContext} from '../logic/context';
const {height, width} = Dimensions.get('window');
export default function HistoryData(props) {
  const {state} = React.useContext(ScannerContext);
  const renderItem = ({item, index}) => {
    console.log(item.data.slice(0, 5) === 'https');
    return (
      <View
        style={{
          width,
          height: height * 0.1,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginVertical: height * 0.01,
        }}>
        <View
          style={{
            height: 'auto',
            alignItems: 'center',
            backgroundColor: '#fff',
            borderRadius: height * 0.04,
            padding: height * 0.01,
            borderBottomWidth: 5,
            borderRightWidth: 2,
            borderBottomColor: '#fab',
          }}>
          {item.data.slice(0, 4) === 'http' ? (
            <Text
              style={{
                color: 'blue',
                fontSize: height * 0.03,
                fontWeight: 'bold',
              }}
              onPress={() => Linking.openURL(item.data)}>
              {item.data}
            </Text>
          ) : (
            <Text style={{fontSize: height * 0.03, fontWeight: 'bold'}}>
              {item.data}
            </Text>
          )}
        </View>
        <View>
          <Icon
            type="antdesign"
            name="right"
            raised
            size={height * 0.02}
            onPress={() =>
              props.navigation.navigate('ViewDetailsScreen', {idxValue: index})
            }
          />
        </View>
      </View>
    );
  };
  return (
    <ImageBackground
      source={require('../assets/bg3.jpg')}
      style={{width, height}}>
      <View style={{height: height * 0.1, width}}>
        <Icon
          type="antdesign"
          name="back"
          raised
          size={height * 0.03}
          onPress={() => props.navigation.goBack()}
        />
        {/* Go to{' '} */}
        {/* <Text style={s}>Scan Your QR Code</Text> */}
      </View>
      <View style={{width, height: height * 0.85}}>
        {state.length ? (
          <FlatList
            data={state}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
          <View
            style={{
              width,
              height: height * 0.85,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: height * 0.04,
                fontWeight: 'bold',
                color: '#fff',
              }}>
              {' '}
              No Records Found
            </Text>
          </View>
        )}
      </View>
      <View style={{width, height: height * 0.05, alignItems: 'flex-start'}}>
        <View
          style={{
            backgroundColor: '#ff8',
            width: width * 0.6,
            height: height * 0.5,
            borderTopRightRadius: 20,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#189',
              fontWeight: 'bold',
              fontSize: height * 0.03,
            }}>
            History
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}
