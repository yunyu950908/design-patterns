//模块模式
//词法作用域
//通过构成闭包暴露部分接口

var Person = (function () {
    var name = 'Albert';

    function sayName() {
        console.log(name)
    };
    return {
        name: name,
        sayName: sayName
    }
})()

console.log(Person)