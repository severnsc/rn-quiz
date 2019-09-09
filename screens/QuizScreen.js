import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { answeredQ } from '../redux/actions';
import store from '../redux';
import { connect } from 'react-redux';

const Quiz = function(props) {
  const answerTrue = () => {
    props.answerQuestion({ answer: 'True', nav: props.navigation.navigate });
  };
  const answerFalse = () => {
    props.answerQuestion({ answer: 'False', nav: props.navigation.navigate });
  };
  return (
    <View style={styles.container}>
      <Text style={{ paddingBottom: 20 }}>{props.question.category}</Text>
      <View style={styles.question}>
        <Text>{props.question.question}</Text>
      </View>
      <View style={styles.button}>
        <Button title="TRUE" onPress={answerTrue}></Button>
        <Button title="FALSE" onPress={answerFalse}>
          <Text>FALSE</Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 70,
    textAlign: 'center',
    backgroundColor: '#D3D3D3',
  },
  question: {
    borderWidth: 1,
    borderColor: 'black',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  button: {
    flexDirection: 'row',
    paddingTop: 24,
  },
});

const mapStateToProps = state => ({
  question: state.questions[state.currentQuestion],
  currentQuestion: state.currentQuestion,
});

const mapDispatchToProps = {
  answerQuestion: answeredQ,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz);
