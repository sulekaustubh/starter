import { View } from "react-native";
import React, { useState } from "react";
import ScreenContainer from "../../components/ScreenContainer";
import Text_Title from "../../components/texts/Text_Title";
import Text_Sub_Title from "../../components/texts/Text_Sub_Title";
import Button_Function from "../../components/buttons/Button_Function";
import Input_Field from "../../components/inputs/Input_Field";
import Text_Navigation from "../../components/texts/Text_Navigation";
import Container_Shadow from "../../components/containers/Container_Shadow";
import Container_Logo from "../../components/containers/Container_Logo";
import { useNavigation } from "@react-navigation/native";

const SetPassword = () => {
	const navigation = useNavigation();
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleLogin = () => {
		console.log("Password set successfully");
	};

	return (
		<ScreenContainer>
			<Container_Shadow>
				<Container_Logo />
				<Text_Title
					extra="text-center"
					text="Set your Password"
				/>
				<Text_Sub_Title
					extra="text-center"
					text="Enter your email and password to log in"
				/>

				<View className="mt-6">
					<Input_Field
						label="Password"
						placeholder="Enter New Password"
						secureTextEntry
						value={password}
						onChangeText={setPassword}
					/>

					<Input_Field
						label="Confirm Password"
						placeholder="Re-enter password"
						secureTextEntry
						value={confirmPassword}
						onChangeText={setConfirmPassword}
					/>
				</View>

				<Button_Function
					text="Login"
					onPress={handleLogin}
				/>

				<View className="mt-6 flex-row justify-center">
					<Text_Navigation
						text="I'll do it later"
						screenName="SelectSite"
					/>
				</View>
			</Container_Shadow>
		</ScreenContainer>
	);
};

export default SetPassword;
