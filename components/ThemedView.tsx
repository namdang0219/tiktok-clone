// import { View, type ViewProps } from 'react-native';

// import { useThemeColor } from '@/hooks/useThemeColor';

// export type ThemedViewProps = ViewProps & {
//   lightColor?: string;
//   darkColor?: string;
// };

// export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
//   const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

//   return <View style={[{ backgroundColor }, style]} {...otherProps} />;
// }

import { View, useColorScheme, ViewProps } from "react-native";
import React, { FC, PropsWithChildren } from "react";
import { Colors } from "@/constants/Colors";

const ThemedView: FC<PropsWithChildren & ViewProps> = ({
	children,
	style,
	...props
}) => {
	const scheme = useColorScheme();

	return (
		<View
			style={[
				{
					backgroundColor:
						scheme === "light"
							? Colors.light.background
							: Colors.dark.background,
				},
				style,
			]}
			{...props}
		>
			{children}
		</View>
	);
};

export default ThemedView;
