import { Text, Pressable, Animated } from "react-native";
import React, { useRef } from "react";
import { useNavigation } from "@react-navigation/native";

const Button_Nav_White = ({ href, text }) => {
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
			onPressIn={animateIn}
			onPressOut={animateOut}
			onPress={() => navigation.navigate(href)}
		>
			<Animated.View
				className="bg-white border border-blue_button py-4 rounded-lg"
				style={{
					transform: [{ scale: animatedScale }],
				}}
			>
				<Text className="text-blue_button text-center">{text}</Text>
			</Animated.View>
		</Pressable>
	);
};

export default Button_Nav_White;
