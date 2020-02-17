import React from 'react';
import {View, Text, TouchableHighlight, TextInput} from 'react-native'

function App(props) {
  const [text, setText] = React.useState("First")
  const [angka1, setAngka1] = React.useState("")
  const [angka2, setAngka2] = React.useState("")
  const [operator, setOperator] = React.useState("")
  const [total, setTotal] = React.useState("")

  const updateText = () => {
    setText("Sudah di Click")
  }

  const hitung = () => {
    let val1 = parseInt(angka1)
    let val2 = parseInt(angka2)
    if(operator==="+"){
      setTotal(val1+val2)
    }else if(operator==="-"){
      setTotal(val1-val2)
    }else if(operator==="/"){
      setTotal(val1/val2)
    }else if(operator==="*"){
      setTotal(val1*val2)
    }else{
      setTotal("Operator Salah")
    }
  }

  return (
    <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
      <Text>{text}</Text>
      <TouchableHighlight style={{padding:5, backgroundColor:'blue', width:100}} onPress={updateText}>
        <Text style={{color:'white', textAlign:'center'}}>Click Me!</Text>
      </TouchableHighlight>
      <Text>============================================================</Text>
      <TextInput placeholder="Masukkan Angka 1" onChangeText={val => setAngka1(val)}/>
      <TextInput placeholder="Masukkan Angka 2" onChangeText={val => setAngka2(val)}/>
      <TextInput placeholder="Masukkan Operator" onChangeText={val => setOperator(val)}/>
      <TouchableHighlight style={{padding:5, backgroundColor:'blue', width:100}} onPress={hitung}>
        <Text style={{color:'white', textAlign:'center'}}>Hitng</Text>
      </TouchableHighlight>
      <Text>Hasil : {total}</Text>
    </View>
  );
}

export default App;