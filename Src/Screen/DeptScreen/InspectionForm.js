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

      <View style={styles.inputContainer}>
        <Text style={styles.label}>1. Name & address of the building</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter name & address"
          placeholderTextColor="gray"
          onChangeText={(text) => handleInputChange('buildingName', text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>2. Building is comprised of</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter building composition"
          placeholderTextColor="gray"
          onChangeText={(text) => handleInputChange('buildingComposition', text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>3. Type of Occupancy</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter type of occupancy"
          placeholderTextColor="gray"
          onChangeText={(text) => handleInputChange('occupancyType', text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>4. Type of Case</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter type of case"
          placeholderTextColor="gray"
          onChangeText={(text) => handleInputChange('caseType', text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>5. Details of Previous NOC letter</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter NOC details"
          placeholderTextColor="gray"
          onChangeText={(text) => handleInputChange('nocDetails', text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>6. Fire Safety direction letter No</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter fire safety letter"
          placeholderTextColor="gray"
          onChangeText={(text) => handleInputChange('fireSafetyLetter', text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>7. Date of Inspection</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter inspection date"
          placeholderTextColor="gray"
          onChangeText={(text) => handleInputChange('inspectionDate', text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>8. Name of the Inspecting officers</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter name of inspecting officers"
          placeholderTextColor="gray"
          onChangeText={(text) => handleInputChange('inspectingOfficers', text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>9. Name and designation of Officer from the building side</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter officer's designation"
          placeholderTextColor="gray"
          onChangeText={(text) => handleInputChange('officerDesignation', text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>10. Year of Construction</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter construction year"
          placeholderTextColor="gray"
          onChangeText={(text) => handleInputChange('constructionYear', text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>11. Applicant’s letter No</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter applicant's letter number"
          placeholderTextColor="gray"
          onChangeText={(text) => handleInputChange('applicantLetterNo', text)}
        />
      </View>

      {formData.standards.map((standard, index) => (
        <View key={index} style={styles.standardContainer}>
          <Text style={styles.standardTitle}>{index + 1}. {standard.title}</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Requirement {index + 1}</Text>
            <TextInput
              style={styles.input}
              placeholder={`Enter requirement ${index + 1}`}
              placeholderTextColor="gray"
              onChangeText={(text) => handleStandardChange(index, text)}
            />
          </View>

          {standard.requirements.map((req, reqIndex) => (
            <View key={reqIndex} style={styles.requirementContainer}>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Requirement</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter requirement"
                  placeholderTextColor="gray"
                  onChangeText={(text) => handleRequirementChange(index, reqIndex, 'requirement', text)}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Provided at Site</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter provided at site"
                  placeholderTextColor="gray"
                  onChangeText={(text) => handleRequirementChange(index, reqIndex, 'provided', text)}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Remarks (MR/NMR)</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter remarks"
                  placeholderTextColor="gray"
                  onChangeText={(text) => handleRequirementChange(index, reqIndex, 'remarks', text)}
                />
              </View>
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
  inputContainer: {
    marginBottom: 15,
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
    backgroundColor: 'white',
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
