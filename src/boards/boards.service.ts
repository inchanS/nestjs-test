import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardRepository } from './board.repository';
import { Board } from './board.entity';

// uuid 중 version1을 사용하는데 알아보기 쉽게 as로 uuid 앨리어싱 처리

@Injectable()
export class BoardsService {
  constructor(private boardRepository: BoardRepository) {}
  async getAllBoards(): Promise<Board[]> {
    return this.boardRepository.find();
  }

  // createBoard(createBoardDto: CreateBoardDto) {
  //   const { title, description } = createBoardDto;
  //   const board: Board = {
  //     // title: title,
  //     // description: description,
  //     // status: BoardStatus.PUBLIC,
  //
  //     // 원래는 위와 같지만, javascript의 구조분해할당을 이용하여 아래와 같이 작성한다.
  //     id: uuid(), // DB에서는 ID가 저절로 unique값이 할당되겠지만 현재는 아니기에 UUID 방법을 이용하여 유니크 값 할당
  //     title,
  //     description,
  //     status: BoardStatus.PUBLIC,
  //   };
  //   this.boards.push(board);
  //   return board;
  // }
  //

  createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardRepository.createBoard(createBoardDto);
  }

  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardRepository.findOneBy({ id });

    if (!found) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }

    return found;
  }

  async deleteBoard(id: number): Promise<void> {
    const result = await this.boardRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Can;t find Board with id ${id}`);
    }
    console.log(result);
  }

  async updateBoardStatus(id: number, status: BoardStatus): Promise<Board> {
    const board = await this.getBoardById(id);

    board.status = status;
    await this.boardRepository.save(board);

    return board;
  }
}
