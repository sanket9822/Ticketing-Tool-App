import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-childcategeory',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './childcategeory.component.html',
  styleUrl: './childcategeory.component.css'
})
export class ChildcategeoryComponent {

  masterSrc = inject(MasterService);

  gridList: any[] = [];
  parentCategeoryList: any[] = [];

  newObj: any = {
    "childCategoryId": 0,
    "categoryName": "string",
    "parentCategoryId": 0
  }

  ngOnInit(): void {
    this.getGridData();
    this.getPCategeory();
  }

  getPCategeory() {
    this.masterSrc.getAllparentDept().subscribe((res: any) => {

      this.parentCategeoryList = res.data;
    })
  }

  getGridData() {
    this.masterSrc.getAllchildDept().subscribe((res: any) => {

      this.gridList = res.data;
    })
  }

  save() {

    this.masterSrc.createchildDept(this.newObj).subscribe((res: any) => {

      if (res.result) {
        alert("Child Category Created Success");
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

    this.masterSrc.updatechildDept(this.newObj).subscribe((res: any) => {

      if (res.result) {
        alert("Child Category Updated Success");
        this.getGridData();
      } else {
        alert(res.message)
      }
    })
  }
  onDelete(id: number) {
    const isDelete = confirm("Are you sure want Delete");
    if(isDelete) {
      this.masterSrc.deletechildDepttById(id).subscribe((res:any)=>{
        
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
