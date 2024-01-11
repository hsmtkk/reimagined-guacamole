export default defineEventHandler((event) => {
    console.log("/api/capitalize")
    const query = getQuery(event)
    const text = query.text
    const count = busyWait(3000)
    return { "text": text.toUpperCase(), "count": count }
})

function busyWait(milliSeconds: number): number {
    let count = 0
    let start = Date.now()
    while (Date.now() - start < milliSeconds) {
        count++
    }
    return count
}