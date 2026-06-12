import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule} from './students/students.modules';
import { DogsModule } from './dogs/dogs.module';
import { CatsModule } from './cats/cats.modules';

@Module({
  imports: [AppController, StudentsModule, DogsModule,CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
