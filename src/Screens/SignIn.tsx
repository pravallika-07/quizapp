import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import { firebase } from '../firebase/firebase';


const SignInWithFireBase = () =>{
  var google_provider =new firebase.auth.GoogleAuthProvider();
  // firebase.auth().signInWithPopup(google_provider)
  // .then((re:any)=>{
  //   console.log(re);
  // })
  // .catch((err:any)=>{
  //   console.log(err);
  // })
  
}

const SignIn = () => {
  
  return (
    <View style={styles.container}>
      <Text style={styles.signIn}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder={'Email'}
        placeholderTextColor={'#000000'}
      />
       <TextInput
        style={styles.input}
        placeholder={'Password'}
        placeholderTextColor={'#000000'}
      />
      <Text style={styles.forgotpass}>Forgot your Password ?</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
      <Text style={styles.textforOr}>OR</Text>
      <TouchableOpacity style={styles.buttondiv}>
        <Text style={styles.buttonforText}>Continue with facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttondiv} onPress={SignInWithFireBase}>
        <Text style={styles.buttonforText}>Continue with Google</Text>
      </TouchableOpacity>

{/* <GoogleSigninButton
    style={{ width: 192, height: 48 }}
    size={GoogleSigninButton.Size.Wide}
    color={GoogleSigninButton.Color.Dark}
    onPress={this._signIn}
    disabled={this.state.isSigninInProgress} /> */}
      
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#b8e5ea',
        width: '100%',
        height: '100%',
      },
      signIn: {
        color: '#000000',
        textAlign: 'center',
        marginTop: '10%',
        fontWeight: 'bold',
        fontSize: 35,
      },
      input: {
        borderRadius: 25,
        marginLeft: '10%',
        marginRight: '10%',
        backgroundColor: '#dcdedc',
        marginTop: '6%',
        paddingLeft: '5%',
        textAlign: 'center',
        color: '#000000',
      },
      forgotpass:{
        color:'#000000',
        marginTop:10,
        marginHorizontal:"15%",
        fontWeight:'bold'
      },
      button: {
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: '10%',
        fontFamily: 'regular',
        fontSize: 18,
        backgroundColor: '#fb0a0a',
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
      textforOr:{
        color:'#000000',
        marginTop:10,
       marginHorizontal:"47%",
        fontWeight:'bold',
        paddingVertical:10
      },
      buttondiv: {
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: '10%',
        fontFamily: 'regular',
        fontSize: 18,
        backgroundColor: '#0a16fb',
        marginTop: '10%',
        paddingLeft: '5%',
        color: 'black',
        padding: '3%',
      },
      buttonforText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#ffffff',
      },
})