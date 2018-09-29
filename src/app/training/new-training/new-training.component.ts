import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TrainingService} from '../training.service';
import {Exercice} from '../exercice.model';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  exercices: Exercice[];
  @Output()
  trainingStart = new EventEmitter<void>();

  constructor(private readonly trainingService: TrainingService) { }

  ngOnInit() {
    this.exercices = this.trainingService.getAvailableExercices();
  }

  onStartTraining() {
    this.trainingStart.emit();
  }
}
