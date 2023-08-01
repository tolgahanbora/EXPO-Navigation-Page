import React, {useState} from 'react'
import { Button, View,TouchableWithoutFeedback,Keyboard, StyleSheet } from 'react-native'


import FormCard from '../components/FormCard'


const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    borderRadius: 5,
  },
})
function Form({navigation}) {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    height: "",
    weight: "",
  });


  const handleChangeText = (field, text) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: text,
    }));
  };

  const onSubmit = () => {
    navigation.navigate("Profile", {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      weight: formData.weight,
      height: formData.height
    })
  }

  return (
<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
  <View>

    <FormCard
    formData={formData}
    handleChangeText={handleChangeText}
    />

    <Button 
    style={styles.button}
    title='Save'
    onPress={onSubmit}
    />
  </View>
  </TouchableWithoutFeedback>
  )
}

export default Form