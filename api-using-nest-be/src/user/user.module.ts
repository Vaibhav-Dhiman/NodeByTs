import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schema/user.schema';
// import { JwtModule } from '@nestjs/jwt';
import { UserController } from './user.controller';
import { UserService } from './user.service';
// import { JwtModule } from '@nestjs/jwt';
// import { AuthModule } from 'src/auth/auth.module';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    MongooseModule.forRoot('mongodb://localhost/products-db', { useNewUrlParser: true }),
    //JwtModule
    // JwtModule.register({
    //     secretOrPrivateKey: 'thisismysecretorprivatekeytogeneratenewjwttoken'
    // }),
    // AuthModule
],
    controllers: [UserController],
    providers: [UserService]
})


export class UserModule{}