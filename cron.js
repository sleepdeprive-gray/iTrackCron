const puppeteer = require('puppeteer');

async function runCron() {
    console.log("Running cron at " + new Date());
    const browser = await puppeteer.launch({
        headless: true,
        args: ["--no-sandbox", "--disable-setuid-sandbox"]
    });
    const page = await browser.newPage();
    await page.goto('https://itrack-asynch.gt.tc/scripts/cron_update_activity_status.php?cron_key=kt12s9FJ82ksQ20x', {
        waitUntil: 'networkidle2',
        timeout: 0
    });
    console.log("Cron finished at " + new Date());
    await browser.close();
}

// Run immediately
runCron();

// Run every 5 minutes
setInterval(runCron, 5 * 60 * 1000);
