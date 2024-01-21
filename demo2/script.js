class User {
    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password;
    }
    login(){
        return this.name + ` logined `;
    }
    getinfo(){
        return  ``+this.name ;
    }
}
let user1 = new User("khai hoang", "khaihoang@gmail.com", "123456");

class Student extends User{
    constructor(name, email, password, course){
        super(name,email,password);
        this.course = course;
    }
 info(){
    return `${this.login()} ${this.getinfo()} khoa la ${this.course}`;
 }
}
student1 = new Student("khai hoang", "khaihoang@gmail.com","1234","K14.5");
console.log(student1);
console.log(student1.info());
// console.log(user1);
// console.log(user1.login());