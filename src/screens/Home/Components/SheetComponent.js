import React, {useEffect, useState} from 'react';
import {Pressable, TextInput, View, ActivityIndicator} from 'react-native';
import {StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CustomText from '../../../components/customText';
import {COLORS} from '../../../constants/colors';
import {useCity} from '../../../API/hooks/useCity';
import {useSelector} from 'react-redux';

/**
 * SheetComponent for displaying adding city view.
 * @param {VoidFunction} onPress
 * @return {ReactElement}
 * @public
 */
export const SheetComponent = ({onPress}) => {
  // imports of use city custom hook to manage api
  const {loadCityApi, loading} = useCity();

  // component state
  const [text, setText] = useState(''); // search text state
  const [error, setError] = useState(false); // error corresponds to a non valid city name
  const [error2, setError2] = useState(false); // error corresponds to an already exsist city name

  // cities selector from global state
  const cities = useSelector(state => state.weather.cities);

  // clear errors when changing the text
  useEffect(() => {
    if (text.length > 0) {
      setError(false);
      setError2(false);
    }
  }, [text]);

  /**
   * search function that calls the add city api.
   * @return {VoidFunction}
   * @private
   */
  const search = () => {
    // don't perform any action if there's no entered text
    if (!text.length) return;
    // call the api
    loadCityApi(text).then(res => {
      if (res.cod == '200') {
        // make sure the city name doesn't exsist before
        if (
          cities.filter(el => el.name == `${res?.name}, ${res?.sys?.country}`)
            .length
        ) {
          setError2(true); // if city exsists raise error
        } else {
          // if no errors we call the onpress of parent component that adds the city to home list
          onPress(res);
        }
      } else {
        // if city name is incorrect raise error
        setError(true);
      }
    });
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <FontAwesome5
          style={styles.icon}
          name="search"
          size={20}
          color={COLORS.primary}
        />
        <TextInput
          style={[styles.input, (error || error2) && styles.error]}
          value={text}
          onChangeText={setText}
          placeholder="search for cities..."
        />
      </View>
      {error && (
        <CustomText
          size={14}
          fontFamily="semiBold"
          color="red"
          text="City Doesn't exsist"
        />
      )}
      {error2 && (
        <CustomText
          size={14}
          fontFamily="semiBold"
          color="red"
          text="City Already exsists"
        />
      )}

      <Pressable onPress={search} style={styles.addButton}>
        {!loading && (
          <FontAwesome5
            style={styles.icon}
            name="plus"
            size={20}
            color={COLORS.white}
          />
        )}
        <CustomText
          size={14}
          fontFamily="semiBold"
          color="white"
          text="Add City"
        />
        {loading && <ActivityIndicator color={COLORS.white} size="small" />}
      </Pressable>
    </View>
  );
};

// component styles
const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '80%',
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  input: {
    width: '90%',
    fontFamily: 'Roboto-Bold',
  },
  error: {
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: COLORS.primary,
    width: 137,
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
