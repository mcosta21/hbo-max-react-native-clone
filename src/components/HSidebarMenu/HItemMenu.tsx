
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RouterKey } from '../../routes/routes-keys';

import { OptionMenu } from './menu';

interface Props {
    item: OptionMenu;
    onPress: (route: RouterKey) => void;
}

export function HItemMenu({ item, onPress }: Props) {
    return (
        <TouchableOpacity onPress={() => onPress(item.name)} style={{ marginBottom: 8, marginLeft: 14 }}>
            <Text style={{ color: '#FFF', fontSize: 23,  }}>{item.displayName}</Text>
        </TouchableOpacity>
    )
}