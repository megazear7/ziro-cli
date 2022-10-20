function any(arr1, arr2) {
    return arr1.some(r=> arr2.includes(r));
}

export { any as default };
