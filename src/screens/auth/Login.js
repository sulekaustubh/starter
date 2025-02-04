import { useNavigation } from "@react-navigation/native";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Pressable,
	Animated,
	Image,
} from "react-native";
import React, { useState, useRef } from "react";
import ScreenContainer from "../../components/ScreenContainer";
import Text_Title from "../../components/texts/Text_Title";
import Text_Sub_Title from "../../components/texts/Text_Sub_Title";
import ButtonNavigation from "../../components/buttons/Button_Nav_Blue";
import Button_Function from "../../components/buttons/Button_Function";
import Input_Field from "../../components/inputs/Input_Field";
import Text_Navigation from "../../components/texts/Text_Navigation";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Text_Paragraph from "../../components/texts/Text_Paragraph";
import logo from "../../assets/logo.png";
import Container_Shadow from "../../components/containers/Container_Shadow";
import Container_Logo from "../../components/containers/Container_Logo";
import { Api_Post } from "../../apis/Api_Post";
import Toast from "react-native-toast-message";
import user_zustand from "../../zustand/user";

const Login = () => {
	const { set_user } = user_zustand();
	const navigation = useNavigation();
	const [email, setEmail] = useState("7990882170");
	const [password, setPassword] = useState("Test@1234");
	const [rememberMe, setRememberMe] = useState(false);
	const animatedScale = useRef(new Animated.Value(1)).current;

	const animateIn = () => {
		Animated.spring(animatedScale, {
			toValue: 0.9,
			useNativeDriver: true,
		}).start();
	};

	const animateOut = () => {
		Animated.spring(animatedScale, {
			toValue: 1,
			useNativeDriver: true,
		}).start();
	};

	const handleLogin = async () => {
		if (false) {
			navigation.navigate("SetPassword");
		} else {
			// console.log(
			// 	"Login attempt with:",
			// 	email,
			// 	password,
			// 	"Remember me:",
			// 	rememberMe
			// );
			const response = await Api_Post("/Login/Login", {
				userName: email,
				password: password,
			});
			if (response.responseCode === 200) {
				set_user({
					access_token: response.data.token,

					username: response.data.username,
					email: response.data.email,
					id: response.data.userId,
					firstName: response.data.firstName,
					// isLoggedIn: true,
				});
				Toast.show({
					type: "toast_success",
					text1: response.responseMessage,
				});
				navigation.navigate("SelectSite");
			} else {
				if (email.length < 10) {
					Toast.show({
						type: "toast_error",
						text1: "Invalid mobile number",
					});
				}
				if (password.length == 10) {
					Toast.show({
						type: "toast_error",
						text1: "Invalid mobile number",
					});
				}
				
				else {
					Toast.show({
						type: "toast_error",
						text1: response.responseMessage,
					});
				}
			}

			// console.log(response);
			// Show a success toast
			console.log("yayyy");
		}
	};

	// Show an error toast
	// Toast.show({
	// 	type: "error",
	// 	text1: "Error",
	// 	text2: "Please enter both email and password",
	// });

	return (
		<ScreenContainer>
			<Container_Shadow>
				<Container_Logo />
				<Text_Title
					extra=" text-center"
					text="Log in to your Account"
				/>
				<Text_Sub_Title
					extra="text-center"
					text="Enter your mobile number and password"
				/>

				<View className="mt-6">
					<Input_Field
						numeric
						label="Mobile"
						placeholder="Enter your mobile number"
						value={email}
						onChangeText={setEmail}
					/>

					<Input_Field
						label="Password"
						placeholder="Enter your password"
						secureTextEntry
						value={password}
						onChangeText={setPassword}
					/>
				</View>

				<View className="flex-row justify-between">
					<Pressable
						onPressIn={animateIn}
						onPressOut={animateOut}
						onPress={() => setRememberMe(!rememberMe)}
						className="flex-row items-center w-1/2"
					>
						<Animated.View
							style={{
								transform: [{ scale: animatedScale }],
							}}
						>
							<BouncyCheckbox
								className="w-7"
								size={18}
								fillColor="#16a34a"
								unfillColor="#FFFFFF"
								iconStyle={{
									borderColor: "#9ca3af",
									borderRadius: 4,
								}}
								innerIconStyle={{
									borderWidth: 1.6,
									borderRadius: 4,
								}}
								useNativeDriver={true}
								isChecked={rememberMe}
								text=""
								disableBuiltInState
							/>
						</Animated.View>
						<Text_Paragraph text="Remember me" />
					</Pressable>

					<Text_Navigation
						text="Forgot Password ?"
						screenName="ForgotPassword"
					/>
				</View>

				<Button_Function
					text="Login"
					onPress={handleLogin}
				/>

				<View className="mt-6 flex-row justify-center">
					<Text_Paragraph text="Don't have an account ?" />
					<Text_Navigation
						text="Register"
						screenName="Login"
					/>
				</View>
			</Container_Shadow>
		</ScreenContainer>
	);
};

export default Login;
