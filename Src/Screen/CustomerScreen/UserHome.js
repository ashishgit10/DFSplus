import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';

    
    export default UserHome = () => {
        const navigation = useNavigation();
        const Menubar = () => {
            navigation.navigate("Menubar")
        }
        const Noc = () => {
            navigation.navigate("NocForm")
        }
        const handleLogout = () => {
            setRole(null);
            setEmail('');
            setPassword('');
        };
      return (
        <View style={styles.dashboardContainer}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Dashboard</Text>
            <Icon name="notifications-outline" size={30} color="#5E2129" />
          </View>
    
          <TextInput style={styles.searchBar} placeholder="Search" />
    
          <ScrollView contentContainerStyle={styles.gridContainer}>
            <View style={styles.grid}>
              <TouchableOpacity onPress={Noc} style={styles.gridItem}>
                <Icon name="home-outline" size={40} color="#5E2129" />
                <Text style={styles.gridText}>Apply for Noc</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.gridItem}>
                <Icon name="search-outline" size={40} color="#5E2129" />
                <Text style={styles.gridText}>Services</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.gridItem}>
                <Icon name="receipt-outline" size={40} color="#5E2129" />
                <Text style={styles.gridText}>Receipts</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.gridItem}>
                <Icon name="settings-outline" size={40} color="#5E2129" />
                <Text style={styles.gridText}>My Requests</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.gridItem}>
                <Icon name="document-outline" size={40} color="#5E2129" />
                <Text style={styles.gridText}>Renew NOCs</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.gridItem}>
                <Icon name="cash-outline" size={40} color="#5E2129" />
                <Text style={styles.gridText}>Quick Pay</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.signInButton} onPress={handleLogout}>
                <Text style={styles.signInText}>Sign out</Text>
            </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      );
    };
    
    const HomeScreen = () => (
      <View style={styles.screenContainer}>
        <Text>Home Screen</Text>
      </View>
    );
    
    const CertificatesScreen = () => (
      <View style={styles.screenContainer}>
        <Text>Certificates Screen</Text>
      </View>
    );
    
    const ReceiptsScreen = () => (
      <View style={styles.screenContainer}>
        <Text>Receipts Screen</Text>
      </View>
    );
    
    const AllServicesScreen = () => (
      <View style={styles.screenContainer}>
        <Text>All Services Screen</Text>
      </View>
    );
    
    
    const styles = StyleSheet.create({
      dashboardContainer: {
        flex: 1,
        backgroundColor: '#F8E6E6',
        padding: 16,
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
      },
      headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#5E2129',
      },
      searchBar: {
        height: 40,
        borderColor: '#5E2129',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 16,
        marginBottom: 20,
      },
      gridContainer: {
        flexGrow: 1,
        justifyContent: 'space-between',
      },
      grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      },
      gridItem: {
        width: '30%',
        alignItems: 'center',
        marginBottom: 20,
      },
      gridText: {
        marginTop: 8,
        textAlign: 'center',
        color: '#5E2129',
      },
      screenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8E6E6',
      },
    });
    