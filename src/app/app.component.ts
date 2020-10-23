import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loading';
  templateString = null;
  constructor(private http: HttpClient){
    
  }

  ngOnInit(){
    this.http.get('http://localhost/grav-admin/item.json').subscribe((data)=>{
      this.title = data['frontmatter'].title;
      this.templateString = data['content']
      console.log(data)
    });
  }
}
