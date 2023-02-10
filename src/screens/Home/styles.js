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
  bgWrapper: {
    backgroundColor: '#00000060',
  },
  bgContainer: {height: '50%'},
  addButton: {
    backgroundColor: COLORS.primary,
    width: 137,
    borderRadius: 50,
    paddingVertical: 19,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 16,
    right: 16,
    zIndex: 99,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  flatList: {
    zIndex: 8,
  },
  flatlistContent: {
    paddingBottom: 60,
    paddingTop: 27,
  },
});
