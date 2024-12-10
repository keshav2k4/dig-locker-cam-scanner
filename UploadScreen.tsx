import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Alert,
  PermissionsAndroid,
  Text,
  TouchableOpacity,
} from 'react-native';
import { IconButton } from 'react-native-paper';
import * as DocumentPicker from 'expo-document-picker';

export default function Dapp({ navigation }: any) {
  const [singleFile, setSingleFile] = useState(null);

  const checkPermissions = async () => {
    try {
      const result = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
      );

      if (!result) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title:
              'You need to give storage permission to download and save the file',
            message: 'App needs access to your camera ',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the camera');
          return true;
        } else {
          Alert.alert('Error', ('PERMISSION_ACCESS_FILE'));

          console.log('Camera permission denied');
          return false;
        }
      } else {
        return true;
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  const uploadImage = async () => {
    const BASE_URL = 'xxxx';

    // Check if any file is selected or not
    if (singleFile != null) {
      // If file selected then create FormData
      const data = new FormData();

      // data.append('file_attachment', {
      //   uri: singleFile.uri,
      //   name: singleFile.name,
      //   type: singleFile.mimeType,
      // });

      // return
      try {
        let res = await fetch(BASE_URL + 'tutorial/upload.php', {
          method: 'post',
          body: data,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
          },
          //  timeout:5000,
        });

        let result = await res.json();
        console.log('result', result);
        if (result.status == 1) {
          Alert.alert('Info', result.msg);
        }
      } catch (error) {
        // Error retrieving data
        // Alert.alert('Error', error.message);
        console.log('error upload', error);
      }
    } else {
      // If no file selected the show alert
      Alert.alert('Please Select File first');
    }
  };

  async function selectFile() {
    try {
      const result = await checkPermissions();

      if (result) {
        const result = await DocumentPicker.getDocumentAsync({
          copyToCacheDirectory: false,
          type: 'image/*',
        });

        if (result.type === 'success') {
          // Printing the log realted to the file
          console.log('res : ' + JSON.stringify(result));
          // Setting the state to show single file attributes
          //  setSingleFile(result);
        }
      }
    } catch (err) {
      setSingleFile(null);
      console.warn(err);
      return false;
    }
  }

  return (
    <View style={styles.mainBody}>
      <View style={{ alignItems: 'center' }}>
        <Text
          style={{
            fontSize: 15,
            textAlign: 'center',
            marginTop: 20,
            marginBottom: 30,
          }}>
          𝐒𝐄𝐋𝐄𝐂𝐓 𝐅𝐈𝐋𝐄 𝐘𝐎𝐔 𝐖𝐀𝐍𝐓 𝐓𝐎 𝐔𝐏𝐋𝐎𝐀𝐃
        </Text>
      </View>
      <View style={styles.tcolor}>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={selectFile}>
          <Text style={styles.buttonTextStyle}>Select File</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.scannercontainer}>
        <IconButton style={styles.scanbutton}
          icon="camera"
          size={50} onPress={() => navigation.navigate("Scan")}
        />
      </View>
      {/*Showing the data of selected Single file*/}
      {/* {singleFile != null ? ( */}
      {/* <Text style={styles.textStyle}>
         File Name: {singleFile.name ? singleFile.name : ''}
         {'\n'}
          Type: {singleFile.type ? singleFile.type : ''}
     {'\n'}
          File Size: {singleFile.size ? singleFile.size : ''}
         {'\n'}
         URI: {singleFile.uri ? singleFile.uri : ''}
      {'\n'}
         </Text>
      ) : null */}


      {/* <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={uploadImage}>
        <Text style={styles.buttonTextStyle}>Upload File</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    padding: 20,

  },
  buttonStyle: {
    backgroundColor: '#373a4e',
    color: '#FFFFFF',
    //  borderColor: '#307ecc',
    //  height: 41,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginTop: 15,

  },
  scannercontainer: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'


  },
  scanbutton: {


  },
  tcolor: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'

  },
  buttonTextStyle: {
    paddingVertical: 10,
    fontSize: 16,
    color: "#d0a21f",
  },
  textStyle: {
    backgroundColor: '#fff',
    fontSize: 15,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
    textAlign: 'center',

  },
});