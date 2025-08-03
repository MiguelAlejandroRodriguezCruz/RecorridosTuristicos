import { Colors } from '@/constants/Colors';
import { useThemeColor } from '@/hooks/useThemeColor';
import { StyleSheet, TextInput, type TextInputProps } from 'react-native';

export type ThemedInputProps = TextInputProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'inputLogin' | 'inputDashboard';
};

export function ThemedInput({
  style,
  lightColor,
  darkColor,
  type = 'inputLogin',
  ...rest
}: ThemedInputProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <TextInput
      style={[
        { color, borderColor: Colors.palette.azulClaro },
        type === 'inputLogin' && styles.inputLogin,
        type === 'inputDashboard' && styles.inputDashboard,
        style,
      ]}
      placeholderTextColor={color}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  inputLogin: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
  },
  inputDashboard: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 6,
    borderWidth: 1,
    fontSize: 14,
  },
});
