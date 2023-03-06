export default function getEventDate() {
    const date = new Date(2023, 2, 11, 16)
    const destOffset = 1
    const localOffset = -date.getTimezoneOffset() / 60
    const dif = destOffset - localOffset
    const destDateWithOffset = new Date(date.getTime() - dif * 60 * 60 * 1000)
    return destDateWithOffset
}
