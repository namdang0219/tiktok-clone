import { Tabs } from "expo-router";
import React from "react";
import { IconSymbol } from "@/components/ui/IconSymbol";
import {
	AntDesign,
	Entypo,
	FontAwesome5,
	MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: "white",
				tabBarInactiveTintColor: "gray",
				headerShown: false,
				tabBarStyle: { backgroundColor: "black" },
			}}
		>
			<Tabs.Screen
				name="(main)/index"
				options={{
					title: "レコメンド",
					tabBarIcon: ({ color }) => (
						<Entypo size={26} name="home" color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="friend"
				options={{
					title: "友達",
					tabBarIcon: ({ color }) => (
						<FontAwesome5
							size={22}
							name="user-friends"
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="create"
				options={{
					title: "作成",
					tabBarIcon: ({ color }) => (
						<IconSymbol
							size={28}
							name="paperplane.fill"
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="message"
				options={{
					title: "メッセージ",
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							size={24}
							name="message-processing-outline"
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					title: "プロフィール",
					tabBarIcon: ({ color }) => (
						<AntDesign size={24} name="user" color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
