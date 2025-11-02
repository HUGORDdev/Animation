import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withSequence, withSpring, withTiming } from 'react-native-reanimated'

const SecondAnimation = () => {
    const translatex = useSharedValue(0)
    // fonction pour gerer la shared value 
    const OFFSEt = 40
    const TIME = 100
    const handlePress = () => {
        // translatex.value = withRepeat(withTiming(40),-1,true)
        translatex.value = withSequence(
            // start  
            withTiming(-OFFSEt, { duration: TIME / 2 }),
            // middle
            withRepeat(withTiming(OFFSEt, { duration: TIME }), 5, true),
            // end
            withTiming(0, { duration: TIME / 2 })
        )



    }

    const animetedTranslate = useAnimatedStyle(() => ({
        transform: [
            {
                // translateX: withTiming(translatex.value,{duration:300,easing:Easing.linear}),
                translateX: translatex.value,
            }
        ]
    }))

    return (
        <View style={{
            flex: 1,
            backgroundColor: '#fff',
            justifyContent: 'center',
            gap: 10,
            marginHorizontal: 5,
            alignItems: 'center'
        }}>
            <Animated.View style={[{ width: 50, height: 50, backgroundColor: 'red' }, animetedTranslate]}>

            </Animated.View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                <TouchableOpacity style={{ backgroundColor: 'blue', width: '20%', padding: 10 }} onPress={handlePress}  >
                    <Text>
                        trembler
                    </Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

export default SecondAnimation

const styles = StyleSheet.create({})