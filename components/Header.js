import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const backgroundImage = "../assets/money1.png";

const Header = props => {
	return(
			<View style={styles.header}>
				<Image source={require("../assets/logo.png")} style={styles.smallLogo}/>
			</View>
		);
};

const styles = StyleSheet.create({
	header:{
		flex: 1,
		height: 90,
		padding: 10,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white'

	},
	smallLogo:{
		height:40,
		width: 160,
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	imageBG:{
		flex: 1
	}
});

export default Header;