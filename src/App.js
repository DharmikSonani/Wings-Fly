import { StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { NavigationHandler } from './navigation/NavigationHandler'
import { COLOR } from './helpers/colors'

const App = () => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor={COLOR.TRANSPARANT}
        barStyle={'dark-content'}
      />
      <NavigationContainer>
        <NavigationHandler />
      </NavigationContainer>
    </>
  )
}

export default App