import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {StatusBar} from 'expo-status-bar'
import { Link } from 'expo-router'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>index</Text>
      <StatusBar style='auto'/>
      <Link href="/profile" style={{color:'blue'}}>
      Go To profile
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})