import React from 'react'
import { View, Text } from 'react-native'
import {Context} from './src/logic/context'
import Routes from './src/routes/routes'

export default function App() {
  return (
    <Context>
      <Routes/>
    </Context>
  )
}
