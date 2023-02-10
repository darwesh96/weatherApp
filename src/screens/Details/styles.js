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
  },
  bg: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: hp(30),
    backgroundColor: '#f2f1f4',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  icon: {
    padding: 20,
  },
  card: {
    backgroundColor: 'white',
    width: wp(80),
    height: hp(60),
    zIndex: 99,
    alignSelf: 'center',
    marginTop: -50,
    borderRadius: 5,
    paddingVertical: 25,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  delete: {
    zIndex: 99,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 10,
    flexWrap: 'wrap',
    alignSelf: 'center',
    marginTop: 30,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  icon2: {
    width: 70,
    height: 70,
  },
});
