import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
import OriginalBlogPostPage from '@theme-original/BlogPostPage';
import Head from '@docusaurus/Head';

// Read canonical URL from frontmatter — enables .md articles with `canonical: url`
// without needing the MDX <head> JSX block. Existing .mdx articles use <head> directly.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function BlogPostPageWrapper(props: any) {
  const canonical = props.content?.frontMatter?.canonical as string | undefined;
  return (
    <>
      {canonical && (
        <Head>
          <link rel="canonical" href={canonical} />
        </Head>
      )}
      <OriginalBlogPostPage {...props} />
    </>
  );
}
