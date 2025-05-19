import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  standalone: false,
  templateUrl: './style-binding.component.html',
  styleUrl: './style-binding.component.scss',
})
export class StyleBindingComponent {
  widthButton1 = '100px';
  colorButton1 = 'pink';
  styleObj = {
    width: '150px',
    backgroundColor: 'orange',
  };

  updateStyleObj() {
    this.styleObj.width = '120px';
    this.styleObj.backgroundColor = 'purple';
  }

  updateStyleObjCorrect() {
    this.styleObj = {
      width: '120px',
      backgroundColor: 'purple',
    };
  }
  UpdateWidth() {
    this.widthButton1 = '120px';
  }
}
