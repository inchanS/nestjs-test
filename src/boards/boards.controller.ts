import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './boards.model';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  // 원래는 아래와 같이 코드를 짜야하는데, private와 같은 접근제한자를 파라미터에 선언하면
  // 접근제한자가 사용된 생성자파라미터는 암묵적으로 클래스 프로퍼티로 선언된다.

  // boardsService: BoardsService;
  // constructor(boardsService: BoardsService) {
  //   this.boardsService = boardsService
  // }

  @Get()
  getAllBoard(): Board[] {
    return this.boardsService.getAllBoards();
  }

  @Post()
  createBoard(
    @Body('title') title: string,
    @Body('description') description: string,
  ): Board {
    return this.boardsService.createBoard(title, description);
  }
}
