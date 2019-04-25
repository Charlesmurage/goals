import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal'

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals = [
    new Goal(1,"watch finding nemo","find and online HD version",new Date(2019,3,23)),
    new Goal(2,"buy cookies","i have to buy chocolate cookies",new Date(2019,4,25)),
    new Goal(3,"buy case","get a better case",new Date(2019,4,25)),
    new Goal(4,"learn angular","learn angular and internalize it",new Date(2019,4,25)),
    new Goal(5,"buy food","add some fat",new Date(2019,4,25)),
    new Goal(6,"make phone call","call her",new Date(2019,4,25))
  ]
  toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id=goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }

  deleteGoal(isComplete,index){
    if(isComplete){
      let toDelete=confirm('are you sure you want to delete ${this.goals[index].name}')

      if(toDelete){
      this.goals.splice(index,1);
    }
    }
    
  }
  constructor() { }

  ngOnInit() {
  }

}
