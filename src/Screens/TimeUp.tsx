import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

const TimeUp = (props: any) => {
 
  const [question, setQuestion] = useState('');

  const [alphabets, setAlphabets] = useState('');
  const array = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  const inputTime = useSelector((store: any) => store.timer);
  const inputMinute = useSelector((store: any) => store.min);
  let number = +inputTime;
  let minute = +inputMinute;
  const [seconds, setSeconds] = useState(number);
  const [minutes, setMinutes] = useState(minute);

 
  var timer: any;

  useEffect(() => {
    setQuestion(props.route.params.data);
    getAlphabets(array);
  }, []);

  useEffect(() => {
    timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
        
      }

      if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
    }, 1000);

    return () => clearInterval(timer);
  });
 

  const getAlphabets = (array: any) => {
    console.log('array', array);
    let randomItem = array[Math.floor(Math.random() * array.length)];
    setAlphabets(randomItem);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.timeUp}>TimeUp</Text>
      <View style={styles.boxforquestion}>
        <Text style={styles.question}>{question.question}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{alphabets}</Text>
      </TouchableOpacity>
      <View style={styles.counterBox}>
        {minutes == 0 && seconds == 0 ? (
          <Text style={styles.counterText}>Time up</Text>
        ) : (
          <Text style={styles.counterText}>
            {minutes} : {seconds}
          </Text>
        )}
      </View>
    </View>
  );
};

export default TimeUp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b8e5ea',
    width: '100%',
    height: '100%',
  },
  timeUp: {
    color: '#000000',
    textAlign: 'center',
    marginTop: '20%',
    fontWeight: 'bold',
    fontSize: 35,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  counterText: {
    color: '#000000',
    fontSize: 20,
  },
  counterBox: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  button: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#40a420',
    marginHorizontal: '42%',
    marginTop: 10,
  },
  question: {
    color: '#000000',
    marginHorizontal: '12%',
    fontSize: 18,
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
