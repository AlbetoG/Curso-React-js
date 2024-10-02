// @ts-check
import { test, expect } from '@playwright/test'

const CAT_PREFIX = 'https://cataas.com'
const LOCALHOST_URL = 'http://localhost:5173/'

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = await page.getByRole('paragraph')
  const img = await page.getByRole('img')

  const textContent = await text.textContent()
  const imgSource = await img.getAttribute('src')

  // await expect(textContent).not.toBeNull()
  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imgSource?.startsWith(CAT_PREFIX)).toBeTruthy()
})
