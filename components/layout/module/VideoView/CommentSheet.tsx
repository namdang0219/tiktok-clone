import {
	View,
	Text,
	TouchableOpacity,
	useColorScheme,
	FlatList,
	TextInput,
	Image,
    Dimensions,
} from "react-native";
import React, { RefObject } from "react";
import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "@/components/ThemedText";
import { Feather, AntDesign, MaterialIcons } from "@expo/vector-icons";

const icons = ["🫠", "🤣", "😊", "😭", "😍", "🥲", "🙃"];

const { height } = Dimensions.get("screen");

const CommentSheet = ({
	sheetRef,
}: {
	sheetRef: RefObject<ActionSheetRef>;
}) => {
	const scheme = useColorScheme();
	const { bottom } = useSafeAreaInsets();

	return (
		<ActionSheet
			ref={sheetRef}
			gestureEnabled
			indicatorStyle={{ display: "none" }}
			containerStyle={{
				backgroundColor:
					scheme === "light"
						? Colors.light.background
						: Colors.dark.background,
			}}
		>
			{/* container  */}
			<View style={{ height: height - 200 }}>
				<View
					style={{
						position: "relative",
						marginTop: 10,
						marginBottom: 10,
					}}
				>
					<ThemedText
						style={{
							textAlign: "center",
							fontSize: 14,
						}}
					>
						3,246件のコメント
					</ThemedText>

					<TouchableOpacity
						onPress={() => sheetRef.current?.hide()}
						style={{
							position: "absolute",
							top: "50%",
							right: 20,
							transform: [{ translateY: -10 }],
						}}
					>
						<Feather
							name="x"
							size={20}
							color={
								scheme === "light"
									? Colors.light.text
									: Colors.dark.text
							}
						/>
					</TouchableOpacity>
				</View>

				{/* comment View */}
				<FlatList
					data={new Array(10).fill(null)}
					renderItem={({ item, index }) => (
						<View
							style={{
								paddingHorizontal: 14,
								flexDirection: "row",
								marginBottom: 16,
								gap: 10,
							}}
						>
							{/* avatar */}
							<Image
								source={{
									uri: "https://i.pinimg.com/736x/0a/c4/6b/0ac46badb6aa597c63f525fe044c5e33.jpg",
								}}
								style={{
									width: 35,
									aspectRatio: "1/1",
									borderRadius: 100,
									marginTop: 4,
								}}
							/>

							{/* content view */}
							<View style={{ flex: 1 }}>
								<ThemedText
									style={{
										color: "gray",
										fontWeight: "500",
									}}
								>
									Jack - J97
								</ThemedText>

								<ThemedText
									numberOfLines={3}
									style={{ marginTop: 2 }}
								>
									Đừng khóc như thế Xin đừng khóc như thế Bao
									nhiêu niềm đau chôn dấu Mong ngày sẽ trôi
									mau Đừng khóc như thế Xin đừng khóc như thế
									Bao nhiêu niềm đau chôn dấu Mong ngày sẽ
									trôi mau
								</ThemedText>

								<View
									style={{
										flexDirection: "row",
										marginTop: 6,
										alignItems: "center",
										justifyContent: "space-between",
									}}
								>
									{/* left container */}
									<View
										style={{
											flexDirection: "row",
											alignItems: "center",
											gap: 14,
										}}
									>
										<ThemedText
											style={{
												color: "gray",
												fontSize: 12,
											}}
										>
											2024-09-28
										</ThemedText>

										<TouchableOpacity>
											<ThemedText
												style={{ color: "gray" }}
											>
												返信
											</ThemedText>
										</TouchableOpacity>
									</View>

									{/* right container */}
									<View
										style={{
											flexDirection: "row",
											alignItems: "center",
											gap: 10,
										}}
									>
										<View
											style={{
												flexDirection: "row",
												alignItems: "center",
												gap: 6,
												width: 70,
											}}
										>
											<TouchableOpacity>
												<AntDesign
													name="hearto"
													size={16}
													color={"gray"}
												/>
											</TouchableOpacity>

											<ThemedText
												style={{
													fontSize: 12,
													color: "gray",
												}}
											>
												2,522
											</ThemedText>
										</View>

										<TouchableOpacity>
											<AntDesign
												name="dislike2"
												color={"gray"}
												size={16}
											/>
										</TouchableOpacity>
									</View>
								</View>

								{/* reply area  */}
								<View
									style={{
										flexDirection: "row",
										alignItems: "center",
										gap: 10,
										marginTop: 10,
									}}
								>
									<View
										style={{
											height: 1,
											backgroundColor: "gray",
											opacity: 0.6,
											width: 35,
										}}
									/>

									<TouchableOpacity
										style={{
											flexDirection: "row",
											alignItems: "center",
										}}
									>
										<ThemedText
											style={{
												fontSize: 12,
												color: "gray",
											}}
										>
											24件の返信を表示
										</ThemedText>
										<Feather
											name="chevron-down"
											color={"gray"}
											size={14}
											style={{ opacity: 0.8 }}
										/>
									</TouchableOpacity>
								</View>
							</View>
						</View>
					)}
				/>

				{/* typing view */}
				<View
					style={{
						marginBottom: bottom,
						paddingTop: 8,
						paddingBottom: 8,
						paddingHorizontal: 16,
						gap: 8,
						borderTopWidth: 1,
						borderTopColor: "#f3f4f6",
					}}
				>
					{/* icons  */}
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						{icons.map((item, idx) => (
							<TouchableOpacity key={idx}>
								<Text style={{ fontSize: 28 }}>{item}</Text>
							</TouchableOpacity>
						))}
					</View>

					{/* comment */}
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							gap: 8,
						}}
					>
						<Image
							source={{
								uri: "https://i.pinimg.com/736x/16/36/ce/1636ce583fd570a64a6920ecb36eba69.jpg",
							}}
							style={{
								width: 35,
								aspectRatio: "1/1",
								borderRadius: 100,
							}}
						/>

						<View
							style={{
								flex: 1,
								flexDirection: "row",
								gap: 8,
								minHeight: 35,
								backgroundColor: Colors.light.input,
								borderRadius: 100,
								paddingHorizontal: 10,
								alignItems: "center",
							}}
						>
							<TextInput
								placeholder="すてきなコメントを書く..."
								style={{ flex: 1 }}
							/>

							<TouchableOpacity>
								<MaterialIcons
									name="alternate-email"
									size={20}
								/>
							</TouchableOpacity>

							<TouchableOpacity>
								<MaterialIcons name="tag-faces" size={22} />
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</View>
		</ActionSheet>
	);
};

export default CommentSheet;
