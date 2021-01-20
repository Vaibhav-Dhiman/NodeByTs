import { IsString, Length, IsOptional, IsEmail, IsNotEmpty, IsMobilePhone, Min, Max, IsInt } from "class-validator";

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
    readonly password: string;
    
    @IsNotEmpty()
    @IsMobilePhone()
    readonly phone: string;
    
    @IsString()
    readonly address: string;
}