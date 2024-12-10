import { StyleSheet } from 'react-native'; 
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
import NotificationScreen from '../screens/NotificationsScreen';
import UploadScreen from '../screens/UploadScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const  dashboard = createBottomTabNavigator();



const Dashboards = () => {
  // const Drawer = createDrawerNavigator();
    return ( 
        <dashboard.Navigator >

            
        <dashboard.Screen name ="home" component={HomeScreen} options={{  tabBarIcon: (tabInfo) => {
        return (
          <MaterialCommunityIcons
            name="home-outline"
            size={29}
            color={tabInfo.focused ? "black" : "#d0a21f"}
          />
        );
      },}}  />
        <dashboard.Screen name ="Menu" component={MenuScreen}
        options={{  tabBarIcon: (tabInfo) => {
            return (
              <MaterialCommunityIcons
                name="menu-open"
                size={29}
                color={tabInfo.focused ? "skyblue" : "#d0a21f"}
              />
            );
          },}}
        
        />
        <dashboard.Screen name="Notification" component={NotificationScreen}
        options={{  tabBarIcon: (tabInfo) => {
            return (
                <MaterialIcons name="notifications-active" size={27}
                color={tabInfo.focused ? "red" : "#d0a21f"} />
       );
          },
        }
        }
   />
        <dashboard.Screen name="Upload" component={UploadScreen}
        options={{  tabBarIcon: (tabInfo) => {
            return (
                <MaterialIcons name="upload-file" size={28} 
                color={tabInfo.focused ? "blue" : "#d0a21f"} 
                />
            );
          },}}
        
        />
        </dashboard.Navigator>
 
    )
}
const style = StyleSheet.create({

Shadow :{
    shadowColor:'black',
    shadowOffset:{
        width:0,
        height:10,
    },
    shadowOpacity:0.25,
    shadowRadius:3.5,
    elevation:5,
}
});
export default Dashboards;