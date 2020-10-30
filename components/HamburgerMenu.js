import React from 'react'
import {View, StyleSheet} from 'react-native'


const HamburgerMenu = () => {
    return (
        <View style={styles.burgerContainer}>
            <View style={styles.burgerItem}></View>
            <View style={styles.burgerItem}></View>
            <View style={styles.burgerItem}></View>
            <View style={styles.burgerItem}></View>
            
        </View>
    )
}


const styles = StyleSheet.create({

    burgerItem: {
        width:  "100%",
        height: 4,
        backgroundColor: '#fff',
        marginVertical: 2,
        borderRadius: 10
    },
    burgerContainer: {
        width: 50,
        display: 'flex',
        flexDirection: "column",
        padding: 10
    }
})

export default HamburgerMenu
