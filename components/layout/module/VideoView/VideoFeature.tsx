import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { RefObject } from "react";
import {
	Feather,
	AntDesign,
	MaterialCommunityIcons,
	MaterialIcons,
	Fontisto,
} from "@expo/vector-icons";
import { ActionSheetRef } from "react-native-actions-sheet";

const VideoFeature = ({
	sheetRef,
}: {
	sheetRef: RefObject<ActionSheetRef>;
}) => {
	return (
		<View
			style={{
				position: "absolute",
				right: 8,
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
				<TouchableOpacity onPress={() => sheetRef.current?.show()}>
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
					<MaterialIcons name="bookmark" color={"white"} size={35} />
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
					<Fontisto name="share-a" color={"white"} size={26} />
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
	);
};

export default VideoFeature;
