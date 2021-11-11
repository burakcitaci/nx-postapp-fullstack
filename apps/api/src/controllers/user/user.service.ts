import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { User } from '@nx-postapp-fullstack/api-interfaces';

@Injectable()
export class UserService {

    public user! : User;

    constructor(private httpService: HttpService) {}

    async getUserById(userId : number): Promise<User> {
        this.httpService.get<User>
        ('https://jsonplaceholder.typicode.com/users?userId=' + userId)
            .subscribe(result => {
            this.user = result.data;
        }); 
        return this.user;
    }
}
