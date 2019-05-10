import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-city',
  templateUrl: './game-city.component.html',
  styleUrls: ['./game-city.component.css']
})
export class GameCityComponent implements OnInit {

  cardForm: FormGroup;

  constructor(private formbuilder: FormBuilder, private route: Router) { }

  ngOnInit() {
    //creating form using form builder and form group and validation is performed
    this.cardForm = this.formbuilder.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]], //pattern validation for characters
      address: ['', Validators.required],
      amountToPay: ['', [Validators.required, Validators.pattern('[0-9]+')]] //pattern validation for numbers
    });
  }

  onClick() {
    //Checking whether Amount is greater than Rs 100 since service charge of Rs 100 is deducted
    const amountToPay = this.cardForm.value.amountToPay;
    if(+amountToPay>100) {
      localStorage.setItem('amountToPay', amountToPay); //Setting the local storage for amount which can used in the Play component
      this.route.navigate(['/play']); //navigating to play page if the amount is greater than Rs 100
    } else {
      alert('Balance should be greater than 100');
      this.cardForm.patchValue(this.cardForm.value); //setting the form values to user entered before for easy change of amount
    }
  }

}
