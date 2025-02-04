import { View, Text } from "react-native";
import React from "react";

const Text_Paragraph = ({ text, extra }) => {
	return <Text className={`text-gray-500 font-gilroy text-sm ${extra}`}>{text} </Text>;
};

export default Text_Paragraph;
