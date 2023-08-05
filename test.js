const params = {
    x: 1,
    y: -1,
    z: 14,
}

const add = (x, y, z) => {
    const arr = [x, y, z];
    let total = 0;
    arr.forEach(() => total += 1);
    return total;
};

console.log(
    add(params)
);