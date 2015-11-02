/**
 * Created by vengean on 15/11/2.
 */
require([], function(){
    var config = {url: '/components/msg/msg.js'};

    require([config.url], function(msg) {
        msg.sayHello();
    });
});