import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,Platform, } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import { FontAwesome, Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';




export default class App extends React.Component {
  state = {
    hasPermission: null,
    cameraType: Camera.Constants.Type.back,
    image1:'',image2:'https://scontent.fbey4-1.fna.fbcdn.net/v/t31.0-8/21427270_10212636922111298_5048354817598511836_o.jpg?_nc_cat=104&_nc_sid=110474&_nc_ohc=21ClzRqt1J8AX-MBywa&_nc_ht=scontent.fbey4-1.fna&oh=5cf1b60b6c6a38cf649ff6c4f9f6e69d&oe=5EEA52E4'
  ,api_key:'qPZyELJLzwlUQNmRidlim8sUspQu2LEa',api_secret:'epY606UbofqASlz2VrQbEtQ_ykOdIx6W'
  }

  async componentDidMount() {
    this.getPermissionAsync()
  }
  verfapi(){

    
      //var that = this;
      var url = "https://api-us.faceplusplus.com/facepp/v3/compare";
       console.log("url:"+url);
       //const { navigation } = this.props;


       const body = new FormData
body.append("api_key", this.state.api_key)
body.append("", "\\")
body.append("api_secret", this.state.api_secret)
body.append("", "\\")
body.append("image_url1", "https://scontent.fbey4-1.fna.fbcdn.net/v/t31.0-8/21427270_10212636922111298_5048354817598511836_o.jpg?_nc_cat=104&_nc_sid=110474&_nc_ohc=21ClzRqt1J8AX-MBywa&_nc_ht=scontent.fbey4-1.fna&oh=5cf1b60b6c6a38cf649ff6c4f9f6e69d&oe=5EEA52E4")
//body.append("", "\\")
body.append("image_url2", "https://scontent.fbey4-1.fna.fbcdn.net/v/t31.0-8/21427270_10212636922111298_5048354817598511836_o.jpg?_nc_cat=104&_nc_sid=110474&_nc_ohc=21ClzRqt1J8AX-MBywa&_nc_ht=scontent.fbey4-1.fna&oh=5cf1b60b6c6a38cf649ff6c4f9f6e69d&oe=5EEA52E4")
fetch("https://api-us.faceplusplus.com/facepp/v3/compare", {
  body,
  headers: {
    "Content-Type": "multipart/form-data"
  },
  method: "POST"
})
      // fetch(url,{
      //       method: 'POST',
      //       headers: {
      //        'Accept': 'application/json',
      //        //'Content-Type': 'application/json',
      //      },
      //       Body: JSON.stringify({"api_key":this.state.api_key,"api_secret": this.state.api_secret,"image_base64_1":this.state.image1,"face_token1":this.state.image2})
      //       })
            .then(response => response.json()) 
            // console.log(response));
              //return response.json();
           .then(response => { 
            console.log(JSON.stringify(response.confidence))
            // .then(response => {
            //   if (response.status===200){
           })
             
          }

    // curl -X POST "https://api-us.faceplusplus.com/facepp/v3/compare" \
    // -F "api_key=<api_key>" \
    // -F "api_secret=<api_secret>" \
    // -F "face_token1=c2fc0ad7c8da3af5a34b9c70ff764da0" \
    // -F "face_token2=ad248a809408b6320485ab4de13fe6a9"



  

  getPermissionAsync = async () => {
    // Camera roll Permission 
    if (Platform.OS === 'ios') {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
    // Camera Permission
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasPermission: status === 'granted' });
  }

  handleCameraType=()=>{
    const { cameraType } = this.state

    this.setState({cameraType:
      cameraType === Camera.Constants.Type.back
      ? Camera.Constants.Type.front
      : Camera.Constants.Type.back
    })
  }

  takePicture = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync({base64: true});
      this.setState({ image1:photo.base64});
      //console.log(this.state.image1);
      this.verfapi();
    }
  }

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images
    });
  }
  

  render(){
    const { hasPermission } = this.state
    if (hasPermission === null) {
      return <View />;
    } else if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
          <View style={{ flex: 1 }}>
            <Camera style={{ flex: 1 }} type={this.state.cameraType}  ref={ref => {this.camera = ref}}>
              <View style={{flex:1, flexDirection:"row",justifyContent:"space-between",margin:30}}>
                <TouchableOpacity
                  style={{
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    backgroundColor: 'transparent'                 
                  }}
                  onPress={()=>this.pickImage()}>
                  <Ionicons
                      name="ios-photos"
                      style={{ color: "#fff", fontSize: 40}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                  }}
                  onPress={()=>this.takePicture()}
                  >
                  <FontAwesome
                      name="camera"
                      style={{ color: "#fff", fontSize: 40}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                  }}
                  onPress={()=>this.handleCameraType()}
                  >
                  <MaterialCommunityIcons
                      name="camera-switch"
                      style={{ color: "#fff", fontSize: 40}}
                  />
                </TouchableOpacity>
              </View>
            </Camera>
        </View>
      );
    }
  }
  
}