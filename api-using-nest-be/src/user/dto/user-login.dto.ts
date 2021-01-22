import { ApiProperty } from "@nestjs/swagger";
import { Length, IsEmail, IsNotEmpty } from "class-validator";
export class UserLoginDTO {
    @IsEmail()
    @ApiProperty()
    readonly email: string;
    
    @IsNotEmpty()
    @Length(4)
    @ApiProperty()
    readonly password: string;
}