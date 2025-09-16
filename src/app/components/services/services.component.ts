import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  public services = [
    {
      id: 'modeling',
      title: '_services_title_1',
      description: '_services_desc_1'
    },
    {
      id: 'visualization',
      title: '_services_title_2',
      description: '_services_desc_2'
    },
    {
      id: 'concept',
      title: '_services_title_3',
      description: '_services_desc_3'
    }
  ];
}