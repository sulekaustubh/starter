import { View, Text } from "react-native";
import React from "react";

const Text_Sub_Title = ({ text, extra }) => {
	return (
		<View className="mt-0" >
			<Text className={`text-gray-500 font-gilroy-medium text-xs ${extra}`}>{text}</Text>
		</View>
	);
};

export default Text_Sub_Title;
