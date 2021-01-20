import { Length, IsEmail, IsNotEmpty } from "class-validator";
export class UserLoginDTO {
    @IsEmail()
    readonly email: string;
    
    @IsNotEmpty()
    @Length(4)
    readonly password: string;
}