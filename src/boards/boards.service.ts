import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {
  private boards = [];
  // private을 사용하지 않으면 다른 컴포넌트에서 boards값을 수정할 수 있음

  getAllBoards() {
    return this.boards;
  }
}
