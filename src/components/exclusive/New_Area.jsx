import React, { useState } from "react";
import { View, Text } from "react-native";
import Input_Field from "../inputs/Input_Field";
import Button_Function from "../buttons/Button_Function";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";

function New_Area() {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [image, setImage] = useState(null);

	const handleImageUpload = () => {
		// Image upload functionality will be implemented later
		console.log("Image upload pressed");
	};

	const handleNext = () => {
		// Next button functionality will be implemented later
		console.log("Next pressed");
	};

	return (
		<View className="flex-col h-full justify-between flex">
			<View className="">
				{/* Image Upload Section */}
				<TouchableOpacity
					onPress={handleImageUpload}
					className="border border-dashed border-gray-300 justify-center h-40 rounded-lg p-8 mb-6 items-center"
				>
					{/* <Image
					source={require("../../assets/icons/image-upload.png")} // You'll need to add this icon
					className="w-12 h-12 mb-2"
				/> */}
					<Text className="text-gray-500 text-center">
						Upload your image here
					</Text>
				</TouchableOpacity>

				{/* Input Fields */}
				<Input_Field
					label="Name"
					placeholder="Main Lawn"
					value={name}
					onChangeText={setName}
				/>

				<Input_Field
					label="Description"
					placeholder="The central gathering space for residents, perfect for events and leisure, now kept green and fresh effortlessly."
					value={description}
					onChangeText={setDescription}
				/>
			</View>

			{/* <View> */}
			{/* Next Button */}
			<Button_Function
				text="Next"
				onPress={handleNext}
			/>
			{/* </View> */}
		</View>
	);
}

export default New_Area;
