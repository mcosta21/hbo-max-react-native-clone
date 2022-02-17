import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { HBody } from 'components/HBody';
import { Text } from 'react-native';
import { SContent } from './styles';

interface Props extends DrawerContentComponentProps {
}

export function SettingsPage({ navigation }: Props) {

  function openSidebar(){
    navigation.openDrawer();
  }

  return (
    <HBody useSafeAreaHeader openSidebar={openSidebar}>
        <SContent>
            <Text style={{ color: '#fff', fontSize: 20 }}>TODO</Text>
        </SContent>
    </HBody>
  );
};
