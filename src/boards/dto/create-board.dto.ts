import { IsNotEmpty } from 'class-validator';

export class CreateBoardDto {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  description: string;
}
// 인자를 DTO - class처리 함으로써, 추후 인자의 값을 수정할 때 유지보수상 더 용이하게 할 수 있다.
