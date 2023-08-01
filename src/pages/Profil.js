import React, {useState} from 'react'
import { Button, Text, View } from 'react-native'

import ProfileCard from '../components/ProfileCard'

function Profil({navigation, route}) {

  const data = route.params
const [profileData, setProfileData] = useState({data})

  return (
    <View>
      <ProfileCard data={profileData} />
      <Button
      title='Go Form Page'
      onPress={() => navigation.goBack()}
      />
    </View>
  )
}

export default Profil