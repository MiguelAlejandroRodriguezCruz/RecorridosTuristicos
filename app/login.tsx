import { ThemedContainer } from '@/components/ThemedContainer';
import { ThemedInput } from '@/components/ThemedInput';
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text } from 'react-native';

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
    <ThemedContainer type='containerLogin'>
      <ThemedText type="title">Iniciar sesión</ThemedText>
      <ThemedInput
        type='inputLogin'
        placeholder="Usuario"
        placeholderTextColor="#999"
        onChangeText={setUsuario}
        autoCapitalize="none"
      />
      <ThemedInput
        type='inputLogin'
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

      <ThemedContainer type='containerLoginRegister'>
        <Text style={styles.registerText}>¿No tienes cuenta? </Text>
        <Pressable onPress={() => router.push('/registro')}>
          <Text style={styles.registerLink}>Crea una</Text>
        </Pressable>
      </ThemedContainer>
    </ThemedContainer>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.palette.azulClaro,
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
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
