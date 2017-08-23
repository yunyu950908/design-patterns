//构造函数模式关键在于 原型链 与 new 操作符

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype = {
    sayName: function () {
        console.log(this.name)
    },
    sayAge: function () {
        console.log(this.age)
    }
}

var me = new Person('Albert', 23)

console.log(me)

me.sayName()
me.sayAge()