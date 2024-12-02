import { InputType, Field, registerEnumType } from '@nestjs/graphql';
import { SystemConfigInput } from '../entities/system-config';
import { HomeConfigInput } from '../entities/home-config';

enum ConfigType {
  SYSTEM = 'SYSTEM',
  HOME = 'HOME',
}
registerEnumType(ConfigType, { name: 'ConfigType' });
@InputType()
export class UpdateSystemConfigInput {
  @Field(() => String, { nullable: false })
  hostname: string;

  @Field(() => ConfigType, { nullable: false })
  type: ConfigType;

  @Field(() => SystemConfigInput, {
    nullable: false,
    description: 'Updated system config',
  })
  updatedConfig: SystemConfigInput;
}

@InputType()
export class UpdateHomeConfigInput {
  @Field(() => String, { nullable: false })
  hostname: string;

  @Field(() => ConfigType, { nullable: false })
  type: ConfigType;
  @Field(() => HomeConfigInput, {
    nullable: false,
    description: 'Updated home config',
  })
  updatedConfig: HomeConfigInput;
}
