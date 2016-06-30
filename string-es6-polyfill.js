(function(root){
    'use strict'
    var proto = root.String.prototype
    proto.at = proto.at || function(pos){
        //...
    }
    proto.includes = proto.includes || function(sub){
        if(typeof sub !== "string") {
            throw new TypeError("Parameter should be a string")
            return
        }
        return (new RegExp(sub)).test(this)
    }
    proto.startsWith = proto.startsWith || function(sub){
        if(typeof sub !== "string") {
            throw new TypeError("Parameter should be a string")
            return
        }
        return (new RegExp('^' + sub)).test(this)
    }
    proto.endsWith = proto.endsWith || function(sub){
        if(typeof sub !== "string") {
            throw new TypeError("Parameter should be a string")
            return
        }
        return (new RegExp(sub + '$')).test(this)
    }
    proto.repeat = proto.repeat || function(count){
        if(typeof count !== "number") {
            throw new TypeError("Parameter should be a number")
            return
        }
        //...
    }
})(window || global)