import { View, Text } from "react-native";
import React from "react";

import "./global.css";

const App = () => {
	const url = process.env.API_URL;
	return (
		<View>
			<Text className="text-red-500 font-bold bg-white italic">
				{url}.
			</Text>
		</View>
	);
};

export default App;
