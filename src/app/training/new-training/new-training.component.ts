import {Component, OnInit} from '@angular/core';
import {TrainingService} from '../training.service';
import {NgForm} from '@angular/forms';
import {Exercise} from '../exercise.model';
import {Observable} from 'rxjs';
import {UiService} from '../../shared/ui.service';
import {Store} from '@ngrx/store';

import * as fromTraining from '../training.reducer';
import * as fromRoot from '../../app.reducer';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  exercises$: Observable<Exercise[]>;
  isLoading$: Observable<boolean>;

  constructor(private readonly trainingService: TrainingService,
              private readonly uiService: UiService,
              private store: Store<fromTraining.State>) {
  }

  ngOnInit() {
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);
    this.exercises$ = this.store.select(fromTraining.getAvailableExercises);
    this.fetchExercises();
  }

  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }

  fetchExercises() {
    this.trainingService.fetchAvailableExercises();
  }
}
