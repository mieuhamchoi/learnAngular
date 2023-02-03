import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'modelDrivenForm',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.scss']
})
export class ModelDrivenFormComponent {
  public formData: FormGroup = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(0)
  })
  public formData2 = this.formBuilder.group({
    name: ['', Validators.required],
    age: ['',  Validators.min(0)]
  })

  constructor(private common: CommonService, private formBuilder: FormBuilder){}
  public submitForm():void {
    this.common.sendDataToServer(this.formData2.value)
  }
}
