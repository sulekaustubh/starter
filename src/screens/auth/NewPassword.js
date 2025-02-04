import { View, Animated } from "react-native";
import React, { useState, useRef } from "react";
import ScreenContainer from "../../components/ScreenContainer";
import Text_Title from "../../components/texts/Text_Title";
import Text_Sub_Title from "../../components/texts/Text_Sub_Title";
import ButtonNavigation from "../../components/buttons/Button_Nav_Blue";
import Button_Function from "../../components/buttons/Button_Function";
import Input_Field from "../../components/inputs/Input_Field";
import Text_Navigation from "../../components/texts/Text_Navigation";
import { useNavigation } from "@react-navigation/native";

import Text_Paragraph from "../../components/texts/Text_Paragraph";

import Container_Shadow from "../../components/containers/Container_Shadow";
import Container_Logo from "../../components/containers/Container_Logo";

const NewPassword = () => {
	const navigation = useNavigation();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [rememberMe, setRememberMe] = useState(false);

	const handleLogin = () => {
        navigation.navigate("Login");

	};

	return (
		<ScreenContainer>
			<Container_Shadow>
				<Container_Logo />
				<Text_Title
					extra="text-center"
					text="New Password"
				/>
				<Text_Sub_Title
					extra="text-center"
					text="Enter your new password"
				/>

				<View className="mt-6">
					<Input_Field
						label="New Password"
						placeholder="Enter your new password"
						value={email}
						onChangeText={setEmail}
					/>

					<Input_Field
						label="Confirm Password"
						placeholder="Re-enter password"
						secureTextEntry
						value={password}
						onChangeText={setPassword}
					/>
				</View>

				<Button_Function
					text="Done"
					onPress={handleLogin}
				/>
			</Container_Shadow>
		</ScreenContainer>
	);
};

export default NewPassword;
