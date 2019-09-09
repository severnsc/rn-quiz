import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { resetGame } from '../redux/actions';

const Results = function(props) {
  const resetGame = () => {
    props.resetGame();
    props.navigation.navigate('Quiz');
  };
  return (
    <View style={styles.container}>
      {/* show how many answers they got correct out of 10 */}
      <Text style={styles.topText}>You Scored: </Text>
      <Text style={styles.topText}>
        {/* map over and render all 10 of the question's answers */}
        {/* show a + if they answered correct  */}
        {/* show a - if they answered incorrect  */}
        List of all 10 questions go here
      </Text>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.button}
        onPress={resetGame}
      >
        <Text style={styles.text}>PLAY AGAIN?</Text>
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

// - The Score shows correct and total
// - Displays a list of the questions and whether the answer was correct or not
// - PLAY AGAIN starts over and navigates to the Home Screen

const mapDispatchToProps = {
  resetGame,
};

export default connect(
  null,
  mapDispatchToProps
)(Results);
