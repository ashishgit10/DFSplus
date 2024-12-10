import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DeptHome from './DeptScreen/DeptHome.js';
import logo from '../assets/logo.png';
import { deviceWidth } from '../Dimensions.js';

const { width } = Dimensions.get('window');

const Login = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if name exists in AsyncStorage on component mount
  useEffect(() => {
    const checkNameInStorage = async () => {
      try {
        const storedName = await AsyncStorage.getItem('name');
        if (storedName) {
          setIsAuthenticated(true);
        }
      } catch (err) {
        console.error('Error retrieving name from AsyncStorage', err);
      }
    };
    checkNameInStorage();
  }, []);

  // Handle Login
  const handleLogin = async () => {
    try {
      await AsyncStorage.setItem('name', name);
      setIsAuthenticated(true);
    } catch (err) {
      console.error('Error storing name to AsyncStorage', err);
    }
  };

  if (isAuthenticated) {
    return <DeptHome />;
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {/* Logo Section */}
      <Image source={logo} style={styles.logo} resizeMode="contain" />

      <Text style={styles.title}>Inspector Login</Text>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
          placeholderTextColor="#5E2129"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#5E2129"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={!passwordVisible}
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="#5E2129"
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
            style={styles.eyeIcon}
          >
            <Text>👁</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Buttons */}
      <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
        <Text style={styles.signInText}>Sign in</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.forgotPasswordButton}>
        <Text style={styles.forgotPasswordText}>Forgot password</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8E6E6',
    alignItems: 'center',
    padding: 16,
    paddingTop: 120,
  },
  logo: {
    width: width * 0.8,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5E2129',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#5E2129',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 16,
    marginBottom: 10,
    color: '#5E2129',
    width: deviceWidth - 35,
    fontSize: 20,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    right: 16,
  },
  signInButton: {
    backgroundColor: '#FF0000',
    width: '100%',
    paddingVertical: 14,
    alignItems: 'center',
    borderRadius: 10,
  },
  signInText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  forgotPasswordButton: {
    backgroundColor: '#F5E6E6',
    width: '100%',
    paddingVertical: 14,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
    borderColor: '#5E2129',
    borderWidth: 1,
    marginTop: 18,
  },
  forgotPasswordText: {
    fontSize: 16,
    color: '#5E2129',
    fontWeight: '600',
  },
});

export default Login;
