import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './admin/auth.guard';

const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'home', loadChildren: './pages/home/home.module#HomePageModule', canActivate: [AuthGuard]},
    {path: 'login', loadChildren: './pages/login/login.module#LoginPageModule'},
    {path: 'match', loadChildren: './pages/match/match.module#MatchPageModule', canActivate: [AuthGuard]},
    {path: 'team-finder', loadChildren: './pages/team-finder/team-finder.module#TeamFinderPageModule', canActivate: [AuthGuard]},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
