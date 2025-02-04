import React, { useState, useRef, useEffect } from "react";
import {
	Dimensions,
	View,
	StyleSheet,
	Text,
	Image,
	TouchableOpacity,
	Animated,
	PanResponder,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Icon from "react-native-vector-icons/Ionicons";
import { BlurView } from "@react-native-community/blur";

import dashboard_active from "../assets/images/dashboard_active.png";
import dashboard_inactive from "../assets/images/dashboard_inactive.png";
// import area_active from "../assets/images/area_active.png";
import area_inactive from "../assets/images/area_inactive.png";

// Import your screen components
import Dashboard from "../screens/tabs/Dashboard";
import Area from "../screens/tabs/Area";
import Card_Header from "../components/cards/Card_Header";
import Container_Sheet from "../components/containers/Container_Sheet";
import user_zustand from "../zustand/user";
import {
	useAnimatedStyle,
	withSpring,
	withDelay,
	useSharedValue,
} from "react-native-reanimated";
import Card_Nav from "../components/cards/Card_Nav";

const initialLayout = { width: Dimensions.get("window").width };
const { height } = Dimensions.get("window");

const TabNavigator = () => {
	const [index, setIndex] = useState(0);
	const [routes] = useState([
		{ key: "dashboard", title: "Dashboard", icon: dashboard_active },
		{ key: "area", title: "Area", icon: area_inactive },
	]);

	const [isOverlay, setIsOverlay] = useState(false);
	const [overlayOpacity] = useState(new Animated.Value(0));
	const translateY = useRef(new Animated.Value(height)).current;

	const { user } = user_zustand();

	const sites = [
		{
			name: "Green Meadows Residency",
			location: "Adajan, Surat",
		},
		// ... other sites ...
	];

	const translateYValues = sites.map(() => useSharedValue(50));
	const opacityValues = sites.map(() => useSharedValue(0));

	useEffect(() => {
		const INITIAL_DELAY = 200;
		sites.forEach((_, index) => {
			const delay = INITIAL_DELAY + index * 200;
			translateYValues[index].value = withDelay(
				delay,
				withSpring(0, {
					damping: 12,
					stiffness: 100,
				})
			);
			opacityValues[index].value = withDelay(
				delay,
				withSpring(1, {
					damping: 12,
					stiffness: 100,
				})
			);
		});
	}, []);

	const animatedStyles = sites.map((_, index) =>
		useAnimatedStyle(() => ({
			transform: [{ translateY: translateYValues[index].value }],
			opacity: opacityValues[index].value,
		}))
	);

	const fadeInOverlay = () => {
		Animated.timing(overlayOpacity, {
			toValue: 1,
			duration: 400,
			useNativeDriver: true,
		}).start();
	};

	const fadeOutOverlay = () => {
		Animated.timing(overlayOpacity, {
			toValue: 0,
			duration: 300,
			useNativeDriver: true,
		}).start(() => setIsOverlay(false));
	};

	const openSheet = () => {
		Animated.timing(translateY, {
			toValue: 0,
			duration: 300,
			useNativeDriver: true,
		}).start();
		setIsOverlay(true);
		fadeInOverlay();
	};

	const closeSheet = () => {
		Animated.timing(translateY, {
			toValue: height,
			duration: 300,
			useNativeDriver: true,
		}).start();
		fadeOutOverlay();
	};

	const panResponder = useRef(
		PanResponder.create({
			onMoveShouldSetPanResponder: (e, gestureState) => {
				const moveThreshold = 10;
				return (
					Math.abs(gestureState.dx) > moveThreshold ||
					Math.abs(gestureState.dy) > moveThreshold
				);
			},
			onStartShouldSetPanResponder: (e, gestureState) => false,
			onPanResponderMove: (e, gestureState) => {
				translateY.setValue(Math.max(0, gestureState.dy));
			},
			onPanResponderRelease: (e, gestureState) => {
				if (gestureState.dy > height / 4) {
					closeSheet();
				} else {
					openSheet();
				}
			},
		})
	).current;

	const renderScene = SceneMap({
		dashboard: Dashboard,
		area: Area,
	});

	const renderTabBar = (props) => {
		const inputRange = props.navigationState.routes.map((x, i) => i);

		return (
			<View
				className="border-0"
				style={styles.tabBarContainer}
			>
				<BlurView
					style={StyleSheet.absoluteFill}
					blurType="light"
					blurAmount={12}
					reducedTransparencyFallbackColor="white"
				/>
				<View style={styles.tabBar}>
					{props.navigationState.routes.map((route, i) => {
						// const color = props.position.interpolate({
						// 	inputRange,
						// 	outputRange: inputRange.map((inputIndex) =>
						// 		inputIndex === i ? "gray" : "cyan"
						// 	),
						// });

						return (
							<TouchableOpacity
								key={route.key}
								style={styles.tabItem}
								onPress={() => setIndex(i)}
							>
								<Image
									source={route.icon}
									style={[styles.tabIcon]}
									resizeMode="contain"
								/>

								<Animated.Text
									className={`font-gilroy-medium text-xs ${
										i === index
											? "text-blue_button"
											: "text-gray-400"
									}`}
									style={[styles.label]}
								>
									{route.title}
								</Animated.Text>
							</TouchableOpacity>
						);
					})}
				</View>
			</View>
		);
	};

	return (
		<View style={styles.container}>
			{/* Card Header */}
			<View className="border-0 top-0 left-0 right-0 bg-white px-4">
				<Card_Header
					name="Palm Grove Enclave"
					location="Adajan, Surat"
					onPress={() => openSheet()}
				/>
			</View>
			{/* Card Header */}

			<View style={styles.sceneContainer}>
				<TabView
					navigationState={{ index, routes }}
					renderScene={renderScene}
					renderTabBar={renderTabBar}
					onIndexChange={setIndex}
					initialLayout={initialLayout}
					swipeEnabled={false}
					animationEnabled={true}
					style={styles.tabView}
				/>
			</View>

			<Container_Sheet
				translateY={translateY}
				panHandlers={panResponder.panHandlers}
				isOverlay={isOverlay}
				overlayOpacity={overlayOpacity}
				closeSheet={closeSheet}
			>
				<View className="bg-white px-4 py-0">
					<View className="mt-0 gap-y-3">
						{sites.map((site, index) => (
							<Card_Nav
								key={index}
								name={site.name}
								location={site.location}
								onPress={closeSheet}
								animatedStyle={animatedStyles[index]}
							/>
						))}
					</View>
				</View>
			</Container_Sheet>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	sceneContainer: {
		flex: 1,
		marginBottom: 0,
	},
	tabView: {
		flex: 1,
	},
	tabBarContainer: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		zIndex: 999,
		elevation: 4,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: -2,
		},
		shadowOpacity: 0.1,
		shadowRadius: 3,
		overflow: "hidden",
	},
	tabBar: {
		backgroundColor: "transparent",
		height: 60,
		flexDirection: "row",
	},
	tabItem: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 16,
	},
	tabIcon: {
		height: 24,
		width: 24,
		marginBottom: 0,
	},
	label: {
		fontSize: 12,
		marginTop: 4,
	},
});

export default TabNavigator;
