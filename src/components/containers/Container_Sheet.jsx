import React from "react";
import { Animated, View, Pressable } from "react-native";
import { PanResponder } from "react-native";
import Text_Title from "../texts/Text_Title";
import Card_Nav from "../cards/Card_Nav";

const Container_Sheet = ({
	translateY,
	panHandlers,
	isOverlay,
	overlayOpacity,
	closeSheet,
	children,
	height = "50%",
}) => {
	return (
		<>
			{/* BOTTOM SHEET OVERLAY */}
			{isOverlay && (
				<Animated.View
					style={{
						opacity: overlayOpacity,
						backgroundColor: "rgba(0, 0, 0, 0.2)",
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
					}}
				>
					<Pressable
						onPress={closeSheet}
						style={{ flex: 1 }}
					/>
				</Animated.View>
			)}
			<Animated.View
				className={`absolute px-4 pt-8 pb-20 bottom-0 overflow-hidden z-10 left-0 right-0 bg-white rounded-xl border-red-400`}
				style={{
					transform: [{ translateY }],
					height: height,
				}}
				{...panHandlers}
			>
				{children}
			</Animated.View>
			{/* BOTTOM SHEET OVERLAY */}
		</>
	);
};

export default Container_Sheet;
