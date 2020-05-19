import React from 'react';
import {
  Button,
  Text,
  TextInput,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Chevron } from 'react-native-shapes';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';
// import RNPickerSelect, { defaultStyles } from './debug';



export default class filters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lookingfor:'',
      age:'',
      interest:'',
      drinks:'',
      smokes:'',
      intention:''
    };

  }

 

  render() {
    console.log(this.state.lookingfor)
  

    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollContainer}
          contentContainerStyle={styles.scrollContentContainer}>
          

          <View paddingVertical={5} />

          
        

          
          <Text>LOOKING FOR</Text>
          {/* and value defined */}
          <RNPickerSelect
             placeholder={{label:''
            }}
            items={[
              {
                label: 'WOMEN',
                value: 'WOMEN',
              },
              {
                label: 'MEN',
                value: 'MEN',
              },
              {
                label: 'both',
                value: 'both',
              },
            ]}
            
            onValueChange={value => {
              this.setState({
                lookingfor: value,
              });
            }}
            style={{
              ...pickerSelectStyles,
              iconContainer: {
                top: 10,
                right: 12,
              },
            }}
            value={this.state.favSport4}
            useNativeAndroidPickerStyle={false}
            textInputProps={{ underlineColor: 'yellow' }}
            Icon={() => {
              return <MaterialCommunityIcons name="account-heart-outline" size={24} color="red" />;
            }}
          />

         
          <View paddingVertical={5} />

          
        

          
<Text>AGE RANGE</Text>
{/* and value defined */}
<RNPickerSelect
   placeholder={{label:'any age'
  }}
  items={[
    {
      label: '18-20',
      value: '18-20',
    },
    {
      label: '21-30',
      value: '21-30',
    },
    {
      label: '31-40',
      value: '31-40',
    },
    {
      label: '41-50 ',
      value: '41-50',
    },
  ]}
  
  onValueChange={value => {
    this.setState({
      age: value,
    });
  }}
  style={{
    ...pickerSelectStyles,
    iconContainer: {
      top: 10,
      right: 12,
    },
  }}
  value={this.state.age}
  useNativeAndroidPickerStyle={false}
  textInputProps={{ underlineColor: 'yellow' }}
  Icon={() => {
    return <MaterialCommunityIcons name="arrow-up-down-bold-outline" size={24} color="blue" />;
  }}
/>

<View paddingVertical={5} />

<View paddingVertical={5} />

          
        

          
<Text>INTEREST </Text>
{}
<RNPickerSelect
   placeholder={{label:''
  }}
  items={[
    {
      label: 'YES',
      value: 'YES',
    },
    {
      label: 'NO',
      value: 'NO',
    },
    
  ]}
  
  onValueChange={value => {
    this.setState({
      interest: value,
    });
  }}
  style={{
    ...pickerSelectStyles,
    iconContainer: {
      top: 10,
      right: 12,
    },
  }}
  value={this.state.interest}
  useNativeAndroidPickerStyle={false}
  textInputProps={{ underlineColor: 'yellow' }}
  Icon={() => {
    return <Ionicons name="ios-clipboard" size={24} color="green" />;
  }}
/>

<View paddingVertical={5} />


<View paddingVertical={5} />

          
        

          
<Text>DRINKS</Text>
{/* and value defined */}
<RNPickerSelect
   placeholder={{label:''
  }}
  items={[
    {
      label: 'YES',
      value: 'YES',
    },
    {
      label: 'NO',
      value: 'NO',
    },
    {
      label: 'CASUAL',
      value: 'CASUAL',
    },
  ]}
  
  onValueChange={value => {
    this.setState({
      DRINKS: value,
    });
  }}
  style={{
    ...pickerSelectStyles,
    iconContainer: {
      top: 10,
      right: 12,
    },
  }}
  value={this.state.DRINKS}
  useNativeAndroidPickerStyle={false}
  textInputProps={{ underlineColor: 'yellow' }}
  Icon={() => {
    return <Ionicons name="ios-pint" size={24} color="yellow" />;
  }}
/>

<View paddingVertical={5} />

<View paddingVertical={5} />

          
        

          
<Text>SMOKES</Text>
{/* and value defined */}
<RNPickerSelect
   placeholder={{label:''
  }}
  items={[
    {
      label: 'YES',
      value: 'YES',
    },
    {
      label: 'NO',
      value: 'NO',
    },
    {
      label: 'CASUAL',
      value: 'CASUAL',
    },
  ]}
  
  onValueChange={value => {
    this.setState({
      SMOKES: value,
    });
  }}
  style={{
    ...pickerSelectStyles,
    iconContainer: {
      top: 10,
      right: 12,
    },
  }}
  value={this.state.SMOKES}
  useNativeAndroidPickerStyle={false}
  textInputProps={{ underlineColor: 'yellow' }}
  Icon={() => {
    return <Ionicons name="ios-color-wand" size={24} color="blue" />;
  }}
/>

<View paddingVertical={5} />

<View paddingVertical={5} />

          
        

          
<Text>INTENTION</Text>
{/* and value defined */}
<RNPickerSelect
   placeholder={{label:''
  }}
  items={[
    {
      label: 'DATING',
      value: 'DATING',
    },
    {
      label: 'FRIENDS',
      value: 'FRIENDS',
    },
    {
      label: 'MEETING NEW PEOPLE',
      value: 'MEETING NEW PEOPLE',
    },
  ]}
  
  onValueChange={value => {
    this.setState({
      INTENTION: value,
    });
  }}
  style={{
    ...pickerSelectStyles,
    iconContainer: {
      top: 10,
      right: 12,
    },
  }}
  value={this.state.INTENTION}
  useNativeAndroidPickerStyle={false}
  textInputProps={{ underlineColor: 'yellow' }}
  Icon={() => {
    return <Ionicons name="md-arrow-down" size={24} color="gray" />;
  }}
/>

<View paddingVertical={5} />



<View paddingVertical={5} />

          
<Button
  title="submit "
  onPress={() => {
    //fetch call
  }}
/>

<View paddingVertical={5} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  scrollContentContainer: {
    paddingTop: 40,
    paddingBottom: 10,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
