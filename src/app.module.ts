import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule} from './students/students.modules';

@Module({
  imports: [],
  controllers: [AppController, StudentsModule],
  providers: [AppService],
})
export class AppModule {}
