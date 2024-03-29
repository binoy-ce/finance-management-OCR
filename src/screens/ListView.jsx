import React, {useState} from 'react';
import WhiteStatus from '../components/WhiteStatus';
import {
	StyleSheet,
	SafeAreaView,
	View,
	Text,
	FlatList,
	ScrollView,
} from 'react-native';
import ListHead from '../components/ListHead';
import ListSubBar from '../components/ListSubBar';
import {CheckBox} from '@rneui/themed';

//tab navigation
import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native-paper';

//family list
const familydata = [{item: 'apple'}, {item: 'cake'}, {item: 'orange'}];
// personal list
const privatedata = [{item: 'water melon'}, {item: 'water bottle'}];

const ListView = ({navigation}) => {
	// const navigation = useNavigation();

	const [ispressed, setpressed] = useState(false);

	const Structure = ({itemname}) => {
		return (
			<View style={{flexDirection: 'row'}}>
				<CheckBox
					checked={ispressed}
					onPress={() => {
						setpressed(!ispressed);
					}}
					style={styles.checkboxStyle}
					title={itemname}
					size={24}
					textStyle={styles.listTextStyle}
					containerStyle={{
						backgroundColor: 'transparent',
					}}
				/>
			</View>
		);
	};

	const TopName = ' ';
	return (
		<SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
			<WhiteStatus />

			<ListHead
				topage={'setting'}
				navigation={navigation}
				title={TopName.concat('List')}
			/>
      <ScrollView>
      <ListSubBar
				leftText={'Family'}
				rightText={'Add item'}
			/>
			<View style={styles.liststyle}>
				<FlatList
				scrollEnabled={false}
					data={familydata}
					renderItem={({item}) => (
						<Structure
							itemname={item.item}
						/>
					)}
				/>
			</View>
			<ListSubBar
				leftText={'Personal'}
				rightText={'Add item'}
			/>
			<View style={styles.liststyle}>
				<FlatList
					data={privatedata}
					scrollEnabled={false}
					renderItem={({item}) => (
						<Structure
							itemname={item.item}
						/>
					)}
				/>
			</View>
      </ScrollView>

		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	liststyle: {
		backgroundColor: '#A0AAB852',
		minHeight: 150,
		borderRadius: 25,
		marginLeft: 29,
		marginRight: 28,
		padding: 10,
	},
	listTextStyle: {
		alignSelf: 'center',
		fontFamily: 'GentiumBold',
		fontSize: 20,
		color: '#000000',
	},
	checkboxStyle: {
		// backgroundColor:"red"
	},
});

export default ListView;
