import { View, Text, Image } from "react-native";
import React from "react";
import logo from "../../assets/logo.png";


const Container_Logo = () => {
	return (
		<View className="mb-4 justify-center flex-row">
			<Image
				className="h-14 w-14"
				source={logo}
			/>
		</View>
	);
};

export default Container_Logo;
