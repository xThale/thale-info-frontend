

export function nextIndex(current: number, max: number) {
    if (current >= max) {
        return 0
    } else {
        return current + 1
    }
}

export function prevIndex(current: number, max: number) : number {
    if (current <= 0) {
        return max
    } else {
        return current - 1
    }
}

export function currentIndex(current: number, max: number) : number {
    if (current < 0) {
        return 0
    } else if (current > max) {
        return max
    }
    return current
}