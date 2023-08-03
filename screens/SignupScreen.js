import {Alert} from 'react-native';
import AuthContent from '../components/Auth/AuthContent';
import {useState} from "react";
import {createUser} from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import {useNavigation} from "@react-navigation/native";

function SignupScreen() {
  const navigator = useNavigation();
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const signupHandler = async ({email, password}) => {
    setIsAuthenticating(true);

    try{
      const res = await createUser({email, password});
      console.log('creater User', res);
      Alert.alert('Done', 'SingUp Success', [
        {
          text: 'ok',
          onPress: () => {
            navigator.navigate('Login');
            setIsAuthenticating(false);
          },
          style: 'ok',
        },
      ]);
    }catch (e){
      Alert.alert('Authentication failed!', 'Could not create user. Please try again later.')
      setIsAuthenticating(false);
    }
  }

  if(isAuthenticating){
    return <LoadingOverlay message="Creating user..."/>
  }

  return <AuthContent onAuthenticate={signupHandler}/>;
}

export default SignupScreen;
