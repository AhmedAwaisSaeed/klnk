/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Navigation } from "react-native-navigation";

class SignUp extends Component {

  constructor(props) {
  super(props);
  this.state={
    signupEmail:"",
    signupPassword:"",
    confirmPassword:""
  }
  }


  onchange_email = (inputEmail) =>{

    this.setState({signupEmail:inputEmail});

  }
  onchange_password = (inputPassword) =>{

    this.setState({signupPassword:inputPassword})

  }
  onchange_confirm_passowrd = (inputPassword) =>{

    this.setState({confirmPassword:inputPassword})

  }

  render(){
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex:1}}>
        {/* <ScrollView
          // contentInsetAdjustmentBehavior="automatic"
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.scrollView}> */}
          <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" enableOnAndroid={true}>
  
          
          <View style={styles.body}>
              <View style={styles.SignUpContainer}>
                  <Text style={styles.Signuptext}>Sign Up</Text>
              </View>



            <View style={{marginTop:80}}>
                <Text style={{fontSize:13,fontWeight:"300"}}>EMAIL</Text>
            </View>


            <View style={styles.signemailContainer}>

            <TextInput

            style={styles.signemailText}
            onChangeText={(text)=>this.onchange_email(text)}
            value={this.state.signupEmail}
            autoCapitalize = 'none'
    

            />

            </View>


            <View style={{marginTop:20}}>
                <Text style={{fontSize:13,fontWeight:"200"}}>PASSWORD</Text>
            </View>



            <View style={styles.signemailContainer}>

            <TextInput

            style={styles.signemailText}
            onChangeText={(text)=>this.onchange_password(text)}
            value={this.state.signupPassword}
            autoCapitalize = 'none'
            secureTextEntry={true}
    

            />

            </View>


            <View style={{marginTop:20}}>
                <Text style={{fontSize:13,fontWeight:"200"}}>CONFIRM PASSWORD</Text>
            </View>

            <View style={styles.signemailContainer}>

            <TextInput

            style={styles.signemailText}
            onChangeText={(text)=>this.onchange_confirm_passowrd(text)}
            value={this.state.confirmPassword}
            autoCapitalize = 'none'
            secureTextEntry={true}
    

            />

            </View>



        <TouchableOpacity style={{marginTop:70}} onPress={()=>""}>
      

      <View style={styles.SignUpButton}>
        <Text style={styles.SignUpButtonText}>Sign Up</Text>
      </View>
    </TouchableOpacity>



            </View>
            </KeyboardAwareScrollView>
        {/* </ScrollView> */}
      </SafeAreaView>
    </>
  );
          }
};

const styles = StyleSheet.create({
  scrollView: {
    flex:1,
    //  backgroundColor:"#54B745"
    // backgroundColor: Colors.lighter,
  },
  
  body: {
    //    backgroundColor:"white",
    flex:1,
     paddingLeft:20,
     paddingRight:20,
     marginTop:60
    // justifyContent:"center"
  },

  SignUpContainer:{

    // backgroundColor:"red"

  },
  Signuptext:{

    color:"#646364",
    fontSize:28,
    fontWeight:"200"

  },
  emailLabelContainer:{

    backgroundColor:"pink"

  },
  emaillabelText:{

    fontSize:13,
    fontWeight:"500",
    color:"#424242"


  },
  signemailContainer :{

    // marginTop:20,
    justifyContent:"center",

    // flex:2,
    height:42,

    borderBottomWidth:1,
    borderBottomColor:"#C3C3C3"
    

  },

  signemailText:{

    fontWeight:"200",
    fontSize:18,
    color:"#424242"

  },
  SignUpButton:{
    //  flex:3,
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
      SignUpButtonText:{
      textAlign:"center",
      color:"white",
      fontSize:18,
      fontWeight:"200"
      },
  

});

export default SignUp;
