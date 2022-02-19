import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { PublicRoutes } from './src/routes/public.routes';

import theme from './src/styles/GlobalStyles';
import { useFonts, Quicksand_400Regular, Quicksand_500Medium, Quicksand_700Bold } from '@expo-google-fonts/quicksand';
import { TabProvider } from './src/context/TabContext';
import { HLoading } from 'components/HLoading';

export default function App() {

  let [fontsLoaded] = useFonts({
    quicksand_400: Quicksand_400Regular,
    quicksand_500: Quicksand_500Medium,
    quicksand_700: Quicksand_700Bold,
  });

  if (!fontsLoaded) {
    return <HLoading />;
  }

  return (
    <TabProvider>
      <NavigationContainer>
        <PublicRoutes />
        <StatusBar style="light" backgroundColor={theme.colors.black_0} />
      </NavigationContainer>
    </TabProvider>
  );
}
