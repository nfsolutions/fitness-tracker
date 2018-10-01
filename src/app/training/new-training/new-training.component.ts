import {Component, OnInit} from '@angular/core';
import {TrainingService} from '../training.service';
import {NgForm} from '@angular/forms';
import {Exercise} from '../exercise.model';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  exercises: Observable<Exercise[]>;

  constructor(private readonly trainingService: TrainingService,
              private readonly db: AngularFirestore) {
  }

  ngOnInit() {
    this.exercises = this.db.collection('availableExercises')
      .snapshotChanges()
      .pipe(map(docArray => {
        return docArray.map(doc => {
          return {
            id: doc.payload.doc.id,
            name: doc.payload.doc.get('name'),
            duration: doc.payload.doc.get('duration'),
            calories: doc.payload.doc.get('calories')
          };
        });
      }));
  }

  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }
}
