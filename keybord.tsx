import React from 'react';
import { View,
		StyleSheet,
		StatusBar,
		TouchableWithoutFeedback,
		TextInput,
		Keyboard } from 'react-native';

export default class App extends React.Component {
render(){
	return (
	<TouchableWithoutFeedback onPress={Keyboard.dismiss}
								accessible={false}>
		<View style={styles.container}>
			<TextInput style={styles.input} keyboardType="numeric"
			placeholder="Type here"/>
		</View>
	</TouchableWithoutFeedback>
	);
}
}

const styles = StyleSheet.create({
container:{
	flex: 1,
	justifyContent:'center',
	alignItems:'center',
	backgroundColor: '#ccd2db'
},

input:{
	width:200,
	height:50,
	borderWidth:1,
	marginTop: 200,
	marginLeft: 100
}
});

