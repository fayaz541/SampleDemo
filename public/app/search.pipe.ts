import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {
        
  transform(data:any[], searchText: string): any {
      if(searchText.length == 0)    return data;
      if(data) {
        let returnData = data.filter(x => x.mname.toString().toLowerCase().indexOf(searchText.toLowerCase()) > -1);
        return returnData;
      }
  }
    
}