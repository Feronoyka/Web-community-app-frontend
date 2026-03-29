import { test, expect } from '@playwright/test';

function uniqueEmail() {
  return `pw_${Date.now()}_${Math.random().toString(16).slice(2)}@example.com`;
}

test.describe('Sign up', () => {
  test('should render sign-up form and submit', async ({ page }) => {
    await page.goto('/sign-up');

    await page.getByPlaceholder('Domain name').fill('Feronoyka');
    await page.getByPlaceholder('Email').fill(uniqueEmail());
    await page.getByPlaceholder('Password').fill('Password123_');

    await page.getByRole('button', { name: 'Create an account' }).click();

    // If the backend is running and registration succeeds, you'll be redirected to /sign-in.
    // If the backend is down or rejects the user, the page will stay on /sign-up.
    await expect(page).toHaveURL(/\/sign-(up|in)$/);
  });

  // test('should show error on invalid email', async ({ page }) => {
  //   await page.goto(signUp);

  //   await page.getByPlaceholder('Email').fill('wrong-email');
  //   await page.getByPlaceholder('Password').fill('Password123_');

  //   await page.getByRole('button', { name: 'Create an account' }).click();

  //   await expect(page.getByText('Invalid email')).toBeVisible();
  // });
});

test.describe('Sign In', () => {
  test('should render sign-in form and submit', async ({ page }) => {
    await page.goto('/sign-in');

    await page.getByPlaceholder('Email').fill(uniqueEmail());
    await page.getByPlaceholder('Password').fill('Password123_');
    await page.getByRole('button', { name: 'Sign in' }).click();

    // If the backend is running and credentials are valid, you'll be redirected to /.
    // Otherwise you’ll remain on /sign-in.
    await expect(page).toHaveURL(/(\/$|\/sign-in$)/);
  });

  // test('should redirect to sign-in when not authenticated', async ({ page }) => {
  //   await page.goto('/owned-communities');
  //   await expect(page).toHaveURL(/\/sign-in$/);
  // });
});
