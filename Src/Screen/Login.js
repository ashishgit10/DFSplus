import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import { RoleContext } from './RoleContext';

const { width } = Dimensions.get('window');

const Login = () => {
  const { role, setRole } = useContext(RoleContext); // Access role and setRole from context
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('Individual User');
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Handle Login
  const handleLogin = () => {
    if (activeTab === 'Individual User') {
      setRole('user');
    } else if (activeTab === 'Department Admin') {
      setRole('inspector');
    }
  };

  // Logout Handler
  const handleLogout = () => {
    setRole(null); // Clear role
    setEmail('');
    setPassword('');
  };

  // User UI
  const UserUI = () => (
    <View style={styles.uiContainer}>
      <Text style={styles.uiText}>Welcome, User!</Text>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );

  // Inspector UI
  const InspectorUI = () => (
    <View style={styles.uiContainer}>
      <Text style={styles.uiText}>Welcome, Fire Inspector!</Text>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );

  // Login Screen
  const LoginScreen = () => (
    <View style={styles.container}>
      {/* Logo Section */}
      <Image
        source={{
          uri: 'https://via.placeholder.com/500x200?text=Your+Logo',
        }}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Tab Selection */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Individual User' && styles.activeTab]}
          onPress={() => setActiveTab('Individual User')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'Individual User' && styles.activeTabText,
            ]}
          >
            Individual User
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Department Admin' && styles.activeTab]}
          onPress={() => setActiveTab('Department Admin')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'Department Admin' && styles.activeTabText,
            ]}
          >
            Department Admin
          </Text>
        </TouchableOpacity>
      </View>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={!passwordVisible}
            value={password}
            onChangeText={setPassword}
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
    </View>
  );

  return (
    <>
      {role === 'user' && <UserUI />}
      {role === 'inspector' && <InspectorUI />}
      {!role && <LoginScreen />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8E6E6',
    alignItems: 'center',
    padding: 16,
  },
  logo: {
    width: width * 0.8,
    height: 150,
    marginBottom: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#F5E6E6',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
  },
  tab: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#5E2129',
  },
  tabText: {
    color: '#5E2129',
    fontSize: 16,
    fontWeight: '500',
  },
  activeTabText: {
    color: '#FFFFFF',
    fontWeight: '600',
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
    backgroundColor: '#F5E6E6',
    width: '100%',
    paddingVertical: 14,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  signInText: {
    fontSize: 16,
    color: '#5E2129',
    fontWeight: '600',
  },
  forgotPasswordButton: {
    backgroundColor: '#FF0000',
    width: '100%',
    paddingVertical: 14,
    alignItems: 'center',
    borderRadius: 10,
  },
  forgotPasswordText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  uiContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8E6E6',
  },
  uiText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5E2129',
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: '#FF0000',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  logoutText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Login;
