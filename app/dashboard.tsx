import { Colors } from '@/constants/Colors';
import { Button, StyleSheet, Text, View } from 'react-native';
import { abrirUnity } from './abrirUnity';


export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Bienvenido usuario</Text>
      <Button
        title="Abrir mapa interactivo"
        onPress={() => abrirUnity({ lat: 22.7725, lng: -102.5722 })}
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background, // Rosa pálido
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.palette.azulMedio,
  },
});
