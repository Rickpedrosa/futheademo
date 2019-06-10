import {Injectable} from '@angular/core';
import {Club} from '../../interfaces/interface.club';

@Injectable({
    providedIn: 'root'
})
export class DatabaseService {

    clubsInUse: string[] = [];

    constructor() {
    }
}
