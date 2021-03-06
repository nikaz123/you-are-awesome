// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => {
        return propertyName;
    }
;


const createNotEnumerableProperty = (propertyName) => {
        Object.defineProperty(Object.prototype, propertyName, {
            get: function () {
                return propertyName;
            },
            set: function (value) {

                propertyName = value;
            }
        });
        return propertyName;
    }
;


const createProtoMagicObject = () => {
        obj = function a() {
        };
        obj.prototype = obj.__proto__;
        return obj;
    }
;


let i = 0;
const incrementor = () => {
        i++;
        return incrementor;
    }
;
Object.getPrototypeOf(incrementor).valueOf = function () {
    return i;
};


Object.getPrototypeOf(incrementor).value = {}
Object.getPrototypeOf(incrementor).value.valueOf = function () {
    return i;
};


Object.getPrototypeOf(incrementor).next = incrementor;

Object.getPrototypeOf(incrementor)[Symbol.iterator] = () => {
    return incrementor
}
;


let j = 0;

const asyncIncrementor = () => {
    return new Promise(resolve => {
        let temp = i;
        i = j;
        j = temp;

        incrementor();
        temp = i;
        i = j;
        j = temp;
        resolve(temp);

    })
};


const createIncrementer = () =>
{
    i = 0;
    return incrementor
};


// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) =>{
    return new Promise(resolve => {
        setTimeout(() => {resolve (param)}, 1001);

    })


};
const getDeepPropertiesCount = (object) => {
    let count=0;
    countOfProperties(object);
    function countOfProperties(object) {
        for (let key in object) {
            if (typeof( object[key] === 'object')) {
                count++;
                countOfProperties(object[key]);
            }
        }
    }
    return count;
};
const createSerializedObject = () =>
{
    return null;
}
;
const toBuffer = () =>
{}



;
const sortByProto = (arr) =>
{ return arr.sort();}
;



exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;