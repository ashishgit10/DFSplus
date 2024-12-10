import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LinearGradient from 'react-native-linear-gradient';
import { deviceHeight, deviceWidth } from '../Dimensions';

const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            get_name()
        }, 2000)
    }, [])

    const get_name = async () => {
        let name = await AsyncStorage.getItem('name')
        if (name) {
            navigation.replace("DeptHome", { name })
        } else {
            navigation.replace("Login")
        }
    }

    return (
        <LinearGradient
            colors={['#e7b6f8', 'white']}
            style={{ width: deviceWidth, height: deviceHeight }}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                <Text style={{
                    fontWeight: "bold", fontSize: 60, color: "black", paddingBottom: 10, color: 'black', textShadowColor: '#FFF', textShadowRadius: 1, textShadowOffset: { width: 1, height: 1, }
                }}> Welcome!</Text>

            </View>
        </LinearGradient>
    )
}

export default SplashScreen