import { View, Text, Pressable } from "react-native";
import React from "react";
import Text_Title from "../texts/Text_Title";
import Text_Paragraph from "../texts/Text_Paragraph";
import Button_Function_Red from "../buttons/Button_Function_Red";
import Button_Function from "../buttons/Button_Function";
import Card_Area from "../cards/Card_Area";

const Modal_Confirm = ({
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
				<View className="">
					<Card_Area area="Area Name" />
					{/* Icon */}
					<View className="flex-row my-8 justify-center">
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
					<View className="gap-y-2 mt-4">
						<Button_Function
							onPress={onPress}
							text={text_button_1}
						/>

						<Button_Function_Red
							onPress={onClose}
							text={text_button_2}
						/>
					</View>
				</View>
			</Pressable>
		</Pressable>
	);
};

export default Modal_Confirm;
