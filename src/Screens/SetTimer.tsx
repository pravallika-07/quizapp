import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { Min,Timer } from '../Store/Action';

const SetTimer = ({navigation}: any) => {
  const [timer, setTimer] = useState('');
  const [min, setMin] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(Timer(timer));
    dispatch(Min(min))
    navigation.navigate('Quiz');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.timer}>Set Timer</Text>
      <View style={styles.divforinput}>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder={'Set Timer in minutes'}
        placeholderTextColor={'#000000'}
        onChangeText={text => setMin(text)}
      />
       <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder={'Set Timer in seconds'}
        placeholderTextColor={'#000000'}
        onChangeText={text => setTimer(text)}
      />
      </View>
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Go</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SetTimer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b8e5ea',
    width: '100%',
    height: '100%',
  },
  timer: {
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
  input: {
    borderRadius: 25,
    marginLeft: '4%',
    // marginRight: '4%',
    backgroundColor: '#dcdedc',
    marginTop: '6%',
    paddingLeft: '5%',
    textAlign: 'center',
    color: '#000000',
  },
  divforinput:{
    flexDirection:'row',
  }
});
