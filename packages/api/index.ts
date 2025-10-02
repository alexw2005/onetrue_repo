export const client = (base: string) => ({
  async registry() {
    const r = await fetch(`${base}/v1/registry`);
    return r.json();
  }
});
