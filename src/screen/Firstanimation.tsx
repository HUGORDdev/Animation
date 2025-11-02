import { Button,  StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Animated, { Easing, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'

const Firstanimation = () => {
  // const width = useSharedValue(50)
  const translatex = useSharedValue(0)
  // fonction pour gerer la shared value 
  const handlePress = () => {
    translatex.value = translatex.value + 40
    // width.value =  width.value +50)
  }
  const handlePressLeft = () => {
    translatex.value = translatex.value - 40
    // width.value =  width.value +50)
  }
  const animetedTranslate = useAnimatedStyle(() => ({
    transform: [
      {
        // translateX: withTiming(translatex.value,{duration:300,easing:Easing.linear}),
        translateX: withSpring(translatex.value,{mass:3,stiffness:50,damping:10}),
      }
    ]
  }))
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      gap: 10,
      marginHorizontal: 5
      // alignItems: 'center'
    }}>
      <Animated.View style={[{ width: 30, height: 30, backgroundColor: 'red' }, animetedTranslate]}>

      </Animated.View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity style={{ backgroundColor: 'blue', width: '20%', padding: 10 }} onPress={handlePressLeft}  >
          <Text>
            left
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: 'blue', width: '20%', padding: 10 }} onPress={handlePress}  >
          <Text>
            right
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  )
}

export default Firstanimation

const styles = StyleSheet.create({})