import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet } from 'react-native';

const InspectionForm = () => {
  const [formData, setFormData] = useState({
    buildingName: '',
    buildingComposition: '',
    occupancyType: '',
    caseType: '',
    nocDetails: '',
    fireSafetyLetter: '',
    inspectionDate: '',
    inspectingOfficers: '',
    officerDesignation: '',
    constructionYear: '',
    applicantLetterNo: '',
    standards: Array(8).fill({
      title: '',
      requirements: Array(5).fill({ requirement: '', provided: '', remarks: '' }),
    }),
  });

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleStandardChange = (index, title) => {
    const updatedStandards = [...formData.standards];
    updatedStandards[index].title = title;
    setFormData({ ...formData, standards: updatedStandards });
  };

  const handleRequirementChange = (standardIndex, reqIndex, name, value) => {
    const updatedStandards = [...formData.standards];
    updatedStandards[standardIndex].requirements[reqIndex][name] = value;
    setFormData({ ...formData, standards: updatedStandards });
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>INSPECTION REPORT</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>1. Name & address of the building</Text>
        <TextInput style={styles.input} placeholderTextColor="gray" placeholder="Enter building name" onChangeText={(text) => handleInputChange('buildingName', text)} />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>2. Building is comprised of</Text>
        <TextInput style={styles.input} placeholderTextColor="gray" placeholder="Enter building composition" onChangeText={(text) => handleInputChange('buildingComposition', text)} />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>3. Type of Occupancy</Text>
        <TextInput style={styles.input} placeholderTextColor="gray" placeholder="Enter occupancy type" onChangeText={(text) => handleInputChange('occupancyType', text)} />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>4. Type of Case</Text>
        <TextInput style={styles.input} placeholderTextColor="gray" placeholder="Enter case type" onChangeText={(text) => handleInputChange('caseType', text)} />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>5. Details of Previous NOC letter</Text>
        <TextInput style={styles.input} placeholderTextColor="gray" placeholder="Enter NOC details" onChangeText={(text) => handleInputChange('nocDetails', text)} />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>6. Fire Safety direction letter No</Text>
        <TextInput style={styles.input} placeholderTextColor="gray" placeholder="Enter fire safety letter" onChangeText={(text) => handleInputChange('fireSafetyLetter', text)} />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>7. Date of Inspection</Text>
        <TextInput style={styles.input} placeholderTextColor="gray" placeholder="Enter inspection date" onChangeText={(text) => handleInputChange('inspectionDate', text)} />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>8. Name of the Inspecting officers</Text>
        <TextInput style={styles.input} placeholderTextColor="gray" placeholder="Enter inspecting officers" onChangeText={(text) => handleInputChange('inspectingOfficers', text)} />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>9. Name and designation of Officer from the building side</Text>
        <TextInput style={styles.input} placeholderTextColor="gray" placeholder="Enter officer designation" onChangeText={(text) => handleInputChange('officerDesignation', text)} />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>10. Year of Construction</Text>
        <TextInput style={styles.input} placeholderTextColor="gray" placeholder="Enter construction year" onChangeText={(text) => handleInputChange('constructionYear', text)} />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>11. Applicant’s letter No</Text>
        <TextInput style={styles.input} placeholderTextColor="gray" placeholder="Enter applicant's letter number" onChangeText={(text) => handleInputChange('applicantLetterNo', text)} />
      </View>

      {formData.standards.map((standard, index) => (
        <View key={index} style={styles.standardContainer}>
          <Text style={styles.standardTitle}>{index + 1}. {standard.title}</Text>
          <TextInput style={styles.input} placeholderTextColor="gray" placeholder="Requirement" onChangeText={(text) => handleStandardChange(index, text)} />

          {standard.requirements.map((req, reqIndex) => (
            <View key={reqIndex} style={styles.requirementContainer}>
              <TextInput style={styles.input} placeholderTextColor="gray" placeholder="Requirement" onChangeText={(text) => handleRequirementChange(index, reqIndex, 'requirement', text)} />
              <TextInput style={styles.input} placeholderTextColor="gray" placeholder="Provided at Site" onChangeText={(text) => handleRequirementChange(index, reqIndex, 'provided', text)} />
              <TextInput style={styles.input} placeholderTextColor="gray" placeholder="Remarks MR/NMR" onChangeText={(text) => handleRequirementChange(index, reqIndex, 'remarks', text)} />
            </View>
          ))}
        </View>
      ))}

      <View style={styles.submitButtonContainer}>
        {/* <Button title="Submit" onPress={handleSubmit} /> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: "black",
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: 'black',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  standardContainer: {
    marginBottom: 20,
  },
  standardTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  requirementContainer: {
    marginBottom: 10,
  },
  submitButtonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
});

export default InspectionForm;
