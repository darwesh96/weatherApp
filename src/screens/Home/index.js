import React, {useRef, useState} from 'react';
import {View, ImageBackground, Pressable, FlatList} from 'react-native';
import CustomText from '../../components/customText';
import {CityItem} from './Components/CityItem';
import {SheetComponent} from './Components/SheetComponent';
import styles from './styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {COLORS} from '../../constants/colors';
import RBSheet from 'react-native-raw-bottom-sheet';
import DropShadow from 'react-native-drop-shadow';
import {useSelector, useDispatch} from 'react-redux';
import {addCity} from '../../redux/weatherSlice';

/**
 * HomeScreen for displaying the list of added cities.
 * @param {NavigationProp} navigation
 * @param {Route} route
 * @return {ReactElement}
 * @public
 */
function HomeScreen({navigation}) {
  // global state selectors
  const cities = useSelector(state => state.weather.cities); // all added cities
  const nextID = useSelector(state => state.weather.nextID); // id to be assigned to new city if added

  const dispatch = useDispatch();
  // ref to control the opening and closing of the bottom sheet
  const refRBSheet = useRef();

  /**
   * onPress function passed to child component 'sheetComponent' to add a new city
   * @param {Object} res
   * @return {VoidFunction}
   * @private
   */
  const onPress = res => {
    dispatch(
      addCity({
        name: `${res?.name}, ${res?.sys?.country}`,
        icon: res?.weather[0]?.icon,
        id: nextID,
        date: new Date(),
      }),
    );
    refRBSheet?.current.close(); // close bottom sheet after adding city
  };
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
          <CustomText size={24} color="white" text="Cities" />
        </View>
      </DropShadow>

      <FlatList
        style={styles.flatList}
        contentContainerStyle={styles.flatlistContent}
        data={cities}
        renderItem={({item}) => (
          <CityItem item={item} navigation={navigation} />
        )}
      />

      <Pressable
        onPress={() => {
          refRBSheet?.current.open();
        }}
        style={styles.addButton}>
        <FontAwesome5
          style={styles.icon}
          name="plus"
          size={20}
          color={COLORS.white}
        />
        <CustomText
          size={14}
          fontFamily="semiBold"
          color="white"
          text="Add City"
        />
      </Pressable>

      <ImageBackground
        style={styles.bg}
        source={require('../../assets/images/background.png')}
      />
      <RBSheet
        animationType="slide"
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: styles.bgWrapper,
          container: styles.bgContainer,
        }}>
        <SheetComponent
          onPress={res => {
            onPress(res);
          }}
        />
      </RBSheet>
    </View>
  );
}
export default HomeScreen;
