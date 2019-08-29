import React from "react";
import {Platform} from "react-native";
import {createStackNavigator, createBottomTabNavigator} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import QuizScreen from "../screens/QuizScreen";
import ResultsScreen from "../screens/ResultsScreen";

const config = Platform.select({
  web: {headerMode: "screen"},
  default: {}
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? `ios-happy` : "md-happy"}
    />
  )
};

HomeStack.path = "";

const QuizStack = createStackNavigator(
  {
    Quiz: QuizScreen,
    Results: ResultsScreen
  },
  config
);

QuizStack.navigationOptions = {
  tabBarLabel: "Quiz",
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-flash" : "md-flash"}
    />
  )
};

QuizStack.path = "";

const tabNavigator = createBottomTabNavigator({
  Home: {screen: HomeStack},
  Quiz: {screen: QuizStack}
});

tabNavigator.path = "";

export default tabNavigator;
