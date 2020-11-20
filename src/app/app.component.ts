import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assessment3';
  data: string[];
  empData: any;
  employee: any;
  department: any;
  sortByAsc = true;
  query = '';
  showEmpData: boolean = false;
  public employeeDetails: object = [];


  constructor(private httpclient: HttpClient) { }


  sortBy() {
    if (this.sortByAsc === true) {
      this.sortByAsc = false;
      this.empData.sort((a, b) => a.name.localeCompare(b.name));

    } else {
      this.sortByAsc = true;
      this.empData.sort((a, b) => b.name.localeCompare(a.name));
    }
  }

  selectDept() {
    const deptArray = new Array;

    for (let i = 0; i < this.data.length; i++) {
      deptArray.push(this.data.forEach(value => {
        console.log("--------------------", value)
      }))
      const unique = (value, index, self) => {
        return self.indexOf(value) === index;
      };
      console.log(deptArray.filter(unique));
    }
  }


  SearchProduct(name: string) {
    const obj = this.data.filter(function (employee) {
      this.employeeDetails = obj;
      return this.employeeDetails;
    })
  }

  ngOnInit() {
    this.httpclient.get('./assets/employeesdata.json').subscribe(
      data => {
        this.empData = data
        this.empData.map(employee => {
          this.department = employee.departments;
          console.log("DATA", this.department)
        })
      },
    )
  }
}