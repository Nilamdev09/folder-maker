import { Component } from '@angular/core';
import { CommonService } from './common.service';
import { NodeModel } from './node-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  nodesData = [];

  constructor(private commonService: CommonService) {
  }

  addTreeNode() {
    const objToBePushed: NodeModel = {
      id: this.commonService.generateUniqueId(),
      children: [],
      type: 'folder'
    }
    this.nodesData.push(objToBePushed);
  }

  removeTreeNode(event) {
    this.nodesData = this.nodesData.filter((node) => node.id !== event);
  }
}
