import { Query, Resolver } from '@nestjs/graphql';
import { AppService } from './app.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './auth/gql.guard';

@Resolver()
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => String)
  getHello(): string {
    return this.appService.getHello();
  }
}
