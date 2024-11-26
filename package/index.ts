export function sharedMethod(message: string): string {
  console.log("Shared method:", message);
  return `Shared Message: ${message}`;
}
