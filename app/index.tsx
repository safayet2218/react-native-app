import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {StatusBar} from 'expo-status-bar'
import { Link } from 'expo-router'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className='text-3xl'>index</Text>
      <StatusBar style='auto'/>
      <Link href="/profile" style={{color:'blue'}}>
      Go To profile
      </Link>
    </View>
  )
}
