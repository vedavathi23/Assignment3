import { Pipe, PipeTransform } from "@angular/core";
import { Employee } from './employee-interface';

@Pipe({
  name: "search",
  pure: false,
})

export class SearchPipe implements PipeTransform {

  transform(empInfo: Employee[], searchText: string): any {
    if (searchText) {
      return empInfo.filter((x) =>
        x.name.toLowerCase().includes(searchText.toLowerCase())
      );
    } else {
      return empInfo;
    }
  }
}