import { IsString, Length, IsEmail, IsNotEmpty, IsMobilePhone } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDTO {
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    readonly firstName: string;
    
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    readonly lastName: string;
    
    @IsEmail()
    @ApiProperty()
    readonly email: string;
    
    @IsNotEmpty()
    @Length(4)
    @ApiProperty()
    password: string;
    
    @IsNotEmpty()
    @IsMobilePhone()
    @ApiProperty()
    readonly phone: string;
    
    @IsString()
    @ApiProperty()
    readonly address: string;
}