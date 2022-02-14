import { RouterKey } from '../../routes/routes-keys';

export interface OptionMenu {
    name: RouterKey;
    displayName: string;
}

export const options = [
    {
        name: RouterKey.SettingsPage,
        displayName: 'Configurações'
    },
    {
        name: RouterKey.SignOutPage,
        displayName: 'Sair'
    }
] as Array<OptionMenu>;