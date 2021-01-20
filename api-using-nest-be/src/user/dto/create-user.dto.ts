import { IsString, Length, IsEmail, IsNotEmpty, IsMobilePhone } from "class-validator";
import { Exclude } from 'class-transformer';
export class CreateUserDTO {
    @IsNotEmpty()
    @IsString()
    readonly firstName: string;
    
    @IsNotEmpty()
    @IsString()
    readonly lastName: string;
    
    @IsEmail()
    readonly email: string;
    
    @IsNotEmpty()
    @Length(4)
    password: string;
    
    @IsNotEmpty()
    @IsMobilePhone()
    readonly phone: string;
    
    @IsString()
    readonly address: string;
}