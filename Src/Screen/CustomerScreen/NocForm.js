import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
/* import DocumentPicker from 'react-native-document-picker'; */

const NocForm = () => {
  const [formData, setFormData] = useState({
    buildingName: '',
    buildingAddress: '',
    builderName: '',
    builderAddress: '',
    ownerDetails: '',
    plotArea: '',
    title: '',
    landUse: '',
    coveredArea: '',
    buildingHeight: '',
    setbacksConforming: false,
    floors: '',
    waterSupplyDetails: '',
    fireFightingDetails: '',
    extinguishers: '',
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  /* const handleFileUpload = async (field) => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setFormData({ ...formData, [field]: result });
      alert('File uploaded successfully');
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        alert('File upload cancelled');
      } else {
        alert('Unknown error: ' + JSON.stringify(err));
      }
    }
  }; */

  const handleSubmit = () => {
    console.log('Form Data Submitted: ', formData);
    alert('Form submitted successfully!');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Fire NOC Application Form</Text>

      <Text style={styles.label}>Name of the Building:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter building name"
        value={formData.buildingName}
        onChangeText={(value) => handleInputChange('buildingName', value)}
      />

      <Text style={styles.label}>Address of the Building:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter building address"
        value={formData.buildingAddress}
        onChangeText={(value) => handleInputChange('buildingAddress', value)}
      />

      <Text style={styles.label}>Name and Address of Builder/Promoter:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter builder's name and address"
        value={formData.builderName}
        onChangeText={(value) => handleInputChange('builderName', value)}
      />

      <Text style={styles.label}>Upload Documents:</Text>
      <TouchableOpacity
        style={styles.uploadButton}
        onPress={{}}
      >
        <Text style={styles.uploadText}>Upload</Text>
      </TouchableOpacity>

      <Text style={styles.label}>Number of Floors:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter number of floors"
        value={formData.floors}
        onChangeText={(value) => handleInputChange('floors', value)}
      />

      <Text style={styles.label}>Details of Water Supply for Fire Fighting:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter details"
        value={formData.waterSupplyDetails}
        onChangeText={(value) =>
          handleInputChange('waterSupplyDetails', value)
        }
      />

      <Button title="Submit Application" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',

  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: 'black'
  },
  label: {
    fontSize: 16,
    color: 'black',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  uploadButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
  },
  uploadText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default NocForm;
