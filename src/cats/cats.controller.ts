
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import {CreateCatDto} from './dto/create-cat';
import {UpdateCatDto} from './dto/update-cat';


@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  /**
   * EndPoint que nos retorna la lista completa de Cats
   * @returns Cat[]
   */
  @Get()
  findAll(): Cat[] {
    return this.catsService.findAll();
  }

  /**
   * EndPoint que retorna un Cat por ID
   * @param id : string
   * @returns Cat
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catsService.finOne(id);
  }

  /**
   * EndPoint para registrar un nuevo Cat
   * @param body : Cat
   * @returns : Cat
   */
  @Post()
  create(@Body() body: CreateCatDto) {
    return this.catsService.create(body);
  }

  /**
   * EndPoint para actualizar los datos de un Cat
   * @param id : string
   * @param body : Cat
   * @returns : Cat
   */
  @Put(':id')
  update( @Param('id') id: string, @Body() body: UpdateCatDto) {
    return this.catsService.update(id, body);
  }

  /**
   * EndPont para eliminar un Cat de la lista
   * @param id : string
   * @returns : message
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catsService.delete(id);
  }


}
