import { Text, Pressable, Animated } from "react-native";
import React, { useRef } from "react";
import { useNavigation } from "@react-navigation/native";

const Button_Nav_Blue = ({ href, text }) => {
	const navigation = useNavigation();
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
			className="mt-6"
			onPressIn={animateIn}
			onPressOut={animateOut}
			onPress={() => navigation.navigate(href)}
		>
			<Animated.View
				className="bg-blue_button py-4 border border-blue_button rounded-lg"
				style={{
					transform: [{ scale: animatedScale }],
				}}
			>
				<Text className="text-white text-center">{text}</Text>
			</Animated.View>
		</Pressable>
	);
};

export default Button_Nav_Blue;
