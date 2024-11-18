import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Menubar from './Menubar';

export default function Home() {
    const navigation = useNavigation();
    const Menubar = () => {
        navigation.navigate("Menubar")
    }
    return (<>
        <View>
            <TouchableOpacity onPress={Menubar}>
                <View style={{ backgroundColor: "gray" }}>
                    <Text style={{ color: "black", fontSize: 25, marginLeft: 20 }}>=</Text>
                </View>
            </TouchableOpacity>
        </View>

        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Fire Dept App</Text>
            <View style={styles.row}>
                <TouchableOpacity
                    style={styles.box}
                    onPress={() => navigation.navigate('NocForm')}
                >
                    <Text style={styles.boxText}>Apply for Noc</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.box}
                    onPress={() => navigation.navigate('TrackStatus')}
                >
                    <Text style={styles.boxText}>Track Status</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <TouchableOpacity
                    style={styles.box}
                    onPress={() => navigation.navigate('UploadDocuments')}
                >
                    <Text style={styles.boxText}>Issued NOCs</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.box}
                    onPress={() => navigation.navigate('Notifications')}
                >
                    <Text style={styles.boxText}>Report Issues</Text>
                </TouchableOpacity>
            </View>
        </View>
    </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#333',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    box: {
        width: 150,
        height: 120,
        backgroundColor: '#C90000',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: 10,
    },
    boxText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: "bold"
    },
});
