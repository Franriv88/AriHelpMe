import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native'; //importaste el componente Button

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        title = "Saluda tu nueva api"
        onPress={() => console.log("hola loco")} //onPress imprime el contenido de console.log al presionar el botón
        /> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#rrr',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
