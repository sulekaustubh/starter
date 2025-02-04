import {
	View,
	Text,
	Button,
	Image,
	Pressable,
	Dimensions,
	PanResponder,
} from "react-native";
import React, { useState, useRef } from "react";
import user_zustand from "../../zustand/user";
import Button_Function from "../../components/buttons/Button_Function";
import ScreenContainer from "../../components/ScreenContainer";
import Text_Title from "../../components/texts/Text_Title";
import Text_Sub_Title from "../../components/texts/Text_Sub_Title";
import Button_Function_White from "../../components/buttons/Button_Function_White";
import area_empty from "../../assets/images/area_empty.png";
import { Animated } from "react-native";
import Container_Sheet from "../../components/containers/Container_Sheet";
import New_Area from "../../components/exclusive/New_Area";

const Area = () => {
	const { user, set_user } = user_zustand();
	const { height } = Dimensions.get("window");
	console.log(user);

	const [isOverlay, setIsOverlay] = useState(false);
	const [overlayOpacity] = useState(new Animated.Value(0));
	const translateY = useRef(new Animated.Value(height)).current;

	const panResponder = useRef(
		PanResponder.create({
			onMoveShouldSetPanResponder: (e, gestureState) => {
				const moveThreshold = 10;
				return (
					Math.abs(gestureState.dx) > moveThreshold ||
					Math.abs(gestureState.dy) > moveThreshold
				);
			},
			onStartShouldSetPanResponder: () => false,
			onPanResponderMove: (e, gestureState) => {
				translateY.setValue(Math.max(0, gestureState.dy));
			},
			onPanResponderRelease: (e, gestureState) => {
				if (gestureState.dy > height / 4) {
					closeSheet();
				} else {
					openSheet();
				}
			},
		})
	).current;

	const openSheet = () => {
		Animated.timing(translateY, {
			toValue: 0,
			duration: 300,
			useNativeDriver: true,
		}).start();
		setIsOverlay(true);
		Animated.timing(overlayOpacity, {
			toValue: 1,
			duration: 400,
			useNativeDriver: true,
		}).start();
	};

	const closeSheet = () => {
		Animated.timing(translateY, {
			toValue: height,
			duration: 300,
			useNativeDriver: true,
		}).start();
		Animated.timing(overlayOpacity, {
			toValue: 0,
			duration: 300,
			useNativeDriver: true,
		}).start(() => setIsOverlay(false));
	};

	return (
		<ScreenContainer>
			<View className=" items-center mb-2">
				<Image
					source={area_empty}
					className="w-16 h-16"
				/>
			</View>
			<Text_Title
				text="NO AREA ADDED"
				extra="text-base text-center"
			/>
			<Text_Sub_Title
				text="Centralize and streamline your entire building's infrastructure with cutting-edge"
				extra="text-center mx-4 capitalize"
			/>
			<Button_Function_White text="Add" />
			<Pressable
				className="absolute bottom-20 px-5 py-3 bg-blue_button rounded-md right-4"
				onPress={openSheet}
			>
				<Text>+</Text>
			</Pressable>

			<Container_Sheet
				translateY={translateY}
				panHandlers={panResponder.panHandlers}
				isOverlay={isOverlay}
				overlayOpacity={overlayOpacity}
				closeSheet={closeSheet}
				height="75%"
			>
				
				<New_Area />
			</Container_Sheet>
		</ScreenContainer>
	);
};

export default Area;
