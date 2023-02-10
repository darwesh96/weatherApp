import React from 'react';
import {View, ImageBackground, FlatList} from 'react-native';
import CustomText from '../../components/customText';
import {HistoryItem} from './Components/HistoryItem';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import {COLORS} from '../../constants/colors';
import DropShadow from 'react-native-drop-shadow';
import {useSelector, useDispatch} from 'react-redux';

/**
 * HomeScreen for displaying the list of added cities.
 * @param {NavigationProp} navigation
 * @param {Route} route
 * @return {ReactElement}
 * @public
 */
function HomeScreen({navigation, route}) {
  // name of the selected city passed a navigation param
  let {name} = route.params;

  // state selector for the history array
  const historicals = useSelector(state => state.weather.historical);
  // selecting only current city related objects
  const Current = historicals.filter(el => el.name == name.split(',')[0]);

  return (
    <View style={styles.container}>
      <DropShadow
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.6,
          shadowRadius: 5,
        }}>
        <View style={styles.headerContainer}>
          <Ionicons
            onPress={() => navigation.goBack()}
            style={styles.back}
            name="arrow-back"
            size={26}
            color={COLORS.white}
          />
          <CustomText size={24} color="white" text={name + ' Historical'} />
        </View>
      </DropShadow>
      <FlatList
        style={styles.flatList}
        contentContainerStyle={styles.flatlistContent}
        data={Current.reverse()}
        renderItem={({item}) => <HistoryItem item={item} />}
      />
      <ImageBackground
        style={styles.bg}
        source={require('../../assets/images/background.png')}
      />
    </View>
  );
}
export default HomeScreen;
