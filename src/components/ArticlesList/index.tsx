import React, { useMemo } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';

type BlogTag = { label: string; permalink: string };

type BlogPostMetadata = {
  permalink: string;
  title: string;
  description: string;
  date: string;
  readingTime?: number;
  tags: BlogTag[];
};

type BlogPostFrontMatter = {
  series?: string;
  series_part?: number;
  [key: string]: unknown;
};

type BlogPostContent = {
  frontMatter: BlogPostFrontMatter;
  metadata: BlogPostMetadata;
};

type Props = {
  items: { content: BlogPostContent }[];
  metadata: {
    blogTitle: string;
    blogDescription: string;
  };
};

type SortOrder = 'newest' | 'oldest' | 'title-az' | 'title-za';

function buildUrl(params: { tag?: string; sort?: string }) {
  const p = new URLSearchParams();
  if (params.tag) p.set('tag', params.tag);
  if (params.sort && params.sort !== 'newest') p.set('sort', params.sort);
  const qs = p.toString();
  return `/articles${qs ? `?${qs}` : ''}`;
}

function ArticleCard({ content }: { content: BlogPostContent }) {
  const { frontMatter, metadata } = content;
  const seriesPart = frontMatter.series_part as number | undefined;
  const dateStr = new Date(metadata.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link to={metadata.permalink} className="article-card" style={{ display: 'block' }}>
      <h3 style={{ margin: '0 0 8px 0' }}>
        {metadata.title}
        {seriesPart != null && (
          <span className="series-badge">Part {seriesPart}</span>
        )}
      </h3>
      <p className="article-subtitle">{metadata.description}</p>
      <div className="article-card-meta">
        <span>{dateStr}</span>
        {metadata.readingTime != null && (
          <span>{Math.ceil(metadata.readingTime)} min read</span>
        )}
        {metadata.tags.map(tag => (
          <Link
            key={tag.label}
            to={buildUrl({ tag: tag.label })}
            className="article-tag-chip"
            onClick={e => e.stopPropagation()}
          >
            {tag.label}
          </Link>
        ))}
      </div>
    </Link>
  );
}

const SORT_OPTIONS: { value: SortOrder; label: string }[] = [
  { value: 'newest', label: 'Newest' },
  { value: 'oldest', label: 'Oldest' },
  { value: 'title-az', label: 'A → Z' },
  { value: 'title-za', label: 'Z → A' },
];

export default function ArticlesList({ items, metadata }: Props) {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const activeTag = params.get('tag') ?? '';
  const activeSort = (params.get('sort') ?? 'newest') as SortOrder;

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    for (const { content } of items) {
      for (const tag of content.metadata.tags) {
        tagSet.add(tag.label);
      }
    }
    return Array.from(tagSet).sort();
  }, [items]);

  const sortedFilteredItems = useMemo(() => {
    let result = activeTag
      ? items.filter(({ content }) =>
          content.metadata.tags.some(t => t.label === activeTag)
        )
      : [...items];

    switch (activeSort) {
      case 'oldest':
        result = result.slice().sort(
          (a, b) => new Date(a.content.metadata.date).getTime() - new Date(b.content.metadata.date).getTime()
        );
        break;
      case 'title-az':
        result = result.slice().sort((a, b) =>
          a.content.metadata.title.localeCompare(b.content.metadata.title)
        );
        break;
      case 'title-za':
        result = result.slice().sort((a, b) =>
          b.content.metadata.title.localeCompare(a.content.metadata.title)
        );
        break;
      default: // newest — Docusaurus already provides items newest-first
        break;
    }
    return result;
  }, [items, activeTag, activeSort]);

  // Only show featured/rest split for date-based sorts with no tag filter
  const useFeaturedSplit = !activeTag && (activeSort === 'newest' || activeSort === 'oldest');
  const featured = useFeaturedSplit ? sortedFilteredItems.slice(0, 5) : sortedFilteredItems;
  const rest = useFeaturedSplit ? sortedFilteredItems.slice(5) : [];

  return (
    <Layout>
      <Head>
        <title>{metadata.blogTitle}</title>
        <meta name="description" content={metadata.blogDescription} />
      </Head>
      <div className="container margin-vert--lg">
        <div className="articles-controls">
          <div className="tag-filters">
            <Link
              to={buildUrl({ sort: activeSort !== 'newest' ? activeSort : undefined })}
              className={`tag-filter-btn${!activeTag ? ' active' : ''}`}
            >
              All
            </Link>
            {allTags.map(tag => (
              <Link
                key={tag}
                to={buildUrl({ tag, sort: activeSort !== 'newest' ? activeSort : undefined })}
                className={`tag-filter-btn${activeTag === tag ? ' active' : ''}`}
              >
                {tag}
              </Link>
            ))}
          </div>

          <div className="sort-controls">
            {SORT_OPTIONS.map(opt => (
              <Link
                key={opt.value}
                to={buildUrl({ tag: activeTag || undefined, sort: opt.value })}
                className={`sort-btn${activeSort === opt.value ? ' active' : ''}`}
              >
                {opt.label}
              </Link>
            ))}
          </div>
        </div>

        {sortedFilteredItems.length === 0 ? (
          <p style={{ color: 'var(--color-gray-500)', textAlign: 'center', marginTop: '40px' }}>
            No articles found for this tag.
          </p>
        ) : (
          <div className="articles-list">
            {featured.map(({ content }) => (
              <ArticleCard key={content.metadata.permalink} content={content} />
            ))}
            {rest.length > 0 && (
              <>
                <hr className="articles-divider" />
                {rest.map(({ content }) => (
                  <ArticleCard key={content.metadata.permalink} content={content} />
                ))}
              </>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
}
