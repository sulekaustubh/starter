import { View, Text, Pressable } from "react-native";
import React from "react";
import Text_Title from "../texts/Text_Title";
import Text_Paragraph from "../texts/Text_Paragraph";
import Button_Function_Red from "../buttons/Button_Function_Red";

const Modal_Warning = ({
	text_title,
	text_paragraph,
	text_button_1,
	text_button_2,
	onPress,
	onClose,
}) => {
	return (
		<Pressable
			onPress={() => onClose()}
			className="bg-black/30  p-6 justify-center items-center absolute w-full h-full z-50"
		>
			<Pressable
				onPress={(e) => e.stopPropagation()}
				className="bg-white rounded-lg w-full p-6 h-auto"
			>
				{/* CONTENT */}
				<View className="">
					{/* Warning Icon */}
					<View className="flex-row mb-8 justify-center">
						<View className="w-20 aspect-square bg-red-500 rounded-full items-center justify-center my-6">
							<Text className="text-white text-4xl">!</Text>
						</View>
					</View>

					<Text_Title
						extra="text-center"
						text={text_title}
					/>

					<Text_Paragraph
						extra="text-center mt-2"
						text={text_paragraph}
					/>

					{/* Buttons Container */}
					<View className=" flex-row justify-between mt-6">
						<View className="w-[48.5%]">
							<Button_Function_Red
								onPress={() => {
									onPress(24);
								}}
								text={text_button_1}
							/>
						</View>

						<View className="w-[48.5%]">
							<Button_Function_Red
								onPress={() => {
									onPress(48);
								}}
								text={text_button_2}
							/>
						</View>
					</View>
				</View>
			</Pressable>
		</Pressable>
	);
};

export default Modal_Warning;
