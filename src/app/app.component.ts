import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { AuthService } from './@core/services/auth.service';
@Component({
  selector: 'lg-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'adsms';
  constructor(private _auth: AuthService, private _route: ActivatedRoute) {}
  ngOnInit() {}
}
