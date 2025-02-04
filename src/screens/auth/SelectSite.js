import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import ScreenContainer from "../../components/ScreenContainer";
import Text_Title from "../../components/texts/Text_Title";
import Text_Sub_Title from "../../components/texts/Text_Sub_Title";
import Button_Function from "../../components/buttons/Button_Function";
import Container_Shadow from "../../components/containers/Container_Shadow";
import Container_Logo from "../../components/containers/Container_Logo";
import { useNavigation } from "@react-navigation/native";
import Card_Nav from "../../components/cards/Card_Nav";
import {
	useAnimatedStyle,
	withSpring,
	withDelay,
	useSharedValue,
} from "react-native-reanimated";
import user_zustand from "../../zustand/user";

const SelectSite = () => {
	const navigation = useNavigation();
	const { user,set_user } = user_zustand();
	const sites = [
		{
			name: "Green Meadows Residency",
			location: "Adajan, Surat",
		},
		{
			name: "Palm Grove Enclave",
			location: "Parle Point, Surat",
		},
		{
			name: "Sunshine Valley Complex",
			location: "Kamrej, Surat",
		},
		{
			name: "Maplewood Towers",
			location: "Vesu, Surat",
		},
	];

	// Create an array of animated values for each card
	const translateYValues = sites.map(() => useSharedValue(50));
	const opacityValues = sites.map(() => useSharedValue(0));

	useEffect(() => {
		const INITIAL_DELAY = 200; // 500ms delay before the first card animates

		// Animate each card with a delay
		sites.forEach((_, index) => {
			const delay = INITIAL_DELAY + index * 200; // Add initial delay to each card's delay

			translateYValues[index].value = withDelay(
				delay,
				withSpring(0, {
					damping: 12,
					stiffness: 100,
				})
			);

			opacityValues[index].value = withDelay(
				delay,
				withSpring(1, {
					damping: 12,
					stiffness: 100,
				})
			);
		});
	}, []);

	// Create animated styles for each card
	const animatedStyles = sites.map((_, index) =>
		useAnimatedStyle(() => ({
			transform: [{ translateY: translateYValues[index].value }],
			opacity: opacityValues[index].value,
		}))
	);

	return (
		<ScreenContainer>
			<Container_Shadow>
				<Container_Logo />
				<Text_Title
					extra="text-center"
					text={`Welcome back, ${user.firstName}`}
				/>
				<Text_Sub_Title
					extra="text-center"
					text="Your Society Overview"
				/>

				<View className="mt-6 gap-y-3">
					{sites.map((site, index) => (
						<Card_Nav
							key={index}
							name={site.name}
							location={site.location}
							onPress={() => {
								set_user({
									isLoggedIn: true,
									// site_id: site.id,
								});
								// navigation.navigate("NextScreen");
							}}
							animatedStyle={animatedStyles[index]}
						/>
					))}
				</View>
			</Container_Shadow>
		</ScreenContainer>
	);
};

export default SelectSite;
