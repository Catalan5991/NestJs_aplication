
import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import {CreateCatDto} from './dto/create-cat';
import {UpdateCatDto} from './dto/update-cat';

@Injectable()
export class CatsService {
    //Declaramos nuestra lista estatica
    private cats: Cat[] = [
        {
            id: "2323923",
            name: "Milo",
            color: "Café"
        },
        {
            id: "48292323",
            name: "Luna",
            color: "blanco"
        },
        {
            id: "42839439",
            name: "Simba",
            color: "Negro"
        },
        {
            id: "834023432",
            name: "Princesa",
            color: "Dorado"
        },
    ];

    /**
     * Meotod para registrar un nuevo Cat
     * @param cat {id,name,color}
     * @returns cat
     */
    create(cat: CreateCatDto): Cat {
        // generamos una instancia de la clase para agregar el ID y los paramestros recibidos
        const newCat: Cat = {
            ...cat,
            id: `${new Date().getTime()}` //Asignamos un ID con un TimeStamp 
        };
        // guardanos nuestro nuevo valor
        this.cats.push(newCat);
        // y lo retonamos en la respuesta
        return newCat;
    }

    /**
     * Metodo para retornar toda la lista de Cats
     * @returns Cat[]
     */
    findAll(): Cat[] {
        return this.cats;
    }

    /**
     * Metodo para buscar un Cat por ID
     * @param id : String
     * @returns Cat: Cat
     */
    finOne(id: string){
        const cat = this.cats.find((cat) => cat.id === id);
        if(!cat){
            return{ error: `Cat con id ${id} no encontrado`}
        }
        return cat;
    }

    /**
     * Metodo para actualizar la información de un usuario
     * @param id : String
     * @param updateCate: Cat: Cat
     * @returns Cat : Cat
     */
    update(id: string, updateCate: UpdateCatDto){
        //Buscamos el index que ocupa Cat que vamos a actualizar
        const catIndex = this.cats.findIndex((cat) => cat.id === id);
        if(catIndex === -1){
            return{ error: `Cat con id ${id} no encontrado`}
        }
        //Creamos nuestra variable de tipo Cat con los nuevos valores
        const updatedCat: Cat = {
            ...this.cats[catIndex],
            ...updateCate,
        };
        //Guardamos los nuevos valores en la posición que ocupa dentro de la colección
        this.cats[catIndex] = updatedCat;

        return updatedCat;
    }

    /**
     * Metodo para eliminar un Cat de la lista
     * @param id : string
     * @returns : message
     */
    delete(id: string){
        //Buscamos el index que ocupa el Cata dentro de la colección
        const catIndex = this.cats.findIndex((cat) => cat.id === id);
        if(catIndex === -1){
            return{ error: `Cat con id ${id} no encontrado`}
        }
        //Eliminamos el Cat de la lista
        this.cats.splice(catIndex,1);
        return{ message: "Cat eliminado de la lista"}
    }
}
