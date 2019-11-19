/**
 * @format
 */


import App from './App';
import SignUp from './src/screens/SignUp';


import { Navigation } from "react-native-navigation";

Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => App);
Navigation.registerComponent(`SignUp`, () => SignUp);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setDefaultOptions({

        statusBar: {
           visible:true,
  
          style:'dark' ,
          backgroundColor: "#ffff",
           hideWithTopBar: true,
           blur: true

         
     },
    
          topBar: {
            visible:false,
          }
           

         
      
        })
    Navigation.setRoot({
        root: {
          stack: {
            children: [{
              component: {
                name: "navigation.playground.WelcomeScreen"
              }
            }]
          }
        }
      });
});
