import React from "react";
import { Text, View, Image } from "react-native";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";


const WelcomeScreen = ({ navigation }: any) => {
    return (

        <View
            style={styles.container}
        >
            <View
                style={{
                    alignItems: "center",
                    paddingTop: 20,
                }}
            >
                <Image
                    style={styles.welcomeImage}
                    source={require('../assets/welcome.png')}
                />
            </View>
            <View style={{ paddingTop: 10 }}>
                <Text style={styles.header}>
                    Welcome,
                </Text>
                <Text style={styles.subHeader}>
                    You have been missed!
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <View>
                    <Button mode="contained" onPress={() => navigation.navigate("Sign In")}
                        style={styles.primaryButton}

                    >
                        <Text style={styles.orangeText}>Sign In</Text>
                    </Button>
                </View>
            </View>

            <View style={styles.signupContainer}>
                <Text style={styles.text}>Don't have account?</Text>
                <Button mode="text" onPress={() => navigation.navigate("Sign Up")}
                >
                    <Text
                        style={[styles.subHeader, { paddingLeft: -50 }]}>Register</Text>
                </Button>
            </View>

        </View>

    );
};
export default WelcomeScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        padding: 24,
    },

    welcomeImage: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
        marginTop: 80
    },

    header: {
        color: "#242329",
        fontWeight: 'bold',
        fontSize: 24,
        fontFamily: "Poppins_700Bold"
    },

    subHeader: {
        color: "#242329",
        fontSize: 16,
        fontFamily: "Poppins_400Regular"
    },

    buttonContainer: {
        marginTop: 40,
        marginBottom: 10
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

    signupContainer: {
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

