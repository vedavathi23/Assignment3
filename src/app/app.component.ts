import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee-interface';
import { IfNullOrEmpty } from './nullorempty.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assessment3';
  sortByAsc = true;
  searchText: string = "";
  sortedDepts = [];
  sortedList: string;
  filteredEmployees: any[];


  constructor(
    private httpclient: HttpClient,
    private isNullOrEmpty: IfNullOrEmpty) { }


  employees: Employee[] = [
    {
      name: "Employee One",
      age: 40,
      email: "one@gmail.com",
      departments: ["Computer", "Physics"]
    },
    {
      name: "Employee Two",
      age: 10,
      email: "Two@gmail.com",
      departments: ["Computer"]
    },
    {
      name: "Employee Three",
      age: 10,
      email: "Three@gmail.com",
      departments: ["Physics", "Chemistry"]
    },
    {
      name: "Employee Four",
      age: 60,
      email: "Four@gmail.com",
      departments: ["Chemistry", "Physics"]
    },
    {
      name: "Employee Five",
      age: 70,
      email: "Five@gmail.com",
      departments: ["Computer", "Physics", "Chemistry"]
    },
    {
      name: "Employee Six",
      age: 70,
      email: "Six@gmail.com",
      departments: ["Computer", "Physics"]
    },
  ];

  empInfo: Employee[] = [...this.employees];


  sortBy() {
    if (this.sortByAsc === true) {
      this.sortByAsc = false;
      this.employees.sort((a, b) => a.name.localeCompare(b.name));

    } else {
      this.sortByAsc = true;
      this.employees.sort((a, b) => b.name.localeCompare(a.name));
    }
  }

  // Selecting departments 

  selectDept() {
    const filteredDepts = new Array;
    var inputValue = (<HTMLInputElement>document.getElementById("searchDept")).value;
    if (inputValue == "All" || inputValue == "") {
      this.employees = this.empInfo;
      return this.employees
    }
    else {
      for (let i of this.empInfo) {
        for (let j of i["departments"]) {
          if (j == inputValue) {
            filteredDepts.push(i)
          }
          else {
            this.employees = this.empInfo
          }
        }
      }
    }
    this.employees = filteredDepts;
  }

  // Reset Search Input

  resetInputSearch() {
    this.searchText = "";
    this.employees = this.empInfo;
  }

  // Filters employee details based on input

  mouseEnterEvent() { }

  filterEmployees() {
    if (this.searchText) {
      this.employees = this.empInfo.filter((x) =>
        x.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
      this.employees = this.empInfo;
    }
  }

  ngOnInit() {
    const deptArray = []
    for (let i of this.employees) {
      for (let j of i["departments"]) {
        deptArray.push(j)
      }
    }
    const unique = (value, index, self) => {
      return self.indexOf(value) === index;
    };
    console.log(deptArray.filter(unique));
    this.sortedDepts = deptArray.filter(unique)
  }
}