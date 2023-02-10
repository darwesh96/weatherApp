import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS} from '../constants/colors';

/**
 * chooseTextColor is a function that accepts a color as a param to control the color of the text.
 * @param {string} color
 * @return {string}
 * @private
 */
const chooseTextColor = color => {
  switch (color) {
    case 'white':
      return COLORS.white;
    case 'black':
      return COLORS.black;
    case 'primary':
      return COLORS.primary;
    default:
      return color;
  }
};

/**
 * chooseFontFamily is a function that accepts a font text as a param to control the fontfamily of the text.
 * @param {string} font
 * @return {string}
 * @private
 */
const chooseFontFamily = font => {
  switch (font) {
    case 'extraBold':
      return 'Roboto-Black';
    case 'bold':
      return 'Roboto-Bold';
    case 'semiBold':
      return 'Roboto-Medium';
    case 'regular':
      return 'Roboto-Regular';
    case 'light':
      return 'Roboto-Light';
    default:
      break;
  }
};

/**
 * CustomText is a component that renders text based on some params.
 * @param {string} text
 * @param {string} color
 * @param {integer} size
 * @param {string} fontFamily
 * @param {StyleProp} style
 * @param {StyleProp} containerStyle
 * @param {integer} num
 * @param {ReactElement} children
 * @return {ReactElement}
 * @private
 */
const CustomText = ({
  text = '',
  color = 'black',
  size = 16,
  fontFamily = 'regular',
  style,
  containerStyle,
  num,
  children,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text
        numberOfLines={num}
        style={[
          {
            color: chooseTextColor(color),
            fontFamily: chooseFontFamily(fontFamily),
            fontSize: RFValue(size),
            textAlign: 'center',
          },
          style,
        ]}>
        {text}
        {children}
      </Text>
    </View>
  );
};

export default CustomText;

// component styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
