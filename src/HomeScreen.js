import React,{ Component } from 'react';
import { View,Text,Image,ScrollView } from 'react-native';
import { Button } from './components/common';

export default class HomeScreen extends Component
{
  static navigationOptions = {
    title: 'CaptureMe'
  };
  state = {image:null,nextButton_inactive:true};
  takePhoto()
   {
     let options = {
         title: 'Take Photo of Mark Slip!!!',
         customButtons: [/*{name: 'fb', title: 'Choose Photo from Facebook'}*/],
         storageOptions: {skipBackup: true,path: 'images'},
         cameraType:'back'
     };
     let ImagePicker = require('react-native-image-picker');
     ImagePicker.showImagePicker(options, (response) => {
     console.log('Response = ', response);
     if (response.didCancel) {
       console.log('User cancelled image picker');}
     else if (response.error) {
       console.log('ImagePicker Error: ', response.error);}
     else if (response.customButton) {
       console.log('User tapped custom button: ', response.customButton);}
     else {
       this.setState({image: response});
       this.setState({nextButton_inactive:false});
      }
    });
   }
   getMyTable()
   {
     const { navigate } = this.props.navigation;
     fetch('http://f7a4b406.ngrok.io/OCR/text/upload.jpg', {
       method: 'POST',
       headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
       body: JSON.stringify({text: "blablabla", id_product: "12"})
     }).then((response) => response.text())
     .then((responseData) => { console.log("response: " + responseData);
     navigate('TableView',responseData);
   })
     .catch((err) => { console.log(err); });
   }
   renderMeWhat()
   {
     if(this.state.image){
       return(
         <ScrollView>
         <View style={{flex:1,padding:10}}>
             <Image source={{uri:this.state.image.uri}}
                style={{height:this.state.image.height,
                     width:300}}/>
         </View>
         </ScrollView>
       );
     }
     return (
       <View style={{position:'relative',flex:1,padding:10}}>
         <Button text={'Tap to snap !!'} onPress={()=>this.takePhoto()} />
         <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
           <Image source={require('./imgs/camera.png')} onPress={()=>this.takePhoto()}/>
         </View>
       </View>
     );
   }
   render()
   {
     return(
     <View style={{flexDirection:'column',flex:1,padding:10}}>
       {this.renderMeWhat()}
       <View style={{padding:5}}>
            <Button text={'Get Mark Slip'} inactive = {this.state.nextButton_inactive}
              onPress={() => this.getMyTable()}/>
       </View>
     </View>
     );
   }
}
