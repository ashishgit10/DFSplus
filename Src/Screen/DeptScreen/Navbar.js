import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";// Icon library

const Navbar = () => {
    const navigation = useNavigation();
    const toggleMenu = () => {
        navigation.navigate("Menubar")
    };

    return (
        <View style={styles.navBar}>
            {/* Left Side: App Name */}
            {/* <Text style={styles.appTitle}>Home Page</Text> */}

            {/* Right Side: Menu Button */}
            <TouchableOpacity onPress={toggleMenu}>
                <Icon name="menu" size={32} color="white" />
            </TouchableOpacity>

            {/* Menu Modal */}
           {/*  {menuVisible && (
                <Modal
                    transparent={true}
                    animationType="fade"
                    visible={menuVisible}
                    onRequestClose={toggleMenu}
                >
                    <TouchableOpacity
                        style={styles.overlay}
                        onPress={toggleMenu}
                    >
                        <View style={styles.menuContainer}>
                            <Text style={styles.menuItem}>Home</Text>
                            <Text style={styles.menuItem}>Profile</Text>
                            <Text style={styles.menuItem}>Settings</Text>
                            <Text style={styles.menuItem}>Logout</Text>
                        </View>
                    </TouchableOpacity>
                </Modal>
            )} */}
        </View>
    );
};

const styles = StyleSheet.create({
    navBar: {
        width:"100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#5E2129",
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    appTitle: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "flex-end",
    },
    menuContainer: {
        backgroundColor: "white",
        padding: 20,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    menuItem: {
        fontSize: 18,
        marginBottom: 15,
        color: "#333",
    },
});

export default Navbar;
