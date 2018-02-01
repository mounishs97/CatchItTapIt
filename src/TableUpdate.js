import React,{ Component } from 'react';
import { View,Text,ScrollView } from 'react-native';
import { Header,MarkCard,Button,Card,Input } from './components/common';
import firebase from 'firebase';
var tts = require('react-native-android-speech');
var reactMixin = require('react-mixin');
var timerMixin = require('react-timer-mixin');
export default class TableUpdate extends Component
{
  state = {
           pause:false,
           id:'',
           subject:'',
           classid:'',
           tabledata:[]
          };
  timer = null;
  SpeakTableData = [];
  speakRowData(ele)
  {
       if (!ele)return;
       if(this.state.pause)return;
       console.log('Student executing'+ele.id);
       let text = 'Student '+ele.id+' scored '+ele.marks;
         tts.speak({
          text:text,
          pitch:1,
          forceStop:this.state.pause,
          language:'en',
          country:'US'
         }).then(isSpeaking=>{
            //af
         }).catch(error=>{
          //return false;
          console.log("Error came "+ele.id);
          //return null;
          this.speakRowData(ele);
        });
  }
  checkTableData()
  {
      if(this.timer)
        clearInterval(this.timer);
      this.timer = this.setInterval(() => {
         let element = this.SpeakTableData.shift();
         this.speakRowData(element);
         if(!element)
          {clearInterval(this.timer);return;}
         console.log(element.id);
       },3000);
  }
  startTest()
  {
      this.setState({pause:false});
      this.SpeakTableData = this.state.tabledata.slice(0);
      console.log('Coming to start test',this.SpeakTableData);
      this.checkTableData();
  }
  pausePlaySpeech()
  {
     console.log(this.state);
      if(this.state.pause){
        //we are resuming it from pause
        console.log('Resuming it');
        this.setState({pause:false});
        this.checkTableData();
      }
      else{
        //we are pausing it
        console.log('Pausing it');
        clearInterval(this.timer);
        this.setState({pause:true});
      }
  }
  componentWillMount()
  {
    this.setState({tabledata:data});
    const config = {
     apiKey: "AIzaSyCpQ4PMaXMihiHMia3Dom2sp2lACpCXHKI",
     authDomain: "dummy-71a24.firebaseapp.com",
     databaseURL: "https://dummy-71a24.firebaseio.com",
     storageBucket: "dummy-71a24.appspot.com",
    };
    firebase.initializeApp(config);
  }
  onSubmitButton()
  {
      let data = new Date().toLocaleString();
      let numberPattern = /\d+/g;
      data=data.match(numberPattern);
      string='';
      for(element of data){
        string+=element;
      }
      //console.log(string);
    let jsondata = {
        classid: this.state.classid,
        subject: this.state.subject,
        id: this.state.id,
        tabledata: this.state.tabledata
    };
    firebase.database().ref().child(string).push(jsondata).
     then((data) => {
      console.log('success');
      //success
     }).
     catch((err) => {
     console.log(err);
     //eror
     });

    }
  changeId(text)
  {this.setState({id:text});}
  changeClass(text)
  {this.setState({classid:text});}
  changeSubject(text)
  {this.setState({subject:text});}
  render()
  {
    return (
      <View style={styles.container}>
          <Header headerText={'EntryApp'}/>
          <ScrollView>
          <View style={{flexDirection:'column'}}>
          <Input secureTextEntry={false} placeholder={'Enter your id'} onChangeText={(text)=>this.changeId(text)}/>
          <Input secureTextEntry={false} placeholder={'Enter your Class'} onChangeText={(text)=>this.changeClass(text)}/>
          <Input secureTextEntry={false} placeholder={'Enter your Subject'} onChangeText={(text)=>this.changeSubject(text)}/>
          </View>
          <Card>
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
              <Text style={{fontSize:20}}>Mark Sheet</Text>
              <Button text={'Test it!!'} onPress={ ()=>this.startTest()} />
              <Button text={'Pause it!!'} onPress={ ()=>this.pausePlaySpeech()} />
            </View>
            <MarkCard table={this.state.tabledata}/>
          </Card>
          </ScrollView>
          <View style={{padding:10}}>
          <Button text={'Submit!!'} onPress={ ()=>this.onSubmitButton()} />
          </View>
      </View>
    );
  }
}
reactMixin(TableUpdate.prototype, timerMixin);

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
};

const data = [
  {
    'id':1,
    'subject':'maths',
    'marks':12
  },
  {
    'id':2,
    'subject':'maths',
    'marks':34
  },
  {
    'id':3,
    'subject':'maths',
    'marks':100
  },
  {
    'id':4,
    'subject':'maths',
    'marks':98
  },
  {
    'id':5,
    'subject':'maths',
    'marks':72
  },
  {
    'id':6,
    'subject':'maths',
    'marks':19
  },
  {
    'id':7,
    'subject':'maths',
    'marks':65
  },
  {
    'id':8,
    'subject':'maths',
    'marks':94
  },
  {
    'id':9,
    'subject':'maths',
    'marks':54
  },
  {
    'id':10,
    'subject':'maths',
    'marks':69
  },
  {
    'id':11,
    'subject':'maths',
    'marks':78
  },
  {
    'id':12,
    'subject':'maths',
    'marks':88
  }
]
