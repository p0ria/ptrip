import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Comment} from "../../../../models/dtos/comment.interface";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() comments: Comment[] = [];

  @Output() addComment = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  emitAddComment(text: string) {
    this.addComment.emit(text);
  }
}
