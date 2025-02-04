import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import Text_Title from "../texts/Text_Title";
import Text_Paragraph from "../texts/Text_Paragraph";
import Text_Sub_Title from "../texts/Text_Sub_Title";
import valve_red from "../../assets/images/valve_red.png";
import Button_Toggle from "../buttons/Button_Toggle";

const Card_Button = ({ item, isFirst, isValve, onToggle }) => {
	
	return (
		<View
			className={`py-2 rounded-xl ${
				isFirst ? "bg-[#ffdada]" : "bg-[#cde1fe]"
			}`}
		>
			<View className="flex-row justify-between items-center">
				<View className="flex-row items-center gap-x-0">
					<View className="h-10  mx-2 w-10 bg-white rounded-full items-center justify-center">
						<Image
							source={valve_red}
							className="h-5 w-5"
							resizeMode="contain"
						/>
					</View>
					{/* <Image source={valve} /> */}

					<View className="">
						<Text_Title
							text={`Valve Name ${item}`}
							extra="font-gilroy text-left text-base"
						/>
						<Text_Sub_Title
							text="Recipe: Morning Drip"
							extra="text-gray-500 text-sm "
						/>

						<Text_Sub_Title
							text="Start Time: 7:30 AM"
							extra="text-gray-500 text-sm"
						/>
					</View>
				</View>
				<View className="flex-row mr-2 items-center gap-x-2">
					<Button_Toggle
						bg="bg-blue_button"
						size="small"
						isEnabled={isValve}
						onToggle={onToggle}
					/>
					<Text>⋮</Text>
				</View>
			</View>
		</View>
	);
};

export default Card_Button;
