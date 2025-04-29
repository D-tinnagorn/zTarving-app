import { ACCESS_TOKEN } from "../src/common/storage/constant";
import { SET_LOCAL } from "../src/common/storage/LocalStorage";
import { LOGIN_PAGE } from "../src/routes/constant";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from "../src/routes/types";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
const navigation = useNavigation<NavigationProp>();

export const SessionExpire = async () => {
  await SET_LOCAL(ACCESS_TOKEN, "");
  navigation.navigate(LOGIN_PAGE); 
}
