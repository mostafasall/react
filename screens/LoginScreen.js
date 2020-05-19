import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,Alert,Image,AsyncStorage
} from 'react-native';

import { Block, Checkbox, Text, Button as GaButton, theme } from 'galio-framework';

import { Button, Icon, Input } from '../components';
import { Images, nowTheme } from '../constants';



const { width, height } = Dimensions.get('screen');


const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>{children}</TouchableWithoutFeedback>
);

class LoginScreen extends React.Component {


  constructor(props) {
    super(props);
     //this.login= this.login.bind(this);
     this.logincall = this.logincall.bind(this);
    //var {height, width} = Dimensions.get('window');
     this.state = {screenHeight: height, screenWidth: width,
                  Usrname: '',
                  email : '',
                  password: '',
                  userData:{},
                  status: '',
                  baseUrl: 'http://7797d76d.ngrok.io/api/' };
  
    }
    
    onClickListener = (viewId) => {
      // Alert.alert(this.state.Usrname+" "+this.state.email+" "+this.state.password , "View_id "+viewId);
      //if(this.state.Usrname || this.state.Usrname != " "){
       if(this.state.email){
        if(this.state.password){
            this.logincall();
         }else{
        Alert.alert("Please enter password");
       }
       
//     }else{
//   Alert.alert("Please enter username");
//  }
}else{
  Alert.alert("Please enter email");
 }


} 
redirectcall(){



}
logincall(){
  var that = this;
  var url = that.state.baseUrl + 'login';
   console.log("url:"+url);
   const { navigation } = this.props;
  fetch(url,{
        method: 'POST',
        headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
       },
        body: JSON.stringify({ "email": this.state.email,"password": this.state.password})
        }).then(response => response.json()) 
         //console.log(response);
          //return response.json();
        // .then(
        //   response.status===200 ? response.status : false)
        // .then(response => {
        //   if (response.status===200){

          .then(response => { 
    this.setState({ userData: JSON.stringify(response) });        
    console.log(this.state.userData);  
    if (response.status==200){
      navigation.navigate('Profile')
    }else{
      
      Alert.alert("Please enter valid email and password");

      
      //---console.log(response)
      this.setState({ status: JSON.stringify(response.status) }); 
         }

    }
)
      }

      // .then(response => response.json())
      // .then(json => console.log(json));

  render() {
    //const { navigation } = this.props;

    return (
      <DismissKeyboard>
        <Block flex middle>
          <ImageBackground
            source={Images.RegisterBackground}
            style={styles.imageBackgroundContainer}
            imageStyle={styles.imageBackground}
          >
            <Block flex middle>
              <Block style={styles.registerContainer}>
                <Block flex space="evenly">
                  <Block flex={0.4} middle style={styles.socialConnect}>
                    <Block flex={0.5} middle>
                      <Text
                        style={{
                          fontFamily: 'montserrat-regular',
                          textAlign: 'center'
                        }}
                        color="#333"
                        size={24}
                      >
                        SIGN  IN
                      </Text>
                    </Block>

                    <Block flex={0.5} row middle space="between" style={{ marginBottom: 18 }}>
                    
                      <GaButton
                        round
                        onlyIcon
                        shadowless
                        icon="heart"
                        iconFamily="Font-Awesome"
                        iconColor={theme.COLORS.WHITE}
                        iconSize={theme.SIZES.BASE * 1.625}
                        color={nowTheme.COLORS.YOUTUBE}
                        style={[styles.social, styles.shadow]}
                      />
                    </Block>
                  </Block>
                  <Block flex={0.1} middle>
                    <Text
                      style={{
                        fontFamily: 'montserrat-regular',
                        textAlign: 'center'
                      }}
                      muted
                      size={16}
                    >
                    
                    </Text>
                  </Block>
                  <Block flex={1} middle space="between">
                    <Block center flex={0.9}>
                      <Block flex space="between">
                        <Block>

      
                          <Block width={width * 0.8}>
                            <Input
                              placeholder="email"
                              style={styles.inputs}
                              onChangeText={(email) => this.setState({email})}

                              iconContent={
                                <Icon
                                  size={16}
                                  color="#ADB5BD"
                                  name="email-852x"
                                  //family="NowExtra"
                                  style={styles.inputIcons}
                                />
                              }
                            />
                          </Block>
                          <Block width={width * 0.8} style={{ marginBottom: 5 }}>
                            <Input
                              placeholder="Password"
                              style={styles.inputs}
                              secureTextEntry={true}
                              onChangeText={(password) => this.setState({password})}

                              iconContent={
                                <Icon
                                  size={16}
                                  color="#ADB5BD"
                                  name="caps-small2x"
                                  //family="NowExtra"
                                  style={styles.inputIcons}
                                />
                              }
                            />
                          </Block>
                          <Block
                            style={{ marginVertical: theme.SIZES.BASE, marginLeft: 15}}
                            row
                            width={width * 0.75}
                          >
                            
                          </Block>
                        </Block>
                        <Block center>
                          <Button color="primary" round style={styles.createButton}
                          onPress={() => this.onClickListener()}
                          >
                            <Text
                              style={{ fontFamily: 'montserrat-bold' }}
                              size={14}
                              color={nowTheme.COLORS.WHITE}
                            >
                              Get Started
                            </Text>
                          </Button>
                          <Block middle>
                <Image source={Images.Arrow} style={{ width: 200, height: 200, bottom: 90, position: 'absolute' }} />
              </Block>
                        </Block>
                      </Block>
                    </Block>
                  </Block>
                </Block>
              </Block>
            </Block>
          </ImageBackground>
        </Block>
      </DismissKeyboard>
    );
  }
}

const styles = StyleSheet.create({
  imageBackgroundContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1
  },
  imageBackground: {
    width: width,
    height: height
  },
  registerContainer: {
    marginTop: 55,
    width: width * 0.9,
    height: height < 812 ? height * 0.8 : height * 0.8,
    backgroundColor: nowTheme.COLORS.WHITE,
    borderRadius: 4,
    shadowColor: nowTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: 'hidden'
  },
  socialConnect: {
    backgroundColor: nowTheme.COLORS.WHITE
    // borderBottomWidth: StyleSheet.hairlineWidth,
    // borderColor: "rgba(136, 152, 170, 0.3)"
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: '#fff',
    shadowColor: nowTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1
  },
  socialTextButtons: {
    color: nowTheme.COLORS.PRIMARY,
    fontWeight: '800',
    fontSize: 14
  },
  inputIcons: {
    marginRight: 12,
    color: nowTheme.COLORS.ICON_INPUT
  },
  inputs: {
    borderWidth: 1,
    borderColor: '#E3E3E3',
    borderRadius: 21.5
  },
  passwordCheck: {
    paddingLeft: 2,
    paddingTop: 6,
    paddingBottom: 15
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25,
    marginBottom: 40
  },
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: 'center',
    marginHorizontal: 10
  }
});

export default LoginScreen;
