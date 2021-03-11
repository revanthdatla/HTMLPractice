/**
 * Format Trend function shows a direction prefix - upwards or downwards before a rate based on the sign.
 * @param trendRate
 * @returns {string}
 */
function formatTrend(trendRate)
{
    var direction = ( trendRate < 0 || Object.is(trendRate, -0) ) ? "▼" : "▲";

    return `${direction} ${Math.abs(trendRate)}`
}

console.log(formatTrend(-3));
console.log(formatTrend(3));
console.log(formatTrend(-0));
console.log(formatTrend(0));