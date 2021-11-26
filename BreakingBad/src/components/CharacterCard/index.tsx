import React, { useState } from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { CharacterInterface } from '../../interfaces/interfaces';

interface Props{
    character: CharacterInterface
    onClick: (character: CharacterInterface) => void;
}


const Component = (props: Props) => {
    const {character, onClick} = props;
    const {name, nickname, img, status} = character;

    const image = status == "Alive" ? require('../../assets/ALIVE.png') : null 
    || status == "Deceased" ? require('../../assets/DECEASED.png') : null
    || status == "Presumed dead" ? require('../../assets/PRESUMEDDEAD.png') : null;

    return (
        <TouchableOpacity onPress={() => onClick(character)}>
            <View style={styles.Container}>
                <Image 
                    style={styles.CharacterImg}
                    source={{uri: img}}
                />
                <View style={styles.TextContainer}>
                    <Text style={styles.TitleText}>Name:</Text>
                    <Text style={styles.TextNormal}>{name}</Text>
                    <Text style={styles.TitleText}>Status:</Text>
                    <Text style={styles.TextNormal}>{status}</Text>
                </View>
                <View style={styles.TextContainer}>
                    <Text style={styles.TitleText}>Nickname:</Text>
                    <Text style={styles.TextNormal}>{nickname}</Text>
                    <Image
                        style={styles.StatusImg}
                        source={image}
                    />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Container:{
        display: 'flex',
        backgroundColor: '#282C34',
        borderColor: '#e20c79',
        borderBottomWidth: 0.5,
        height: 100,
        alignItems: 'center',
        flexDirection: "row",
    },
    CharacterImg:{
        width: 70,
        height: 70,
        margin: 5,
        marginLeft: 15,
        borderRadius: 50,
    },
    TextContainer:{
        marginLeft: 15,
        fontFamily: "Arial",
    },
    TitleText:{
        fontSize: 15,
        color: "#FFFFFF",
    },
    TextNormal:{
        fontSize: 12,
        color: "#9B9B9B",
        fontWeight: "500",
    },
    StatusImg:{
        width: 30,
        height: 30,
        margin: 5,
    }
});

export default Component;