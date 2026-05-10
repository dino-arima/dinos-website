'use client';

import { useActionState } from 'react';
import { authenticate } from '@/lib/form-actions'


export default function LoginForm() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <form
      action={formAction}
      className="max-w-sm mx-auto mt-12 bg-card p-8 rounded-xl shadow-lg flex flex-col gap-6"
    >
      <h1 className="text-2xl font-bold text-center mb-2">ログイン</h1>
      {/*
      <div>
        <label className="block text-sm font-medium text-muted-foreground mb-1" htmlFor="login-id">
          ID
        </label>
        <input
          id="id"
          name="id"
          type="text"
          className="w-full px-3 py-2 rounded-md border border-primary/20 bg-background focus:outline-none focus:ring-2 focus:ring-primary mt-1"
          autoComplete="username"
          placeholder="ユーザーID"
          required
        />
      </div>
      */}
      <div>
        <label className="block text-sm font-medium text-muted-foreground mb-1" htmlFor="login-password">
          パスワード
        </label>
        <input
          id="password"
          name="password"
          type="password"
          className="w-full px-3 py-2 rounded-md border border-primary/20 bg-background focus:outline-none focus:ring-2 focus:ring-primary mt-1"
          autoComplete="current-password"
          placeholder="パスワード"
          required
        />
      </div>
      {errorMessage && (
        <div className="text-red-500 text-sm text-center">{errorMessage}</div>
      )}
      <input type="hidden" name="redirectTo" value="/" />
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold py-3 rounded-lg transition-all"
      >
        ログイン
      </button>
    </form>
  );
}