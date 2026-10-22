# Deploying to Vercel

The site is a standard Next.js App Router project. It needs exactly one secret:
`ANTHROPIC_API_KEY`. Everything else works out of the box.

Repo: `https://github.com/masonbrogden/6th-grade-project`

---

## 1. Push your work

Vercel deploys what is on GitHub, not what is on your laptop.

```bash
git add -A
git commit -m "Ready for deploy"
git push origin main
```

`.env` is gitignored, so your API key is **not** pushed. You will add it to
Vercel by hand in step 3.

## 2. Import the project

1. Go to <https://vercel.com/new> and sign in with GitHub.
2. Find **6th-grade-project** in the repo list and click **Import**.
   (If it isn't listed, click **Adjust GitHub App Permissions** and grant
   Vercel access to the repo.)
3. Leave every build setting on its default — Vercel detects Next.js and fills
   in Framework Preset, Build Command (`next build`), and Output Directory
   correctly. Do not set a custom output directory; this app has an API route
   and cannot be a static export.
4. **Do not click Deploy yet.** Add the environment variable first (step 3), so
   the first deploy already has it.

## 3. Add ANTHROPIC_API_KEY

On the import screen, expand **Environment Variables**. If you already
deployed, go instead to **Project → Settings → Environment Variables**.

| Field        | Value                                                                          |
| ------------ | ------------------------------------------------------------------------------ |
| Key          | `ANTHROPIC_API_KEY`                                                            |
| Value        | your key from <https://console.anthropic.com/settings/keys> (starts `sk-ant-`) |
| Environments | tick **Production**, **Preview**, and **Development**                          |

Notes:

- The name must match exactly — all caps, underscores. The code reads
  `process.env.ANTHROPIC_API_KEY` and nothing else.
- Do **not** prefix it with `NEXT_PUBLIC_`. That would ship the key to the
  browser for anyone to read.
- Paste the value with no surrounding quotes or spaces.

Then click **Deploy**. The first build takes a couple of minutes.

## 4. Check it works

Open the URL Vercel gives you and confirm:

- [ ] Home page loads with the fox and the 6th grade card
- [ ] `/class/6th-grade-science` loads
- [ ] `/vocabulary` loads and search filters the list
- [ ] `/outdoor-ed` loads
- [ ] Ask Scout a science question and get a real reply

**If the chat replies "My radio's crackling…"** the key is missing or wrong.
Check the variable name and value in Settings, then **Deployments → ⋯ →
Redeploy**. Environment variable changes do not apply until you redeploy.

**Scout answers at any hour.** `alwaysOpen` is `true` in `src/lib/hours.ts`. To
limit Scout to school hours (**Monday–Friday, 8:00 AM to 3:15 PM Eastern**), set
it to `false` and push. Students who chat outside those hours then see "Scout is
off the trail right now…".

## 5. Updating the site

Every push to `main` redeploys automatically. Pushing to any other branch gives
you a preview URL without touching production.

---

## Before real students use it

- **Set a spending limit** on the API key at
  <https://console.anthropic.com/settings/limits>. `/api/chat` has no login, so
  anyone with the URL can use it at any hour.
- **Fill in the trip details.** `src/app/outdoor-ed/page.tsx` still has
  placeholder times and packing list. Run
  `grep -rn "PLACEHOLDER —" src/` to find them, then delete the draft banner
  above the trip cards.
- **Decide what happens if a student says something serious.** Scout tells them
  to find a trusted adult and refuses to keep secrets, but nothing is logged and
  no adult is notified. Check this against your school's safeguarding policy.

## Known limitations on Vercel

- **Rate limiting is per instance.** The 15 requests/minute limit lives in the
  memory of one serverless instance. Vercel may run several at once, so the real
  ceiling is higher, and counters reset on each deploy. Fine for one class; move
  to a shared store (Vercel KV, Upstash) if the site gets wider traffic.
- **Chats are not saved.** Reloading the page clears the conversation. Nothing
  is written to a database and nothing is sent anywhere except the Anthropic API.

## Rotating the key

If the key is ever exposed: revoke it in the Anthropic console, create a new
one, update it in Vercel's Environment Variables, and redeploy.
