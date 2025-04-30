import { View, Image } from "react-native";
import React, { useRef } from "react";
import { ActionSheetRef } from "react-native-actions-sheet";
import CommentSheet from "../module/VideoView/CommentSheet";
import VideoContent from "../module/VideoView/VideoContent";
import VideoFeature from "../module/VideoView/VideoFeature";

const VideoView = () => {
	const actionSheetRef = useRef<ActionSheetRef>(null);

	return (
		<View style={{ flex: 1 }}>
			{/* right bar */}
			<VideoFeature sheetRef={actionSheetRef} />

			{/* content */}
			<VideoContent />

			{/* main video  */}
			<Image
				source={{
					uri: "https://i.pinimg.com/736x/0f/53/a2/0f53a28cc6903391ebec08a6195b2c5f.jpg",
				}}
				style={{ flex: 1 }}
			/>

			{/* comment sheet */}
			<CommentSheet sheetRef={actionSheetRef} />
		</View>
	);
};

export default VideoView;
