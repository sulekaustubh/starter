import { View, Animated } from "react-native";
import React, { useState, useRef } from "react";
import ScreenContainer from "../../components/ScreenContainer";
import Text_Title from "../../components/texts/Text_Title";
import Text_Sub_Title from "../../components/texts/Text_Sub_Title";
import ButtonNavigation from "../../components/buttons/Button_Nav_Blue";
import Button_Function from "../../components/buttons/Button_Function";
import Input_Field from "../../components/inputs/Input_Field";
import Text_Navigation from "../../components/texts/Text_Navigation";


import Text_Paragraph from "../../components/texts/Text_Paragraph";

import Container_Shadow from "../../components/containers/Container_Shadow";
import Container_Logo from "../../components/containers/Container_Logo";
import { useNavigation } from "@react-navigation/native";

const ForgotPassword = () => {
	const navigation = useNavigation();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [rememberMe, setRememberMe] = useState(false);

	const handleLogin = () => {
		navigation.navigate("NewPassword");
	};

	return (
		<ScreenContainer>
			<Container_Shadow>
				<Container_Logo />
				<Text_Title
					extra="text-center"
					text="Forgot Password ?"
				/>
				<Text_Sub_Title
					extra="text-center"
					text="Enter your email to receive OTP"
				/>

				<View className="mt-6">
					<Input_Field
						label="Mobile or Email"
						placeholder="Enter Email or Phone Number"
						value={email}
						onChangeText={setEmail}
					/>

					<Input_Field
						label="OTP"
						placeholder="Enter OTP"
						secureTextEntry
						value={password}
						onChangeText={setPassword}
					/>
				</View>

				<View className="mb-0">
					<Text_Navigation
						text="Resend"
						screenName="Register"
					/>
				</View>

				<Button_Function
					text="Confirm"
					onPress={handleLogin}
				/>

				<View className="mt-6 flex-row justify-center">
					<Text_Paragraph text="Already have an account ?" />
					<Text_Navigation
						text="Login"
						screenName="Login"
					/>
				</View>
			</Container_Shadow>
		</ScreenContainer>
	);
};

export default ForgotPassword;
