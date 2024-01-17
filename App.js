import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput,} from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Body from "./componentes/Body"

export default function App() {

const [estado, setEstado]= useState ("leitura");
const [anotacao, setAnotacao]= useState("")

useEffect(()=>{
  

  //quando incializar o app que leia a anotação

  (async () =>{
      try{
          const anotacaoLeitura = await AsyncStorage.getItem("anotacao");
          setAnotacao(anotacaoLeitura);
      }catch(error){}
  })();


},[])

setData= async()=> {
  try{

    await AsyncStorage.setItem("anotacao", anotacao);

    }catch(error){

  }

  
  
}
function atualizarTexto(){
 setEstado("leitura");
 setData();
}

  if(estado == "leitura"){
  return (
    
    <View style={{flex:1}}>
      <StatusBar hidden></StatusBar>
      <View style={styles.header}><Text style={{textAlign:"center",color:"white", fontSize:18}}>Aplicativo Anotação</Text></View>
{
  (anotacao != "")?
<View style={{padding:10}}><Text>{anotacao}</Text></View>
  :
  <View style={{padding:10}}><Text style={{opacity: 0.3}}> Nenhuma anotação encontrada</Text></View>
  }
      <TouchableOpacity onPress={()=> setEstado("atualizando")} 
      style={styles.btnAnotacao}>
        {
          (anotacao =="")?
        <Text style={styles.btnAnotacaoTexto}>+</Text>
        :
        <Text style={{fontSize:12, color:"white",textAlign: 'center', marginTop:16}}>Editar</Text>
  }
      </TouchableOpacity>
    </View>

  )
  }else if(estado == "atualizando"){
    return(
    <View style={{flex:1}}>
    <StatusBar hidden></StatusBar>
    <View style={styles.header}><Text style={{textAlign:"center",color:"white", fontSize:18}}>Aplicativo Anotação</Text></View>

<TextInput autoFocus ={true} style={{height:300, textAlignVertical:"top", padding:10}} onChangeText={(text)=>setAnotacao(text)} multiline = {true} numberOfLines={5} value={anotacao}></TextInput>

    <TouchableOpacity onPress={()=>atualizarTexto()} style={styles.btnSalvar}><Text style={{textAlign:"center", color: "white"}}>Salvar</Text></TouchableOpacity>
  </View>
    );
  }

}

const styles = StyleSheet.create({
  header:{
    width: "100%",
    padding: 10,
    backgroundColor:"#069",
  },
anotacao:{
  fontSize:13,
},
btnAnotacao:{
  position:'absolute',
  right:20,
  bottom:20,
  width:50,
  height:50,
  backgroundColor:"#069",
  borderRadius: 25,
 
},
btnAnotacaoTexto:{
  color:"white",
  position:"relative",
  textAlign: "center",
  top: 3,
  fontSize: 30
},
btnSalvar:{
  position:'absolute',
        right:20,
        bottom:20,
        width:100,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#069',
  
},

});

