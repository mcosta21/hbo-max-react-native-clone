import { ItemDetail } from './global.type';

export interface TVShow extends ItemDetail {
    name: string;
    first_air_date: Date;
}
