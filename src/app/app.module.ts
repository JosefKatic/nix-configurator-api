import { Module } from '@nestjs/common';

import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

import { AppService } from './app.service';
import { AppResolver } from './app.resolver';
import { AuthModule } from './auth/auth.module';
import { DeviceModule } from './graphql/device/device.module';
import { UserModule } from './graphql/user/user.module';
import { NixModule } from './rest/nix/nix.module';
import { BullModule } from '@nestjs/bullmq';
import { DeploymentModule } from './deployment/deployment.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), './src/app/types/schema.gql'),
      playground: false,
      introspection: true,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    BullModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        connection: {
          host: configService.get<string>('REDIS_URL'),
          port: configService.get<number>('REDIS_PORT'),
        },
      }),
    }),
    DeviceModule,
    UserModule,
    NixModule,
    DeploymentModule,
  ],
  providers: [AppService, AppResolver],
})
export class AppModule {}
