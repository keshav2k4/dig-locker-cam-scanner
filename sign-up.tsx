import React, { useRef, useState } from "react";
import { Text, View } from "react-native";
import { StyleSheet, Image , TouchableWithoutFeedback, Keyboard } from "react-native";
import { Button, TextInput } from "react-native-paper";
import {FirebaseRecaptchaVerifierModal} from 'expo-firebase-recaptcha';
import { firebaseConfig } from "../config";
import firebase from "firebase/compat/app"; 


const SignUnScreen = ({ navigation }: any) => {}
  const DismissKeyboard = ({ children }: any) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
 

const SignUpScreen = ({ navigation }: any) => {
  
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');
  const [verificationId, setVerificationId] = useState(null);
  const recaptchaVerifier = useRef(null);
  
  const sendVerification = () => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();

    phoneProvider
      .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current!!)
      .then((data: any)=>setVerificationId(data));
      setPhoneNumber('');

      navigation.navigate("OTP");
};

  return (
    <DismissKeyboard>
 
<View style={styles.container} >

      <View
        style={{
          alignItems: "center",
          paddingTop: 20,}} >
            <View >
        <Button style={styles.Backnavigator} mode="contained" onPress={() => navigation.navigate("Welcme")}
          >
          <Text style={styles.orangeText}>Go Back</Text>
        </Button>
      </View>
        <Image
          style={styles.welcomeImage}
          source={require('../assets/sign-up.png')}/>
      </View>
      
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig} />
      <View style={{ paddingTop: 10 }}>
        <Text style={[styles.header, { paddingBottom: 20 }]}>
          Sign Up
        </Text>
      </View>
     
      <View style={styles.formContainer}>
        <TextInput
          label="Mobile Number"
          maxLength={14}
          mode="outlined"
          keyboardType="phone-pad"
          style={styles.primaryInput}
          outlineStyle={styles.primaryInputOutlineStyle}
          onChangeText={(text) => setPhoneNumber(text)}
          value={phoneNumber}
          autoComplete ="tel"
        />
      </View>
  
      <View style={styles.buttonContainer}>
     
        <View>
       
          <Button mode="contained" onPress={() => sendVerification()}
            style={styles.primaryButton} >
            <Text style={styles.orangeText}>Get OTP</Text>
          </Button>
        </View>
     
      </View>
    
 </View>
</DismissKeyboard>
  );
};
export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 24,
  },

  welcomeImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1.1,
    marginTop: 54
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
    marginBottom: 10
  },
  Backnavigator: {
    backgroundColor: "#373a4e",
    borderRadius:10,
    right:140,
    width:100,  
  },
  primaryInput: {
    width: "100%",
    fontSize: 14,
    color: "#242329"
  },
  primaryInputOutlineStyle:
  {
    borderRadius: 16,
    borderColor: "#242329",
    borderWidth: 2,

  },
  primaryButton:
  {
    backgroundColor: "#373a4e",
    fontFamily: "Poppins_400Regular",
    borderRadius: 16,
    padding: 6
  },
  orangeText: {
    color: "#d0a21f"
  },
  text: {
    color: "#a5aaaf",
  },

  formContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  signupLink:
  {
    color: "#242329",
    fontFamily: "Poppins_700Bold"
  },
});
