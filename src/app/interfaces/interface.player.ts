import {Club} from './interface.club';

export interface Player {
    id: number;
    name: string;
    date: string;
    club: Club;
    money: number;
}
