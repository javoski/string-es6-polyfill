;(function(root){
    'use strict'
    var proto = root.String.prototype
    proto.includes = proto.includes || function(substr){
        substr = '' + substr
        return (new RegExp(substr)).test(this)
    }
    proto.startsWith = proto.startsWith || function(substr){
        substr = '' + substr
        return (new RegExp('^' + substr)).test(this)
    }
    proto.endsWith = proto.endsWith || function(substr){
        substr = '' + substr
        return (new RegExp(substr + '$')).test(this)
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
        var res = ''
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
        var str = '' + this
        len = +len - str.length
        if(len <= 0) return str
        if(!filler && filler !==0) filler = ' '
        filler = '' + filler
        var pad = ''
        while(pad.length < len){
            pad += filler
        }
        pad = pad.substring(0, len)
        return pad + str
    }
    proto.padEnd = proto.padEnd || function(len, filler){
        var str = '' + this
        len = +len - str.length
        if(len <= 0) return str
        if(!filler && filler !==0) filler = ' '
        filler = '' + filler
        var pad = ''
        while(pad.length < len){
            pad += filler
        }
        pad = pad.substring(0, len)
        return str + pad
    }
})(this)

