import { StyleSheet, View, type ViewProps } from 'react-native';

import { Colors } from '@/constants/Colors';

export type ThemedContainerProps = ViewProps  & {
  lightColor?: string;
  darkColor?: string;
  type?: 'containerLogin' | 'containerLoginRegister' | 'containerRecuperacion' | 'containerRegistro' ;
};

export function ThemedContainer({
  style,
  lightColor,
  darkColor,
  type = 'containerLogin',
  ...rest
}: ThemedContainerProps) {

  return (
    <View
      style={[
        type === 'containerLogin' ? styles.containerLogin : undefined,
        type === 'containerLoginRegister' ? styles.containerLoginRegister : undefined,
        type === 'containerRecuperacion' ? styles.containerRecuperacion : undefined,
        type === 'containerRegistro' ? styles.containerRegistro : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 20,
    paddingTop: 80,
    backgroundColor: Colors.palette.azulMedio,
  },
  containerLoginRegister: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  containerRecuperacion: {
    flex: 1,
    backgroundColor: Colors.palette.azulMedio,
    padding: 20,
    paddingTop: 80,
  },
  containerRegistro: {
    flex: 1,
    backgroundColor: Colors.palette.azulMedio,
    padding: 20,
    paddingTop: 80,
  },
});
