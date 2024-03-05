import {
	Pressable,
	PressableProps,
	StyleSheet,
	Text,
	View
} from 'react-native';
import React from 'react';
import { Colors, FontSize, Radius } from '../tokens';

export default function Button({
	text,
	...props
}: PressableProps & { text: string }) {
	return (
		<Pressable style={styles.btn} {...props}>
			<Text style={styles.text}>{text}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	btn: {
		borderRadius: Radius.r16,
		backgroundColor: Colors.primary,
		paddingHorizontal: 109,
		paddingVertical: 21
	},
	text: {
		fontSize: FontSize.f16,
		color: Colors.light,
		fontWeight: '600'
	}
});
