import React, { useState } from 'react'
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

const App = () => {
  const [name, SetName] = useState("");
  const [text, SetText] = useState("");
  const [number, setNumber] = useState(null);

  const validate = () =>{
    let num = number;
    let n1 = 0;
    let n2 = 0;

    if(name=="" || num == null)
    {
      SetText("Porfavor asegurese de llenar los campos")
    }
    else
    {
      if(num%1 != 0 || num < 0)
      {
        SetText("Porfavor ingrese valores enteros positivos")
      }
      else
      {
        if(num>99)
        {
          SetText("Porfavor ingrese valores menores a 99")
        }
        else
        {
          if(num < 10)
          {
            num = num*7
            do
            {
              n1 = num/10
              n1 = Math.floor(n1)
              n2 = num%10
              num = n1+n2
            }while (num>10)
            SetText(name + " tu número de la suerte es: " + num)
          }
          else
          {
            do
            {
              n1 = num/10
              n1 = Math.floor(n1)
              n2 = num%10
              num = n1+n2
            }while (num>=10)
            SetText("Bienvenido "+ name + ", su número de la suerte es " + num)
          }
        }
      }
    }
  }

  return (
    <View style={styles.Body}>
      <Image
        source={require("./src/images/Logo.png")}/>
      <Text style={styles.Title}>Lucky Number</Text>
      <TextInput
        style={styles.Input}
        placeholder="Ingresa tu nombre"
        onChangeText={SetName}
      ></TextInput>

      <TextInput
        style={styles.Input}
        placeholder="Ingresa tu edad"
        keyboardType="numeric"
        onChangeText={setNumber}
      ></TextInput>

      <TouchableOpacity style={styles.luckybutton}
        onPress={validate}>
        <Text style={styles.luckytext}>Obtener mi número</Text>
      </TouchableOpacity>

      <Text style={styles.Result}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Body:{
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
  },
  Title:{
    fontSize: 30,
    fontWeight: "400",
    margin: "2%",
  },
  Input:{
    width: "80%",
    borderBottomWidth: 1,
  },
  luckybutton:{
    margin:"2%",
    width:"40%",
    backgroundColor:"#CD5C5C",
    padding:"2%",
    borderRadius: 20,
  },
  luckytext:{
    color: "white",
    textAlign: "center",
  },
  Result:{
    margin: "2%",
    fontSize: 15,
  }
})

export default App;