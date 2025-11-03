import { Pressable, Text, View, StyleSheet } from 'react-native';
import React from 'react';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

const AnimationTraining1 = () => {
  const scaleValue = useSharedValue(1);
  const opacity = useSharedValue(1);

  const handlePress = () => {
    // toggle scale et opacity
    scaleValue.value = scaleValue.value === 1 ? 2 : 1;
    opacity.value = opacity.value === 1 ? 0.1 : 1;
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withTiming(scaleValue.value, { duration: 500 }) }],
    opacity: withTiming(opacity.value, { duration: 500 }),
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.button, animatedStyle]}>
        <Pressable onPress={handlePress} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.text}>Click</Text>
        </Pressable>
      </Animated.View>
    </View>
  );
};

export default AnimationTraining1;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  button: { backgroundColor: 'red', borderRadius: 10, width: 100, height: 50 },
  text: { color: 'white', fontSize: 16, textAlign: 'center' },
});
