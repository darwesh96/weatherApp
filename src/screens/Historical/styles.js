import {StyleSheet} from 'react-native';
import {hp, wp} from '../../constants/dimensions';
import {COLORS} from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f1f4',
  },
  headerContainer: {
    height: 150,
    width: wp(100),
    backgroundColor: COLORS.primary,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 72,
    paddingBottom: 22,
  },
  bg: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: hp(30),
    backgroundColor: '#f2f1f4',
  },
  addButton: {
    backgroundColor: COLORS.primary,
    width: 137,
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 16,
    right: 16,
    zIndex: 99,
  },
  flatList: {
    zIndex: 8,
  },
  flatlistContent: {
    paddingBottom: 60,
    paddingTop: 27,
  },
  back:{
    position:"absolute",
    top:16,
    left:22
  }
});
