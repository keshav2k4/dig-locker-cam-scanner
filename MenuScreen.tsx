import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
const MenuScreen = ({}) => {
 
 return (

<View style={styles.container}>
<Text>Menu Screen</Text>
<Button 

   title="Click Here"
   onPress={() => alert('Button Clicked!')}
   />
</View>
 );
}

export default MenuScreen;

const styles = StyleSheet.create({
container: {
flex: 1,
alignItems: 'center',
justifyContent: 'center',
backgroundColor: 'silver'
},
});