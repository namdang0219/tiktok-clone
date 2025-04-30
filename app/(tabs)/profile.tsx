import {
	Image,
	Text,
	TouchableOpacity,
	useColorScheme,
	useWindowDimensions,
	View,
} from "react-native";
import React, { ReactNode, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
	AntDesign,
	Entypo,
	Feather,
	FontAwesome5,
	Ionicons,
	MaterialIcons,
	Octicons,
	SimpleLineIcons,
} from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "@/components/ThemedText";
import ThemedView from "@/components/ThemedView";
import Svg, { Path } from "react-native-svg";
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from "react-native-reanimated";

const ProfileScreen = () => {
	const scheme = useColorScheme();
	const { width } = useWindowDimensions();

	const profileTabs: {
		tabId: number;
		icon: ReactNode;
		tabContent: ReactNode;
	}[] = [
		{
			tabId: 1,
			icon: (
				<View style={{ flexDirection: "row", alignItems: "center" }}>
					<Svg
						width={26}
						height={26}
						viewBox="0 0 24 24"
						style={{ transform: [{ rotate: "90deg" }] }}
					>
						<Path
							fill="none"
							stroke={"black"}
							strokeLinecap="round"
							strokeWidth={2}
							d="M9 8h10M9 12h10M9 16h10M4.99 8H5m-.02 4h.01m0 4H5"
						></Path>
					</Svg>
					<AntDesign
						name="caretdown"
						style={{ marginLeft: -4 }}
						size={8}
					/>
				</View>
			),
			tabContent: <Text>Tab1</Text>,
		},
		{
			tabId: 2,
			icon: <MaterialIcons name="lock-outline" size={22} />,
			tabContent: <Text>tab2</Text>,
		},
		{
			tabId: 3,
			icon: (
				<Feather
					name="repeat"
					size={20}
					style={{ transform: [{ rotate: "90deg" }] }}
				/>
			),
			tabContent: <Text>Tab3</Text>,
		},
		{
			tabId: 4,
			icon: (
				<View style={{ position: "relative" }}>
					<MaterialIcons name="bookmark-border" size={25} />
					<ThemedView
						style={{
							position: "absolute",
							bottom: 5,
							right: 2,
						}}
					>
						<Octicons name="eye-closed" size={10} />
					</ThemedView>
				</View>
			),
			tabContent: <Text>tab2</Text>,
		},
		{
			tabId: 5,
			icon: (
				<View style={{ position: "relative" }}>
					<Feather name="heart" size={22} />
					<ThemedView
						style={{
							position: "absolute",
							bottom: 2,
							right: 0,
						}}
					>
						<Octicons name="eye-closed" size={10} />
					</ThemedView>
				</View>
			),
			tabContent: <Text>Tab3</Text>,
		},
	];

	const [selectedTab, setSelectedTab] = useState<number>(0);

	// Tab line animation
	const tabWidth = width / profileTabs.length;
	const leftAnim = useSharedValue(tabWidth / 4);

	const animatedStyles = useAnimatedStyle(() => {
		leftAnim.value = withTiming(tabWidth / 4 + selectedTab * tabWidth, {
			duration: 300,
		});

		return {
			left: leftAnim.value,
		};
	});

	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor:
					scheme === "light"
						? Colors.light.background
						: Colors.dark.background,
			}}
		>
			{/* header */}
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					paddingHorizontal: 16,
					paddingVertical: 2,
				}}
			>
				<TouchableOpacity style={{ width: 60 }}>
					<FontAwesome5 name={"coins"} color="#ffc63b" size={20} />
				</TouchableOpacity>

				<TouchableOpacity
					style={{
						flexDirection: "row",
						gap: 2,
						alignItems: "center",
					}}
				>
					<ThemedText style={{ fontSize: 15, fontWeight: "500" }}>
						Meow Copter
					</ThemedText>
					<Entypo
						name="chevron-small-down"
						color={
							scheme === "light"
								? Colors.light.text
								: Colors.dark.text
						}
						size={18}
					/>
				</TouchableOpacity>

				<View
					style={{
						width: 60,
						flexDirection: "row",
						alignItems: "center",
						gap: 10,
						justifyContent: "space-between",
					}}
				>
					<TouchableOpacity>
						<Ionicons name="footsteps-outline" size={22} />
					</TouchableOpacity>
					<TouchableOpacity>
						<SimpleLineIcons name="menu" size={20} />
					</TouchableOpacity>
				</View>
			</View>

			{/* profile */}
			<View style={{ alignItems: "center", paddingTop: 16 }}>
				{/* image */}
				<View
					style={{
						borderWidth: 4,
						borderColor: Colors.light.input,
						width: 140,
						aspectRatio: "1/1",
						borderRadius: 100,
						padding: 4,
						position: "relative",
					}}
				>
					{/* Avatar */}
					<Image
						source={{
							uri: "https://i.pinimg.com/736x/24/f8/01/24f801264f7e12eb5583a3b6e4088857.jpg",
						}}
						style={{
							flex: 1,
							borderRadius: 100,
						}}
					/>

					{/* Add icon */}
					<View
						style={{
							borderColor: "white",
							borderWidth: 3,
							borderRadius: 100,
							width: 28,
							aspectRatio: "1/1",
							backgroundColor: Colors.light.tintCyan,
							position: "absolute",
							right: 10,
							bottom: 0,
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<AntDesign name="plus" color={"white"} size={18} />
					</View>
				</View>

				<ThemedText
					type="defaultSemiBold"
					style={{ fontSize: 16, marginTop: 4 }}
				>
					@meowcopter_2001
				</ThemedText>

				{/* analytic */}
				<View
					style={{
						flexDirection: "row",
						marginTop: 16,
						alignItems: "center",
					}}
				>
					{/* follow */}
					<ThemedView
						style={{
							width: 90,
							alignItems: "center",
						}}
					>
						<ThemedText style={{ fontSize: 18, fontWeight: "600" }}>
							26
						</ThemedText>
						<ThemedText>フォロー中</ThemedText>
					</ThemedView>

					<View
						style={{
							height: 25,
							width: 1,
							backgroundColor: Colors.dark.input,
						}}
					/>

					<ThemedView
						style={{
							width: 90,
							alignItems: "center",
						}}
					>
						<ThemedText style={{ fontSize: 18, fontWeight: "600" }}>
							26
						</ThemedText>
						<ThemedText>フォロー中</ThemedText>
					</ThemedView>

					<View
						style={{
							height: 20,
							width: 1,
							backgroundColor: Colors.dark.input,
						}}
					/>

					<ThemedView
						style={{
							width: 90,
							alignItems: "center",
						}}
					>
						<ThemedText style={{ fontSize: 18, fontWeight: "600" }}>
							26
						</ThemedText>
						<ThemedText>フォロー中</ThemedText>
					</ThemedView>
				</View>

				{/* feature button */}
				<View
					style={{
						flexDirection: "row",
						gap: 4,
						height: 40,
						marginTop: 14,
					}}
				>
					{/* edit profile */}
					<TouchableOpacity
						style={{
							backgroundColor: Colors.light.input,
							borderRadius: 6,
							alignItems: "center",
							justifyContent: "center",
							paddingHorizontal: 20,
						}}
					>
						<Text>プロフィールを編集</Text>
					</TouchableOpacity>

					{/* share */}
					<TouchableOpacity
						style={{
							backgroundColor: Colors.light.input,
							borderRadius: 6,
							alignItems: "center",
							justifyContent: "center",
							aspectRatio: "1/1",
						}}
					>
						<Svg width={26} height={26} viewBox="0 0 24 24">
							<Path
								fill="none"
								stroke="black"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={1.2}
								d="m20 12l-6.4-7v3.5C10.4 8.5 4 10.6 4 19c0-1.167 1.92-3.5 9.6-3.5V19z"
							></Path>
						</Svg>
					</TouchableOpacity>

					{/* follow */}
					<TouchableOpacity
						style={{
							backgroundColor: Colors.light.input,
							borderRadius: 6,
							alignItems: "center",
							justifyContent: "center",
							aspectRatio: "1/1",
						}}
					>
						<SimpleLineIcons
							name="user-follow"
							color={"black"}
							size={18}
						/>
					</TouchableOpacity>
				</View>

				<TouchableOpacity
					style={{
						marginTop: 10,
						backgroundColor: Colors.light.input,
						flexDirection: "row",
						gap: 2,
						alignItems: "center",
						paddingHorizontal: 6,
						paddingVertical: 2,
						borderRadius: 4,
					}}
				>
					<AntDesign
						name="plus"
						size={10}
						color={
							scheme === "light"
								? Colors.light.text
								: Colors.dark.text
						}
					/>
					<ThemedText style={{ fontSize: 12 }}>
						自己紹介を追加
					</ThemedText>
				</TouchableOpacity>

				{/* Video list view */}
				<View style={{ marginTop: 10 }}>
					{/* Tab bar */}
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							borderBottomColor: Colors.light.input,
							borderBottomWidth: 1,
							position: "relative",
						}}
					>
						{profileTabs.map((tab, idx) => (
							<TouchableOpacity
								key={tab.tabId}
								onPress={() => {
									setSelectedTab(idx);
								}}
								style={{
									width: width / profileTabs.length,
									height: 40,
									alignItems: "center",
									justifyContent: "center",
									opacity: idx === selectedTab ? 1 : 0.2,
								}}
							>
								{tab.icon}
							</TouchableOpacity>
						))}

						{/* Tab active line */}
						<Animated.View
							style={[
								{
									position: "absolute",
									height: 2,
									width: tabWidth / 2,
									bottom: 0,
									backgroundColor:
										scheme === "light"
											? Colors.light.text
											: Colors.dark.text,
								},
								animatedStyles,
							]}
						/>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default ProfileScreen;
