export function block(ms = 50) {
    performance.mark("block:start");

    const start = performance.now();
    while (performance.now() - start < ms) {
        // block the thread for the given amount of time
    }

    performance.mark("block:end");
    performance.measure("block", "block:start", "block:end");
}