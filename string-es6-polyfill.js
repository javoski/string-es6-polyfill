;(function(root){
    'use strict'
    var proto = root.String.prototype
    proto.at = proto.at || function(pos){
        //...
    }
    proto.includes = proto.includes || function(sub){
        if(typeof sub !== "string"){
            throw new TypeError("Parameter should be a string")
        }
        return (new RegExp(sub)).test(this)
    }
    proto.startsWith = proto.startsWith || function(sub){
        if(typeof sub !== "string"){
            throw new TypeError("Parameter should be a string")
        }
        return (new RegExp('^' + sub)).test(this)
    }
    proto.endsWith = proto.endsWith || function(sub){
        if(typeof sub !== "string"){
            throw new TypeError("Parameter should be a string")
        }
        return (new RegExp(sub + '$')).test(this)
    }
    proto.repeat = proto.repeat || function(count){
        count = +count
        if (count < 0){
            throw new RangeError('Repeat count must be non-negative');
        }else if (count === Infinity){
            throw new RangeError('Repeat count must be less than infinity');
        }
        var str = '' + this
        count = Math.floor(count)
        if(this.length === 0 || count === 0){
            return ''
        }
        var res = str
        while(true){
            if((count & 1) === 1){
                res += str
            }
            count >>>= 1
            if(count === 0){
                break
            }
            str += str
        }
        return res
    }
    proto.padStart = proto.padStart || function(len, filler){
        if(typeof len !== "number"){
            throw new TypeError("First parameter should be a number")
        }
        //...
    }
    proto.padEnd = proto.padEnd || function(len, filler){
        if(typeof len !== "number"){
            throw new TypeError("First parameter should be a number")
        }
        //...
    }
})(typeof window !== 'undefined'?window:global)

