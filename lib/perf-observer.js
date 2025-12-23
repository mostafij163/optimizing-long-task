import { formatTimestamp } from './format-timestamp.js';

const perfObserver = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
        if(entry.entryType === 'measure') {
            console.log(`measure: ${entry.name} \nduration: ${entry.duration}ms`);
        } else if(entry.entryType === "long-animation-frame") {
            console.log("\n long animation frame: ", entry);

            const durationTime = entry.startTime + entry.duration;
            const workDuration = entry.renderStart ? entry.renderStart - entry.startTime : entry.duration;
            const renderDuration = entry.renderStart ? durationTime - entry.renderStart : 0;


            console.log(`
                \nstart time: ${formatTimestamp(entry.startTime)} 
                \nend time: ${formatTimestamp(durationTime)} 
                \nrender start: ${formatTimestamp(entry.renderStart)} 
                \nwork duration: ${workDuration}
                \nrender duration: ${renderDuration}`);
        }
    });
});

perfObserver.observe({ entryTypes: ['measure', "long-animation-frame"] });
