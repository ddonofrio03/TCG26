````markdown
# Your Next.js Site – Quick Start Guide

Follow these steps to update, test, and publish changes. No programming experience needed.

---

## Open the Project

1. Launch **Cursor IDE**  
2. In Cursor, open the project folder (if it isn’t already open).

---

## 1. Get the Latest Code

1. Open the built-in Terminal in Cursor (or your system Terminal).  
2. Run:
   ```bash
   git pull
````

---

## 2. Test Changes Locally

1. In Terminal, start the dev server:

   ```bash
   bun run dev
   ```
2. Open your browser to [http://localhost:3000](http://localhost:3000)
3. Make edits in Cursor — the page will refresh automatically.

---

## 3. Save & Publish Your Updates

When you’re happy with your changes:

```bash
git add .
git commit -m "Describe your changes here"
git push
```

* **git add .** – stages all your edits
* **git commit -m "…"** – saves a snapshot with your message
* **git push** – uploads to GitHub; Vercel rebuilds and deploys the live site

---

## 4. Troubleshooting Tips

* **Dev server errors?**

  1. Press `Ctrl+C` to stop.
  2. Run `bun install` to refresh dependencies.
  3. Try `bun run dev` again.

* **Site looks broken?**

  ```bash
  git pull
  ```

  This resets your files to the latest working code.

* **Commit message tips:**

  * Keep it short and clear:

    * Good: `“Fix header link”`
    * Good: `“Update homepage text”`
  * Avoid: `“stuff”` or very long descriptions

---

You’re all set! Every time you push, Vercel will rebuild and your live site updates automatically. 🎉

```
::contentReference[oaicite:0]{index=0}
```
