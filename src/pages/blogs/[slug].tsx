import { blogService } from '@blog/domain/blogs/services/blog-service';
import { BlogPageHeading } from '@blog/presentation/components/blogs/molecules/BlogPageHeading';
import { Tag } from '@blog/presentation/components/shared/atoms/Tag';
import { toReadableDateTime } from '@blog/presentation/utils/time';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import {
    getBlogBySlugQuery,
    useGetBlogBySlugQuery,
} from '../../presentation/queries/blogs/get-blog-by-slug';

const markdown: string = `

# Markdown: Syntax

-   [Overview](#overview)
    -   [Philosophy](#philosophy)
    -   [Inline HTML](#html)
    -   [Automatic Escaping for Special Characters](#autoescape)
-   [Block Elements](#block)
    -   [Paragraphs and Line Breaks](#p)
    -   [Headers](#header)
    -   [Blockquotes](#blockquote)
    -   [Lists](#list)
    -   [Code Blocks](#precode)
    -   [Horizontal Rules](#hr)
-   [Span Elements](#span)
    -   [Links](#link)
    -   [Emphasis](#em)
    -   [Code](#code)
    -   [Images](#img)
-   [Miscellaneous](#misc)
    -   [Backslash Escapes](#backslash)
    -   [Automatic Links](#autolink)

**Note:** This document is itself written using Markdown; you
can [see the source for it by adding '.text' to the URL](/projects/markdown/syntax.text).

---

## Overview

### Philosophy

Markdown is intended to be as easy-to-read and easy-to-write as is feasible.

Readability, however, is emphasized above all else. A Markdown-formatted
document should be publishable as-is, as plain text, without looking
like it's been marked up with tags or formatting instructions. While
Markdown's syntax has been influenced by several existing text-to-HTML
filters -- including [Setext](http://docutils.sourceforge.net/mirror/setext.html), [atx](http://www.aaronsw.com/2002/atx/), [Textile](http://textism.com/tools/textile/), [reStructuredText](http://docutils.sourceforge.net/rst.html),
[Grutatext](http://www.triptico.com/software/grutatxt.html), and [EtText](http://ettext.taint.org/doc/) -- the single biggest source of
inspiration for Markdown's syntax is the format of plain text email.

## Block Elements

### Paragraphs and Line Breaks

A paragraph is simply one or more consecutive lines of text, separated
by one or more blank lines. (A blank line is any line that looks like a
blank line -- a line containing nothing but spaces or tabs is considered
blank.) Normal paragraphs should not be indented with spaces or tabs.

The implication of the "one or more consecutive lines of text" rule is
that Markdown supports "hard-wrapped" text paragraphs. This differs
significantly from most other text-to-HTML formatters (including Movable
Type's "Convert Line Breaks" option) which translate every line break
character in a paragraph into a \`<br />\` tag.

When you _do_ want to insert a \`<br />\` break tag using Markdown, you
end a line with two or more spaces, then type return.

### Headers

Markdown supports two styles of headers, [Setext] [1] and [atx] [2].

Optionally, you may "close" atx-style headers. This is purely
cosmetic -- you can use this if you think it looks better. The
closing hashes don't even need to match the number of hashes
used to open the header. (The number of opening hashes
determines the header level.)

### Blockquotes

Markdown uses email-style \`>\` characters for blockquoting. If you're
familiar with quoting passages of text in an email message, then you
know how to create a blockquote in Markdown. It looks best if you hard
wrap the text and put a \`>\` before every line:

> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
>
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.

Markdown allows you to be lazy and only put the \`>\` before the first
line of a hard-wrapped paragraph:

> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.

Blockquotes can be nested (i.e. a blockquote-in-a-blockquote) by
adding additional levels of \`>\`:

> This is the first level of quoting.
>
> > This is nested blockquote.
>
> Back to the first level.

Blockquotes can contain other Markdown elements, including headers, lists,
and code blocks:

> ## This is a header.
>
> 1.  This is the first list item.
> 2.  This is the second list item.
>
> Here's some example code:
>
>     return shell_exec("echo $input | $markdown_script");

Any decent text editor should make email-style quoting easy. For
example, with BBEdit, you can make a selection and choose Increase
Quote Level from the Text menu.

### Lists

Markdown supports ordered (numbered) and unordered (bulleted) lists.

Unordered lists use asterisks, pluses, and hyphens -- interchangably
-- as list markers:

-   Red
-   Green
-   Blue

is equivalent to:

-   Red
-   Green
-   Blue

and:

-   Red
-   Green
-   Blue

Ordered lists use numbers followed by periods:

1.  Bird
2.  McHale
3.  Parish

It's important to note that the actual numbers you use to mark the
list have no effect on the HTML output Markdown produces. The HTML
Markdown produces from the above list is:

If you instead wrote the list in Markdown like this:

1.  Bird
1.  McHale
1.  Parish

or even:

3. Bird
1. McHale
1. Parish

you'd get the exact same HTML output. The point is, if you want to,
you can use ordinal numbers in your ordered Markdown lists, so that
the numbers in your source match the numbers in your published HTML.
But if you want to be lazy, you don't have to.

To make lists look nice, you can wrap items with hanging indents:

-   Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,
    viverra nec, fringilla in, laoreet vitae, risus.
-   Donec sit amet nisl. Aliquam semper ipsum sit amet velit.
    Suspendisse id sem consectetuer libero luctus adipiscing.

But if you want to be lazy, you don't have to:

-   Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,
    viverra nec, fringilla in, laoreet vitae, risus.
-   Donec sit amet nisl. Aliquam semper ipsum sit amet velit.
    Suspendisse id sem consectetuer libero luctus adipiscing.

List items may consist of multiple paragraphs. Each subsequent
paragraph in a list item must be indented by either 4 spaces
or one tab:

1.  This is a list item with two paragraphs. Lorem ipsum dolor
    sit amet, consectetuer adipiscing elit. Aliquam hendrerit
    mi posuere lectus.

    Vestibulum enim wisi, viverra nec, fringilla in, laoreet
    vitae, risus. Donec sit amet nisl. Aliquam semper ipsum
    sit amet velit.

2.  Suspendisse id sem consectetuer libero luctus adipiscing.

It looks nice if you indent every line of the subsequent
paragraphs, but here again, Markdown will allow you to be
lazy:

-   This is a list item with two paragraphs.

        This is the second paragraph in the list item. You're

    only required to indent the first line. Lorem ipsum dolor
    sit amet, consectetuer adipiscing elit.

-   Another item in the same list.

To put a blockquote within a list item, the blockquote's \` >
    \`
delimiters need to be indented:

-   A list item with a blockquote:

    > This is a blockquote
    > inside a list item.

To put a code block within a list item, the code block needs
to be indented _twice_ -- 8 spaces or two tabs:

-   A list item with a code block:

        <code goes here>

### Code Blocks

Pre-formatted code blocks are used for writing about programming or
markup source code. Rather than forming normal paragraphs, the lines
of a code block are interpreted literally. Markdown wraps a code block
in both \`<pre>\` and \`<code>\` tags.

To produce a code block in Markdown, simply indent every line of the
block by at least 4 spaces or 1 tab.

This is a normal paragraph:

    This is a code block.

Here is an example of AppleScript:

    tell application "Foo"
        beep
    end tell

A code block continues until it reaches a line that is not indented
(or the end of the article).

Within a code block, ampersands (\`&\`) and angle brackets (\`<\` and \`>\`)
are automatically converted into HTML entities. This makes it very
easy to include example HTML source code using Markdown -- just paste
it and indent it, and Markdown will handle the hassle of encoding the
ampersands and angle brackets. For example, this:

    <div class="footer">
        &copy; 2004 Foo Corporation
    </div>

Regular Markdown syntax is not processed within code blocks. E.g.,
asterisks are just literal asterisks within a code block. This means
it's also easy to use Markdown to write about Markdown's own syntax.

\`\`\`
tell application "Foo"
    beep
end tell
\`\`\`

## Span Elements

### Links

Markdown supports two style of links: _inline_ and _reference_.

In both styles, the link text is delimited by [square brackets].

To create an inline link, use a set of regular parentheses immediately
after the link text's closing square bracket. Inside the parentheses,
put the URL where you want the link to point, along with an _optional_
title for the link, surrounded in quotes. For example:

This is [an example](http://example.com/) inline link.

[This link](http://example.net/) has no title attribute.

### Emphasis

Markdown treats asterisks (\`*\`) and underscores (\`_\`) as indicators of
emphasis. Text wrapped with one \`*\` or \`_\` will be wrapped with an
HTML \`<em>\` tag; double \`*\`'s or \`_\`'s will be wrapped with an HTML
\`<strong>\` tag. E.g., this input:

_single asterisks_

_single underscores_

**double asterisks**

**double underscores**

### Code

To indicate a span of code, wrap it with backtick quotes (\`\` \` \`\`).
Unlike a pre-formatted code block, a code span indicates code within a
normal paragraph. For example:

Use the \`printf()\` function.

`;

const markdown2 = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id luctus orci. Pellentesque tortor magna, fringilla eu velit ornare, suscipit aliquet dolor. Fusce at diam mauris. Nulla eu ligula erat. Sed tempus congue dui, suscipit bibendum tortor viverra ut. Nulla id nunc eget odio faucibus lacinia sed sit amet metus. Etiam tincidunt urna nec leo fermentum aliquam. Praesent aliquam eu nisl vel tempus. Aliquam a gravida eros, ut congue turpis.

Cras et eros ornare, accumsan enim at, condimentum tellus. Maecenas fermentum odio metus, et laoreet augue fringilla a. Maecenas tortor arcu, eleifend eget dapibus at, posuere accumsan dolor. Proin consequat sed lacus ut porttitor. Etiam bibendum vitae dui in porta. Maecenas porttitor neque ac justo venenatis suscipit. Suspendisse auctor sem quis ipsum hendrerit sollicitudin.

Aliquam mi orci, convallis aliquet tristique nec, cursus id metus. Etiam efficitur tempor lorem eget varius. Quisque vel diam nulla. Maecenas varius sem id elit fringilla, et finibus diam rutrum. Fusce hendrerit nulla id odio pellentesque viverra. Quisque sapien risus, eleifend in tempor sit amet, facilisis maximus ligula. Mauris volutpat odio lorem, ut pharetra lorem dignissim vitae. Nullam vestibulum massa ex, at aliquet metus aliquam eu. Nulla vestibulum ipsum semper, bibendum odio sit amet, consequat augue. Nam pulvinar nibh at dui pellentesque, non dapibus felis sollicitudin. Etiam cursus malesuada ipsum, in maximus magna hendrerit eget.

Curabitur risus mauris, ullamcorper ac nunc quis, gravida sagittis dui. Maecenas tempus volutpat erat, non blandit lectus egestas vitae. Donec pharetra fermentum libero sed bibendum. Fusce tempus urna ut ornare rhoncus. Cras suscipit fermentum mi, sed commodo mauris tristique ut. Ut id magna elit. Morbi rutrum, mi ac viverra molestie, nisl nisi ultricies elit, eget elementum lectus diam vitae felis. Maecenas fermentum, neque sed volutpat sagittis, eros mi laoreet turpis, ac vulputate libero metus eu lacus. Nam venenatis ornare purus, nec rutrum sapien fringilla et. Donec id turpis pellentesque orci rhoncus placerat non tristique nunc. Aliquam nunc ex, auctor at quam ac, auctor finibus nibh. Sed viverra lorem sit amet semper tristique. Proin augue libero, ullamcorper nec mattis ac, convallis id lectus. Integer pharetra, libero nec tincidunt egestas, erat leo feugiat ante, ac sodales enim augue ut tellus. Nullam sodales quis massa in vulputate.

Aliquam orci nulla, sagittis malesuada tempus sit amet, aliquet nec arcu. Etiam sed mollis odio. Praesent fermentum volutpat est, nec vehicula eros tempus id. Mauris erat turpis, pharetra ut auctor ut, sagittis sit amet nulla. Praesent tristique leo nulla, dapibus mollis nulla volutpat ut. Vivamus laoreet nisl vel risus iaculis porttitor. Etiam posuere urna nec enim euismod porttitor. Aliquam finibus neque eget libero mollis, non porttitor massa ornare. Etiam id neque at nulla pellentesque scelerisque vitae sed massa. Cras velit odio, fringilla non turpis in, tincidunt placerat ligula. Ut lorem nisi, maximus at erat vel, lacinia efficitur neque. Etiam quis turpis id tellus consequat gravida nec in mauris. Vivamus molestie vulputate metus, vel sodales ante tristique semper. Nulla facilisi. Nullam volutpat enim leo, sit amet laoreet tellus pharetra non. Proin aliquam accumsan mattis.

Here is some nice code: inline: \`const a = b;\`

\`\`\`
const jaap = dude;

const object = {
    lol: "allo!",
    do: () => {
        console.log("log!");
    }
}
\`\`\`
`;

export default function BlogPostPage({}: {}) {
    const router = useRouter();
    const { slug } = router.query;

    if (typeof slug !== 'string')
        throw new Error('Params are not correct somehow.');

    const { data: blog, isLoading } = useGetBlogBySlugQuery(slug);

    if (isLoading) return <>Loading...</>;

    console.log('content', blog?.content);

    return (
        <>
            <Head>
                <title>{blog?.title} - Blogs - Weijland.IT</title>
                <meta name="description" content={blog?.description} />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex flex-col items-stretch gap-16">
                {blog && (
                    <BlogPageHeading
                        superTitle={toReadableDateTime(blog.publishedAt)}
                        title={blog.title}
                        slots={{
                            tags: blog.tags?.length ? (
                                <>
                                    {blog.tags.map((tag) => {
                                        return (
                                            <Tag key={tag.label}>
                                                {tag.label}
                                            </Tag>
                                        );
                                    })}
                                </>
                            ) : undefined,
                        }}
                    />
                )}
                {blog?.content && (
                    <div className="flex flex-1 flex-col items-stretch prose-lg  prose-invert font-light leading-relaxed max-w-full">
                        <ReactMarkdown>{blog.content}</ReactMarkdown>
                    </div>
                )}
            </div>
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async (context) => {
    const slugs = await blogService.getAllBlogSlugs();

    const paths = slugs.map((slug) => {
        return {
            params: {
                slug,
            },
        };
    });

    return {
        paths,
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const queryClient = new QueryClient();

    const { slug } = context.params ?? {};

    if (typeof slug !== 'string')
        return {
            notFound: true,
        };

    const query = getBlogBySlugQuery(slug);

    await Promise.all([queryClient.prefetchQuery(...query)]);

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
};
