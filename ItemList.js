import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ItemList = ({ text }) => {
    return(
        <View style={styles.listContainer}>
            <Text>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer:{
        padding:10,
        backgroundColor:'#ddd',
        margin: 5,
        borderRadius: 9,
    },
})

export default ItemList;