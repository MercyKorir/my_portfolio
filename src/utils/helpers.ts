export function sanitized(prefix: string, publicId: string) {
  const slug = prefix
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-_]/g, "");

  const vid = publicId.replace(/\s+/g, "-").replace(/[^a-zA-Z0-9\-_]/g, "");

  return `${slug}-${vid}`;
}
