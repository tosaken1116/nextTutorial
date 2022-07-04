import 'firebase/analytics';
import { getAnalytics } from 'firebase/analytics';
import { getApps, initializeApp } from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

if(typeof window !== 'undefined' && getApps().length === 0){
    const firebaseConfig  = {
        apiKey: "AIzaSyDPmcwsXtkoGsbS_S9DMzPqT7A6le7rZUs",
        authDomain: "nextreacttutoreal.firebaseapp.com",
        projectId: "nextreacttutoreal",
        storageBucket: "nextreacttutoreal.appspot.com",
        messagingSenderId: "875097789736",
        appId: "1:875097789736:web:935db0eba5a1c29aec2c1d",
        measurementId: "G-2BGD3DNW7C"
      };

      initializeApp(firebaseConfig);
      getAnalytics()
}