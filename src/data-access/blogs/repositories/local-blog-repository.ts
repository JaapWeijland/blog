import { Blog } from '@blog/domain/blogs/models/Blog';
import { DateTime } from 'luxon';
import { IBlogRepository } from './blog-repository';

const BLOGS: Blog[] = [
    {
        id: 'blog-1',
        slug: 'my-first-blog',
        title: 'My first blog',
        description: 'My very first blog to build the proper architecture',
        tags: [{ label: 'init' }],
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id luctus orci. Pellentesque tortor magna, fringilla eu velit ornare, suscipit aliquet dolor. Fusce at diam mauris. Nulla eu ligula erat. Sed tempus congue dui, suscipit bibendum tortor viverra ut. Nulla id nunc eget odio faucibus lacinia sed sit amet metus. Etiam tincidunt urna nec leo fermentum aliquam. Praesent aliquam eu nisl vel tempus. Aliquam a gravida eros, ut congue turpis.

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
    `,
        authors: [
            {
                firstName: 'Jaap',
                lastName: 'Weijland',
            },
        ],
        publishedAt: DateTime.now().minus({ days: 3 }).toMillis(),
    },
    {
        id: 'blog-2',
        slug: 'why-you-dont-need-state-management',
        title: "Why you don't need state management",
        description: "Don't invent the wheel and use excellent libraries",
        tags: [{ label: 'init' }],
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id luctus orci. Pellentesque tortor magna, fringilla eu velit ornare, suscipit aliquet dolor. Fusce at diam mauris. Nulla eu ligula erat. Sed tempus congue dui, suscipit bibendum tortor viverra ut. Nulla id nunc eget odio faucibus lacinia sed sit amet metus. Etiam tincidunt urna nec leo fermentum aliquam. Praesent aliquam eu nisl vel tempus. Aliquam a gravida eros, ut congue turpis.
    
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
    `,
        authors: [
            {
                firstName: 'Jaap',
                lastName: 'Weijland',
            },
        ],
        publishedAt: DateTime.now().minus({ days: 2 }).toMillis(),
    },
    {
        id: 'blog-3',
        slug: 'the-unconditional-react-hook',
        title: 'The unconditional React Hook',
        description: 'How to deal with hooks and conditionality',
        tags: [{ label: 'init' }],
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id luctus orci. Pellentesque tortor magna, fringilla eu velit ornare, suscipit aliquet dolor. Fusce at diam mauris. Nulla eu ligula erat. Sed tempus congue dui, suscipit bibendum tortor viverra ut. Nulla id nunc eget odio faucibus lacinia sed sit amet metus. Etiam tincidunt urna nec leo fermentum aliquam. Praesent aliquam eu nisl vel tempus. Aliquam a gravida eros, ut congue turpis.
    
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
    `,
        authors: [
            {
                firstName: 'Jaap',
                lastName: 'Weijland',
            },
        ],
        publishedAt: DateTime.now().minus({ days: 1 }).toMillis(),
    },
];

export class LocalBlogRepository implements IBlogRepository {
    async getAllBlogs(): Promise<Blog[]> {
        return [...BLOGS].sort(
            (b1, b2) => b1.publishedAt.valueOf() - b2.publishedAt.valueOf()
        );
    }

    async getAllBlogSlugs(): Promise<string[]> {
        return BLOGS.map((blog) => blog.slug);
    }

    async getBlog(id: string): Promise<Blog> {
        const blog = BLOGS.find((blog) => blog.id === id);

        if (!blog) throw new Error('Could not find blog with id: ' + id);

        return blog;
    }

    async getBlogBySlug(slug: string): Promise<Blog> {
        const blog = BLOGS.find((blog) => blog.slug === slug);

        if (!blog) throw new Error('Could not find blog with slug: ' + slug);

        return blog;
    }

    async getRecentBlogs(
        args?: { amount: number } | undefined
    ): Promise<Blog[]> {
        const { amount = 3 } = args ?? {};

        const sorted = [...BLOGS].sort(
            (b1, b2) => b1.publishedAt.valueOf() - b2.publishedAt.valueOf()
        );

        const blogs = sorted.slice(0, amount);

        return blogs;
    }
}

export const localBlogRepository = new LocalBlogRepository();
