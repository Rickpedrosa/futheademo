import {Component, OnInit} from '@angular/core';
import {User} from '../../interfaces/interface.user';
import {ApiService} from '../../services/api/api.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    players: User[] = [{
        id: 1,
        name: 'Ricknardo',
        date: new Date().toString(),
        money: 1500,
        club: {
            club: 'Standard de Liège',
            logo: 'https://cdn.sofifa.org/teams/4/light/232.png',
            average: '72.2778',
            average_team: '73.7556',
            quality: '3.5'
        }
    },
        {
            id: 2,
            name: 'Farolo',
            date: new Date().toString(),
            money: 1800,
            club: {
                club: 'New York Red Bulls',
                logo: 'https://cdn.sofifa.org/teams/4/light/689.png',
                average: '72.2778',
                average_team: '73.7556',
                quality: '3.5'
            }
        },
        {
            id: 3,
            name: 'Deniel',
            date: new Date().toString(),
            money: 1800,
            club: {
                club: 'Melbourne City',
                logo: 'https://cdn.sofifa.org/teams/4/light/112224.png',
                average: '72.2778',
                average_team: '73.7556',
                quality: '3.5'
            }
        },
        {
            id: 4,
            name: 'Pablemos',
            date: new Date().toString(),
            money: 1800,
            club: {
                club: 'Valenciennes FC',
                logo: 'https://cdn.sofifa.org/teams/4/light/110456.png',
                average: '72.2778',
                average_team: '73.7556',
                quality: '3.5'
            }
        }];

    constructor(private api: ApiService) {
        console.log(this.players.sort((a, b) => b.money - a.money));
    }

    ngOnInit(): void {
    }

}
