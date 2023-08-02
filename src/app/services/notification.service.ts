import { AnnouncementService } from 'src/app/services/announcement.service';
import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { HubConnectionBuilder } from '@microsoft/signalr';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private connection: signalR.HubConnection | undefined;
  public notificationSubject: BehaviorSubject<boolean>;

  constructor(private announcementService: AnnouncementService) {
    this.notificationSubject = new BehaviorSubject(false);
  }

  initWebSocket() {
    this.connection = new HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl('https://localhost:7261/hub/notifications')
      .build();


    this.connection.on('message_received', (body: any) => {
      //This code will be executed upon receiving a message with the name 'message_received' from the server.
      console.log(body);
      this.notificationSubject.next(true);
    });


    this.connection.start().then(() => {
      // Here we can configure what to do upon starting the connection
    }
    );
  }

  sendMessage(methodName: string, parameters?: any[]) {
    if(this.connection != null){
      this.connection.send(methodName, parameters);
    }
  }
}
