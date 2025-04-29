import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { color } from "../Constant/colors";
import { HOME_PAGE } from "./constant";
import { useTranslation } from "react-i18next";
import { getFontFamily } from "../common/utils/font";

const BottomTabsLayout = ({ state, descriptors, navigation }) => {
  const { t } = useTranslation();
  const getTabName = (routeName) => {
    if (routeName == HOME_PAGE) return t("home");
  };
  return (
    <View
      style={{
        backgroundColor: color.primary,
        height: 90,
        justifyContent: "center",
        padding: 10,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const label = getTabName(route.name);

        const isFocused = state.index === index;

        const onPress = async () => {
          navigation.navigate(route.name);
        };
        return (
          <TouchableOpacity
            key={`tab-layout-${index}`}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ["selected"] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
          >
            <View
              style={{
                //   backgroundColor: isFocused
                //     ? '#F5E8ED'
                //     : Colors.light_violet,
                alignItems: "center",
                width: 65,
                height: 65,
                justifyContent: "center",
                borderRadius: 10,
              }}
            >
              {/* <Image
        resizeMode={'contain'}
        style={[
          route.name === HOME_TAB_MENU_SCENE
            ? {width: 30, height: 30}
            : {...styles.imageMenuIcon},
        ]}
        source={getTabImage(route.name, isFocused)}
      /> */}

              <Text
                style={[
                  // styles.textMenu,
                  {
                    color: isFocused ? "#000" : "#fff",
                    // textShadowColor: isFocused ? '#BA68C8' : '#5C25AB',
                    // textShadowOffset: {width: 1, height: 1},
                    // textShadowRadius: 1,
                    fontFamily: getFontFamily("bold"),
                  },
                ]}
              >
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomTabsLayout;
