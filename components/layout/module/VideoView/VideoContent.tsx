import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import { Entypo, Fontisto } from "@expo/vector-icons";

const { width } = Dimensions.get("screen");

const VideoContent = () => {
	return (
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
				<View style={{ flex: 1 }}>
					<Text style={{ color: "white" }}>大阪市・淀川区</Text>
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
	);
};

export default VideoContent;
