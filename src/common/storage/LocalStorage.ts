import AsyncStorage from "@react-native-async-storage/async-storage";

export const SET_LOCAL = async (name: string, data: any) => {
  const jsonValue = JSON.stringify(data);
  await AsyncStorage.setItem(name, jsonValue);
};

export const GET_LOCAL = async (name: string) => {
  const data = await AsyncStorage.getItem(name);
  return data != null ? JSON.parse(data) : null;
};
