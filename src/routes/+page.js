export async function load({ params }) {
    const slug = params.slug;
    const markdown = await import(`./page.md?raw`);
    return {
      content: markdown.default,
    };
}

export const prerender = true;