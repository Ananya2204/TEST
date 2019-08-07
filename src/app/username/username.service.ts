import { Username } from './username.module';

export class usernameService
{
    private username:Username[]=
    [
        new Username('Ananya','Yadav','AnanyaYadav',1803213013,'22/04/1999'),
        new Username('Ananya','Yadav','AnanyaYadav',1803213013,'22/04/1999')

    ];

getUsernames()
{
    return this.username;
}
getUsername(n:number)
{
    return this.username[n];
}

}