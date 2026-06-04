# Security Review

Generated: 2026-06-04

---

## Summary

| Finding | Count | Severity |
|---|---|---|
| Hardcoded fallback secret | 1 | MEDIUM |
| Secrets via environment variables (safe) | 2 | OK |
| .env files found | 0 | - |
| Private key files (.pem, .key) | 0 | - |
| credentials.json / secrets.json | 0 | - |

---

## Findings

### MEDIUM — Hardcoded Fallback Secret

**File:** `js/assignments/classroom/MicroservicesWorkshop/services/user-service/middleware/auth.js`

```js
const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey';
```

**Risk:** The string `'supersecretkey'` is a hardcoded fallback. If deployed without the `JWT_SECRET` environment variable set, this weak secret is used to sign JWTs.

**Recommendation:**
- Remove the fallback value so the app fails fast if the env var is missing.
- Or replace with: `if (!process.env.JWT_SECRET) throw new Error('JWT_SECRET is required')`.
- This repo is `sdptknd/MicroservicesWorkshop` — it was a workshop clone, so you may not control its upstream. Confirm this value has never been pushed to a public repo with real tokens.

**Action required before push:** None if this is only learning/workshop code. However, confirm no real tokens were ever issued using `'supersecretkey'`.

---

### OK — Secrets via Spring @Value (safe pattern)

**Files:**
- `js/assignments/classroom/step-hotel/step-hotel-auth-flow/src/main/java/com/step/hotel/service/JwtService.java`
- `java/backend/src/main/java/com/tw/backend/auth/JwtService.java`

Both use:
```java
@Value("${security.jwt.secret-key}")
private String SECRET;
```

This is the correct Spring pattern — value is injected from `application.properties` / environment variables at runtime, not hardcoded. Safe to commit.

**Verify:** Ensure `application.properties` or `application.yml` files do not have `security.jwt.secret-key=<actual-secret>` hardcoded in them.

---

## No .env Files Found

No `.env`, `.env.local`, `.env.production`, `.env.development`, `.pem`, `.key`, `credentials.json`, or `secrets.json` files were found in the workspace.

---

## Recommendations

1. Add `.env*` to all project `.gitignore` files as a precaution (even if none exist now).
2. The `MicroservicesWorkshop` project is a clone of an external repo (`sdptknd`) — ensure secrets added during workshop exercises were never committed to your fork.
3. Check `application.properties` files in Spring projects for hardcoded secrets before pushing.

---

## Approval Gate

No `.env` files or private key files were found. The one finding (hardcoded fallback JWT secret) is low risk for workshop/learning code. **No automatic stoppage required**, but please review the `MicroservicesWorkshop` finding before continuing.
