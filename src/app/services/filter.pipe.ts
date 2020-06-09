import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  private searchedItems: Array<any> = [];
  private key: string;
  private prop = 'title';
  private childrenPropName = 'fullDbs';

  transform(value: any, key?: any): any {
    if(key != undefined) {
      this.searchedItems = [];
      this.key = key.toLowerCase();
      let searchResult = this.searchRecursive(value);
      return searchResult;
    }
    return value;
  }

  searchRecursive(value: any[], rootValue = null) {
    for(var i = 0; i < value.length; i++) {
      let lowerCaseName = value[i][this.prop].toLowerCase();

      if(lowerCaseName.includes(this.key)) {
        rootValue ? this.searchedItems.push(rootValue) : this.searchedItems.push(value[i]);
      } else if(value[i][this.childrenPropName]) {

        if(value[i][this.childrenPropName].length > 0) {
          this.searchRecursive(value[i][this.childrenPropName], value[i]);
        }
      }
    }

    return this.searchedItems;
  }
}