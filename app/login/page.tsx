"use client";

import { useState } from "react";
import { useActionState } from 'react';
import { authenticate } from "@/lib/login";


export default function LoginPage() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #eef3fa 0%, #c6d9ef 100%)",
        fontFamily: "'Verdana', 'Tahoma', 'Geneva', 'sans-serif'",
      }}
    >
      <div
        className="mx-6 text-card-foreground flex flex-col items-center"
        style={{
          background: "white",
          borderRadius: "12px",
          boxShadow: "0 8px 24px rgba(40,40,60,0.15), 0 1.5px 0 #bccbe3 inset",
          border: "2px solid #95bbe6",
          padding: "2.5rem",
          width: "100%",
          maxWidth: "340px",
          borderTop: "5px solid #96bbf7",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "1.6rem",
            color: "#2a4887",
            letterSpacing: "0.06em",
            textShadow: "1px 2px 0 #dce7fa"
          }}
        >
          ログイン
        </h2>
        <form action={formAction} className="w-full flex flex-col items-center">
          <input
            type="password"
            className="w-full mb-4"
            style={{
              padding: "0.6rem 1rem",
              borderRadius: "7px",
              border: "1.5px solid #7a9bbd",
              background: "linear-gradient(90deg, #ebf0fa 90%, #c5daff 100%)",
              fontSize: "1.1rem",
              color: "#233366",
              outline: "none",
              boxShadow: "0 0 5px 1px #bdcaf4 inset",
              transition: "border 0.2s, box-shadow 0.2s",
              fontFamily: "inherit",
            }}
            placeholder="パスワードを入力"
            name="password"
            required
            autoFocus
            onFocus={e =>
              (e.currentTarget.style.border = "1.5px solid #4873c9")
            }
            onBlur={e =>
              (e.currentTarget.style.border = "1.5px solid #7a9bbd")
            }
          />
          <button
            type="submit"
            className=""
            style={{
              width: "100%",
              padding: "0.6rem 1.3rem",
              borderRadius: "7px",
              background: "linear-gradient(90deg, #569cff, #aed8f7 80%)",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "1.15rem",
              boxShadow: "0 1.5px 8px #aaccea",
              letterSpacing: "0.07em",
              border: "1.5px solid #6da2e6",
              marginTop: "2px",
              cursor: "pointer",
              textShadow: "1px 1px 1.5px #657ecf",
              marginBottom: "0",
              transition:
                "background 0.18s, box-shadow 0.18s, filter 0.18s, border 0.17s",
            }}
            onMouseOver={e =>
              (e.currentTarget.style.filter = "brightness(1.14)")
            }
            onMouseOut={e =>
              (e.currentTarget.style.filter = "brightness(1)")
            }
          >
            Enter
          </button>
        </form>
        {errorMessage && (
          <div
            style={{
              color: "#e74c3c",
              marginTop: "1.1rem",
              fontWeight: "bold",
              fontSize: "1rem",
              letterSpacing: "0.04em",
              textShadow: "1px 1px 0 #fff",
            }}
          >
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
}