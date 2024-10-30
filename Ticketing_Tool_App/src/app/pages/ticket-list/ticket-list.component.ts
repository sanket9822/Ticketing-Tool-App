import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [],
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.css'
})
export class TicketListComponent implements OnInit {

  mode:string='My Ticket';
 
  ticketList:any[]=[];
 
  masterSr=inject(MasterService);
  LoggedUserEmployeId:any;
 



  ngOnInit(): void {
    
   const loggedUserData=localStorage.getItem('ticketuser');
   if(loggedUserData != null){
    const userData =JSON.parse(loggedUserData);
    this.LoggedUserEmployeId=userData.employeeId;
   }
   this.changeMode(this.mode)
 }
 
 changeMode(tab:any){
  this.mode=tab;
  if(this.mode == 'My Ticket'){
    this.masterSr.getTicketCreatedByLoggedEmp(this.LoggedUserEmployeId).subscribe((res:any)=>{
       this.ticketList=res.data
    })
  }else{
    this.masterSr.getTicketAssignedToEmp(this.LoggedUserEmployeId).subscribe((res:any)=>{
      this.ticketList=res.data;
    })
  }
 }

 changeStatus(state:string,ticketId:number){
  if(state == 'Start'){
    this.masterSr.startTicket(ticketId).subscribe((res:any)=>{
    if(res.result){
      alert('Ticket Status Changed');
      this.changeMode(this.mode);
    }else{
      alert(res.message)
    }
    })
  }else{
    this.masterSr.closeTicket(ticketId).subscribe((res:any)=>{
     if(res.result){
      alert('Ticket Close')
     }else{
      alert(res.message)
     }
    })
  }
 }
}
