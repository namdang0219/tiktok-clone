import {
	View,
	Text,
	Dimensions,
	TouchableOpacity,
	Image,
	useColorScheme,
	FlatList,
	TextInput,
} from "react-native";
import React, { useRef } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
	AntDesign,
	Entypo,
	Feather,
	Fontisto,
	MaterialCommunityIcons,
	MaterialIcons,
} from "@expo/vector-icons";
import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";

const { width, height } = Dimensions.get("screen");

const icons = ["🫠", "🤣", "😊", "😭", "😍", "🥲", "🙃"];

const RecommendScreen = () => {
	const { top, bottom } = useSafeAreaInsets();
	const actionSheetRef = useRef<ActionSheetRef>(null);
	const scheme = useColorScheme();

	return (
		<>
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
						<TouchableOpacity
							onPress={() => actionSheetRef.current?.show()}
						>
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
						<View style={{ flex: 1 }}>
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

			<ActionSheet
				ref={actionSheetRef}
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
							onPress={() => actionSheetRef.current?.hide()}
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
										Đừng khóc như thế Xin đừng khóc như thế
										Bao nhiêu niềm đau chôn dấu Mong ngày sẽ
										trôi mau Đừng khóc như thế Xin đừng khóc
										như thế Bao nhiêu niềm đau chôn dấu Mong
										ngày sẽ trôi mau
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
		</>
	);
};

export default RecommendScreen;
