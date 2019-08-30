import React from "react";
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.topText}>Welcome to the Trivia Challenge!</Text>
        <Text style={styles.topText}>
          You will be presented with 10 TRUE or FALSE questions
        </Text>
        <Text style={styles.topText}>Can you score 100%?</Text>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={() => this.props.navigation.navigate("Quiz")}>
          <Text style={styles.text}>BEGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    height: 50,
    width: "50%",
    alignItems: "center",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 0
  },
  topText: {
    paddingBottom: 24
  }
});
