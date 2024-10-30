import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-parentcategeory',
  standalone: true,
  imports: [FormsModule,DatePipe],
  templateUrl: './parentcategeory.component.html',
  styleUrl: './parentcategeory.component.css'
})
export class ParentcategeoryComponent implements OnInit {

  masterSrc= inject(MasterService);

  gridList: any[]=[];
  deptList: any[]=[];

  newObj: any = {
    "categoryId": 0,
    "categoryName": "",
    "deptId": 0
  }

  ngOnInit(): void {
    this.getGridData();
    this.getAllDept();
  }

  getAllDept() {
    this.masterSrc.getAllDepartment().subscribe((res:any)=>{
      
      this.deptList = res.data;
    })
  }

  getGridData() {
    this.masterSrc.getAllparentDept().subscribe((res:any)=>{
      
      this.gridList = res.data;
    })
  }

  save() {
    
    this.masterSrc.createparentDept(this.newObj).subscribe((res:any)=>{
      
      if(res.result) {
        alert("Parent Category Created Success");
        this.getGridData();
      } else {
        alert(res.message)
      }
    }) 
  }
  onEdit(data: any) {
    this.newObj = data;
  }
  update() {
    
    this.masterSrc.updateparentDept(this.newObj).subscribe((res:any)=>{
      
      if(res.result) {
        alert("Parent Category Updated Success");
        this.getGridData();
      } else {
        alert(res.message)
      }
    }) 
  }
  onDelete(id: number) {
    const isDelete = confirm("Are you sure want Delete");
    if(isDelete) {
      this.masterSrc.deleteparentDepttById(id).subscribe((res:any)=>{
        
        if(res.result) {
          alert("Parent Category Deleted Success");
          this.getGridData();
        } else {
          alert(res.message)
        }
      }) 
    }
  }


}
