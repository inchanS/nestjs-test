import { Repository } from 'typeorm';
import { CustomRepository } from '../db/typeorm-ex.decorator';
import { Board } from './board.entity';

@CustomRepository(Board)
export class BoardRepository extends Repository<Board> {}
