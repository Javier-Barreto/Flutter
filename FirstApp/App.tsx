import React, { useState } from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CustomButton from './src/components/CustomButton';

const App = () => {
  const [age, setAge] = useState(3);

  const add = () => {
    if(age === 5) return;
    setAge(age + 1)
  }

  const substract = () =>{
    if(age === 0) return;
    setAge(age - 1);
  }

  return (
    <View style={styles.Container}>
      <Text style={styles.Text}>My Age is:</Text>
      <View style={styles.ControlsContainer}>
        <Text style={styles.Age}>{age}</Text>
        <View style={styles.ButtonContainer}>
          <CustomButton text='-' onClick={substract}/>
          <CustomButton text='+' onClick={add}/>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Container:{
    alignItems: 'center',
    backgroundColor: '#ddd',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
  },
  Text:{
    fontSize: 25,
    fontWeight: '700',
    letterSpacing: 7,
  },
  ControlsContainer:{
    alignItems: 'center',
    margin: 20,
    width: '100%',
  },
  Age:{
    color:'#4C086F',
    fontSize: 20,
    fontWeight: '800',
  },
  ButtonContainer:{
    alignContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 20,
    width: '100%',
  },
});

export default App;