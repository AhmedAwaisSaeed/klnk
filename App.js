/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
// Login Screen
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

import { Navigation } from "react-native-navigation";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class App extends Component {

  constructor(props) {
  super(props);
  this.state={
    email:"",
    password:""
  }
  }


  onchange_email = (inputEmail) =>{

    this.setState({email:inputEmail});

  }
  onchange_password = (inputPassword) =>{

    this.setState({password:inputPassword})

  }

  navigate_to_other_screen = (screen) =>{

    Navigation.push(this.props.componentId, {
      component: {
        name: screen,
        passProps: {
          text: 'Pushed screen'
        },
        
      }
    });

  }

  render(){
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex:1}}>

          


 <ImageBackground source={require('./src/assets/mainbackgroundimage.png')} style={{width: '100%', height: '100%'}}> 
 <KeyboardAwareScrollView style={{flex:1}} keyboardShouldPersistTaps="handled" enableOnAndroid={true}>
   
  
          
          <View style={styles.body}>

          
          <View style={styles.mainContainerlogoAndText}>

            <View style={styles.logoTextContainer}>
              <Text style={{color:"white",fontSize:20}}>KLNK</Text>
              </View>
              <View style={styles.logoContainer}>
              <Image
          // source={{uri:base_url+'/'+this.state.logo_path}}
          source={require('./src/assets/CombinedShape.png')}
          
          style={{ }} />
              
              </View>

        </View>


      <View style={styles.welcomeTextConatiner}>

          <Text style={styles.welcomeText}>Welcome to KLNKfnd!</Text>

      </View>

    <View style={styles.paragraphContainer}>

        <Text style={styles.paragraphText}>Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus,</Text>


    </View>


    <View style={styles.emailContainer}>

        <TextInput

        style={{color:"white",marginLeft:10,fontSize:16}}
        onChangeText={(text)=>this.onchange_email(text)}
        value={this.state.email}
        placeholder="E-mail"
        autoCapitalize = 'none'
        placeholderTextColor="#C9C9C9"

          />





      </View>



      <View style={styles.passwordContainer}>

        <TextInput

        style={{color:"white",marginLeft:10,fontSize:16}}
        onChangeText={(text)=>this.onchange_password(text)}
        value={this.state.password}
        placeholder="Password"
        autoCapitalize = 'none'
        placeholderTextColor="#C9C9C9"
        secureTextEntry={true}

          />





        </View>



        <View style={styles.forgotPassConatiner}>
        <TouchableOpacity onPress={()=>""}><Text style={styles.forgotpassText}>
        Forgot password?</Text></TouchableOpacity></View>
      
            

        <TouchableOpacity onPress={()=>""}>
      

          <View style={styles.LoginButton}>
            <Text style={styles.LoginButtonText}>Login</Text>
          </View>
        </TouchableOpacity>


      <View style={styles.signupMainContainer}>
      <TouchableOpacity>
        <View style={styles.donthaveContainer}>
          <Text style={styles.donthaveText}>Don’t have an account?</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.navigate_to_other_screen("SignUp")}>
        <View style={styles.signuoContainer}>
          <Text style={styles.signupText}> Sign Up</Text>
        </View>
        </TouchableOpacity>

        </View>
          
          
          
          
          </View>
          </KeyboardAwareScrollView>
          </ImageBackground> 
        
        
      </SafeAreaView>
    </>
  );
          }
};

const styles = StyleSheet.create({
  scrollView: {
    flex:1,

  },
  
  body: {

    flex:1,
    paddingLeft:20,
    paddingRight:20

  },
  mainContainerlogoAndText:{

    height:33,
    flexDirection:"row",
    marginTop:130,
    

  },
  logoTextContainer:{

flex:0.2,

justifyContent:"center"

  },
  logoContainer:{
    flex:1.1

  },

  welcomeTextConatiner:{
    
    height:31,
    marginTop:20

  },
  welcomeText:{
    fontSize:23,
    fontWeight:"bold",
    color:"white"
  },
  paragraphContainer:{


    height:43,
    marginTop:15

    

  },
  paragraphText:{

    fontWeight:"200",
    fontSize:15,
    color:"#ffff"

  },
  emailContainer :{

    marginTop:20,
    justifyContent:"center",

    
    height:52,

    borderWidth:1,
    borderColor:"white"

  },

  emailText:{

  },
  passwordContainer:{


    
    marginTop:20,
    height:52,
    justifyContent:"center",

    borderWidth:1,
    borderColor:"white"

  },
  passwordText:{

  },

  forgotPassConatiner:{
    marginTop:20,
    height:19,
    alignItems:"flex-end"

 

  },
  forgotpassText:{

    fontSize:14,
    color:"white",
    fontWeight:"200"

  },
  LoginButton:{

  //flex:1,
  marginTop:30,
  height:69,
  justifyContent:"center",
  alignItems:"center",
   backgroundColor: '#9DCB3B',
   borderRadius: 5,
   borderWidth: 1,
   borderColor:"#9DCB3B"   
   
  
  },
  LoginButtonText:{
  textAlign:"center",
  color:"white",
  fontSize:18,
  fontWeight:"200"
  },
  signupMainContainer:{
    
    flexDirection:"row",
    height:19,
    marginTop:30,
    justifyContent:"center",
    

  },
  donthaveContainer:{


  },
  donthaveText:{
    color:"white",
    fontSize:14

  },
  signuoContainer:{


  },
  signupText:{
  color:"#50C1DA",
  fontSize:14,
  fontWeight:"bold",


  }

});

export default App;
