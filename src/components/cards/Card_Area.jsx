import { View, Text, Image } from "react-native";
import React from "react";
import Text_Title from "../texts/Text_Title";
import Text_Paragraph from "../texts/Text_Paragraph";
import Text_Sub_Title from "../texts/Text_Sub_Title";
import valve_red from "../../assets/images/valve_red.png";

const Card_Area = ({ area, isFirst }) => {
	return (
		<View className="p-2 rounded-lg bg-[#FEF0EF]">
			<View className="flex-row justify-between items-center">
				<View className="flex-row items-center gap-x-0">
					{/* <Image source={valve} /> */}

					<View className="">
						<Text_Title
							text={`${area}`}
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
			</View>
		</View>
	);
};

export default Card_Area;
