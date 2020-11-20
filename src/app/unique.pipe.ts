import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unique'
})
export class UniquePipe implements PipeTransform {

  data: string[];

  transform(value: any, args?: any): any {

      const deptArray = new Array;

        for(let i = 0; i < this.data.length; i++){
          deptArray.push(this.data.forEach(value => {
            console.log("--------------------", value)
          }))
      const unique = (value, index, self) => {
        return self.indexOf(value) === index;
      };
      console.log(deptArray.filter(unique));
    }
  }
}