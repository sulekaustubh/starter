import { Pressable, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Text_Navigation = ({ text, screenName }) => {
	const navigation = useNavigation();

	return (
		<Pressable onPress={() => navigation.navigate(screenName)}>
			<Text className="text-blue_text font-gilroy-bold text-sm">{text}</Text>
		</Pressable>
	);
};

export default Text_Navigation;
