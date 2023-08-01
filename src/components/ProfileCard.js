import React from 'react'

import { View, Text } from 'react-native'

function ProfileCard(props) {
  return (
    <View>
      <Text>
Your Name: {props.data.data.name}
      </Text>
      <Text>
Your Email: {props.data.data.email}
      </Text>
      <Text>
Your Phone: {props.data.data.phone}
      </Text>
      <Text>
Your Height: {props.data.data.height}
      </Text>
      <Text>
Your Weight: {props.data.data.weight}
      </Text>
    </View>
  )
}

export default ProfileCard