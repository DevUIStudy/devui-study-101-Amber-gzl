import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  HostBinding
} from '@angular/core';
import { SourceType, originSource } from '../mock-data'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logo = '../assets/image/logo.png';
  title = 'start-with-devui';
// 手风琴
  restrictOneOpen = false;
  menu = [{
    title: '通用设置',
  }, {
    title: '项目管理',
    open: true,
    children: [
      {title: '项目设置模板'},
      {title: '设置项目创建者'},
      {title: '项目和成员管理', open:true},
    ]
  }, {
    title: '编译构建',
  }, {
    title: '私有依赖库'
  }];

// 搜索栏
  constructor() { }

  ngOnInit() {
  }

  onSearch(term) {
      console.log(term);
  }

// 表格
  basicDataSource: Array<SourceType> = JSON.parse(JSON.stringify(originSource.slice(0, 6)));
    dataTableOptions = {
      columns: [
          {
              field: 'firstName',
              header: 'First Name',
              fieldType: 'text'
          },
          {
              field: 'lastName',
              header: 'Last Name',
              fieldType: 'text'
          },
          {
              field: 'gender',
              header: 'gender',
              fieldType: 'text'
          },
          {
              field: 'dob',
              header: 'Date of birth',
              fieldType: 'date'
          }
      ]
  };
//分页
  pager = {
    total: 648,
    pageIndex: 1,
    pageSize: 10
  };

}
