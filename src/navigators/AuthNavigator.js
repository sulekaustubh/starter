import React from "react";
import {
	createStackNavigator,
	TransitionPresets,
} from "@react-navigation/stack";
import { View } from "react-native";

// import Login from "../screens/auth/Login";
import GetStarted from "../screens/auth/GetStarted";
// import ForgotPassword from "../screens/auth/ForgotPassword";
// import NewPassword from "../screens/auth/NewPassword";
// import SetPassword from "../screens/auth/SetPassword";
// import SelectSite from "../screens/auth/SelectSite";

const Stack = createStackNavigator();

const AuthNavigator = () => {
	return (
		<View className="flex-1 bg-white">
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
					...TransitionPresets.SlideFromRightIOS,
					cardStyle: { backgroundColor: "white" },
					presentation: "card",
					animationEnabled: true,
					detachPreviousScreen: false,
					cardOverlayEnabled: false,
					gestureEnabled: true,
					gestureDirection: "horizontal",
				}}
			>
				<Stack.Screen
					name="GetStarted"
					component={GetStarted}
				/>
				{/* <Stack.Screen
					name="Login"
					component={Login}
				/>
				<Stack.Screen
					name="ForgotPassword"
					component={ForgotPassword}
				/>
				<Stack.Screen
					name="NewPassword"
					component={NewPassword}
				/>
				<Stack.Screen
					name="SetPassword"
					component={SetPassword}
				/>
				<Stack.Screen
					name="SelectSite"
					component={SelectSite}
				/> */}
			</Stack.Navigator>
		</View>
	);
};

export default AuthNavigator;
