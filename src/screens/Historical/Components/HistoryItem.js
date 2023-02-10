import React from 'react';
import {Pressable, View} from 'react-native';
import {StyleSheet, Image} from 'react-native';
import CustomText from '../../../components/customText';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {COLORS} from '../../../constants/colors';
import moment from 'moment';
import {ICON_URL} from '../../../constants/baseurl';

/**
 * HistoryItem is a component used to render each row in the history screen.
 * @param {Object} item
 * @return {ReactElement}
 * @public
 */
export const HistoryItem = ({item}) => {
  return (
    <Pressable style={styles.itemContainer}>
      <View style={styles.citySection}>
        <View style={styles.cityIcon}>
          <Image
            source={{uri: ICON_URL + item?.weather[0]?.icon + '.png'}}
            style={styles.icon}
          />
        </View>
        <View style={styles.textContainer}>
          <CustomText
            size={12}
            fontFamily="regular"
            color="black"
            text={moment(item?.date).format('DD.MM.YYYY - hh:mm')}
          />
          <CustomText
            size={12}
            fontFamily="bold"
            color="black"
            text={item?.weather[0]?.description}
          />
        </View>
      </View>
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
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
  },
  citySection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textContainer: {alignItems: 'flex-start'},
});
