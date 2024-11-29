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
import { BullModule } from '@nestjs/bullmq';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      imports: [ConfigModule],
      inject: [ConfigService],
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => ({
        autoSchemaFile: join(configService.get('DATA_DIR'), 'schema.gql'),
        playground: false,
        introspection: true,
        plugins: [ApolloServerPluginLandingPageLocalDefault()],
      }),
    }),
    // <ApolloDriverConfig>({}),
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
  ],
  providers: [AppService, AppResolver],
})
export class AppModule {}
