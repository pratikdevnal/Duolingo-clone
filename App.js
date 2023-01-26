import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import styles from './App.style';
import icon from "./assets/icon.png";
import ImageOption  from './src/components/ImageOption/ImageOption';
import question from "./assets/data/oneQuestionWithOption";
import { useState } from 'react';

const App = ()=> 
{
  // const origin = [1,2,3];
  // const double = origin.map((iterator)=>iterator*2);
  // console.log(double);

  // const status = 'ok';
  const [selected , setSelected] = useState(null);

  // value = 10;
  return (
    <View style={styles.root}>
      <Text style={styles.text}>{question.question}</Text>
      <View style={styles.optionsContainer}>  
      {question.options.map((option)=>(
        <ImageOption 
        key={option.id} 
        image={option.image} 
        text={option.text}
        isSelected = {selected?.id===option.id}
        onPress={()=> setSelected(option)}
        />
      ))}
      
      </View>
        
    </View>
  );
};
export default App;