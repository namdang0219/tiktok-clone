import {
	View,
	Text,
	Dimensions,
	TouchableOpacity,
	FlatList,
	StatusBar,
} from "react-native";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import VideoView from "@/components/layout/view/VideoView";

const { width } = Dimensions.get("screen");

const RecommendScreen = () => {
	const { top } = useSafeAreaInsets();
	const [mainViewHeight, setMainViewHeight] = useState<number>(0);

	return (
		<>
			<StatusBar barStyle="light-content" />
			<View
				style={{
					flex: 1,
					backgroundColor: "black",
					position: "relative",
				}}
			>
				{/* topbar */}
				<View
					style={{
						position: "absolute",
						top,
						width,
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
						paddingHorizontal: 20,
						zIndex: 100,
					}}
				>
					{/* left */}
					<TouchableOpacity style={{ marginTop: -4 }}>
						<MaterialIcons
							name="live-tv"
							color={"white"}
							size={25}
						/>
					</TouchableOpacity>

					{/* center */}
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							gap: 20,
						}}
					>
						<TouchableOpacity>
							<Text style={{ color: "white", fontSize: 16 }}>
								検索
							</Text>
						</TouchableOpacity>
						<TouchableOpacity>
							<Text style={{ color: "white", fontSize: 16 }}>
								フォロー中
							</Text>
						</TouchableOpacity>
						<TouchableOpacity>
							<Text style={{ color: "white", fontSize: 16 }}>
								おすすめ
							</Text>
						</TouchableOpacity>
					</View>

					{/* right */}
					<TouchableOpacity>
						<AntDesign name="search1" color={"white"} size={24} />
					</TouchableOpacity>
				</View>

				{/* main view  */}
				<View
					style={{ flex: 1 }}
					onLayout={({ nativeEvent }) =>
						setMainViewHeight(nativeEvent.layout.height)
					}
				>
					<FlatList
						data={[1, 2, 3, 4, 5]}
						pagingEnabled
						showsVerticalScrollIndicator={false}
						renderItem={() => (
							<View
								style={{
									height: mainViewHeight,
								}}
							>
								<VideoView />
							</View>
						)}
					/>
				</View>
			</View>
		</>
	);
};

export default RecommendScreen;
