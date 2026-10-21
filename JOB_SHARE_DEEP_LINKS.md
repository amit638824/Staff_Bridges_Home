# Job share deep links — deploy notes

Canonical share URL: `https://staffbridges.com/job/<jobId>`  
Landing UI: `https://app.staffbridges.com/job?id=<jobId>` (staff_bridges-app; query form because Next `output: "export"` cannot use dynamic `/job/[id]`)  
Public API: `GET /api/public-job/<id>` (no auth; published/live only)

Marketing `/job/:id` redirects to `app…/job?id=:id`. App Links / custom scheme stay path-based (`staffbridges://job/<id>`).

## Marketing host (`staffbridges.com`)

1. SPA rewrite: unknown paths → `index.html` so `/job/123` loads the Vite app (redirect page).
2. **Do not** rewrite `/.well-known/*` to HTML — serve static files from `public/.well-known/`:
   - `assetlinks.json` → `Content-Type: application/json`
   - `apple-app-site-association` → `application/json` (no `.json` extension)
3. Prefer apex + `www` both serving the same app, or 301 `www` → apex, so App Links hosts match.
4. Example nginx sketch:

```nginx
location ^~ /.well-known/ {
  try_files $uri =404;
  default_type application/json;
}
location / {
  try_files $uri $uri/ /index.html;
}
```

## Main app (`app.staffbridges.com`)

- Next route `/job/[jobId]` must stay public (no auth gate).
- Env: `NEXT_PUBLIC_API_URL_*` must reach SBSBackend for `public-job` preview + OG metadata.

## Mobile placeholders (replace before App Links go-live)

| File | Placeholder | Replace with |
|------|-------------|--------------|
| `assetlinks.json` | `REPLACE_WITH_PLAY_APP_SIGNING_SHA256` | Play Console app signing cert SHA-256 |
| `assetlinks.json` | `REPLACE_WITH_UPLOAD_KEYSTORE_SHA256` | Upload keystore SHA-256 (optional second) |
| `apple-app-site-association` | `TEAM_ID` | Apple Developer Team ID |
| `apple-app-site-association` | bundle `com.staffbridge.jobseeker` | Confirm with iOS team |

After deploy, verify:

- `https://staffbridges.com/job/123` redirects to app host
- `https://staffbridges.com/.well-known/assetlinks.json` returns JSON
- `https://staffbridges.com/.well-known/apple-app-site-association` returns JSON
- `GET https://api.staffbridges.com/api/public-job/<publishedId>` works without token
