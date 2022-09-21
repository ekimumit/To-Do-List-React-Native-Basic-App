import React, { Component } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import ItemList from "./ItemList";


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      data: []
    }
  }

  handleSave = () => {
    const { text, data } = this.state;
    data.push({text});
    this.setState({data, text:''});

  };

  render() {
    const {text, data} = this.state;
    return (
      <View style={{ paddingTop: 10, flex: 1 }} >
        <View style={styles.barContainer}>
          <Text style={styles.barText}>To - Do List</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput 
          onChangeText={(text) => this.setState({text})} 
          value={text}
          style={styles.textInputContainer} 
          />
          <TouchableOpacity 
          onPress={this.handleSave} 
          style={styles.buttonContainer} 
          >
            <Text 
            style={{ color: 'white', fontWeight: '700', alignSelf: 'center' }} 
            >
              EKLE
              </Text>
          </TouchableOpacity>
        </View>
        <View>
          {data.map((item)=>{
            return <ItemList text={item.text} />
          })}
        </View>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  barContainer: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  buttonContainer: {
    flex: 1,
    marginLeft: 8,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  textInputContainer: {
    backgroundColor: 'white',
    flex: 5

  },
  barText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
  inputContainer: {
    backgroundColor: '#ccc',
    padding: 10,
    flexDirection: 'row',
  },

})
