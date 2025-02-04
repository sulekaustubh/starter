import { View, Text, TextInput } from "react-native";
import React from "react";

const Input_Field = ({
	label,
	placeholder,
	secureTextEntry = false,
	value,
	onChangeText,
	numeric = false,
}) => {
	return (
		<>
			<Text className="mb-2 text-black text-sm font-gilroy-medium">
				{label}
			</Text>
			<TextInput
				placeholderTextColor="gray"
				placeholder={placeholder}
				secureTextEntry={secureTextEntry}
				value={value}
				onChangeText={onChangeText}
				keyboardType={numeric ? "numeric" : "default"}
				className="border text-sm font-gilroy text-black border-gray-300 rounded-lg px-3 py-4 mb-4"
			/>
		</>
	);
};

export default Input_Field;
