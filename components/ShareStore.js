import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

const ShareStore = props => {
	return(
		<ScreenContainer>
			<Text>Sign Up</Text>
		</ScreenContainer>

		);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center'
	}
});


export default ShareStore;