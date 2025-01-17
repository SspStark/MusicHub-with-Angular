import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Audio } from '../interfaces/audio';

@Component({
  selector: 'app-audio-card',
  templateUrl: './audio-card.component.html',
  styleUrls: ['./audio-card.component.css']
})
export class AudioCardComponent {
  @Input() song:Audio | undefined;
  @Input() isThemeDark:boolean = true;
  @Output() playAudio = new EventEmitter<HTMLAudioElement>();

  onPlay(target:EventTarget | null):void{
    if (target instanceof HTMLAudioElement){
      this.playAudio.emit(target);
    }else {
      console.error('Invalid target for audio play event.');
    }
  }


}
