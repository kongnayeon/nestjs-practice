import { Controller, Get } from '@nestjs/common';
import { BoardsService } from 'src/boards/boards.service';

@Controller('boards')
export class BoardsController {
  constructor(private boardService: BoardsService) {}
}
