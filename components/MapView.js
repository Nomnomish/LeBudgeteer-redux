import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const Mapper = props =>{
	<MapView
	provider = {PROVIDER_GOOGLE}
	style={styles.map}
	region = {{
		latitude: 41.223,
		longitude:-111.9738304,
		latitudeDelta: 0.09,
		longitudeDelta: 0.35
	}}>
	</MapView>
}

const styles = StyleSheet.create({
	map: {
		height: '100%'
	}
})