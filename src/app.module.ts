import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AwsModule } from './aws/aws.module';
import { AwsController } from './aws/aws.controller';
import { AwsService } from './aws/aws.service';


@Module({
  imports: [ConfigModule.forRoot(), AwsModule],
  controllers: [AwsController],
  providers: [AwsService],
})
export class AppModule {}