import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Header from './Header';

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

const Mapper = props =>{
	return(
		<ScreenContainer>
			<Header />
			<MapView
			provider={PROVIDER_GOOGLE}
			style={styles.map}
			region={{
				latitude: 41.223,
				longitude:-111.9738304,
				latitudeDelta: 0.04,
				longitudeDelta: 0.075
			}}>

				<Marker coordinate={{latitude:41.258510, longitude:-111.971599}}
				image={require('../assets/marker.png')}
				title={"Pack n' Pounce Animal Rescue"}>
				</Marker>
			</MapView>
		</ScreenContainer>
)};


const styles = StyleSheet.create({
	map: {
		flex: 13
	},
	container: {
		flex: 1
	}
});

export default Mapper;