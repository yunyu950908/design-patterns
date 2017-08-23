// 发布订阅模式
//
// 定义publish函数 => 保存事件
// 定义subscribe函数 => 触发事件
//

var EventCenter = (function () {
    // 事件存储
    var events = {};

    // 发布功能
    function on(e, handler) {
        events[e] = events[e] || [];
        events[e].push({
            handler: handler
        })
    }

    // 订阅功能
    function fire(e, args) {
        if (!events[e]) {
            return;
        }
        for (var i = 0; i < events[e].length; i++) {
            events[e][i].handler(args);
        }
    }

    // 删除功能
    //=> 删除events对象内的属性就可以了
    function off(e) {
        delete events[e];
    }

    //返回出 publish/subscribe 对应接口
    return {
        on: on,
        fire: fire,
        off: off
    }
})()

// 发布
EventCenter.on("click", function (name) {
    console.log(name)
})

EventCenter.on("click", function () {
    console.log('world')
})

// 订阅
EventCenter.fire("click", "hello")

// 取消
EventCenter.off("click")

// 订阅 => 因为删除了发布的事件，所以不会触发
EventCenter.fire("click", "hello")




