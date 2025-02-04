import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Building from "../../assets/images/Building.png";
import bell from "../../assets/images/bell_2.png";

const Card_Header = ({ name, location, onPress }) => (
	<TouchableOpacity
		onPress={onPress}
		className="flex-row  items-center rounded-lg py-2 mt-0"
	>
		<View className=" rounded-[4px] justify-center items-center">
			<Image
				source={Building}
				className="h-7 w-7"
				resizeMode="contain"
			/>
		</View>

		<View className="flex-1 ml-2">
			<Text className="text-sm font-gilroy-bold text-black_text_matte">
				{name}
			</Text>
			<Text className="text-xs font-gilroy-medium text-blue_button">
				{location}
			</Text>
		</View>

		<View className="justify-center items-center">
			<Image
				source={bell}
				className="h-6 w-6"
				resizeMode="contain"
			/>
		</View>
	</TouchableOpacity>
);

export default Card_Header;
