import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MasterService } from '../../services/master.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

masterServ=inject(MasterService)
router=inject(Router)
loginData:any={
  "emailId": "",
  "password": ""
}

onSubmitData(){
  this.masterServ.login(this.loginData).subscribe((res:any)=>{
    if(res.result){
      localStorage.setItem('ticketuser',JSON.stringify(res.data));
      this.router.navigateByUrl('dashboard')
    }else {
      alert(res.message)
    }
  })
}

}
