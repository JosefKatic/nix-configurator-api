import { PartialType } from '@nestjs/mapped-types';
import { CreateNixDto } from './create-nix.dto';

export class UpdateNixDto extends PartialType(CreateNixDto) {}
