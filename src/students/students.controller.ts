import {  Body, Controller, Delete, Get, Param, Put, Post } from '@nestjs/common';
import { StudentsService } from './students.service';
import { Student } from './interfaces/students.interface';
import { CreateStudentDto } from './dto/create-student';
import { UpdateStudentDto } from './dto/update-student';

@Controller('students')
export class StudentsController {
    constructor(private readonly studentsService: StudentsService) {}

    /**
     * EndPoint que retorna la lista de estudiantes disponibles
     * @returns Student[]
     */
    @Get()
    findAll(): Student[] {
        return this.studentsService.findAll();
    }

    /**
     * EndPoint obtener el estudiante por ID
     * @param id : string
     * @returns Student
     */
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.studentsService.findOne(id);
    }

    /**
     * EndPoint para registrar un nuevo Estudiante
     * @param createStudentDto : Estudiante
     * @returns Student
     */
    @Post()
    create(@Body() createStudentDto: CreateStudentDto) {
        return this.studentsService.create(createStudentDto);
    }

    /**
     * EndPoint para actualizar la información de un Estudiante
     * @param id : string
     * @param updateStudentDto : Student
     * @returns Student
     */
    @Put(':id')
    update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto ) {
        return this.studentsService.update(id, updateStudentDto);
    }

    /**
     * EndPoint para eliminar un estuadiante de la lista
     * @param id : string
     * @returns message
     */
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.studentsService.remove(id);
    }

}
