import React from "react";
import { Pressable } from "react-native";
import Animated, {
	useSharedValue,
	useAnimatedStyle,
	withSpring,
	interpolateColor,
} from "react-native-reanimated";

const Button_Toggle = ({ isEnabled, onToggle, size = "default", bg = "bg-green-500" }) => {
	// Animation value
	const offset = useSharedValue(isEnabled ? 24 : 0);

	// Define sizes
	const sizes = {
		default: {
			width: 56,
			height: 32,
			knobSize: 24,
			translateX: 24,
		},
		small: {
			width: 44,
			height: 24,
			knobSize: 18,
			translateX: 18,
		},
	};

	const currentSize = sizes[size] || sizes.default;

	// Spring configuration for smoother animation
	const springConfig = {
		mass: 1,
		damping: 15,
		stiffness: 120,
		overshootClamping: false,
		restSpeedThreshold: 0.001,
		restDisplacementThreshold: 0.001,
	};

	// Animated styles for the knob
	const animatedStyles = useAnimatedStyle(() => {
		return {
			transform: [
				{
					translateX: withSpring(
						isEnabled ? currentSize.translateX : 0,
						springConfig
					),
				},
			],
			backgroundColor: "white",
			width: currentSize.knobSize,
			height: currentSize.knobSize,
			borderRadius: currentSize.knobSize / 2,
			position: "absolute",
			top: (currentSize.height - currentSize.knobSize) / 2,
			left: 4,
		};
	});

	// Handle toggle
	const toggleSwitch = () => {
		onToggle(!isEnabled);
	};

	return (
		<Pressable
			onPress={toggleSwitch}
			className={`rounded-full justify-center ${
				isEnabled ? `${bg}` : "bg-gray-300"
			}`}
			style={{
				width: currentSize.width,
				height: currentSize.height,
			}}
		>
			<Animated.View style={animatedStyles} />
		</Pressable>
	);
};

export default Button_Toggle;
