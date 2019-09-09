import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { startGame } from '../redux/actions';

const Home = function(props) {
  const startGame = () => {
    props.startGame();
    props.navigation.navigate('Quiz');
  };
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
        onPress={startGame}
      >
        <Text style={styles.text}>BEGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 50,
    width: '50%',
    alignItems: 'center',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
  topText: {
    paddingBottom: 24,
  },
});

const mapDispatchToProps = {
  startGame,
};

export default connect(
  null,
  mapDispatchToProps
)(Home);
