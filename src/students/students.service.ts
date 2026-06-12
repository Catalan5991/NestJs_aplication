import {Injectable, NotFoundException, BadRequestException} from '@nestjs/common';
import {Student} from './interfaces/students.interface';
import { CreateStudentDto } from './dto/create-student';
import { UpdateStudentDto } from './dto/update-student';


@Injectable()
export class StudentsService {
    private students: Student[] = [
    {
        id: '3390430',
        Name: 'Ana López Martínez',
        enrollment: 'A001',
        career: 'Ingeniería en Informática',
        quarter: 1,
    },
    {
        id: '3434233',
        Name: 'Carlos Hernández Ruiz',
        enrollment: 'A002',
        career: 'Ingeniería en Sistemas',
        quarter: 3,
    },
    {
        id: '934578345',
        Name: 'María Fernanda Torres',
        enrollment: 'A003',
        career: 'Tecnologías de la Información',
        quarter: 2,
    },
  ];

  /**
   * Metodo para recuperar la lista de todos los Estudiantes
   * @returns Student[]
   */
    findAll(): Student[] {
        return this.students;
    }

  /**
   * Método para buscar un Estudiante por ID
   * @param id : string
   * @returns Student
   */
    findOne(id: string): Student {
        const student = this.students.find((student) => student.id === id);

        if (!student) {
            throw new NotFoundException(`El estudiante con el ID ${id} no fue encontrado`);
        }
        return student;
    }

  /**
   * Método para registrar un nuevo Estudiante
   * @param createStudentDto : Student
   * @returns Student
   */
    create(createStudentDto: CreateStudentDto): Student {
        try {
            const newStudent: Student = {
                ...createStudentDto,
                id: `${new Date().getTime}`,
            };

            this.students.push(newStudent);

            return newStudent;
        } catch (error) {
            throw new BadRequestException('Error al registrar el estudiante');
        }
    }

  /**
   * Método para actualizar la información de un Estudiante
   * @param id : string
   * @param updateStudentDto : Student
   * @returns Student
   */
    update(id: string, updateStudentDto: UpdateStudentDto): Student {
        try {
            const studentIndex = this.students.findIndex((student) => student.id === id);

            if (studentIndex === -1) {
                throw new NotFoundException(`El estudiante con el ID ${id} no fue encontrado`);
            }

            const updatedStudent: Student = {
            ...this.students[studentIndex],
            ...updateStudentDto,
            };

            this.students[studentIndex] = updatedStudent;

            return updatedStudent;
        } catch (error) {
            throw new BadRequestException('Error al actualizar el estudiante');
        }
    }

  /**
   * Método para eliminar un Estudiante de la lista de Estudiantes
   * @param id : string
   * @returns message
   */
    remove(id: string) {
        try {
            const studentIndex = this.students.findIndex((student) => student.id === id);

            if (studentIndex === -1) {
                throw new NotFoundException(`El estudiante con el ID ${id} no fue encontrado`);
            }

            this.students.splice(studentIndex, 1);

            return {message: "Estudiante eliminado de la lista"}
        } catch (error) {
            throw new BadRequestException('Error al eliminar el estudiante de la lista');
        }
        
    }

}

