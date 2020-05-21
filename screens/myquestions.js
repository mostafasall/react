import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity ,CheckBox} from 'react-native';
//import {CheckBox} from "native-base"
import PickerCheckBox from 'react-native-picker-checkbox';
import { RadioButton } from 'react-native-paper';

export default class SimpleQuestion extends React.Component {
  state={
    answer:0,
    question:{1:'DO YOU LIKE DOGS',2:'DO YOU LIKE SUNSET',3:'DO YOU LIKE GAMES',4:'Finishh'},Q1:'',
    Yes:0,No:0,
    checked: 'True',
    counter:1

  }


  
   count() {
    // if (this.state.counter>3){
    //     this.setState.counter=1;
    // }else{
    //     this.setState.counter=this.state.counter+1
    // }
    if (this.state.counter<=3){
        this.setState({ counter: this.state.counter+1 }) }
        else{
            console.log(this.state.counter)
        }
      
    }

    submitanswer(){


// fetch......





    }

  render(){
    // const items = [
    //     {
    //       itemKey:1,
    //       itemDescription:'Item 1'
    //       },
    //     {
    //       itemKey:2,
    //       itemDescription:'Item 2'
    //       },
    //     {
    //       itemKey:3,
    //       itemDescription:'Item 3'
    //       }
    //   ];

    const { navigation } = this.props;

    let message;
    if (this.state.counter>3) {
        return (<View style={styles.container}>
            <Text style={styles.header}>{this.state.question[this.state.counter]}</Text>
            <TouchableOpacity style={styles.submit}>
          <Text  onPress={() => navigation.navigate('Profile')} style={{color:"white"}}>SUBMIT</Text>
        </TouchableOpacity>
            
            </View>
            
            );
    } else {
        
        
    }

    // const { navigation } = this.props;


    const { checked } = this.state;
    return (

        // <PickerCheckBox
        // data={items}
        // headerComponent={<Text style={{fontSize:25}} >items</Text>}
        // //OnConfirm={(pItems) => this.handleConfirm(pItems)}
        // ConfirmButtonTitle='OK'
        // DescriptionField='itemDescription'
        // KeyField='itemKey'
        // placeholder='select some items'
        // arrowColor='#FFD740'
        // arrowSize={10}
        // placeholderSelectedItems ='$count selected item(s)'
        // />
    //     <View>
    //     <RadioButton
    //       value="True"
    //       status={checked === 'True' ? 'checked' : 'unchecked'}
    //       onPress={() => { this.setState({ checked: 'True' }); }}
    //     />
    //     <RadioButton
    //       value="False"
    //       status={checked === 'False' ? 'checked' : 'unchecked'}
    //       onPress={() => { this.setState({ checked: 'False' }); }}
    //     />
    //   </View>

      <View style={styles.container}>
        <Text style={styles.header}>{this.state.question[this.state.counter]}</Text>
        <View style={styles.item} >
            
        <RadioButton
          value="True"
          status={checked === 'True' ? 'checked' : 'unchecked'}
          onPress={() => { this.setState({ checked: 'True' }); }}
        />            
        
        <Text style={
              {...styles.checkBoxTxt,
                color:this.state.answer===1?"#fc5185":"gray",
                fontWeight:this.state.answer===1? "bold" :"normal"
              }}
              >Yes</Text>
        </View>
        <View style={styles.item}>
        <RadioButton
          value="False"
          status={checked === 'False' ? 'checked' : 'unchecked'}
          onPress={() => { this.setState({ checked: 'False' }); }}
        />            
    <Text style={
              {...styles.checkBoxTxt,
                color:this.state.answer===2?"#fc5185":"gray",
                fontWeight:this.state.answer===2? "bold" :"normal"
              }}
              >No</Text>
        </View>
        {/* this.setState({ counter: this.state.counter+1 }) */}
        <TouchableOpacity style={styles.submit}>
          <Text  onPress={() => this.count()} style={{color:"white"}}>Next</Text>
        </TouchableOpacity>
  
  
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    fontSize:25,
    fontWeight:"bold",
    color:"#364f6b",
    marginBottom:40
  },
  item:{
    width:"80%",
    backgroundColor:"#fff",
    borderRadius:20,
    padding:10,
    marginBottom:10,
    flexDirection:"row",
  },
  checkBoxTxt:{
    marginLeft:20
  },
  submit:{
    width:"80%",
    backgroundColor:"#fc5185",
    borderRadius:20,
    padding:10,
    alignItems:"center",
    marginTop:40
  }
});