import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Building from "../../assets/images/Building.png";
import Arrow from "../../assets/images/Arrow.png";
import Animated from "react-native-reanimated";

const Card_Nav = ({ name, location, onPress, animatedStyle }) => (
	<Animated.View style={animatedStyle}>
		<TouchableOpacity
			onPress={onPress}
			className="flex-row border border-gray_border items-center bg-white rounded-lg px-2 py-2 mt-0"
		>
			<View className=" bg-gray_bg p-2 rounded-[4px] justify-center items-center">
				<Image
					source={Building}
					className="h-7 w-7"
					resizeMode="contain"
				/>
			</View>

			<View className="flex-1 ml-2">
				<Text className="text-sm font-gilroy-bold text-black_text_matte">
					{name}
				</Text>
				<Text className="text-xs font-gilroy-medium text-blue_button">
					{location}
				</Text>
			</View>

			<View className=" bg-gray_bg p-2 rounded-full justify-center items-center">
				<Image
					source={Arrow}
					className="h-5 w-5"
					resizeMode="contain"
				/>
			</View>
		</TouchableOpacity>
	</Animated.View>
);

export default Card_Nav;
