import{Routes} from "@angular/router";
import { DescriptionComponent } from "./marketplace/description/description.component";
import { ListNftComponent } from "./marketplace/list-nft/list-nft.component";
import {LogGuard} from "./user/log.guard";
import { LoginComponent } from "./user/login/login.component";

export const ROUTES: Routes = [
    {path: '', component: ListNftComponent},
    {path: 'description/:blockchain/:contractId/:token', component: DescriptionComponent, canActivate: [LogGuard]},
    {path: 'login', component: LoginComponent}
]