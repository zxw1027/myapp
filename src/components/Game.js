
let knightPosition = [1, 7]
let observer = {}

function emitChange(type) {
    console.log('emitChange', type)
    console.log('observer', observer)
    observer[type] (knightPosition)
}

export function observe(o) {
    // if (observer) {
    //     throw new Error('Multiple observers not implemented.')
    // }

    // observer = o
    observer={...observer, ...o}
    // emitChange()
}

export function moveKnight(toX, toY,item,monitor) {
    console.log(item)
    console.log(monitor)
    knightPosition = [toX, toY]
    emitChange(item?.type)
}

// let knightPosition = [1, 7]

export function canMoveKnight(toX, toY) {
    const [x, y] = knightPosition
    const dx = toX - x
    const dy = toY - y

    return (
        (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
        (Math.abs(dx) === 1 && Math.abs(dy) === 2)
    )
}
