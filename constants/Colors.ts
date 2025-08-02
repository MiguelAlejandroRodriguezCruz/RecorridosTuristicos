const palette = {
  azulClaro: '#9ECAD6',
  azulMedio: '#748DAE',
  rosaClaro: '#F5CBCB',
  rosaPalido: '#FFEAEA', // Corrección por espacio accidental
};

export const Colors = {
  palette, // exportamos la paleta por si la quieres usar directamente

  light: {
    text: '#11181C',
    background: palette.rosaPalido,
    tint: palette.azulMedio,
    icon: palette.azulMedio,
    tabIconDefault: palette.azulMedio,
    tabIconSelected: palette.azulClaro,
  },

  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: palette.azulClaro,
    icon: palette.rosaClaro,
    tabIconDefault: palette.rosaClaro,
    tabIconSelected: palette.azulClaro,
  },
};
