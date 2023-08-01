import React, {useState} from 'react'
import { Text, View, TextInput, StyleSheet,TouchableWithoutFeedback ,Keyboard } from 'react-native'

const styles = StyleSheet.create({ 

  input:{
    borderRadius: 7,
    backgroundColor: "gray",
    padding: 6,
    width: 250
  },
  inputContainer:  {
    margin: 10,
    marginLeft: 15,
    marginTop: 20
  }

})


function FormCard({formData,handleChangeText}) {

  

  return (
<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.inputContainer}>
      <Text>Your Name:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => handleChangeText('name', text)}
        value={formData.name}
      />
       <Text>Your Email:</Text>
       <TextInput
        style={styles.input}
        onChangeText={(text) => handleChangeText('email', text)}
        value={formData.email}
        keyboardType="email-address" 
      />
       <Text>Your Phone:</Text>
       <TextInput
        style={styles.input}
        onChangeText={(text) => handleChangeText('phone', text)}
        value={formData.phone}
        keyboardType="numeric"
      />
       <Text>Your Weight:</Text>
       <TextInput
        style={styles.input}
        onChangeText={(text) => handleChangeText('weight', text)}
        value={formData.weight}
        keyboardType="numeric"
      />
       <Text>Your Height:</Text>
       <TextInput
        style={styles.input}
        onChangeText={(text) => handleChangeText('height', text)}
        value={formData.height}
        keyboardType="numeric"
      />
      
    </View>
</TouchableWithoutFeedback>

  )
}

export default FormCard