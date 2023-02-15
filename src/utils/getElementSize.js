const getElementSize = (e) => {
console.log();
    return {
        width: e?.clientWidth || 0,
        height: e?.clientHeight || 0,
        x: e?.offsetLeft || 0,
        y: e?.offsetTop || 0
    }
}

export default getElementSize