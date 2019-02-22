import { Component, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {

  constructor(public httpservice: HttpClient, private route: Router, @Inject('BASE_URL') baseUrl: string) {
    this.url = baseUrl;
  }

  message: any = {};
  url: string = '';

  Msg(): void {
    this.httpservice.post(this.url+'api/Messages', this.message).subscribe(() => {
      this.route.navigate(['/messages']);
    });
  }

 

}
