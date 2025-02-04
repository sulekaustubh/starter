import {
	View,
	Text,
	Image,
	ScrollView,
	Pressable,
	Button,
	Animated,
	TouchableWithoutFeedback,
	TouchableOpacity,
	Dimensions,
	PanResponder,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";
import Card_Nav from "../../components/cards/Card_Nav";
import Button_Function from "../../components/buttons/Button_Function";
import ScreenContainer from "../../components/ScreenContainer";
import Text_Title from "../../components/texts/Text_Title";
import Text_Paragraph from "../../components/texts/Text_Paragraph";
import Container_Shadow from "../../components/containers/Container_Shadow";
import Text_Navigation from "../../components/texts/Text_Navigation";
import Notification from "../../assets/images/Notification.png";
import landscape from "../../assets/images/landscape.png";
import Text_Sub_Title from "../../components/texts/Text_Sub_Title";
import Card_Button from "../../components/cards/Card_Button";
import Button_Toggle from "../../components/buttons/Button_Toggle";
import Modal_Warning from "../../components/modals/Modal_Warning";
import Button_Function_Red from "../../components/buttons/Button_Function_Red";
import Modal_Confirm from "../../components/modals/Modal_Confirm";
import {
	useAnimatedStyle,
	withSpring,
	withDelay,
	useSharedValue,
} from "react-native-reanimated";
import user_zustand from "../../zustand/user";

const { height } = Dimensions.get("window");

const Dashboard = () => {
	// toggle button
	const [isDelay, setIsDelay] = useState(false);
	const [valveStates, setValveStates] = useState({});
	const [selectedValve, setSelectedValve] = useState(null);

	// modals
	const [isModalConfirm, setIsModalConfirm] = useState(false);
	const [isModalWarning, setIsModalWarning] = useState(false);

	const weatherData = [
		{ time: "Now", temp: "18°", icon: "☁️" },
		{ time: "10AM", temp: "19°", icon: "🌤️" },
		{ time: "11AM", temp: "22°", icon: "🌤️" },
		{ time: "12PM", temp: "23°", icon: "☀️" },
		{ time: "1PM", temp: "24°", icon: "🌧️" },
		{ time: "2PM", temp: "24°", icon: "🌧️" },
	];

	const { user } = user_zustand();

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

	const handleDelay = (hours) => {
		console.log("delay for ", hours, " hours");
		setIsModalWarning(false);
		setIsDelay(!isDelay);
	};

	const handleValve = (itemId) => {
		console.log("Yes, Turn Off");
		setIsModalConfirm(false);
		setValveStates((prev) => ({
			...prev,
			[itemId]: !prev[itemId],
		}));
	};

	return (
		<>
			{isModalWarning && (
				<Modal_Warning
					text_title="Delay all Script"
					text_paragraph="Are you sure you want to turn off this valve? This action will stop watering for this assigned area."
					text_button_1="for 24 hours"
					text_button_2="for 48 hours"
					onPress={handleDelay}
					onClose={() => {
						setIsModalWarning(false);
					}}
				/>
			)}

			{isModalConfirm && (
				<Modal_Confirm
					text_title="Turn off Valve"
					text_paragraph="Are you sure you want to turn off this valve? This action will stop watering for this assigned area."
					text_button_1="Yes, Turn Off"
					text_button_2="Cancel"
					onPress={() => handleValve(selectedValve)}
					onClose={() => {
						setIsModalConfirm(false);
					}}
				/>
			)}

			<ScreenContainer>
				<View style={{ flex: 1 }}>
					<ScrollView
						showsVerticalScrollIndicator={false}
						className="flex-1 mt-2"
					>
						<Container_Shadow>
							{/* Weather Section */}
							<View className="gap-y-2">
								<View className="flex-row justify-items-start">
									<Text_Sub_Title text="Today's Weather" />
								</View>
								<View className="flex-row justify-between">
									{weatherData.map((item, index) => (
										<View
											key={index}
											className="items-center"
										>
											<Text className="text-gray-800 mb-2 text-sm">
												{item.time}
											</Text>
											<Text className="text-2xl mb-1">
												{item.icon}
											</Text>
											<Text className="font-gilroy-medium text-sm">
												{item.temp}
											</Text>
										</View>
									))}
								</View>
							</View>
						</Container_Shadow>

						{/* Delay Script Section - Outside shadow container */}
						<Pressable
							onPress={() => {
								setIsModalWarning(true);
							}}
							className="bg-[#F26B4D] px-3 py-5 rounded-xl my-6"
						>
							<View className="flex-row justify-between items-center">
								<View>
									<Text_Title
										extra="text-base text-white"
										text="Delay All Scripts"
									/>
									<Text_Paragraph
										text="Delay all scripts in case of emergency."
										extra="text-white text-sm"
									/>
								</View>
								<Button_Toggle
									isEnabled={isDelay}
									onToggle={() => {
										setIsModalWarning(true);
									}}
								/>
							</View>
						</Pressable>

						{/* Area and Valve Group Card */}
						{/* Area Section */}
						<View className="mb-6">
							<View className="flex-row justify-between items-center mb-0">
								<Text_Title
									text="Area"
									extra="text-lg text-left"
								/>
								<Text_Navigation
									text="View All"
									extra="font-gilroy-medium"
								/>
							</View>
							<Container_Shadow extra="py-[8px] p-0 px-2 ">
								<View className="items-center py-0 bg-gray-50 rounded-xl">
									<Image
										source={landscape}
										className="h-16 w-16"
									/>
									<Text_Title
										text="NO AREA ADDED"
										extra="text-lg text-center"
									/>
									<Text_Paragraph
										text="Centralize And Streamline Your Entire Building's
									Infrastructure With Cutting-Edge"
										extra="text-center"
									/>
								</View>
								<Button_Function
									text="Add"
									onPress={() => {}}
								/>
							</Container_Shadow>
						</View>

						{/* Valve Group Section */}
						<View>
							<View className="flex-row justify-between items-center mb-2">
								<Text_Title
									text="Valve Group"
									extra="text-lg text-left"
								/>
								<Text_Navigation
									text="View All"
									extra="font-gilroy-medium text-blue_border "
								/>
							</View>
							<View className="gap-y-3 mb-20">
								{[1, 2].map((item) => (
									<Pressable
										key={item}
										onPress={() => {
											setSelectedValve(item);
											setIsModalConfirm(true);
										}}
									>
										<Card_Button
											isValve={valveStates[item] || false}
											item={item}
											isFirst={item === 1}
											onToggle={() => {
												setSelectedValve(item);
												setIsModalConfirm(true);
											}}
										/>
									</Pressable>
								))}
							</View>
						</View>
					</ScrollView>
				</View>
			</ScreenContainer>
		</>
	);
};

export default Dashboard;
