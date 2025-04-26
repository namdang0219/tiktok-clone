import {
	View,
	Text,
	StatusBar,
	Dimensions,
	TouchableOpacity,
	Image,
} from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
	AntDesign,
	Entypo,
	Feather,
	Fontisto,
	MaterialCommunityIcons,
	MaterialIcons,
} from "@expo/vector-icons";

const { width } = Dimensions.get("screen");

const RecommendScreen = () => {
	const { top } = useSafeAreaInsets();

	return (
		<>
			<StatusBar barStyle={"light-content"} />
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

				{/* right bar */}
				<View
					style={{
						position: "absolute",
						right: 12,
						gap: 20,
						zIndex: 100,
						bottom: 12,
						alignItems: "center",
					}}
				>
					{/* avatar  */}
					<View style={{ position: "relative", marginBottom: 12 }}>
						<TouchableOpacity>
							<Image
								source={{
									uri: "https://i.pinimg.com/736x/a9/d3/49/a9d3498c46142bb5fa442760861db922.jpg",
								}}
								style={{
									width: 50,
									aspectRatio: "1/1",
									borderRadius: 1000,
								}}
							/>
						</TouchableOpacity>

						{/* follow button */}
						<TouchableOpacity
							style={{
								width: 22,
								aspectRatio: "1/1",
								backgroundColor: "red",
								borderRadius: 1000,
								alignItems: "center",
								justifyContent: "center",
								position: "absolute",
								left: "50%",
								transform: [{ translateX: -11 }],
								bottom: -11,
							}}
						>
							<Feather name="plus" color={"white"} size={16} />
						</TouchableOpacity>
					</View>

					<View style={{ alignItems: "center" }}>
						<TouchableOpacity>
							<AntDesign name="heart" color={"white"} size={32} />
						</TouchableOpacity>
						<Text
							style={{
								marginTop: 2,
								color: "white",
								fontSize: 12,
								fontWeight: "600",
							}}
						>
							10.3万
						</Text>
					</View>

					<View style={{ alignItems: "center" }}>
						<TouchableOpacity>
							<MaterialCommunityIcons
								name="comment-processing"
								color={"white"}
								size={32}
							/>
						</TouchableOpacity>
						<Text
							style={{
								marginTop: 2,
								color: "white",
								fontSize: 12,
								fontWeight: "600",
							}}
						>
							535
						</Text>
					</View>

					<View style={{ alignItems: "center" }}>
						<TouchableOpacity>
							<MaterialIcons
								name="bookmark"
								color={"white"}
								size={35}
							/>
						</TouchableOpacity>
						<Text
							style={{
								marginTop: 2,
								color: "white",
								fontSize: 12,
								fontWeight: "600",
							}}
						>
							1.3万
						</Text>
					</View>

					<View style={{ alignItems: "center" }}>
						<TouchableOpacity>
							<Fontisto
								name="share-a"
								color={"white"}
								size={26}
							/>
						</TouchableOpacity>
						<Text
							style={{
								marginTop: 2,
								color: "white",
								fontSize: 12,
								fontWeight: "600",
							}}
						>
							105
						</Text>
					</View>

					<TouchableOpacity>
						<Image
							source={{
								uri: "https://i.pinimg.com/736x/d1/d2/62/d1d26223924b568b296a32a529b37b36.jpg",
							}}
							style={{
								width: 45,
								aspectRatio: "1/1",
								borderRadius: 1000,
							}}
						/>
					</TouchableOpacity>
				</View>

				{/* content */}
				<View
					style={{
						position: "absolute",
						left: 12,
						bottom: 12,
						zIndex: 100,
						width: width - 120,
					}}
				>
					{/* extend */}
					<TouchableOpacity
						style={{
							backgroundColor: "#0000002b",
							flexDirection: "row",
							gap: 6,
							padding: 4,
							borderRadius: 8,
						}}
					>
						<View
							style={{
								backgroundColor: "#34D399",
								width: 26,
								aspectRatio: "1/1",
								alignItems: "center",
								justifyContent: "center",
								borderRadius: 4,
							}}
						>
							<Entypo name="location" color={"white"} size={18} />
						</View>
						<View style={{flex: 1}}>
							<Text style={{ color: "white" }}>
								大阪市・淀川区
							</Text>
							<Text
								style={{
									color: "white",
									fontSize: 12,
									flex: 1,
								}}
								numberOfLines={1}
							>
								1269ユーザーが「セーブ済み」に追加しました。
							</Text>
						</View>
					</TouchableOpacity>

					{/* main content */}
					<View style={{ marginTop: 4 }}>
						<Text
							style={{
								color: "white",
								fontSize: 20,
								fontWeight: "500",
								marginBottom: 6,
							}}
						>
							れむ
						</Text>
						<Text
							style={{
								fontSize: 16,
								color: "white",
								lineHeight: 21,
							}}
						>
							SPCにはトヨタやトヨタのグループ企業が出資するほか、金融機関からの融資で買収資金を賄う方向で検討している。
							<Text style={{ fontWeight: "600" }}>#nikkei</Text>
						</Text>
					</View>

					<View
						style={{
							marginTop: 6,
							flexDirection: "row",
							alignItems: "center",
							gap: 10,
						}}
					>
						<Fontisto name="music-note" color={"white"} size={16} />
						<View
							style={{
								flex: 1,
							}}
						>
							<Text style={{ color: "white", fontSize: 16 }}>
								再生している楽曲：Lies - Big Bang
							</Text>
						</View>
					</View>
				</View>

				<Image
					source={{
						uri: "https://i.pinimg.com/736x/61/3a/2e/613a2e7a0145c066303d21efc1c71951.jpg",
					}}
					style={{ flex: 1 }}
				/>
			</View>
		</>
	);
};

export default RecommendScreen;
