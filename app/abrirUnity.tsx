// AbrirUnity.ts
import { Linking, Platform } from 'react-native';

const UNITY_SCHEME = 'unitytour://open';
const PLAY_STORE_URL = 'market://details?id=com.UnityTechnologies.com.unity.template.urpblank';
const PLAY_STORE_WEB = 'https://play.google.com/store/apps/details?id=com.UnityTechnologies.com.unity.template.urpblank';

export async function abrirUnity({ lat, lng }: { lat: number; lng: number }) {
  // Esquema de retorno para que Unity pueda regresar a RN
  const returnUrl = encodeURIComponent('rntour://done');

  const url = `${UNITY_SCHEME}?lat=${encodeURIComponent(lat)}&lng=${encodeURIComponent(lng)}&return=${returnUrl}`;

  try {
    const can = await Linking.canOpenURL(url);
    if (can) {
      await Linking.openURL(url);
      return;
    }

    // Si no puede abrir (app Unity NO instalada), manda a tienda
    if (Platform.OS === 'android') {
      // Primero intenta la app de Play Store
      const canPlay = await Linking.canOpenURL(PLAY_STORE_URL);
      if (canPlay) {
        await Linking.openURL(PLAY_STORE_URL);
      } else {
        await Linking.openURL(PLAY_STORE_WEB);
      }
    } else {
      //
    }
  } catch (e) {
    // Último recurso: web de tienda
    if (Platform.OS === 'android') {
      await Linking.openURL(PLAY_STORE_WEB);
    } else {
      //
    }
  }
}
