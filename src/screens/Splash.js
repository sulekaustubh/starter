import { View, Image } from "react-native";
import React from "react";
import Animated, {
	useAnimatedStyle,
	withTiming,
	withSpring,
	useSharedValue,
} from "react-native-reanimated";
import ScreenContainer from "../components/ScreenContainer";
import logo_text from "../assets/images/logo_text.png";

const Splash = () => {
	const opacity = useSharedValue(0);
	const scale = useSharedValue(1.5);
	const rotation = useSharedValue(-15);

	React.useEffect(() => {
		opacity.value = withTiming(1, { duration: 800 });
		scale.value = withSpring(1, {
			damping: 12,
			stiffness: 80,
			mass: 1.5,
		});
		rotation.value = withSpring(0, {
			damping: 10,
			stiffness: 60,
		});
	}, []);

	const animatedStyle = useAnimatedStyle(() => ({
		opacity: opacity.value,
		transform: [{ scale: scale.value }, { rotate: `${rotation.value}deg` }],
	}));

	return (
		<ScreenContainer>
			<View className="flex-1 justify-center items-center">
				<Animated.Image
					className="h-16 w-[180px]"
					source={logo_text}
					style={animatedStyle}
				/>
			</View>
		</ScreenContainer>
	);
};

export default Splash;
