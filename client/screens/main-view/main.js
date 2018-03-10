import React from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import Card from '../../common/card';
import battery from '../../assets/battery.png';
import sun from '../../assets/sun.png';

export default class MainScreen extends React.Component {
  sun = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 481 512"><path d="M223.309 12.221c9.439-16.295 24.912-16.295 34.382 0l22.004 37.948c9.439 16.279 31.163 23.45 48.229 15.904l39.789-17.56c17.065-7.53 29.567 1.703 27.787 20.513l-4.157 43.854c-1.75 18.81 11.658 37.558 29.818 41.651l42.353 9.545c18.19 4.093 22.974 19.029 10.627 33.183l-28.725 32.996c-12.346 14.17-12.346 37.324 0 51.495l28.725 32.98c12.347 14.186 7.563 29.12-10.627 33.183l-42.353 9.561c-18.16 4.095-31.568 22.842-29.818 41.651l4.157 43.839c1.78 18.81-10.722 28.058-27.787 20.528l-39.789-17.561c-17.065-7.53-38.789-.375-48.229 15.904l-22.004 37.933c-9.471 16.311-24.943 16.311-34.382 0l-22.004-37.933c-9.471-16.279-31.163-23.435-48.229-15.904l-39.789 17.561c-17.066 7.529-29.6-1.719-27.818-20.528l4.157-43.839c1.781-18.81-11.628-37.557-29.787-41.651l-42.353-9.561C-.705 343.85-5.487 328.916 6.859 314.73l28.725-32.98c12.346-14.171 12.346-37.324 0-51.495L6.859 197.259c-12.346-14.154-7.563-29.09 10.627-33.183l42.353-9.545c18.159-4.093 31.568-22.841 29.787-41.651l-4.157-43.854c-1.782-18.81 10.752-28.042 27.818-20.513l39.789 17.56c17.066 7.546 38.758.375 48.229-15.904l22.004-37.948z"/></svg>


  render() {

    const locations = this.props.screenProps.length

    return (
      <ScrollView>
        <Card title="Battery level">
          <Text style={{ color: '#43B02A', fontSize: 42 }}>42%</Text>
        </Card>

        <Card title="Charge status">
          <View style={{ alignItems: 'center' }}>
            <Image source={battery} />
          </View>
        </Card>



        <Card title="Zonnetjes">
          <View style={{ 
            alignItems: 'center',
   justifyContent: 'center',
             flex: 1, flexDirection: 'row' }}>
            <Text style={{ 
               color: 'white', fontSize: 30, paddingRight: 10
               }}>
              {locations}
            </Text>
            <Image style={{width: 80, height: 80}} source={sun} />
          </View>
        </Card>
      </ScrollView>
    );
  }
}
