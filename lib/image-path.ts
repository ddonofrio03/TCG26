const basePath = process.env.NODE_ENV === "production" ? "/TCG26" : "";

export function imgPath(path: string): string {
  return `${basePath}${path}`;
}
