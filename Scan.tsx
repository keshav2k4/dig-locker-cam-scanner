import React, { useState, useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImageManipulator from 'expo-image-manipulator';
import * as Permissions from 'expo-permissions';

const DocScanner: React.FC = ({ navigation }: any)=>{
  const cameraRef = useRef<Camera | null>(null);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleCapture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      const processedPhoto = await ImageManipulator.manipulateAsync(
        photo.uri,
        [{ rotate: 90 }],
        { compress: 0.8, format: ImageManipulator.SaveFormat.JPEG }
      );
      console.log(processedPhoto);
    }
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} ref={cameraRef} type={Camera.Constants.Type} />

      <TouchableOpacity style={{ alignSelf: 'center', marginBottom: 16 }} onPress={handleCapture}>
        <Text style={{ fontSize: 20, color: 'white' }}>Capture Document</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DocScanner;