import React, { useRef, useState } from "react";
import { Keyboard, Text, TouchableWithoutFeedback, View, } from "react-native";
import { StyleSheet, Image } from "react-native";
import { Button, TextInput, } from "react-native-paper";
import { black } from "react-native-paper/lib/typescript/src/styles/themes/v2/colors";
import { AntDesign } from '@expo/vector-icons';

const sendVerification = () => { };
const OTPScreen = ({ navigation }: any) => {
  const [numOne, setNumOne] = useState('');
  const [numTwo, setNumTwo] = useState('');
  const [numthree, setNumthree] = useState('');
  const [numfour, setNumfour] = useState('');
  const [numfive, setNumfive] = useState('');
  const [numsix, setNumsix] = useState('');
  const ref = useRef();
  const DismissKeyboard = ({ children }: any) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );

  return (

    <View
      style={styles.container}>
      <DismissKeyboard>
        <View
          style={{
            alignItems: "center",
            paddingTop: 20,
          }}
        ><View style={styles.Backnavigator}>
        <Button style={styles.primaryInputOutlineStyle} mode="contained" onPress={() => navigation.navigate("Welcme")}>
        <AntDesign name="left" size={20} color="black" />
        </Button>
      </View>
          <Image style={styles.welcomeImage} source={require('../assets/otp.png')}/>
        </View>
      </DismissKeyboard>
      <View style={{ paddingTop: 30 }}>
        <Text style={[styles.subHeader, { paddingBottom: 20, textAlign: 'center' }]}>
          We have sent the 6 digit verification code to your mobile number
        </Text>
      </View>
      <View style={styles.formContainer}>
        
        <TextInput
          mode="outlined"
          maxLength={1}
         
          keyboardType="number-pad"
          style={styles.primaryInput}
          outlineStyle={styles.primaryInputOutlineStyle}
          value={numOne}
          onChangeText={(value) => {
            setNumOne(value);
            if (value.length === 1) {
              // ref.current.focus();
            }
          }} returnKeyType={"next"}
        />
        <TextInput
          mode="outlined"
          maxLength={1}
          keyboardType="number-pad"
          style={styles.primaryInput}
          outlineStyle={styles.primaryInputOutlineStyle}/>
        <TextInput
          mode="outlined"
          maxLength={1}
          keyboardType="number-pad"
          style={styles.primaryInput}
          outlineStyle={styles.primaryInputOutlineStyle}/>
        <TextInput
          mode="outlined"
          maxLength={1}     
          keyboardType="number-pad"
          style={styles.primaryInput}
          outlineStyle={styles.primaryInputOutlineStyle}/>
        <TextInput
          mode="outlined"
          maxLength={1}
          keyboardType="number-pad"
          style={styles.primaryInput}
          outlineStyle={styles.primaryInputOutlineStyle}/>
        <TextInput
          mode="outlined"
          maxLength={1}      
          keyboardType="number-pad"
          style={styles.primaryInput}
          outlineStyle={styles.primaryInputOutlineStyle}/>


      </View>
      <View style={styles.buttonContainer}>
        <View>
          <Button  onPress={() => navigation.navigate("dashboards")}>
          <Button mode="contained" onPress={() => sendVerification()}
            style={styles.primaryButton}>
            <Text style={styles.orangeText}>Verify OTP</Text>
          </Button>
          </Button>
        </View>
      </View>
    </View>

  );
};
export default OTPScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 33,
  },

  welcomeImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1.5,
    marginTop: 120
  },
  Backnavigator: {
    backgroundColor: "#373a4e",
    borderRadius:60,
    right:140,
    },
  
    backcolor:{
    backgroundColor: "#373a4e",
  },

  header: {
    color: "#242329",
    fontWeight: 'bold',
    fontSize: 24,
    fontFamily: "Poppins_700Bold",
    textAlign: 'center'
  },

  subHeader: {
    color: "#242329",
    fontSize: 16,
    fontFamily: "Poppins_400Regular"
  },

  buttonContainer: {
    marginTop: 20,
    backgroundColor: "#373a4e",
    marginBottom: 10
  },
  primaryInput: {
    width: 48,
    fontSize: 14,
    color: "#242329",
    height: 54
  },
  primaryInputOutlineStyle:
  {
    borderRadius: 19,
    borderColor: "#242329",
    borderWidth: 2,
    backgroundColor: "#eeedef"

  },
  primaryButton:
  {
    backgroundColor: "#373a4e",
    fontFamily: "Poppins_400Regular",
    borderRadius: 16,
    padding: 6
  },
  orangeText: {
    color: "#d0a21f",
  },
  text: {
    color: "#a5aaaf",
  },
  backcolour:{
    backgroundColor:'white',
  },

  formContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

  },

  signupLink:
  {
    color: "#242329",
    fontFamily: "Poppins_700Bold"
  },
});