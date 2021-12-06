import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {

const [dolgozok, setDolgozok] = useState([ /*változókat,objektumokat hozunk a useStatel létre amiknek megadjuk az értékét/kezdőértékét*/ 
  {name: 'Para Béla', id: '1'},
  {name: 'Pohár Lajos', id: '2'},
  {name: 'Kerek Erik', id: '3'},
  {name: 'Paplan István', id: '4'},
  {name: 'Körút Teréz', id: '5'},
  {name: 'Piti Imre', id: '6'},
  {name: 'Hegyi Manó', id: '7'},
]);

function renderItem({item}) {
  return(
    <View style={styles.itemView}>
      <Text style={styles.itemText}>{item.id}.){item.name}</Text>
    </View>
  );
}

  return (
    <View style={styles.container}>
      <Text style = {styles.titlePosition}>Dolgozok listaja</Text>
      <FlatList
        style = {styles.lista}
        data = {dolgozok}
        renderItem={renderItem}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03fc80',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titlePosition: {
    margin: 20,
    fontSize: 24,
    fontFamily: "Arial"
  },
  itemView:{
    padding: 5,
  },
  itemText:{
    backgroundColor: '#03f0fc',
    color: 'white',
    fontSize: 18,
    borderRadius: 5,
  }, 
  lista: {
    width: '100%',
  }
});
