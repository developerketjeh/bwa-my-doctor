import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value, valueType) => {
  try {
    if (valueType === 'object') {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(key, jsonValue)
    } else {
      await AsyncStorage.setItem(key, value)
    }
  } catch (e) {
    // saving error
  }
}


export const getData = async (key, valueType) => {
  try {
    const value = await AsyncStorage.getItem(key);
    const jsonValue = await AsyncStorage.getItem(key);
    if (valueType === 'object') {
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } else {
      return value !== null ? value : null
    }
  } catch (e) {
    // error reading value
  }
}