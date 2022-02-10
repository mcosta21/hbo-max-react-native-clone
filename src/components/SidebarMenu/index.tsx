import {
  DrawerContentComponentProps, DrawerContentScrollView
} from '@react-navigation/drawer';
import React from 'react';
import { FlatList } from 'react-native';
import { RouterKey } from '../../routes/routes';
import { ItemMenu } from './ItemMenu';
import { options } from './menu';
import { SContainer } from './styles';

export function SidebarMenu(props: DrawerContentComponentProps ) {

  const { navigation } = props;

  function handleNavidate(route: RouterKey) {
    navigation.navigate(route);
  }

  return (
    <SContainer>
        <FlatList
          data={options}
          renderItem={({item}) => <ItemMenu item={item} onPress={handleNavidate} />}
          keyExtractor={item => item.name}
        />
    </SContainer>
  );
};

