import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CommonService } from '../common.service';
import { NodeModel } from '../node-model';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent {

  @Input('currentNode') currentNode: NodeModel;

  @Output('removeTreeNodeFromParent') removeTreeNodeFromParent: EventEmitter<any> = new EventEmitter();

  name = new FormControl('', [Validators.required])
  constructor(private commonService: CommonService) {
  }
  remove() {
    this.removeTreeNodeFromParent.emit(this.currentNode?.id);
  }

  removeChild(id) {
    this.currentNode.children = this.currentNode?.children.filter((childNode) => childNode.id !== id);
  }

  add() {
    let obj: NodeModel = {
      id: this.commonService.generateUniqueId(),
      children: [],
      type: 'unset'
    }
    this.currentNode?.children?.push(obj)
  }

  save() {
    if (!this.name.valid) {
      this.name.markAllAsTouched();
    } else {
      let name = this.name.value
      this.currentNode.name = name;
    }
  }
}

