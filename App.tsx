import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './screens/sign-in';
import DocScanner from './screens/Scan';
import Dapp from './screens/UploadScreen';
import SignUpScreen from './screens/sign-up';
import OTPScreen from './screens/otp';
import WelcomeScreen from './screens/welcome';
import Dashboards from './screens/dashboard';
import { User, onAuthStateChanged } from 'firebase/auth';
import * as SplashScreen from 'expo-splash-screen';
import {  useFonts,Poppins_400Regular,Poppins_500Medium,Poppins_700Bold,} from "@expo-google-fonts/poppins";
import { useCallback, useEffect, useState } from 'react';
import DocumentScanner from 'react-native-document-scanner-plugin'
// import Tabs  from  './navigation/tabs';
//import { FIREBASE_APP, Firebase_auth } from './firebaseotpAuth';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [user,setUser] = useState<User | null>(null);

  useEffect(()=>{
    // onAuthStateChanged(Firebase_auth,(USER)=>{
    //   console.log('user',user);
    // });
  });
 
  const Stack = createNativeStackNavigator();
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }


    return (


      
      <NavigationContainer
      // <Tabs/>>
      onReady={onLayoutRootView}>
        <Stack.Navigator>
          <Stack.Screen name="Welcme" component={WelcomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Sign In" component={SignInScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Sign Up" component={SignUpScreen} options={{ headerShown: false }} />
          <Stack.Screen name="OTP" component={OTPScreen} options={{ headerShown: false }} />
         <Stack.Screen name="dashboards" component={Dashboards}options={{ headerShown: false }} />
         <Stack.Screen name="Scan" component={DocScanner} />
        <Stack.Screen name="Upload" component={Dapp } />
        </Stack.Navigator>
        
      </NavigationContainer>
    );
  }
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
