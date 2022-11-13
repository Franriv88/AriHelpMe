import React, {useState} from 'react';
import { StyleSheet, TextInput, View, Button, FlatList, Keyboard, Text } from 'react-native';
import CityItem from './components/CityItem'; // Importo componente que me renderiza el html que voy a usar

export default function App() {

  const endPoint = "https://api.openweathermap.org/data/2.5/weather?lang=pt&units=metric&q="; // endpoint con mi api
  const apiKey = 'd1e6fe98456f3898b3436b22dd0e67a1';

  const [city, setCity] = useState(''); // estado con el parametro city
  const [predictions, setPredictions] = useState([]); // estado con el parametro predictions
  const [error, setError] = useState(false) // estado error por si no encuentra el dato que ingreso

  const getCity = (city) => {
    setCity(city);
  }

  const getPredictions = () => {
    setPredictions([]);

  const target = endPoint + city + "&appid=" + apiKey;  // fetch con los datos que quiero mostrar de la api
    fetch(target)
    .then((data) => data.json())
    .then((data) => {
      if(data.cod && data.cod == 200 ){
        setError(false);
      } else  {
        setError(true);
      }
      setPredictions([data])
      Keyboard.dismiss()
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.entry}>
      <TextInput
      style={styles.nameCity}
      placeholder="Escribe el nombre de una ciudad"
      value={city}
      onChangeText={getCity}
      />
      <Button title="Ok" onPress={getPredictions}/>
      </View>
      {error?
        <Text style={styles.errorMessage}>Ciudad no encontrada</Text>
        :
        <FlatList
          data={predictions}
          renderItem={
            prediction => (
            <CityItem prediction={prediction} /> // importo el componente con las predicciones
          )
          }
        />

      }
    </View>
    );

}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fff'
  },
  nameCity: {
    padding: 10,
    borderBottomColor: '#BB96F3',
    borderBottomWidth: 2,
    textAlign: 'left',
    flexGrow: 0.9
  },
  entry: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8
  },
  errorMessage: {
    color: '#FF0000'
  }
});
