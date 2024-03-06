// 定义一个接口
interface IPerson {
    name: string;
    age: number;
    greet(): void;
}

// 实现接口的类
class Person implements IPerson {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log(`Hello, my name is ${this.name} and I am${this.age} years old.`);
    }
}

// 创建一个 Person 实例
const person = new Person("张三", 30);

// 调用实例的方法
person.greet();
