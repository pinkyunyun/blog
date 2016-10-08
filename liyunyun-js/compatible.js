/**
 * Created by mr.z on 2016/4/25.
 */



//innerText兼容性

//设置标签内部的内容 兼容浏览器
function setInnerText(element, content) {
    if (typeof element.innerText === "string") {
        element.innerText = content;
    } else {
        element.textContent = content;
    }
}

//获取标签之间的内容  兼容浏览器
function getInnerText(element) {
    if (typeof element.innerText === "string") {
        return element.innerText;
    } else {
        return element.textContent;
    }
}


//nextElementSibling 兼容性

function getNextElement(element) {
    //能力检测
    if (element.nextElementSibling) {
        return element.nextElementSibling;
    } else {
        //找下一个节点，直到找到下一个元素为止
        var el = element.nextSibling;
        while (el && 1 !== el.nodeType) {
            el = el.nextSibling;
        }
        return el;
    }
}


//nextElementSibling 兼容性

function getPreviousElement(element) {
    //能力检测
    if (element.previousElementSibling) {
        return element.previousElementSibling;
    } else {
        //找下一个节点，直到找到下一个元素为止
        var el = element.previousSibling;
        while (el && 1 !== el.nodeType) {
            el = el.previousSibling;
        }
        return el;
    }
}


//firstElementChild兼容性


function getFirstElement(element) {
    //能力检测
    if (element.firstElementChild) {
        return element.firstElementChild;
    } else {
        //找下一个节点，直到找到下一个元素为止
        var el = element.firstChild;
        while (el && 1 !== el.nodeType) {
            el = el.nextSibling;
        }
        return el;
    }
}


//lastElementChild兼容性


function getLastElement(element) {
    //能力检测
    if (element.lastElementChild) {
        return element.lastElementChild;
    } else {
        //找下一个节点，直到找到下一个元素为止
        var el = element.lastChild;
        while (el && 1 !== el.nodeType) {
            el = el.nextSibling;
        }
        return el;
    }
}


function my$(id) {
    return document.getElementById(id)
}


//封装获取样式属性兼容性

//任意对象  任意的计算后的属性
function getStyle(obj, attr) {
    if (obj, currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return window.getComputedStyle(obj, null)[attr];
    }
}


//scroll兼容性
function scroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}


//client兼容性写法
function client() {
    return {
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
    };
}


//pageX 和 pageY 的兼容性
function eventPage(event) {
    event = event || window.event;
    return {
        pageX: event.pageX || event.clientX + document.documentElement.scrollLeft,
        pageY: event.pageY || event.clientY + document.documentElement.scrollTop
    }
}



//事件冒泡兼容
function eventStopPropagation(event) {

    event = event || window.event;

    if (event && event.stopPropagation) {

        event.stopPropagation();

    } else {

        event.cancelBubble = true;

    }
}


//判断事件目标兼容性

function eventTarget(event) {
    event = event || window.event;
    return event.target ? event.target.id : event.srcElement.id

}


//获取选中的字符串的兼容写法
function pitchOnString() {
    return window.getSelection ? window.getSelection().toString() : document.selection.createRange().text;
}

//清除选中字符串兼容写法
function clearSelect() {
   return window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
}