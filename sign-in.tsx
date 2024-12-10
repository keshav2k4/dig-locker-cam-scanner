import React, { useRef, useState } from "react";
import { Text, View,TouchableOpacity, Alert } from "react-native";
import { StyleSheet, Image , TouchableWithoutFeedback, Keyboard } from "react-native";
import { Button, TextInput } from "react-native-paper";
import {FirebaseRecaptchaVerifierModal} from 'expo-firebase-recaptcha';
import { firebaseConfig } from "../config";
import firebase from "firebase/compat/app"; 
import PhoneInput from "react-native-phone-number-input";
import { black } from "react-native-paper/lib/typescript/src/styles/themes/v2/colors";
import { AntDesign } from '@expo/vector-icons';

const DismissKeyboard = ({ children }: any) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
const SignInScreen = ({ navigation }: any) => {  
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
            <View style={styles.Backnavigator}>
        <Button style={styles.backcolour} mode="contained" onPress={() => navigation.navigate("Welcme")}>
        <AntDesign name="left" size={24} color="black" />
        </Button>
      </View>
        <Image
          style={styles.welcomeImage}
          source={require('../assets/sign-in.png')}/>
      </View>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig} />
      <View style={{ paddingTop:2}}>
        <Text style={[styles.header, { paddingBottom: 20 }]}>
          Sign In
        </Text>
      </View>
      <View style={styles.phonecontainer}>
        <View style={styles.styler}>
        <PhoneInput
          defaultCode="IN"
           onChangeText={(text) => setPhoneNumber(text)}
            value={phoneNumber}/>
            </View>
      </View>
      <View style={styles.buttonContainer}>
        <View>
          <Button mode="contained" onPress={() => sendVerification()}
            style={styles.primaryButton} >
            <Text style={styles.orangeText}>Get Otp</Text>
          </Button>
        </View>
      </View>
 </View>
</DismissKeyboard>
  );
};
export default SignInScreen;

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
  phonecontainer:{
    fontFamily: "Poppins_400Regular",
    borderRadius:7,
    padding:2,
    paddingHorizontal:1
  },
  styler:{
    borderColor: "#242329",
    borderWidth: 2,
    borderRadius:16,   
  },

  buttonContainer: {
    marginTop: 20,
    marginBottom: 10
  },
  backcolour:{
    backgroundColor:'white',
  },
  Backnavigator: {
    borderRadius:90,
    right:140,
    width:83,
    borderColor:'grey',
    borderWidth: 2,
    
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
