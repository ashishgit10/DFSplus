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
    standards: Array(20).fill({
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
      <TextInput style={styles.input} placeholderTextColor="gray" placeholder="1. Name & address of the building" onChangeText={(text) => handleInputChange('buildingName', text)} />
      <TextInput style={styles.input} placeholderTextColor="gray" placeholder="2. Building is comprised of" onChangeText={(text) => handleInputChange('buildingComposition', text)} />
      <TextInput style={styles.input} placeholderTextColor="gray" placeholder="3. Type of Occupancy" onChangeText={(text) => handleInputChange('occupancyType', text)} />
      <TextInput style={styles.input} placeholderTextColor="gray" placeholder="4. Type of Case" onChangeText={(text) => handleInputChange('caseType', text)} />
      <TextInput style={styles.input} placeholderTextColor="gray" placeholder="5. Details of Previous NOC letter" onChangeText={(text) => handleInputChange('nocDetails', text)} />
      <TextInput style={styles.input} placeholderTextColor="gray" placeholder="6. Fire Safety direction letter No" onChangeText={(text) => handleInputChange('fireSafetyLetter', text)} />
      <TextInput style={styles.input} placeholderTextColor="gray" placeholder="7. Date of Inspection" onChangeText={(text) => handleInputChange('inspectionDate', text)} />
      <TextInput style={styles.input} placeholderTextColor="gray" placeholder="8. Name of the Inspecting officers" onChangeText={(text) => handleInputChange('inspectingOfficers', text)} />
      <TextInput style={styles.input} placeholderTextColor="gray" placeholder="9. Name and designation of Officer from the building side" onChangeText={(text) => handleInputChange('officerDesignation', text)} />
      <TextInput style={styles.input} placeholderTextColor="gray" placeholder="10. Year of Construction" onChangeText={(text) => handleInputChange('constructionYear', text)} />
      <TextInput style={styles.input} placeholderTextColor="gray" placeholder="11. Applicant’s letter No" onChangeText={(text) => handleInputChange('applicantLetterNo', text)} />

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

      {/*       <Button title="Submit" onPress={handleSubmit} /> */}
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
});

export default InspectionForm;