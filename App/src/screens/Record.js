import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useContext, useState } from 'react'
import { Context } from '../context/authContext'

const Record = () => {
  const { dispatch } = useContext(Context);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Record</Text>
      
      <Button 
        title='Logout' 
        onPress={() => dispatch({ type: 'logOut' })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30
  }
})

export default Record;