import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { server } from './server';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {


  ngOnInit() {
  }

  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];

  constructor(private serversService: ServersService) {}


  onSave() {
    this.serversService.storeServers(this.servers).subscribe(
      (response) => console.log(response),
       (error) => console.log(error)

    )
  }

  onGet() {
    this.serversService.getServers()
    .subscribe(
      
      (response: server[]) => console.log(response),

      (error) => console.log(error)
    )
      
  }

  onUpdate() {
    this.serversService.updateServers(this.servers).subscribe(
      (response) => console.log(response),
       (error) => console.log(error)
    )
  }

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }

}
