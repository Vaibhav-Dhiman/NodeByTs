import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.model';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserLoginDTO } from './dto/user-login.dto';
//import { JwtService } from  '@nestjs/jwt';
//import { AuthService } from '../auth/services/auth/auth.service';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>, 
    //private readonly jwtService: JwtService, 
    //private readonly authService: AuthService
    ) {}
    
    async addUser(createUserDTO: CreateUserDTO): Promise<any> {
      try {
        const userExists = await this.findUserByEmail(createUserDTO.email);
        if (userExists == null) {
          const hashPassword = await this.generatePasswordHashSalt(createUserDTO.password);
          createUserDTO.password = hashPassword;
          const user = await new this.userModel(createUserDTO).save();
          if(user !== null && user !== undefined ) {
            return true;
          }
          else {
            return false;
          }
        }
    }
      catch(err) {
        console.log(err);
      }
    }

    async userLogin(userLoginDTO: UserLoginDTO): Promise<any> {
      let user = await this.findUserByEmail(userLoginDTO.email);
      if (user !== null) {
        const hashPasswordFrmDb = user.password;
        const check =  await this.checkLogin(userLoginDTO.password, hashPasswordFrmDb);
        if (check) {
          const payload = `${userLoginDTO.password}${userLoginDTO.email}`;
          const accessToken = this.checkLogin(userLoginDTO.password, payload);
          return {
            expires_in: 3600,
            access_token: accessToken,
            user
         };
        }
        else return null;
      }
    }

    async checkLogin(planPassword : string, hashPassword) {
      var bcrypt = require('bcrypt');
      const match = bcrypt.compareSync(planPassword, hashPassword);
      if(match) {
        return true;
      }
      else { return false; }
    }

    async findUserByEmail(email:string) {
        const user = this.userModel.findOne({email: email}
          // , {_id: false, 
          //           password: false, 
          //           createdDate: false, 
          //           isActive: false, 
          //           isDelete: false }
          )
            // .select({_id: false, 
            //   password: true, 
            //   email: true, 
            //   phone: true, 
            //   address: true}
            
            // );
        if(user != null) {
            return user;
        }
        return null;
    }

     async generatePasswordHashSalt(password: string) {
      var bcrypt = require('bcrypt');
      const saltRounds = 10;
      const hash =   bcrypt.hash(password, saltRounds);
      return hash;
    }
}