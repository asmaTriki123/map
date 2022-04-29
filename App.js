import React, { useState ,Component} from 'react';
import { View, StyleSheet, Image , Text, TouchableOpacity, Dimensions, ToastAndroid} from 'react-native';
import MapView , { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { TextInput } from 'react-native-paper';

import PropTypes from 'prop-types';
const  App = (props) => {
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const { width, height } = Dimensions.get('window');

  const [mapRegion, setmapRegion] = useState({
   
   
  
    latitude: 36.8002068,
    longitude: 	10.1857757,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
   
    
    }
  
  );

  onChangeValue = mapRegion =>{
    ToastAndroid.show(JSON.stringify(mapRegion), ToastAndroid.SHORT)
    setmapRegion({
      mapRegion
    })
  
 console.log(mapRegion);
  }

 
  return (
   
    <View style={{flex:1}}>
    <View style={styles.container}>
      <MapView
        style={{ alignSelf: 'stretch', height: '100%' }}
        //region={mapRegion}
        onRegionChangeComplete= {onChangeValue}
        provider={PROVIDER_GOOGLE}

     region= {{
       
        latitude: mapRegion.latitude,
        longitude: mapRegion.longitude,
        latitudeDelta:mapRegion.latitudeDelta,
        longitudeDelta:mapRegion.longitudeDelta,}}
  
      />

<Marker

coordinate={{
latitude:36.8002067,
longitude:10.1857759,

}}
source= {require('./assets/marque.png')}
title="lavage "

/>
     
      <View style={{top: '50%', left: '50%', marginLeft:-24,marginTop:-48,position:'absolute'}}>
          <Image style={{height:48, width:48}} source= {require('./assets/marque.png')}/>
        </View>

    </View>
<View>
  <TextInput>{`${latitude}`}</TextInput>
  <TextInput></TextInput>
</View>

    </View>
    
  );

};




export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});