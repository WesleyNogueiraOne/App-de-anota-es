import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const  Body = (props) =>{

    function teste(){
        return (<Text>exemplo</Text>)
    }
        return (
            <View>
                {teste()}
                <Text>{ props.Texto}</Text>
                <Button title={props.Titulo}></Button>
            </View>
        )
    
}

export default Body;