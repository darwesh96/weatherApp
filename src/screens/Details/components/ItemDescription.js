import React from 'react';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';
import CustomText from '../../../components/customText';
import {wp} from '../../../constants/dimensions';

/**
 * ItemDescription is a component used to render each row in the description screen card.
 * @param {Object} data
 * @return {ReactElement}
 * @public
 */
export default function ItemDescription({data}) {
  return (
    <View style={styles.detailsItem}>
      <CustomText
        size={16}
        fontFamily="semiBold"
        color="black"
        text={data.title}
      />
      <CustomText
        size={16}
        fontFamily="semiBold"
        color="primary"
        text={data.value}
      />
    </View>
  );
}
// component styles
const styles = StyleSheet.create({
  detailsItem: {
    flexDirection: 'row',
    width: wp(80),
    justifyContent: 'space-between',
    marginVertical: 5,
    paddingHorizontal: 25,
  },
});
