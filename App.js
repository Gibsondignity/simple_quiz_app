import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function App() {

  const [currentQustion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false)
  

  const quizData = [
    {
      question: 'What is the capital of Ghana?',
      option: ['Abuja', 'Budapest', 'Accra', 'Addisababa'],
      answer: 'Accra'
    },
    {
      question: 'What is the largest city of Ghana?',
      option: ['Abuja', 'Budapest', 'Accra', 'Kumasi'],
      answer: 'Kumasi'
    },
    
  ]

  const handleAnswer = (selectedAnswer) => {
    const answer = quizData[currentQustion]?.answer;

    if(selectedAnswer === answer){
      setScore((prevScore)=> prevScore+1);
    }

    const nextQuestion = currentQustion + 1

    if(nextQuestion < quizData.length){
      setCurrentQuestion(nextQuestion)
    }else{
      setShowScore(true)
    }
  }

  const handleReset = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(0)
  }

  return (
    <View style={styles.container}>
      {showScore ? 
      <View>
        <Text style={styles.optionsStyle}> You scored {score} out of {quizData.length} </Text>
        <TouchableOpacity onPress={handleReset} style={styles.optionContainer}>
          <Text style={styles.resetBtnText}>Reset</Text>
        </TouchableOpacity>
      </View>
      :
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}> { quizData[currentQustion]?.question } </Text>
          {quizData[currentQustion].option.map((item)=>{
            return <TouchableOpacity onPress={()=>handleAnswer(item)} style={styles.optionContainer}> 
              <Text style={styles.optionsStyle}> {item} </Text>
            </TouchableOpacity>
          })}
      </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionContainer: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  questionText: {
    fontSize: 24,
  },
  optionsStyle: {
    color: 'green',
    padding: 5,
    alignSelf: 'center',
    fontSize: 20,
  },
  optionContainer: {
    borderColor: 'black',
    borderWidth: 2,
    marginTop: 10,
  },
  resetBtnText: {
    fontSize: 18,
    paddingHorizontal: 10,
  }
});
