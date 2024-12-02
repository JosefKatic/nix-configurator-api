import { registerEnumType } from "@nestjs/graphql";

export enum TypeEnum {
  laptop,
  server,
  desktop
}

registerEnumType(TypeEnum, {
  name: 'TypeEnum'
});