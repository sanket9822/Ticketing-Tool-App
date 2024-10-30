import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit {
  ngOnInit(): void {
    const loggeduser=localStorage.getItem('ticketuser')
    if(loggeduser !=null){
      const userData=JSON.parse(loggeduser)
      this.newTicketCre.employeeId=userData.employeeId;
    }
    this.getDept();
    this.getpCategeory();
    this.getCchildCateory();
  }

  newTicketCre: any = {
    "employeeId": 0,
    "severity": "",
    "childCategoryId": 0,
    "deptId": 0,
    "requestDetails": ""
  }

  onCategeorychange() {
    this.filterCategory = this.child.filter(x => x.parentCategoryName == this.selectPCategroy)
  }

  master$ = inject(MasterService);
  deepList: any[] = [];
  parentC: any[] = [];
  child: any[] = [];
  filterCategory: any[] = [];
  selectPCategroy: string = '';
  getDept() {
    this.master$.getAllDepartment().subscribe((res: any) => {
      this.deepList = res.data;
    })
  }

  getpCategeory() {
    this.master$.getAllparentDept().subscribe((res: any) => {
      this.parentC = res.data;
    })
  }

  getCchildCateory() {
    this.master$.getAllchildDept().subscribe((res: any) => {
      this.child = res.data;
    })
  }

  onsave(){
    this.master$.newticket(this.newTicketCre).subscribe((res:any)=>{
          if(res.result){
            alert('Ticket Created Succesfully')
          }else{
            alert(res.message)
          }
    })
  }


}
