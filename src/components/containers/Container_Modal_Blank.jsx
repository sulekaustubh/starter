import { View } from 'react-native'
import React from 'react'

const Container_Modal_Blank = ({ children }) => {
  return (
    <View className="bg-black/30  p-6 justify-center items-center absolute w-full h-full z-50">
          <View className="bg-white rounded-lg w-full p-6 h-auto">
              {children}
          </View>
      </View>
  )
}

export default Container_Modal_Blank