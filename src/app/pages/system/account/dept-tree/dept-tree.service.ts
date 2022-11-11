import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { ChangeDetectorRef, Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { SearchCommonVO } from '@core/services/types';
import { DeptService } from '@services/system/dept.service';
import { fnFlatDataHasParentToTree, fnFlattenTreeDataByDataList } from '@utils/treeTableTools';
import { NzTreeFlatDataSource, NzTreeFlattener } from 'ng-zorro-antd/tree-view';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';

interface TreeNode {
  id: number;
  tenphongban: string;
  disabled?: boolean;
  children?: TreeNode[];
}

export interface FlatNode {
  expandable: boolean;
  departmentName: string;
  id: number;
  level: number;
  disabled: boolean;
}

@Injectable()
export class DeptTreeService {
  TREE_DATA$ = new BehaviorSubject<any[]>([]);
  currentSelNode: FlatNode | null = null;
  private transformer = (node: TreeNode, level: number): FlatNode => ({
    expandable: !!node.children && node.children.length > 0,
    departmentName: node.tenphongban,
    level,
    id: node.id,
    disabled: !!node.disabled
  });
  // 不要多选
  selectListSelection = new SelectionModel<FlatNode>(false);

  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level,
    node => node.expandable
  );

  treeFlattener = new NzTreeFlattener(
    this.transformer,
    node => node.level,
    node => node.expandable,
    node => node.children
  );

  datas: NzTreeNodeOptions[] = []

  dataSource = new NzTreeFlatDataSource(this.treeControl, this.treeFlattener);
  hasChild = (_: number, node: FlatNode): boolean => node.expandable;

  constructor(private dataService: DeptService, private cdr: ChangeDetectorRef) {}

  resetTree(): void {
    if (this.currentSelNode) {
      this.selectListSelection.deselect(this.currentSelNode);
      this.currentSelNode = null;
      this.cdr.markForCheck();
    }
  }

  clickNode(node: FlatNode): void {
    this.currentSelNode = node;
    this.selectListSelection.select(node);
  }

  initDate(): void {
    const params: SearchCommonVO<any> = {
      pageSize: 0,
      pageNum: 0
    };
    this.dataService.getDepts(params).subscribe(deptList => {
     
      for(let element of deptList.list) {
        element.title = element.tenphongban;
        element.key = element.id;
        element.value = element.id;
      }
      console.log(deptList);
      this.TREE_DATA$.next(fnFlatDataHasParentToTree(deptList.list));
      console.log(this.TREE_DATA$);
    });
  }
}
