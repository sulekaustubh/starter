import { View, Text } from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import "./global.css";
import AuthNavigator from "./src/navigators/AuthNavigator";

const App = () => {
	const url = process.env.API_URL;
	return (
		<NavigationContainer>
			<View className="flex-1 bg-white">
				<AuthNavigator />
			</View>
		</NavigationContainer>
	);
};

export default App;
