import { browser } from 'k6/browser';
import { check } from 'k6';

export const options = {
  scenarios: {
    ui: {
      executor: 'shared-iterations',
      options: {
        browser: {
          type: 'chromium',
        },
      },
    },
  },
  thresholds: {
    checks: ['rate==1.0'],
  },
};

export default async function () {
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    // Test: Search LambdaTest on Bing and navigate Playwright documentation
    await page.setViewportSize({ width: 1920, height: 1080 });
    
    await page.goto('https://playwright.dev/');
    check(await page.title(), {
      'Playwright: page title is correct': (t) => /Playwright/.test(t),
    });

    await sleep(10000);
    let getStartedLink = await page.locator('text=Get Started').first();
    check(await getStartedLink.getAttribute('href'), {
      'Playwright: Get Started link is correct': (href) => href === '/docs/intro',
    });
    await getStartedLink.click();

    check(await page.locator('text=Installation').first().isVisible(), {
      'Playwright: Installation is visible': (isVisible) => isVisible,
    });

    const topics = [
      'Trace Viewer', 'Test Generator', 'Release notes', 'Annotations', 'API testing', 'Authentication', 
      'Command line', 'Configuration', 'Page Object Model', 'Parameterize tests', 'Reporters', 'Retries', 
      'Timeouts', 'Visual comparisons', 'Fixtures', 'TypeScript', 'Components (experimental)', 'Library', 
      'Auto-waiting', 'Browsers', 'Chrome Extensions', 'Dialogs', 'Downloads', 'Emulation', 
      'Evaluating JavaScript', 'Events', 'Extensibility', 'Frames', 'Handles', 'Locators', 
      'Navigations', 'Network', 'Pages', 'Page Object Models', 'Screenshots', 'Videos', 
      'Migration', 'Migrating from Protractor', 'Integrations', 'Docker', 'Continuous Integration', 
      'Selenium Grid', 'Supported languages'
    ];

    for (const topic of topics) {
      await page.locator(`text=${topic}`).click();
    }

    await page.goto('https://www.bing.com');
    let searchBox = await page.locator('[id="sb_form_q"]');
    await searchBox.click();
    await searchBox.type('LambdaTest');
    await searchBox.press('Enter');

    let title = await page.title();
    console.log('Page title:: ', title);
    
    check(title, {
      'Bing: search results title contains LambdaTest': (t) => t.includes('LambdaTest'),
    });

  } finally {
    await page.close();
  }
}