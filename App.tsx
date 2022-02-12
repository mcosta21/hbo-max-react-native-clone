import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { PublicRoutes } from './src/routes/public.routes';
import { UserProvider } from './src/context/UserContext';

import theme from 'styles/GlobalStyles';
import { useFonts, Quicksand_400Regular, Quicksand_500Medium, Quicksand_700Bold } from '@expo-google-fonts/quicksand';

export default function App() {

  let [fontsLoaded] = useFonts({
    quicksand_400: Quicksand_400Regular,
    quicksand_500: Quicksand_500Medium,
    quicksand_700: Quicksand_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <UserProvider>
      <NavigationContainer>
        <PublicRoutes />
        <StatusBar style="light" backgroundColor={theme.colors.black_0} />
      </NavigationContainer>
    </UserProvider>
  );
}
