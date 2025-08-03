import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function LoginScreen() {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (usuario === 'Usuario1' && contrasena === '123456') {
      router.replace('/dashboard');
    } else {
      Alert.alert('Error', 'Usuario o contraseña incorrectos');
    }
  };

  return (
    <View style={styles.container}>
      <ThemedText type="title">Iniciar sesión</ThemedText>
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        placeholderTextColor="#999"
        onChangeText={setUsuario}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#999"
        onChangeText={setContrasena}
        secureTextEntry
      />

      <Pressable onPress={() => router.push('/recuperacion')}>
        <ThemedText type="link">¿Olvidaste tu contraseña?</ThemedText>
      </Pressable>

      <Pressable style={styles.button} onPress={handleLogin}>
        <ThemedText type="buttonText">Iniciar sesion</ThemedText>
      </Pressable>

      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>¿No tienes cuenta? </Text>
        <Pressable onPress={() => router.push('/registro')}>
          <Text style={styles.registerLink}>Crea una</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 20,
    paddingTop: 80,
    backgroundColor: Colors.palette.azulMedio,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.palette.rosaClaro,
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    color: Colors.light.text,
  },
  button: {
    backgroundColor: Colors.palette.azulClaro,
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  registerText: {
    color: '#000',
  },
  registerLink: {
    color: '#000',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
