import React from "react";
import {StyleSheet, Text, View, Button} from "react-native";
import {answeredQ} from "../redux/actions";
import store from "../redux";
import {connect} from "react-redux";

export default class Quiz extends React.Component {
  state = {
    answeredQ: [],
    currentIndex: 0
  };

  componentDidUpdate() {
    if (this.state.currentIndex === data.results.length) {
      // use redux to store results
      store.dispatch(answeredQ(this.state.answeredQ));
      // clear answered questions
      // clear currentIndex back to 0
      this.props.navigation.navigate("Results");
    }
  }
  render() {
    console.log(this.state);

    return !data.results[this.state.currentIndex] ? null : (
      <View style={styles.container}>
        <Text style={{paddingBottom: 20}}>
          {data.results[this.state.currentIndex].category}
        </Text>
        <View style={styles.question}>
          <Text>{data.results[this.state.currentIndex].question}</Text>
        </View>
        <View style={styles.button}>
          <Button
            title="TRUE"
            onPress={() => {
              const questionData = data.results[this.state.currentIndex];
              const answeredQ = {
                question: questionData.question,
                correct: questionData.correct_answer === "True"
              };
              console.log({answeredQ});
              this.setState(state => ({
                ...state,
                answeredQ: [...state.answeredQ, answeredQ],
                currentIndex: this.state.currentIndex + 1
              }));
            }}></Button>
          <Button
            title="FALSE"
            onPress={() => {
              const questionData = data.results[this.state.currentIndex];
              const answeredQ = {
                question: questionData.question,
                correct: questionData.correct_answer === "False"
              };
              console.log({answeredQ});
              this.setState(state => ({
                ...state,
                answeredQ: [...state.answeredQ, answeredQ],
                currentIndex: this.state.currentIndex + 1
              }));
            }}>
            <Text>FALSE</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 70,
    textAlign: "center",
    backgroundColor: "#D3D3D3"
  },
  question: {
    borderWidth: 1,
    borderColor: "black",
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16
  },
  button: {
    flexDirection: "row",
    paddingTop: 24
  }
});

const data = {
  response_code: 0,
  results: [
    {
      category: "Science & Nature",
      type: "boolean",
      difficulty: "hard",
      question:
        "You can calculate Induced Voltage using: &epsilon; =-N * (d&Phi;B)/(d)",
      correct_answer: "False",
      incorrect_answers: ["True"]
    },
    {
      category: "Science & Nature",
      type: "boolean",
      difficulty: "hard",
      question:
        "It was once believed that injecting shark cartilage into people would prevent them from contracting cancer.",
      correct_answer: "True",
      incorrect_answers: ["False"]
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "hard",
      question: "DHCP stands for Dynamic Host Configuration Port.",
      correct_answer: "False",
      incorrect_answers: ["True"]
    },
    {
      category: "History",
      type: "boolean",
      difficulty: "hard",
      question: "The Battle of Trafalgar took place on October 23rd, 1805",
      correct_answer: "False",
      incorrect_answers: ["True"]
    },
    {
      category: "Entertainment: Video Games",
      type: "boolean",
      difficulty: "hard",
      question:
        "The names of Roxas&#039;s Keyblades in Kingdom Hearts are &quot;Oathkeeper&quot; and &quot;Oblivion&quot;.",
      correct_answer: "True",
      incorrect_answers: ["False"]
    },
    {
      category: "Politics",
      type: "boolean",
      difficulty: "hard",
      question: "Joko Widodo has appeared in the cover of a TIME magazine.",
      correct_answer: "True",
      incorrect_answers: ["False"]
    },
    {
      category: "Entertainment: Books",
      type: "boolean",
      difficulty: "hard",
      question: "Harry Potter was born on July 31st, 1980.",
      correct_answer: "True",
      incorrect_answers: ["False"]
    },
    {
      category: "History",
      type: "boolean",
      difficulty: "hard",
      question:
        "During the Winter War, the amount of Soviet Union soliders that died or went missing was five times more than Finland&#039;s.",
      correct_answer: "True",
      incorrect_answers: ["False"]
    },
    {
      category: "Science: Mathematics",
      type: "boolean",
      difficulty: "hard",
      question:
        "L&#039;H&ocirc;pital was the mathematician who created the homonymous rule that uses derivatives to evaluate limits with indeterminations.",
      correct_answer: "False",
      incorrect_answers: ["True"]
    },
    {
      category: "Entertainment: Japanese Anime & Manga",
      type: "boolean",
      difficulty: "hard",
      question:
        "In the &quot;Kagerou Daze&quot; series, Shintaro Kisaragi is prominently shown with the color red.",
      correct_answer: "True",
      incorrect_answers: ["False"]
    }
  ]
};
