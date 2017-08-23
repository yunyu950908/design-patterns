//工厂模式
// 1. 在一个函数作用域中声明一个对象；
// 2. 该对象包含所有属性和方法；
// 3. 将这个对象返回出去；

function createPerson(name, age) {
    var person = {
        name: name,
        age: age,
        sayName: function () {
            console.log(this.name)
        },
        sayAge: function () {
            console.log(this.age)
        }
    };
    return person;
}

var me = createPerson('Albert', 23)

console.log(me)

me.sayName();
me.sayAge();