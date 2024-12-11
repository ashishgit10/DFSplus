import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import { RoleContext } from '../../context/RoleProvider';
import { useNavigation } from '@react-navigation/native';
import Navbar from './Navbar';




// Mock Data for Applications
const mockApplications = [
  { id: '1234', status: 'Pending', name: 'Ritika Prasad' },
  { id: '1235', status: 'Inspected', name: 'Brijmohan Gupta' },
  { id: '1236', status: 'Approved', name: 'Vikash Shah' },
  { id: '1237', status: 'Rejected', name: 'Kartik Kumar' },
];
const Tab = [
  { id: '1', name: 'Home', icon: '🏠' },
  { id: '2', name: 'Search', icon: "🔍" },
  { id: '3', name: 'Calender', icon: '🗓️' },
  { id: '4', name: 'Notification', icon: '🔔' },
  { id: '5', name: 'Profile', icon: '👤' },
];

const InspectorPortalHome = ({ navigation }) => {
  const { role, setRole } = useContext(RoleContext);
  const [selectedStatus, setSelectedStatus] = useState('All'); // Default to "All" filter
  const [searchText, setSearchText] = useState(''); // Search text

  const nav = useNavigation();

  const handleLogout = () => {
    setRole(null);
  }

  // Filter Applications based on Status and Search
  const filteredApplications = mockApplications.filter((app) =>
    (selectedStatus === 'All' || app.status === selectedStatus) &&
    app.name.toLowerCase().includes(searchText.toLowerCase())
  );

  // Render Single Application Item
  const renderApplication = ({ item }) => (
    <TouchableOpacity
      style={styles.applicationCard}
      onPress={() => nav.navigate('InspectionForm')}
    >
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>📄</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.applicationId}>Application ID: {item.id}</Text>
        <Text style={styles.status}>Status: {item.status}</Text>
        <Text style={styles.applicantName}>Applicant Name: {item.name}</Text>
      </View>
      <Text style={styles.arrow}>➔</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <Navbar />
      <Text style={styles.title}>NOC Applications</Text>
      {/* Filter Options */}
      <View style={styles.filterContainer}>
        {['All', 'Pending', 'Inspected', 'Approved', 'Rejected'].map((status) => (
          <TouchableOpacity
            key={status}
            style={[
              styles.filterButton,
              selectedStatus === status && styles.activeFilter,
            ]}
            onPress={() => setSelectedStatus(status)}
          >
            <Text
              style={[
                styles.filterText,
                selectedStatus === status && styles.activeFilterText,
              ]}
            >
              {status}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

   {/*    <Camera/> */}
      {/* Applications List */}
      <FlatList
        data={filteredApplications}
        renderItem={renderApplication}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={styles.emptyMessage}>No applications found</Text>
        }
        contentContainerStyle={{ paddingBottom: 80, paddingLeft: 15, paddingRight: 15 }}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        {Tab.map((tab) => (
          <TouchableOpacity key={tab.id} style={styles.navItem}>
            <Text style={styles.navIcon}>{tab.icon}</Text>
            <Text style={styles.navText}>{tab.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default InspectorPortalHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8E6E6',

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5E2129',
    marginBottom: 16,
    paddingLeft: 18,
    paddingTop: 18

  },
  searchBar: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  filterButton: {
    padding: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#DDD',
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  activeFilter: {
    backgroundColor: '#B22E4B',
  },
  filterText: {
    fontSize: 12,
    color: '#5E2129',
  },
  activeFilterText: {
    color: '#FFF',
  },
  applicationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#FFF',
    borderRadius: 8,
    elevation: 2,
  },
  iconContainer: {
    marginRight: 10,
  },
  icon: {
    fontSize: 24,
  },
  detailsContainer: {
    flex: 1,
  },
  applicationId: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#5E2129',
  },
  status: {
    color: '#7D7D7D',
    fontSize: 14,
  },
  applicantName: {
    fontSize: 14,
    color: '#5E2129',
  },
  arrow: {
    fontSize: 18,
    color: '#5E2129',
  },
  emptyMessage: {
    textAlign: 'center',
    color: '#7D7D7D',
    fontSize: 16,
    marginTop: 20,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 10,
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderColor: '#DDD',
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    fontSize: 24,
    color: '#5E2129',
  },
  navText: {
    fontSize: 12,
    color: '#5E2129',
  },
});
