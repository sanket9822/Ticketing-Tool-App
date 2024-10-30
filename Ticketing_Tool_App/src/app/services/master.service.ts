import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }
  apiurl:string="https://freeapi.miniprojectideas.com/api/TicketsNew/";

  login(obj:any){
    return this.http.post(this.apiurl +'Login' ,obj);
  }

  getAllDepartment(){
    return this.http.get(`${this.apiurl}GetDepartments`)
  }

  createDepartment(obj:any){
    return this.http.post(`${this.apiurl}CreateDepartment`,obj)
  }

  updateDepartment(obj:any){
     return this.http.put(`${this.apiurl}UpdateDepartment`,obj)
  }


  deleteDeptById(id: number) {
    return this.http.delete(`${this.apiurl}DeleteDepartment?id=${id}`)
  }

  getAllparentDept(){
    return this.http.get(`${this.apiurl}GetParentCategory`)
  }

  createparentDept(obj:any){
    return this.http.post(`${this.apiurl}CreateParentCategory`,obj)
  }

  updateparentDept(obj:any){
     return this.http.put(`${this.apiurl}UpdateParentCategory`,obj)
  }


  deleteparentDepttById(id: number) {
    return this.http.delete(`${this.apiurl}DeleteParentCategory?id=${id}`)
  }


  //child

  getAllchildDept(){
    return this.http.get(`${this.apiurl}GetChildCategory`)
  }

  createchildDept(obj:any){
    return this.http.post(`${this.apiurl}CreateChildCategory`,obj)
  }

  updatechildDept(obj:any){
     return this.http.put(`${this.apiurl}UpdateChildCategory`,obj)
  }


  deletechildDepttById(id: number) {
    return this.http.delete(`${this.apiurl}DeleteChildCategory?id=${id}`)
  }

  getAllrolesApi(){
    return this.http.get(`${this.apiurl}GetAllRoles`)
  }

  getAllEmp() {
    return this.http.get(`${this.apiurl}GetEmployees`)
  }
 
  createEmp(obj:any) {
    return this.http.post(`${this.apiurl}CreateEmployee`, obj)
  }
 
  updateEmp(obj:any) {
    return this.http.put(`${this.apiurl}UpdateEmployee`,obj)
  }
 
  deleteEmpById(id: number) {
    return this.http.delete(`${this.apiurl}DeleteEmployee?id=${id}`)
  } 

  newticket(obj:any){
    return this.http.post(`${this.apiurl}CreateNewTicket`,obj)
  }

  getTicketCreatedByLoggedEmp(id:number){
    
    return this.http.get(`${this.apiurl}GetTicketsCreatedByEmpId?empId=${id}`)
  }

  getTicketAssignedToEmp(id:number){
    return this.http.get(`${this.apiurl}GetAssignedTicketsByEmpId?empId=${id}`)
  }

  startTicket(ticketId:number){
    return this.http.post(`${this.apiurl}startTicket?id=${ticketId}`,{})
  }

  closeTicket(ticketId:number){
    return this.http.post(`${this.apiurl}closeTicket?id=${ticketId}`,{})
  }
}
