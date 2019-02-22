import { Component, OnInit } from '@angular/core';
import { Message } from '_debugger';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  Id: number;
  constructor(private route: ActivatedRoute, private router: Router, private httpService: HttpClient) {

    if (this.route.snapshot.params['id']) {
      this.Id = this.route.snapshot.params['id'];
    }
  }
  public messageData: any[];
  message: Message;
  url: string = "";
  ngOnInit() {
    this.httpService.get('https://localhost:44322/api/Messages' + this.Id).subscribe(
      data => {
        this.messageData = data as any[];
      }
    );

  }
  addcomment(val) {
      this.message["comment"] =+ val;
    this.httpService.put('https://localhost:44322/api/Messages' + this.Id, this.message).subscribe((response: Response) => {
      this.router.navigate(['/messages']);
    });
  }
}
