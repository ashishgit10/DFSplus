import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('customer'); // Default role as 'customer'

    const handleLogin = () => {
        if (email && password) {
            // Simulate role-based login
            if (role === 'customer') {
                navigation.navigate('UserHome');
            } else if (role === 'fireDepartment') {
                navigation.navigate('DeptHome');
            } else {
                Alert.alert('Error', 'Invalid role selected.');
            }
        } else {
            Alert.alert('Error', 'Please enter email and password.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Fire Department Portal</Text>

            {/* Role Selection */}
            <Text style={styles.roleTitle}>Select Your Role</Text>
            <View style={styles.roleContainer}>
                <TouchableOpacity
                    style={[styles.roleButton, role === 'customer' && styles.selectedRole]}
                    onPress={() => setRole('customer')}
                >
                    <Text style={styles.roleText}>Customer</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.roleButton, role === 'fireDepartment' && styles.selectedRole]}
                    onPress={() => setRole('fireDepartment')}
                >
                    <Text style={styles.roleText}>Staff</Text>
                </TouchableOpacity>
            </View>
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="black"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="black"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />


            {/* Login Button */}
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f4f4f4',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: "black"
    },
    input: {
        width: '100%',
        padding: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        marginBottom: 15,
        color: "black"
    },
    roleTitle: {
        fontSize: 18,
        marginBottom: 10,
        color: "black"
    },
    roleContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    roleButton: {
        padding: 10,
        marginHorizontal: 10,
        backgroundColor: '#ddd',
        borderRadius: 8,
    },
    selectedRole: {
        backgroundColor: '#007bff',
    },
    roleText: {
        color: '#fff',
        fontWeight: 'bold',
        color: "black"
    },
    loginButton: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
    },
    loginButtonText: {
        color: "black",
        fontSize: 16,
        fontWeight: 'bold',
    },
});
