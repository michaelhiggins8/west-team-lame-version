type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const WINDOW_MS = 60 * 60 * 1000;
const MAX_REQUESTS = 5;

const buckets = new Map<string, RateLimitEntry>();

function prune(now: number) {
  if (buckets.size < 500) return;
  for (const [key, entry] of buckets) {
    if (entry.resetAt <= now) buckets.delete(key);
  }
}

/** Simple in-memory rate limit. Suitable for single-instance / early launch. */
export function checkContactRateLimit(key: string): {
  allowed: boolean;
  retryAfterSeconds?: number;
} {
  const now = Date.now();
  prune(now);

  const existing = buckets.get(key);
  if (!existing || existing.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true };
  }

  if (existing.count >= MAX_REQUESTS) {
    return {
      allowed: false,
      retryAfterSeconds: Math.max(
        1,
        Math.ceil((existing.resetAt - now) / 1000),
      ),
    };
  }

  existing.count += 1;
  return { allowed: true };
}
