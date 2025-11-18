# Getting Cloudflare Credentials for GitHub Deployment

## Method 1: Using Cloudflare Dashboard (Recommended)

### Get API Token:
1. Go to: https://dash.cloudflare.com/
2. Click your profile → My Profile → API Tokens
3. Click "Create Token" → "Custom token"
4. Configure:
   - **Token name**: GitHub Actions Deployment Token
   - **Permissions**: Account → Cloudflare Pages:Edit
   - **Account Resources**: All accounts (or specific)
   - **Zone Resources**: All zones (or specific)
5. Click "Create Token"
6. **Copy the token immediately** (you won't see it again!)

### Get Account ID:
1. In Cloudflare Dashboard, look at the right sidebar
2. Or check the URL when viewing any domain
3. Account ID looks like: `1234567890abcdef1234567890abcdef`

## Method 2: Using Cloudflare CLI (if installed)

```bash
# Login to Cloudflare
wrangler auth login

# Get account ID
wrangler whoami
```

## Method 3: Using curl (if you have email + global key)

```bash
# List accounts (requires email + global API key)
curl -X GET "https://api.cloudflare.com/client/v4/accounts" \
  -H "X-Auth-Email: your-email@example.com" \
  -H "X-Auth-Key: your-global-api-key"
```

## Adding to GitHub

Once you have both values:

1. Go to: https://github.com/HLPFLCG/hlpfldev.tsx/settings/secrets/actions
2. Click "New repository secret"
3. Add:
   - **Name**: `CLOUDFLARE_API_TOKEN`
   - **Value**: [paste your API token]
4. Click "Add secret"
5. Repeat for:
   - **Name**: `CLOUDFLARE_ACCOUNT_ID`
   - **Value**: [paste your account ID]

## Test the Deployment

After adding secrets:
1. Go to: https://github.com/HLPFLCG/hlpfldev.tsx/actions
2. Click on the latest failed workflow
3. Click "Re-run jobs"
4. Should deploy successfully!

## Security Notes

- 🔒 **Never share your API token** publicly
- 🔑 **Token expires** based on your TTL setting
- 🔄 **Rotate tokens periodically** for security
- 📝 **Keep a backup** of your token in a secure password manager