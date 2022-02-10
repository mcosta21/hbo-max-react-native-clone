import { RouterKey } from './../../routes/routes';

export interface OptionMenu {
    name: RouterKey;
    displayName: string;
}

export const options = [
    {
        name: RouterKey.Settings,
        displayName: 'Configurações'
    },
    {
        name: RouterKey.SignOut,
        displayName: 'Sair'
    }
] as Array<OptionMenu>;