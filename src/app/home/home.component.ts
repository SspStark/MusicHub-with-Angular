import { Component} from '@angular/core';
//import { ThemeService } from '../services/theme.service';
import { Audio } from '../interfaces/audio';
import { AudiosService } from '../services/audios.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  songsData:Audio[] = [];
  isLoading = true;
  currentAudio : HTMLAudioElement | null = null;
  isThemeDark:boolean = true;

  constructor(
    //private themeService : ThemeService,
    private audiosService: AudiosService
  ){
    //this.themeService.isThemeDark$.subscribe(theme => (this.isThemeDark = theme))
  }

  ngOnInit():void{
    this.fetchSongsData()
  }

  fetchSongsData():void{
    this.audiosService.getHomePageSongs().subscribe({
      next:(data:Audio[]) =>{
        this.songsData = data;
        this.isLoading = false;
        console.log(this.songsData[0])
      },
      error:(error) => {
        console.error("Error fetching songs", error);
        this.isLoading = false;
      }
  });
  }

  handlePlay(audio:HTMLAudioElement){
    if (this.currentAudio && this.currentAudio != audio){
      this.currentAudio.pause();
    }
    this.currentAudio = audio;
    audio.play();
    audio.addEventListener("ended", ()=>this.handleEnded(audio))
  }

  handleEnded(audio:HTMLAudioElement){
    const currentIndex = this.songsData.findIndex(eachAudio => (eachAudio.id === audio.id));
    const nextIndex = (currentIndex + 1) % this.songsData.length;
    const nextAudio:HTMLAudioElement = document.getElementById(this.songsData[nextIndex].id) as HTMLAudioElement;
    if (nextAudio) {
      this.currentAudio = nextAudio;
      nextAudio.play();
    }
  }
}
