import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from '_debugger';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  Id: number;
  constructor(private route: ActivatedRoute, private router: Router,private httpService: HttpClient) {

    if (this.route.snapshot.params['id']) {
      this.Id = this.route.snapshot.params['id'];
    }
  }
  public messageData: any[];
  message: Message;
  url: string = "";
  public Like=0 ;
  ngOnInit() {
    this.httpService.get('https://localhost:44322/api/Messages').subscribe(
      data => {
        this.messageData = data as any[];
      }
    );

  }

  public AddLike(id: number) {

    this.Like++;
    this.messageData["Like"]++;
    this.httpService.put('https://localhost:44322/api/Messages' + this.Id, this.messageData).subscribe((response: Response) => {
      this.router.navigate(['/messages']);
    });
  }


}
