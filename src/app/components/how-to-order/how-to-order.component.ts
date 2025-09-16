import { Component } from '@angular/core';

@Component({
  selector: 'app-how-to-order',
  templateUrl: './how-to-order.component.html',
  styleUrls: ['./how-to-order.component.scss']
})
export class HowToOrderComponent {

  public steps = [
    {
      number: '01',
      title: '_order_step_title_1',
      description: '_order_step_desc_1'
    },
    {
      number: '02',
      title: '_order_step_title_2',
      description: '_order_step_desc_2'
    },
    {
      number: '03',
      title: '_order_step_title_3',
      description: '_order_step_desc_3'
    }
  ];

}