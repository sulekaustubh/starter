import { View, Text } from "react-native";
import React from "react";

const Text_Title = ({ text, extra }) => {
	return (
		<View className="">
			<Text
				className={`text-2xl text-black_title font-gilroy-bold ${extra}`}
			>
				{text}
			</Text>
		</View>
	);
};

export default Text_Title;
