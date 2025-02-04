import { Text, Pressable, Animated } from "react-native";
import React, { useRef } from "react";

const Button_Function_White = ({ onPress, text }) => {
	const animatedScale = useRef(new Animated.Value(1)).current;

	const animateIn = () => {
		Animated.spring(animatedScale, {
			toValue: 0.97,
			useNativeDriver: true,
		}).start();
	};

	const animateOut = () => {
		Animated.spring(animatedScale, {
			toValue: 1,
			useNativeDriver: true,
		}).start();
	};

	return (
		<Pressable
			className="mt-4"
			onPressIn={animateIn}
			onPressOut={animateOut}
			onPress={onPress}
		>
			<Animated.View
				className="bg-white py-4 border border-blue_button rounded-lg"
				style={{
					transform: [{ scale: animatedScale }],
				}}
			>
				<Text className="text-blue_button font-gilroy-medium text-center">{text}</Text>
			</Animated.View>
		</Pressable>
	);
};

export default Button_Function_White;
