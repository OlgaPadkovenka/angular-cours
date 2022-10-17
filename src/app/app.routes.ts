import{Routes} from "@angular/router";
import { DescriptionComponent } from "./marketplace/description/description.component";
import { ListNftComponent } from "./marketplace/list-nft/list-nft.component";

export const ROUTES: Routes = [
    {path: '', component: ListNftComponent},
    {path: 'description', component: DescriptionComponent}
]