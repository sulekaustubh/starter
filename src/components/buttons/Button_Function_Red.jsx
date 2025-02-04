import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Button_Function_Red = ({ text, onPress }) => {
	return (
		<TouchableOpacity
			className="border border-red_button rounded-lg py-3 w-full"
			onPress={onPress}
		>
			<Text className="text-center font-gilroy text-base tracking-wide text-red_button">
				{text}
			</Text>
		</TouchableOpacity>
	);
};

export default Button_Function_Red;
