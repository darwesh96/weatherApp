import React, {useEffect, useState} from 'react';
import {
  View,
  ImageBackground,
  ActivityIndicator,
  Pressable,
  Image,
} from 'react-native';
import CustomText from '../../components/customText';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {COLORS} from '../../constants/colors';
import DropShadow from 'react-native-drop-shadow';
import ItemDescription from './components/ItemDescription';
import {useCity} from '../../API/hooks/useCity';
import {useDispatch} from 'react-redux';
import {addHistorical, removeCity} from '../../redux/weatherSlice';
import moment from 'moment';
import {ICON_URL} from '../../constants/baseurl';

/**
 * DetailsScreen for displaying the details of selected city.
 * @param {NavigationProp} navigation
 * @param {Route} route
 * @return {ReactElement}
 * @public
 */
function DetailsScreen({navigation, route}) {
  const dispatch = useDispatch();
  // importing useCity custom hook for managing the api
  const {loadCityApi, loading, data} = useCity();

  // name of the selected city passed a navigation param
  let {name} = route.params;

  // called when first mounted
  useEffect(() => {
    // fetch city weather details
    loadCityApi(name.split(',')[0]).then(res => {
      if (res.cod == '200') {
        // adding the current details to the historical list
        dispatch(
          addHistorical({...res, id: res.id + new Date(), date: new Date()}),
        );
      }
    });
  }, []);
  return (
    <View style={styles.container}>
      <DropShadow
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.2,
          shadowRadius: 2,
        }}>
        <View style={styles.headerContainer}>
          <Ionicons
            onPress={() => navigation.goBack()}
            style={styles.icon}
            name="arrow-back"
            size={26}
            color={COLORS.white}
          />
        </View>
      </DropShadow>
      <DropShadow
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.2,
          shadowRadius: 15,
          zIndex: 9,
        }}>
        <View style={styles.card}>
          <CustomText
            size={16}
            fontFamily="semiBold"
            color="black"
            text={name}
          />
          {data && data?.weather && (
            <Image
              source={{
                uri: ICON_URL + data?.weather[0]?.icon + '.png',
              }}
              style={styles.icon2}
            />
          )}
          {loading ? (
            <ActivityIndicator size={'large'} color={COLORS.primary} />
          ) : (
            data && (
              <View>
                <ItemDescription
                  data={{
                    title: 'Description',
                    value: data?.weather && data?.weather[0]?.description,
                  }}
                />
                <ItemDescription
                  data={{
                    title: 'Temperature',
                    value: Math.round(data?.main?.temp) + ' C',
                  }}
                />
                <ItemDescription
                  data={{title: 'Humidity', value: data?.main?.humidity + ' %'}}
                />
                <ItemDescription
                  data={{
                    title: 'Windspeed',
                    value: data?.wind?.speed + ' km/h',
                  }}
                />
              </View>
            )
          )}
        </View>
      </DropShadow>
      <DropShadow
        style={{
          shadowColor: COLORS.black,
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.3,
          shadowRadius: 10,
          zIndex: 9,
        }}>
        <Pressable
          onPress={() => {
            dispatch(removeCity(name));
            navigation.goBack();
          }}
          style={styles.delete}>
          <FontAwesome5 name="trash-alt" size={15} color={'white'} />
          <CustomText
            size={10}
            fontFamily="regular"
            color="white"
            text={'Remove City'}
          />
        </Pressable>
      </DropShadow>
      <ImageBackground
        style={styles.bg}
        source={require('../../assets/images/background.png')}>
        <CustomText
          size={12}
          fontFamily="regular"
          color={COLORS.text}
          text={`Weather information for London received on `}
        />
        <CustomText
          size={12}
          fontFamily="regular"
          color={COLORS.text}
          text={moment(data?.date).format('DD.MM.YYYY - hh:mm')}
        />
      </ImageBackground>
    </View>
  );
}
export default DetailsScreen;
