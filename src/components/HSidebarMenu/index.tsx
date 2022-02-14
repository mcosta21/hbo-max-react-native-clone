import { Ionicons } from '@expo/vector-icons';
import {
  DrawerContentComponentProps
} from '@react-navigation/drawer';
import { FlatList } from 'react-native';
import theme from 'styles/GlobalStyles';
import { RouterKey } from '../../routes/routes-keys';
import { HItemMenu } from './HItemMenu';
import { options } from './menu';
import { SContainer } from './styles';

export function HSidebarMenu(props: DrawerContentComponentProps ) {

  const { navigation } = props;

  function handleNavidate(route: RouterKey) {
    navigation.navigate(route);
  }

  function handleClose() {
    navigation.closeDrawer();
  }

  return (
    <SContainer>
        <Ionicons 
          name="close-outline" 
          size={32} 
          color={theme.colors.purple_normal} 
          onPress={handleClose}
          style={{ marginLeft: 8, marginBottom: 4 }}
        />
        <FlatList
          data={options}
          renderItem={({item}) => <HItemMenu item={item} onPress={handleNavidate} />}
          keyExtractor={item => item.name}
        />
    </SContainer>
  );
};

