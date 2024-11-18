import { Text, View, StyleSheet, Image } from 'react-native';
import { deviceHeight, deviceWidth } from '../Dimensions';

const HomePageCards = ({ name, topic, _, disc }) => {
    return (      <View style={styles.cont1}>
            <View style={styles.box1}>
                <View style={styles.uid}><View>
                  {/*   <Image source={img} style={styles.profile} /> */}
                </View>
                    <Text style={styles.userName}>{name}</Text></View>
                <Text style={styles.topic}>{topic}</Text>
                <Text style={styles.disc}>{disc}</Text>
            </View>
        </View>
    );
};
export default HomePageCards;
const styles = StyleSheet.create({
    box1: {
        backgroundColor: 'white',
        height: deviceHeight / 6,
        width: deviceWidth / 1 - 110,
        borderRadius: 8,
        paddingTop: 13,
        paddingLeft: 13,
        marginBottom: 15,
        marginLeft: 15,
        borderColor:"gray",
        borderWidth:1,
        paddingBottom:20
    },
    uid: {
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center'
    },
    profile: {
        width: 24,
        height: 24
    },
    userName: {
        color: 'black',
        marginLeft: 15
    },
    topic: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 17,
        marginBottom: 8
    },
    disc: {
        color: 'black',
        lineHeight:20

    }
})