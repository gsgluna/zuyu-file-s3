import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { StorageModule } from './storage/storage.module';
import { MediaModule } from './media/media.module';

@Module({
  imports: [StorageModule, MediaModule],
  providers: [AppService],
})
export class AppModule {}
