import { LayoutChangeEvent, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withDecay, withTiming } from 'react-native-reanimated';

const ThirdAnimation = () => {
    // const pressed = useSharedValue<boolean>(false)
    // const scaleWidth = useSharedValue(0)

    // const tap = Gesture.Tap()
    // .onBegin(()=>{
    //     pressed.value= true
    //    scaleWidth.value = scaleWidth.value + 2

    // })
    // .onFinalize(()=>{
    //     pressed.value = false
    // //    scaleWidth.value = scaleWidth.value/2

    // })
    //     console.log('value of variable scalewith :',scaleWidth.value )
    // const animetedStyle= useAnimatedStyle(()=>({
    //     transform: [{scale:withTiming(pressed.value ? scaleWidth.value : 1)}],
    //     backgroundColor:pressed.value?'red':'yellow'
    // }))
    const SIZE = 100;
    const BOUNDARY_OFFSET = 2;
    const offset = useSharedValue<number>(0);
    const width = useSharedValue<number>(0);

    const onLayout = (event: LayoutChangeEvent) => {
        width.value = event.nativeEvent.layout.width;
    };

    const pan = Gesture.Pan()
        .onChange((event) => {
            offset.value += event.changeX;
        })
        .onFinalize((event) => {
            offset.value = withDecay({
                velocity: event.velocityX,
                rubberBandEffect: true,
                clamp: [
                    -(width.value / 2) + SIZE / 2 + BOUNDARY_OFFSET,
                    width.value / 2 - SIZE / 2 - BOUNDARY_OFFSET,
                ],
            });
        });

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{ translateX: offset.value }],
    }));
    return (
        <GestureHandlerRootView style={styles.container}>
            <View style={[styles.container,{width:'100%'}]} onLayout={onLayout}>
                {/* <GestureDetector gesture={tap} > */}
                <GestureDetector gesture={pan} >
                    <Animated.View style={[styles.circle, animatedStyles]} />
                </GestureDetector>
            </View>
        </GestureHandlerRootView>
    )
}

export default ThirdAnimation

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // justifyContent: 'center',
        gap: 10,
        marginHorizontal: 5,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
        // alignItems: 'center'
    },
    circle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor:'red'
    }
})