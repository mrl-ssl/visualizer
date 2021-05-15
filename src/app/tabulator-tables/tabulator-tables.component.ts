import { Component, Input, OnChanges, SimpleChanges, OnInit, AfterViewInit } from '@angular/core';
import Tabulator from 'tabulator-tables';
import "node_modules/tabulator-tables/dist/css/tabulator.min.css";

/**
 * This is a wrapper class for the tabulator JS library.
 * For more info see http://tabulator.info
 */
@Component({
  selector: 'app-tabulator-tables',
  templateUrl: './tabulator-tables.component.html',
  styleUrls: ['./tabulator-tables.component.scss']
})
export class TabulatorTablesComponent implements AfterViewInit {
  // @Input() tableData: any[] = [];
  // @Input() columnNames: any[] = [];
  // @Input() height: string = '311px';
  tableData: any[] = [
    {id:1, name:"Oli Bob", age:"12", col:"red", dob:""},
	  {id:2, name:"Mary May", age:"1", col:"blue", dob:"14/05/1982"},
	  {id:3, name:"Christine Lobowski", age:"42", col:"green", dob:"22/05/1982"},
	  {id:4, name:"Brendon Philips", age:"125", col:"orange", dob:"01/08/1980"},
	  {id:5, name:"Margret Marmajuke", age:"16", col:"yellow", dob:"31/01/1999"},];
  columnNames: any[] = [];
  height: string = '311px';
  // list properties you want to set per implementation here...

  tab = document.createElement('div');

  constructor() {
    
  }
  
  ngAfterViewInit(){
    this.drawTable();
  }

  private drawTable(): void {
    new Tabulator(this.tab, {
      data: this.tableData,
      // reactiveData:true,
      responsiveLayout:"hide",  //hide columns that dont fit on the table
      tooltips:true,            //show tool tips on cells
      addRowPos:"top",          //when adding a new row, add it to the top of the table
      history:true,             //allow undo and redo actions on the table
      pagination:"local",       //paginate the data
      paginationSize:7,         //allow 7 rows per page of data
      movableColumns:true,      //allow column order to be changed
      resizableRows:true,       //allow row order to be changed
      columns:[
        {title:"Color", field:"col", width:130, editor:"input"},
        {title:"Color", field:"col", width:130, editor:"input"},
        {title:"Color", field:"col", width:130, editor:"input"},
        {title:"Color", field:"col", width:130, editor:"input"},
      ],
      height: this.height
    });
    document.getElementById('my-tabular-table').appendChild(this.tab);
  }
}