import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, Image, ImageBackground, TouchableOpacity, StatusBar } from 'react-native'

import Icon2 from "react-native-vector-icons/MaterialIcons"
import Icon3 from "react-native-vector-icons/Ionicons"
import Icon4 from "react-native-vector-icons/MaterialIcons"

import Icon7 from "react-native-vector-icons/AntDesign"
import user from "../../assets/user.png"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { deviceHeight } from '../../Dimensions'
import { useNavigation } from '@react-navigation/native'


const Menubar = () => {
    const [name, setName] = useState('');
    const navigation = useNavigation();
    const logOut = () => {
        AsyncStorage.clear();
        navigation.replace("Login")
    }

    useEffect(() => {
        const getName = async () => {
            try {
                const storedName = await AsyncStorage.getItem("name");
                if (storedName) {
                    setName(storedName);
                }
            } catch (err) {
                /*   console.error("Error retrieving name from AsyncStorage", err); */
            }
        };

        getName();
    }, []);
    const handleLogout = async () => {
        try {
            AsyncStorage.clear();
            navigation.replace("Login")
        } catch (err) {
          console.error('Error removing name from AsyncStorage', err);
        }
      };
    return (
        <SafeAreaView>
            <View style={{ height: deviceHeight }}>
                <StatusBar backgroundColor={'transparent'} barStyle="dark-content" translucent={true} />
                <View style={{ backgroundColor: "#C90000" }}>


                    <View style={{ height: "45%" }}>
                        <View style={{ height: "200%", width: '100%', alignItems: 'center', alignSelf: "center", justifyContent: "center", }}>
                            <View>
                                <Image source={user} style={{ width: 90, height: 90, marginHorizontal: 10, justifyContent: "center", alignSelf: "center" }} />
                            </View>
                            <View style={{ marginTop: 10 }}>
                                <Text style={{ fontSize: 20, fontWeight: "bold", color: "white", textAlign: "center" }}>Hello!</Text>
                                <Text style={{ fontSize: 20, fontWeight: "bold", color: "white", textAlign: "center" }}>{name}</Text>

                            </View>
                        </View>

                    </View>
                </View>


                <View style={{ backgroundColor: "#f2f2f2", marginTop: 30 }}>
                    <View style={{ backgroundColor: "white", width: "95%", alignSelf: "center", borderRadius: 20, padding: 10 }}>

                        <TouchableOpacity >
                            <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 13, borderBottomWidth: 0.5, borderBottomColor: "lightgray" }}>
                                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                    <Icon3 name="notifications-outline" size={25} color='black' />
                                    <Text style={{ color: "black", textAlign: "center", paddingLeft: 10, fontSize: 17 }}>Reminders</Text>
                                </View>
                                <View>
                                    <Icon2 name="keyboard-arrow-right" size={25} color='black' />
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 13, borderBottomWidth: 0.5, borderBottomColor: "lightgray" }}>
                                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                    <Icon4 name="chat" size={23} color='black' />
                                    <Text style={{ color: "black", textAlign: "center", paddingLeft: 10, fontSize: 17 }}>Chat & Support</Text>
                                </View>
                                <View>
                                    <Icon2 name="keyboard-arrow-right" size={25} color='black' />
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity >
                            <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 13, }}>
                                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                    <Icon7 name="team" size={25} color='black' />
                                    <Text style={{ color: "black", textAlign: "center", paddingLeft: 10, fontSize: 17 }}>Setting</Text>
                                </View>
                                <View>
                                    <Icon2 name="keyboard-arrow-right" size={25} color='black' />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={handleLogout}>
                        <View style={{ padding: 13, backgroundColor: "white", width: "95%", marginTop: 30, alignSelf: "center", borderRadius: 20, }}>
                            <View style={{ justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                                <Text style={{ color: "red", textAlign: "center", paddingLeft: 10, fontSize: 17, fontWeight: "bold" }}>Log Out</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{ marginTop: 15 }}>
                        <Text style={{ textAlign: "center", color: "black" }}>Agni Nirikshak ❤️</Text>
                        <Text style={{ textAlign: "center", color: "black" }}>V 1.0.0 (Testing)</Text>
                    </View>
                </View>

            </View>
        </SafeAreaView>

    )
}

export default Menubar