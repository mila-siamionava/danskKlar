import Link from "next/link";

import Button from "@/components/ui/Button/Button";

import {
  login,
  signup,
} from "./actions";

import styles from "./Login.module.css";

export default async function LoginPage({
  searchParams,
}) {
  const params =
    await searchParams;

  const error =
    params?.error;

  const message =
    params?.message;

  return (
    <main className={styles.page}>
      <div className={styles.auth}>
        <Link
          href="/"
          className={styles.logo}
          aria-label="Back to DanskKlar home"
        >
          DK
        </Link>

        <header className={styles.header}>
          <h1>Welcome to DanskKlar</h1>

          <p>
            Sign in to save your words and continue your Danish practice.
          </p>
        </header>

        <form className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="email">
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="password">
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              minLength={6}
              required
            />
          </div>

          {error && (
            <p
              className={styles.error}
              role="alert"
            >
              {error}
            </p>
          )}

          {message && (
            <p
              className={styles.message}
              role="status"
            >
              {message}
            </p>
          )}

          <div className={styles.actions}>
            <Button
              type="submit"
              fullWidth
              formAction={login}
            >
              Sign in
            </Button>

            <button
              type="submit"
              formAction={signup}
              className={styles.signup}
            >
              Create account
            </button>
          </div>
        </form>

        <Link
          href="/"
          className={styles.back}
        >
          Continue without signing in
        </Link>
      </div>
    </main>
  );
}