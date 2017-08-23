//单例模式
//常用于dialog之类的固定弹出层
//第一次调用的时候初始化
//再次调用直接返回首次调用初始化后的结果
//不会重新生成新的对象，提高性能，节省内存

var Person = (function () {
    //声明一个变量，为后面构建闭包所用
    var instance;

    function init(name, age) {
        return {
            name: name,
            age: age
        }
    }

    return {
        createPerson: function (name, age) {
            //操作外部作用域的变量，创建闭包（函数执行完毕后不销毁）
            if (!instance) {//以后每次调用都不会进入初始化
                instance = init(name, age)
            }
            console.log(instance);
        }
    }
})();

Person.createPerson('Albert', 23)

//第二次调用不会创建新对象，直接返回初始化的那个对象
Person.createPerson('yuuu', 22)











