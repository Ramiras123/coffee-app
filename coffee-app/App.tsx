import {
	Dimensions,
	ImageBackground,
	StyleSheet,
	Text,
	View
} from 'react-native';
import { Colors, FontSize, Gaps } from './shared/tokens';
import Button from './shared/Button/Button';

export default function App() {
	const d = Dimensions.get('window');
	return (
		<View style={styles.container}>
			<ImageBackground
				source={require('./assets/backgraund.png')}
				style={{
					...styles.image,
					width: d.width + 46 * 2,
					marginTop: -(d.height / 100) * 50
				}}
				resizeMode="contain"
			>
				<View style={styles.content}>
					<View>
						<Text style={styles.title}>
							Одно из самых вкусных кофе в городе!
						</Text>
						<Text style={styles.description}>
							Свежие зёрна, настоящая арабика и бережная обжарка
						</Text>
					</View>
					<Button text={'Начать'} />
				</View>
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.dark,
		flex: 1,

		justifyContent: 'flex-end'
	},
	image: {
		flex: 1,
		alignSelf: 'center',
		justifyContent: 'flex-end'
	},
	content: {
		gap: Gaps.g24,
		marginHorizontal: 46,
		alignItems: 'center',
		paddingHorizontal: 30,
		paddingVertical: 41
	},
	title: {
		color: Colors.light,
		fontSize: FontSize.f34,
		fontWeight: '600',
		textAlign: 'center',
		lineHeight: 43,
		letterSpacing: 0.4
	},
	description: {
		color: Colors.gray,
		fontSize: FontSize.f14,
		textAlign: 'center',
		letterSpacing: 0.4
	}
});
