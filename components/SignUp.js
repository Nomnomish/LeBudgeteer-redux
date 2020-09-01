import React from 'react';
import { View, Text, StyleSheet, Image, Button, TextInput } from 'react-native';

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

const SignUp = props => {
	return(
		<ScreenContainer>
			<Image source={require("../assets/logo.png")} style={styles.smallLogo}/>
			<Text style={styles.header}>Sign Up</Text>
			<Text>Choose a Username</Text>
			<TextInput
			style={styles.creds}
			placeholder="  Username"
			autocomplete="username"
			 />
			<Text>Pick a Password</Text>
			<TextInput
			style={styles.creds}
			placeholder="  Password"
			autocomplete="password"
			 />
			<Text>Confirm Password</Text>
			<TextInput
			style={styles.creds}
			placeholder="  Confirm Password"
			 />
		    <View style={styles.Btn}>
				<Button 
				title="Submit"
				onPress={() => alert("todo!")} />
			</View>
		</ScreenContainer>
		);
};
const styles = StyleSheet.create({
	smallLogo:{
		height:40,
		width: 160,
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	header: {
		fontSize: 25,
		fontWeight: 'bold',
		margin: 20
	},
	creds: {
		margin: 5,
		borderWidth: 1,
		borderRadius: 8,
		width: 250
	},
	container: {
		flexDirection: 'column',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	Btn: {
		width: 250,
		margin:10
	}
});

export default SignUp;