import AuthContent from '../components/Auth/AuthContent';
import {login} from '../util/auth';
import {Alert} from "react-native";
import {useContext, useState} from "react";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import {AuthContext} from "../store/auth-context";
function LoginScreen() {
  const [isLogin, setIsLogin] = useState(false);
  const authCtx = useContext(AuthContext);
  const loginHandler = async ({email, password}) => {
    setIsLogin(true);
    try {
      const res = await login({email, password});
      Alert.alert('Done', 'Login Success', [
        {
          text: 'ok',
          onPress: () => {
            authCtx.authenticate(res['_tokenResponse'].idToken);
            setIsLogin(false);
          },
          style: 'ok',
        },
      ]);
    }catch (e){
      Alert.alert(
        'Authentication failed!',
        'Could not log you in. Please check your credentials or try again later.'
      )
      setIsLogin(false);
    }
  }

  if(isLogin){
    return <LoadingOverlay message="Loggin you in..."/>
  }

  return <AuthContent isLogin onAuthenticate={loginHandler}/>;
}

export default LoginScreen;
