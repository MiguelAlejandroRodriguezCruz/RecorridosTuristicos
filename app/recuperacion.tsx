import { ThemedContainer } from '@/components/ThemedContainer';
import { ThemedInput } from '@/components/ThemedInput';
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
export default function RecuperacionScreen() {
  const router = useRouter();

  return (
    <ThemedContainer type='containerRecuperacion'>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </Pressable>
        <ThemedText type="title">Recuperación de contraseña</ThemedText>
      </View>

      <Text style={styles.instructions}>
        Ingresa tu correo para recuperar contraseña
      </Text>
      <ThemedInput
        type='inputLogin'
        placeholder="Correo electrónico"
        placeholderTextColor="#999"
        keyboardType="email-address"
      />
      <Pressable style={styles.button}>
        <ThemedText type="buttonText">Enviar</ThemedText>
      </Pressable>
    </ThemedContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  instructions: {
    fontSize: 16,
    color: '#000',
    marginBottom: 20,
  },
  button: {
    backgroundColor: Colors.palette.azulClaro,
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
});
