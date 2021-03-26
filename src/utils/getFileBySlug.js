import fs from 'fs';
import path from 'path';
import renderToString from 'next-mdx-remote/render-to-string';

import * as MDXComponents from "../components/MardownRenders/MDXComponents";

const root = process.cwd();

export async function getFileBySlug(slug, type = 'posts') {
  const source = fs.readFileSync(path.join(root, 'data', type, `${slug}.mdx`), 'utf8');

  const mdxSource = await renderToString(source, {
    components: MDXComponents,
  });

  return {
    mdxSource
  };
}
