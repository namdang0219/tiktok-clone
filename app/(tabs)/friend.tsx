import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";

const FriendScreen = () => {
	return <MyPager />;
};

const MyPager = () => {
	const { height } = useWindowDimensions();

	return (
		<FlatList
			data={[1, 2]}
			pagingEnabled
			style={{ flex: 1 }}
			renderItem={({ item, index }) => (
				<View
					style={{
						justifyContent: "center",
						alignItems: "center",
						height,
					}}
				>
					<Text>{item}</Text>
				</View>
			)}
		/>
	);
};

const styles = StyleSheet.create({
	pagerView: {
		flex: 1,
	},
});

export default FriendScreen;
