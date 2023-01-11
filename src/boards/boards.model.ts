export interface Board {
  id: string;
  title: string;
  description: string;
  status: BoardStatus;
}
export enum BoardStatus {
  // status에는 PUBLIC, PRIVATE 무조건 둘 중 하나만 와야한다라고 설정을 한다면...
  // enum을 사용할 수 있다.
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
