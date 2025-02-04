import { View, Text, Image } from "react-native";
import React from "react";
import ScreenContainer from "../../components/ScreenContainer";
import Button_Nav_Blue from "../../components/buttons/Button_Nav_Blue";
import Button_Nav_White from "../../components/buttons/Button_Nav_White";
import Text_Sub_Title from "../../components/texts/Text_Sub_Title";
import Text_Title from "../../components/texts/Text_Title";
import get_started_building from "../../assets/images/get_started_building.png";
import logo_text from "../../assets/images/logo_text.png";

const GetStarted = () => {
	return (
		<ScreenContainer>
			<View className="flex flex-col justify-between h-[96%]">
				<View className="flex justify-center items-center">
					<Image
						className="h-16 w-[170px]"
						source={logo_text}
					/>
				</View>
				<View className=" gap-y-6 flex justify-center items-center ">
					<Image
						className="h-[47.32%] border-0 w-[98.9%]"
						source={get_started_building}
					/>
					<View className="">
						<Text_Title
							extra="text-lg text-center"
							text="SMART BUILDING MANAGEMENT"
						/>
						<Text_Sub_Title
							extra="text-center"
							text="Centralize And Streamline Your Entire Building's Infrastructure With Cutting-Edge Intelligent Automation For Enhanced Efficiency And Control."
						/>
					</View>
				</View>
				<View className="gap-y-2">
					<Button_Nav_Blue
						text="Login"
						href="Login"
					/>
					<Button_Nav_White
						text="Register"
						href="GetStarted"
					/>
				</View>
			</View>
		</ScreenContainer>
	);
};

export default GetStarted;
