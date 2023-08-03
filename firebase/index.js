import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_AUTH_DOMAIN,
  databaseURL: process.env.EXPO_PUBLIC_DATA_BASE_URL,
  projectId: "react-native-account-book",
  storageBucket: "",
  appId: "react-native-account-book",
}

export const app = initializeApp(firebaseConfig);

