
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RouterKey } from '../../routes/routes';

import { OptionMenu } from './menu';

interface Props {
    item: OptionMenu;
    onPress: (route: RouterKey) => void;
}

export function ItemMenu({ item, onPress }: Props) {
    return (
        <TouchableOpacity onPress={() => onPress(item.name)}>
            <Text style={{ color: '#fff'}}>{item.displayName}</Text>
        </TouchableOpacity>
    )
}