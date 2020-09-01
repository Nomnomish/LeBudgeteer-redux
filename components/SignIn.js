import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button } from 'react-native';

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

const SignIn = ({ navigation }) => {
	return(
		<ScreenContainer>
			<Image source={require("../assets/logo.png")} style={styles.smallLogo}/>
			<Text>Username:</Text>
			<TextInput
			style={styles.creds}
			placeholder="  Username"
			autocomplete="username"
			 />
			<Text>Password:</Text>
			<TextInput
			style={styles.creds}
			placeholder="  Password"
			autocomplete="password"
			 />
			 <View style={styles.sign}>
			 	<View style={styles.Btn}>
					 <Button 
					 title="Submit"
					 onPress={() => alert("todo!")} />
				 </View>
				 <View style={styles.Btn}>
					 <Button
					 title="Sign Up"
					 onPress={() => navigation.push("SignUp")} />
				 </View>
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
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	creds: {
		margin: 5,
		borderWidth: 1,
		borderRadius: 8,
		width: 250
	},
	sign: {
		margin: 10,
		flexDirection: 'row',
		width: 250
	},
	Btn: {
		flex:1,
		marginRight:10
	}
});

export default SignIn;