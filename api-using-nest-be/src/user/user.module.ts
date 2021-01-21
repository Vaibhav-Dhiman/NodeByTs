import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schema/user.schema';

import { UserController } from './user.controller';
import { UserService } from './user.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    MongooseModule.forRoot('mongodb://localhost/products-db', { useNewUrlParser: true }),
    JwtModule.register({
        secretOrPrivateKey: 'thisismysecretorprivatekeytogeneratenewjwttoken'
    })
],
    controllers: [UserController],
    providers: [UserService]
})


export class UserModule{}