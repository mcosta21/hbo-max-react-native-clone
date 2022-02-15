
export interface IItemData {
    id: number;
    image: string;
    title?: string;
    onPress?: (id: number) => void;
}