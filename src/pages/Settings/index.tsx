import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { HBody } from 'components/HBody';
import { Text } from 'react-native';
import { SContent } from './styles';

interface Props extends DrawerContentComponentProps {
}

export function SettingsPage({ navigation }: Props) {

  function goBack(){
    navigation.goBack();
  }

  return (
    <HBody useSafeAreaHeader goBack={goBack}>
        <SContent>
            <Text style={{ color: '#fff', fontSize: 20 }}>TODO</Text>
        </SContent>
    </HBody>
  );
};
