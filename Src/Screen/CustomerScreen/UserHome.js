import AsyncStorage from '@react-native-async-storage/async-storage';

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function UserHome({ navigation }) {
    const logOut = () => {
        AsyncStorage.clear();
        navigation.replace("Login")
    }
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Welcome, Customer</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Submit New Application</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Upload Documents</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Track Application Status</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Notifications</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>View Issued NOCs</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={logOut}>
                <View style={{ padding: 13, backgroundColor: "white", width: "95%", marginTop: 30, alignSelf: "center", borderRadius: 20, }}>
                    <View style={{ justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                        <Text style={{ color: "red", textAlign: "center", paddingLeft: 10, fontSize: 17, fontWeight: "bold" }}>Log Out</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4f4f4',
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 8,
        marginVertical: 10,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
