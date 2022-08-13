const debounce = (func:any, delay:number) => {
    let timer:any;
    return function (...args:any) {
        if(timer) {
        clearTimeout(timer);
        }
        timer = setTimeout(() => {
        func.apply(this, args);
        clearTimeout(timer);
        }, delay);
    };
};

export const getName = (list:any) => {
    let str = "";
    list.map((item:any, index:any) => {
        str += index === 0? item.name: "/" + item.name;
        return item;
    })
    return str;
}

export const filterIndex = (rankList:any )=> {
    for (let i = 0; i < rankList.length; i++) {
        if (rankList[i].tracks.length && !rankList[i+1].tracks.length) {
            return i + 1;
        }
    }
}

export { debounce };