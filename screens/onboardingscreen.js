import React from 'react';
import { ImageBackground, Image, StyleSheet, StatusBar, Dimensions, Platform } from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { height, width } = Dimensions.get('screen');
import { Images, nowTheme } from '../constants';
//import { HeaderHeight } from '../constants/utils';

export default class Onboarding extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Block flex style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Block flex>
          <ImageBackground
            source={Images.backg}
            style={{ flex: 1, height: height, width, zIndex: 1 }}
          />
          <Block space="between" style={styles.padded}>
            <Block>
              <Block middle>
                <Image source={Images.Arrow} style={{ width: 200, height: 200, bottom: 200, position: 'absolute' }} />
              </Block>
              <Block>
                <Block middle>
                  <Text
                    style={{
                      fontFamily: 'montserrat-regular', bottom: 300, position: 'absolute', letterSpacing: 2, paddingHorizontal: 20, textAlign: 'center'
                    }}
                    color="brown"
                    size={44}
                  >
                    Arrow
                  </Text>
                </Block>
              </Block>
              <Block middle row>
                <Text
                  color="white"
                  size={16}
                  style={{ fontFamily: 'montserrat-regular' }}
                >
                  Designed by
                </Text>
                <Image
                  source={Images.mostafalogo}
                  style={{
                    height: 140,
                    width: 150,
                    left: 30,
                    marginLeft: theme.SIZES.BASE
                  }}
                />
              </Block>
              
              <Block
                row
                style={{
                  marginTop: theme.SIZES.BASE * 1,
                  marginBottom: theme.SIZES.BASE * 1
                }}
              >
                <Button
                  shadowless
                  style={styles.button}
                  color={nowTheme.COLORS.PRIMARY}
                  onPress={() =>  navigation.navigate('RegisterScreen')}
                >
                  <Text
                    style={{ fontFamily: 'montserrat-bold', fontSize: 14 }}
                    color={theme.COLORS.WHITE}
                  >
                  SIGN UP
                  </Text>
                </Button>
                
              </Block>
              <Button
                  shadowless
                  style={styles.button}
                  color={nowTheme.COLORS.PRIMARY}
                  onPress={() =>  navigation.navigate('LoginScreen')}
                >
                  <Text
                    style={{ fontFamily: 'montserrat-bold', fontSize: 14 }}
                    color={theme.COLORS.WHITE}
                  >
                  LOGIN IN
                  </Text>
                </Button>
            </Block>
          </Block>
         
        </Block>
        
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   backgroundColor: theme.COLORS.BLACK,
  //   marginTop: Platform.OS === 'android' ? -HeaderHeight : 0
  // },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    zIndex: 3,
    position: 'absolute',
    bottom: Platform.OS === 'android' ? theme.SIZES.BASE * 2 : theme.SIZES.BASE * 3
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0
  },

  gradient: {
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 66
  }
});