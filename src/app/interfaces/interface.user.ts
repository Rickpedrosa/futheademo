import {Club} from './interface.club';
import {Player} from './interface.player';

export interface User {
    id: number;
    name: string;
    date: string;
    club: Club;
    money: number;
    // players: Player[];
}
