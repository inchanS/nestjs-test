import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
// uuid 중 version1을 사용하는데 알아보기 쉽게 as로 uuid 앨리어싱 처리

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }
  createBoard(createBoardDto: CreateBoardDto) {
    const { title, description } = createBoardDto;
    const board: Board = {
      // title: title,
      // description: description,
      // status: BoardStatus.PUBLIC,

      // 원래는 위와 같지만, javascript의 구조분해할당을 이용하여 아래와 같이 작성한다.
      id: uuid(), // DB에서는 ID가 저절로 unique값이 할당되겠지만 현재는 아니기에 UUID 방법을 이용하여 유니크 값 할당
      title,
      description,
      status: BoardStatus.PUBLIC,
    };
    this.boards.push(board);
    return board;
  }

  getBoardbyId(id: string): Board {
    return this.boards.find((board) => board.id === id);
  }

  deleteBoard(id: string): void {
    this.boards = this.boards.filter((board) => board.id !== id);
  }
  // return 값을 주지 않을 것이라 void 타입을 할당
}
