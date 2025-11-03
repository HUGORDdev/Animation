import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, interpolateColor, withSpring } from 'react-native-reanimated';

const AnimationColor = () => {

  const scaleValue = useSharedValue(1);
  const colorProgress = useSharedValue(0); // 0 = début, 1 = fin
  const opacity = useSharedValue(0)
  const rotate = useSharedValue(0);
// rotate.value = withTiming(1);
    useEffect(() => {
  opacity.value = withTiming(1, { duration: 500 });
  rotate.value = withTiming(1, { duration: 1000 }); // rotation sur 1s
}, []);
//   const tapGesture = Gesture.Tap()
//     .onBegin(() => {
//       scaleValue.value = withTiming(1.5, { duration: 150 });
//       colorProgress.value = withTiming(1,
//         //  { duration: 500 }
//         ); // transition vers couleur B
//     })
//     .onFinalize(() => {
//       scaleValue.value = withSpring(1, { damping: 10, stiffness: 80 });
//       colorProgress.value = withTiming(0
//         // , { duration: 500 }
//     ); // retour couleur A
//     });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
    { rotate: `${rotate.value * 360}deg` }  // rotation complète
  ],
    backgroundColor: interpolateColor(
      colorProgress.value,
      [0, 1],            // de 0 à 1
      ['rgba(89, 141, 238, 1)', '#ff0000ff'] // du bleu vers le rouge
    ),
    opacity:opacity.value
  }));

  return (
    <GestureHandlerRootView style={styles.container}>
      {/* <GestureDetector gesture={tapGesture}> */}
        <Animated.View style={[styles.box, animatedStyle]}>
          <Text style={styles.text}>Object</Text>
        </Animated.View>
      {/* </GestureDetector> */}
    </GestureHandlerRootView>
  );
};

export default AnimationColor;

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding:20
     },
  box: { backgroundColor: '#008', padding: 60, borderRadius: 10,
        // transform:[{rotateX:'35 deg'}]

   },
  text: { color: 'white', fontSize: 16 },
});




// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
// import Animated, { useSharedValue, useAnimatedStyle, withTiming, withSpring } from 'react-native-reanimated';

// const AnimationPop = () => {
//   const scaleValue = useSharedValue(1);
//   const color = useSharedValue('')

//   // Définir le geste de tap
//   const tapGesture = Gesture.Tap()
//     .onBegin(() => {
//       // Agrandir rapidement
//       scaleValue.value = withTiming(1.5, { duration: 150 });
//       color.value = withTiming('red', { duration: 250 });
      
//     })
//     .onFinalize(() => {
//       // Retour avec rebond naturel
//       scaleValue.value = withSpring(1, { damping: 10, stiffness: 80 });
//       color.value = withSpring('#008', { damping: 10, stiffness: 80 });
//     });

//   // Style animé
//   const animatedStyle = useAnimatedStyle(() => ({
//     transform: [{ scale: scaleValue.value }],
//     backgroundColor:color.value
//   }));

//   return (
//     <GestureHandlerRootView style={styles.container}>
//       <GestureDetector gesture={tapGesture}>
//         <Animated.View style={[styles.box, animatedStyle]}>
//           <Text style={styles.text}>Object</Text>
//         </Animated.View>
//       </GestureDetector>
//     </GestureHandlerRootView>
//   );
// };

// export default AnimationPop;

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//   box: { backgroundColor: 'red', padding: 20, borderRadius: 10 },
//   text: { color: 'white', fontSize: 16 },
// });
