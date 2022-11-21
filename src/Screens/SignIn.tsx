import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

let width = Dimensions.get('window').width;

let widthPercentage = (width * 60) / 100;



const SignIn = () => {
  const _signIn = async () => {
    GoogleSignin.configure({
      scopes: [],
      webClientId:
        '66796272411-tggknp0q72rpk5k7t2hqts4tono8tp30.apps.googleusercontent.com',
      offlineAccess: true,
      hostedDomain: '',
      // loginHint:'',
      forceCodeForRefreshToken: true,
      accountName: '',
      iosClientId: ' <FROM DEVELOPER CONSOLE>',
    });

    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('userInfo', userInfo);
    } catch (error: any) {
      console.log(error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      } else if (error.code === statusCodes.IN_PROGRESS) {
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      } else {
      }
    }
  };

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
    

      <GoogleSigninButton
        style={{width: widthPercentage, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={_signIn}
        // disabled={this.state.isSigninInProgress}
      />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b8e5ea',
    width: '100%',
    height: '100%',
    alignItems: 'center',
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
    width: '80%',
    // marginLeft: '10%',
    // marginRight: '10%',
    backgroundColor: '#dcdedc',
    marginTop: '6%',
    paddingLeft: '5%',
    textAlign: 'center',
    color: '#000000',
  },
  forgotpass: {
    color: '#000000',
    marginTop: 10,
    marginHorizontal: '15%',
    fontWeight: 'bold',
  },
  button: {
    borderRadius: 10,
    width: '60%',
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
  textforOr: {
    color: '#000000',
    marginTop: 10,
    marginHorizontal: '47%',
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  buttondiv: {
    width: '60%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '10%',
    fontFamily: 'regular',
    fontSize: 18,
    backgroundColor: '#0a16fb',
    marginTop: '5%',
    marginBottom: '5%',
    paddingLeft: '5%',
    color: 'black',
    padding: '3%',
  },
  buttonforText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
