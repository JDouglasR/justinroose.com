export const capitalize = (arg: string): string => {
    const split = arg.split('')
    split[0] = split[0].toUpperCase()
    return split.join('')
}