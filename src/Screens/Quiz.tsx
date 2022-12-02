import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import {data} from '../utils/data';
import {db} from '../firebase/firebase';
import {collection, getDocs} from 'firebase/firestore';

const Quiz = ({navigation}: any) => {
  const [randomQuestion, setRandomQuestion] = useState([]);
  const [displayQues, setDisplayQues] = useState(0);

  // for database
  const [questions, setQuestions] = useState("");
  const questionsCollectionRef = collection(db, 'question');

  useEffect(() => {
    const getQuestions = async () => {
      const data = await getDocs(questionsCollectionRef);
      console.log(data.docs, 'dataaaaaaa');
      setQuestions(data.docs.map(doc => ({...doc.data()})));
    };
    getQuestions();
  }, []);

  useEffect(() => {
    getRandomQuestion(data);
  }, []);

  const getRandomQuestion = (data: any) => {
    console.log('DATA ===>', data);
    const filter: any = data.sort(() => 0.5 - Math.random());

    console.log('Filter ===>', filter);
    setRandomQuestion(filter);
  };

  const handleQuesChange = () => {
    if (displayQues < randomQuestion.length - 1) {
      setDisplayQues(displayQues + 1);
    } else {
      setDisplayQues(0);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Question</Text>

      {/* {questions.map(()=>{
          return( */}
      <View style={styles.boxforquestion}>
        <Text style={styles.question}>
          {randomQuestion[displayQues] && randomQuestion[displayQues].question}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleQuesChange()}>
        <Text style={styles.buttonText}>Change</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text
          style={styles.buttonText}
          onPress={() =>
            navigation.navigate('TimeUp', {
              data: randomQuestion[displayQues],
            })
          }>
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b8e5ea',
    width: '100%',
    height: '100%',
  },
  heading: {
    color: '#000000',
    textAlign: 'center',
    marginTop: '20%',
    fontWeight: 'bold',
    fontSize: 35,
  },
  button: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '20%',
    fontFamily: 'regular',
    fontSize: 18,
    backgroundColor: '#40a420',
    marginTop: '10%',
    paddingLeft: '5%',
    color: 'black',
    padding: '3%',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  question: {
    color: '#000000',
    marginHorizontal: '10%',
    fontSize: 17,
  },
  boxforradio: {
    marginHorizontal: 4,
    flexDirection: 'row',
  },
  text: {
    color: '#000000',
    marginTop: 8,
  },
  boxforquestion: {
    borderWidth: 1,
    color: 'black',
    padding: 20,
    marginHorizontal: 15,
    marginTop: 20,
  },
});
