import { ThemedContainer } from '@/components/ThemedContainer';
import { ThemedInput } from '@/components/ThemedInput';
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

export default function RegistroScreen() {
  const router = useRouter();

  return (
    <ThemedContainer type='containerRegistro'>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </Pressable>
        <ThemedText type="title">Registro</ThemedText>
      </View>

      <ThemedInput type='inputLogin' placeholder="Nombre completo" placeholderTextColor="#999" />
      <ThemedInput type='inputLogin' placeholder="Correo" placeholderTextColor="#999" keyboardType="email-address" />
      <ThemedInput type='inputLogin' placeholder="Contraseña" placeholderTextColor="#999" secureTextEntry />
      <ThemedInput type='inputLogin' placeholder="Confirmar contraseña" placeholderTextColor="#999" secureTextEntry />

      <Pressable style={styles.button}>
        <ThemedText type="buttonText">Crear cuenta</ThemedText>
      </Pressable>
    </ThemedContainer>
  );
}

const styles = StyleSheet.create({
  
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
