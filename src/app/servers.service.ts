import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { server } from './servers/server';
import { AuthService } from './auth/auth.service';
 




@Injectable({
  providedIn: 'root'
})
export class ServersService {

  constructor(private http: HttpClient,
              private authservice: AuthService ) { }

  storeServers(servers: any[]) {
    const token = this.authservice.getToken()

    return this.http.post('https://authentication-db83c.firebaseio.com/data.json?auth=' + token, servers)
  }

  getServers(): Observable<server[]> {
    const token = this.authservice.getToken()
    return this.http.get<server[]>('https://authentication-db83c.firebaseio.com/data.json?auth=' + token)
 }

 updateServers(servers: any[]) {
  const token = this.authservice.getToken()

  return this.http.put('https://authentication-db83c.firebaseio.com/data.json?auth=' + token, servers)
}

}
