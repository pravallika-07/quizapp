import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';

const Home = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.home}>Home</Text>
      <View>
        <Text style={styles.mainheading}>Launch a quizz in minutes</Text>
        <ScrollView style={styles.scrollbar}>
          <Text style={styles.instructions}>instructions</Text>
          <Text style={styles.instructionsText}>
            1.Read All the instructions on the front of the exam paper.
          </Text>
          <Text style={styles.instructionsText}>
            2.Read the question carfully once & twice then again to make sure
            you know what you are being to asked to do.
          </Text>
          <Text style={styles.instructionsText}>
            3.Be aware of how many marks each question is worth, and therefor
            how many facts or responses you neeed to give.
          </Text>
          <Text style={styles.instructionsText}>
            4. read carefully and give proper answers. GOOD LUCK!
          </Text>
        </ScrollView>
        <TouchableOpacity
          onPress={() => navigation.navigate('SetTimer')}
          style={styles.button}>
          <Text style={styles.buttonText}>Go</Text>
        </TouchableOpacity>
        {/* <Button name={"Go"} onClick={() => navigation.navigate("SetTimer")}/> */}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b8e5ea',
    width: '100%',
    height: '100%',
  },
  home: {
    color: '#000000',
    textAlign: 'center',
    marginTop: '20%',
    fontWeight: 'bold',
    fontSize: 35,
  },
  mainheading: {
    color: '#000000',
    textAlign: 'center',
    marginTop: '10%',
    fontWeight: 'bold',
    fontSize: 20,
  },
  content: {
    color: '#000000',
    marginHorizontal: '10%',
    marginTop: '5%',
    fontWeight: 'bold',
  },
  button: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '20%',
    fontFamily: 'regular',
    fontSize: 18,
    backgroundColor: '#40a420',
    marginTop: '6%',
    paddingLeft: '5%',
    color: 'black',
    padding: '3%',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  scrollbar: {
    marginBottom: '20%',
    padding: 5,
    overflow: 'scroll',
    height: 220,
    width: 250,
    backgroundColor: '#9ef7e3',
    marginHorizontal: '20%',
    marginTop: 20,
  },
  instructions: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 20,
  },
  instructionsText: {
    color: '#000000',
    fontWeight: 'bold',
  },
});
