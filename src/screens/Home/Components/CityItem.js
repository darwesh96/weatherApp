import React from 'react';
import {Image, Pressable, View} from 'react-native';
import {StyleSheet} from 'react-native';
import CustomText from '../../../components/customText';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {COLORS} from '../../../constants/colors';
/**
 * CityItem is a component used to render each city in the home screen.
 * @param {Object} item
 * @param {NavigationProp} navigation
 * @return {ReactElement}
 * @public
 */
export const CityItem = ({item, navigation}) => {
  return (
    <Pressable
      onPress={() => navigation.navigate('Details', {name: item.name})}
      style={styles.itemContainer}>
      <View style={styles.citySection}>
        <View style={styles.cityIcon}>
          <FontAwesome5
            style={styles.icon}
            name="city"
            size={20}
            color={COLORS.primary}
          />
        </View>
        <CustomText
          size={16}
          fontFamily="bold"
          color="black"
          text={item.name}
        />
      </View>
      <FontAwesome5
        onPress={() => navigation.navigate('Historical', {name: item.name})}
        style={styles.icon}
        name="info-circle"
        size={20}
        color={COLORS.primary}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
    paddingRight: 16,
  },
  icon: {
    alignSelf: 'center',
  },
  cityIcon: {
    width: 72,
  },
  citySection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
