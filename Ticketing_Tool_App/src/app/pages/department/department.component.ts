import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [DatePipe,FormsModule],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent implements OnInit {
ngOnInit() {
  this.getAllDept();
}

masterSer$=inject(MasterService);
deptList:any[]=[];

formObj:any={
  "deptId": 0,
  "deptName": "",
  "createdDate": ""
}

getAllDept(){
  
  this.masterSer$.getAllDepartment().subscribe((res:any)=>{
   this.deptList=res.data;
  })
}

createDept(){
  this.masterSer$.createDepartment(this.formObj).subscribe((res:any)=>{
    if(res.result){
      alert('Department Created Succesfully')
      this.getAllDept();
    }else{
      alert(res.message)
    }
  })
}

onEdit(data:any){ 
  this.formObj=data;

}

updateDept(){
  this.masterSer$.updateDepartment(this.formObj).subscribe((res:any)=>{
    if(res.result){
      alert('Department Updated Successfully')
      this.getAllDept();
    }else{
      alert(res.message)
    }
  })
}

onDelete(id: number) {
  const isDelete = confirm("Are you sure want Delete");
  if(isDelete) {
    this.masterSer$.deleteDeptById(id).subscribe((res:any)=>{
      
      if(res.result) {
        alert("Dept Deleted Success");
        this.getAllDept();
      } else {
        alert(res.message)
      }
    }) 
  }
}

}
