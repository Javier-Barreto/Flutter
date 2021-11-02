import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface Props{
    text: String;
    onClick: () => void;
}

const Component = (props: Props) => {
    const {text, onClick} = props;

    return (
        <TouchableOpacity 
        style={styles.Button} 
        onPress={onClick}>
            <Text style={styles.ButtonText}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Button: {
        backgroundColor: '#E20C70',
        padding: 10,
        width: 50,
      },
      ButtonText: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
      }
})

export default Component;