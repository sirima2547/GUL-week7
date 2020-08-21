import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'

export default function App(){
  return(
  <View stye={styles.container}>
    <Text style={styles.text}>
      Hello World
      </Text>
      <Image style={{width:200,height:200}}
              source={{uri:'https://i.pinimg.com/236x/e3/50/bc/e350bcb1626588c04c63303b997501ba.jpg'}}
      >
      </Image>
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  text:{
    fontSize:20,
    color:'red',
    backgroundColor:'blue',
    pandding:20,
  }
})
//export default App;