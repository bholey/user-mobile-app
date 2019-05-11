import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) { }
  login(login){
    var headers = new HttpHeaders({'Content-Type':'application/json'});
    var url = 'https://staging-api.ginvoicing.com/v2/users/login';
    return this.http.post(url, login, {headers: headers}
    );

  }
}