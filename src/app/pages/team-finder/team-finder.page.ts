import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api/api.service';
import {Club} from '../../interfaces/interface.club';

@Component({
    selector: 'app-team-finder',
    templateUrl: './team-finder.page.html',
    styleUrls: ['./team-finder.page.scss'],
})
export class TeamFinderPage implements OnInit {

    clubs: Club[] = [];
    clubsLoaded: Club[] = [];
    clubsTemp: Club[] = [];
    counter = 15;

    constructor(private api: ApiService) {
    }

    ngOnInit() {
        this.api.getAllClubs().subscribe(data => {
            const key = 'records';
            this.clubs = data[key];
            console.log(this.clubs);
            let counter = 15;
            for (const value of this.clubs) {
                if (counter === 0) {
                    break;
                }
                this.clubsLoaded.push(value);
                this.clubsTemp.push(value);
                counter--;
            }
        });
    }

    showQuery(searchBar) {
        // se inicia el array de display a una temporal que contiene lo mismo
        // para preservar la cantidad de items que se ven en la pantalla al ir hacia abajo
        this.clubsLoaded = this.clubsTemp;
        const q = searchBar.srcElement.value;
        if (!q) {
            return;
        }
        // a la hora de buscar el filtrado se hace en base al array original que tiene todos los  teams
        this.clubsLoaded = this.clubs.filter((v) => {
            if (v.club && q) {
                return v.club.toLowerCase().indexOf(q.toLowerCase()) > -1;
            }
        });
    }

    loadData(event) {
        setTimeout(() => {
            let temp = this.counter + 15;
            for (const value of this.clubs) {
                if (temp === 0) {
                    break;
                }
                if (this.clubsLoaded.indexOf(value) === -1) {
                    this.clubsLoaded.push(value);
                    // this.clubsTemp.push(value);
                }
                temp--;
            }
            this.counter = this.counter + 15;
            event.target.complete();
        }, 500);
    }
}
