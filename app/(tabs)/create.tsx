import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

const create = () => {
  return (
    <View style={styles.container}>
      <Text>create</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default create