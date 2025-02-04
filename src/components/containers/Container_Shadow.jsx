import { View, Text } from "react-native";
import React from "react";

const Container_Shadow = ({ children, extra }) => {
	return (
		<View className={`rounded-lg bg-white p-4 py-6 shadow-xl shadow-blue-200 ${extra}`}>
			{children}
		</View>
	);
};

export default Container_Shadow;
