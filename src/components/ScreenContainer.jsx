import { View, Text } from "react-native";
import React from "react";
import pattern from "../assets/Pattern.png";

const ScreenContainer = ({ children }) => {
	return <View className="flex-1 justify-center bg-slate-100 px-6 ">{children}</View>;
};

export default ScreenContainer;
