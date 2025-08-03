import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function RegistroScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </Pressable>
        <ThemedText type="title">Registro</ThemedText>
      </View>

      <TextInput style={styles.input} placeholder="Nombre completo" placeholderTextColor="#999" />
      <TextInput style={styles.input} placeholder="Correo" placeholderTextColor="#999" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Contraseña" placeholderTextColor="#999" secureTextEntry />
      <TextInput style={styles.input} placeholder="Confirmar contraseña" placeholderTextColor="#999" secureTextEntry />

      <Pressable style={styles.button}>
        <ThemedText type="buttonText">Crear cuenta</ThemedText>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.palette.azulMedio,
    padding: 20,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 70,
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  button: {
    backgroundColor: Colors.palette.azulClaro,
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
});
