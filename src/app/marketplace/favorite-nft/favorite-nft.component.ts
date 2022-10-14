import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-favorite-nft',
  templateUrl: './favorite-nft.component.html',
  styleUrls: ['./favorite-nft.component.scss']
})
export class FavoriteNftComponent implements OnInit {
  @Input()
  public isFavorite : boolean | undefined = false;
  public btnFavorisLabel: string = "Ajouter en favoris";

  @Output()

  public isFavoriteChange = new EventEmitter();

  ngOnInit(): void {
  }

  onFavoriteBtnClick(): void {
    this.isFavorite = !this.isFavorite;
if(this.isFavorite) {
    this.btnFavorisLabel = "Retirer des favoris"
} else {
  this.btnFavorisLabel = " Ajouter en favoris"
}

    this.isFavoriteChange.emit(this.isFavorite);
  }

}
