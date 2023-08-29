import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  @IsEmail()
  email: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @Field(() => String)
  @MinLength(6)
  // @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/, {
  //   message:
  //     'La contraseña debe contener al menos una mayúscula, una minúscula, un número y tener una longitud mínima de 6 caracteres',
  // })
  password: string;
}
