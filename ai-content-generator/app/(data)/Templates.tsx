export default [

    {
        name: 'Blog Title',
        description: 'An AI tool that helps you generate blog titles for your blog posts.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/4693/4693265.png',
        aiPrompt: "Give Me 6 blog topic ideas in bullet format only based on the given niche & outline topic and return the result in Rich Text Editor format.",
        slug: 'generate-blog-title',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'blog_niche',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Blog Content',
        description: 'An AI tool that serves as your personal blog post writer, generating engaging content.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/6114/6114045.png',
        aiPrompt: "Generate a well-structured blog post based on the given topic and key points.",
        slug: 'generate-blog-content',
        form: [
            {
                label: 'Enter blog topic',
                field: 'input',
                name: 'blog_topic',
                required: true
            },
            {
                label: 'Enter key points',
                field: 'textarea',
                name: 'key_points',
            }
        ]
    },
    {
        name: 'Blog Topic Ideas',
        description: 'An AI tool that provides unique and catchy blog topic ideas.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/2921/2921222.png',
        aiPrompt: "Generate a list of 10 unique blog topic ideas based on the given niche.",
        slug: 'blog-topic-ideas',
        form: [
            {
                label: 'Enter your niche',
                field: 'input',
                name: 'niche',
                required: true
            }
        ]
    },
    {
        name: 'YouTube SEO Title',
        description: 'An AI tool that generates optimized SEO titles for YouTube videos.',
        category: 'YouTube',
        icon: 'https://cdn-icons-png.flaticon.com/128/1781/1781812.png',
        aiPrompt: "Generate an engaging and SEO-friendly YouTube video title based on the given topic.",
        slug: 'youtube-seo-title',
        form: [
            {
                label: 'Enter video topic',
                field: 'input',
                name: 'video_topic',
                required: true
            }
        ]
    },
    {
        name: 'YouTube Description',
        description: 'An AI tool that helps create compelling YouTube video descriptions.',
        category: 'YouTube',
        icon: 'https://cdn-icons-png.flaticon.com/128/15714/15714787.png',
        aiPrompt: "Generate an engaging YouTube video description with relevant keywords.",
        slug: 'youtube-description',
        form: [
            {
                label: 'Enter video title',
                field: 'input',
                name: 'video_title',
                required: true
            },
            {
                label: 'Enter key points',
                field: 'textarea',
                name: 'key_points',
            }
        ]
    },
    {
        name: 'YouTube Tags',
        description: 'An AI tool that generates high-ranking tags for YouTube videos.',
        category: 'YouTube',
        icon: 'https://cdn-icons-png.flaticon.com/128/942/942799.png',
        aiPrompt: "Generate the best SEO-friendly YouTube tags based on the given video topic.",
        slug: 'youtube-tags',
        form: [
            {
                label: 'Enter video topic',
                field: 'input',
                name: 'video_topic',
                required: true
            }
        ]
    },
    {
        name: 'Rewrite Article (Plagiarism Free)',
        description: 'Use this tool to rewrite existing articles or blog posts to bypass AI detectors.',
        category: 'Writing',
        icon: 'https://cdn-icons-png.flaticon.com/128/2199/2199690.png',
        aiPrompt: "Rewrite the given article in a unique, plagiarism-free way while maintaining the meaning.",
        slug: 'rewrite-article',
        form: [
            {
                label: 'Paste article content',
                field: 'textarea',
                name: 'article_content',
                required: true
            }
        ]
    },
    {
        name: 'Text Improver',
        description: 'This handy tool refines your writing, eliminating errors and redundancies.',
        category: 'Writing',
        icon: 'https://cdn-icons-png.flaticon.com/128/1250/1250697.png',
        aiPrompt: "Improve the readability and clarity of the given text while keeping its original meaning.",
        slug: 'text-improver',
        form: [
            {
                label: 'Paste text',
                field: 'textarea',
                name: 'text',
                required: true
            }
        ]
    },
    {
        name: 'Add Emojis to Text',
        description: 'An AI tool that adds relevant emojis to text to enhance engagement.',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/1057/1057089.png',
        aiPrompt: "Add emojis to the given text where appropriate to enhance its meaning and engagement.",
        slug: 'add-emojis',
        form: [
            {
                label: 'Enter text',
                field: 'textarea',
                name: 'text',
                required: true
            }
        ]
    },
    {
        name: 'Instagram Post Generator',
        description: 'An AI tool that generates engaging Instagram posts.',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111463.png',
        aiPrompt: "Generate an engaging Instagram post caption based on the given theme.",
        slug: 'instagram-post-generator',
        form: [
            {
                label: 'Enter theme or topic',
                field: 'input',
                name: 'theme',
                required: true
            }
        ]
    },
    {
        name: 'Instagram Hashtag Generator',
        description: 'An AI tool that generates trending hashtags for Instagram posts.',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/3616/3616792.png',
        aiPrompt: "Generate the most relevant and trending hashtags for an Instagram post.",
        slug: 'instagram-hashtags',
        form: [
            {
                label: 'Enter post topic',
                field: 'input',
                name: 'post_topic',
                required: true
            }
        ]
    },
    {
        name: 'English Grammar Check',
        description: 'AI Model to correct your English grammar by analyzing provided text.',
        category: 'Writing',
        icon: 'https://cdn-icons-png.flaticon.com/128/4964/4964022.png',
        aiPrompt: "Check the given text for grammar mistakes and provide the corrected version.",
        slug: 'grammar-check',
        form: [
            {
                label: 'Paste text',
                field: 'textarea',
                name: 'text',
                required: true
            }
        ]
    },
    {
        name: 'Write Code',
        description: 'AI Model to generate programming code in any language.',
        category: 'Code',
        icon: 'https://cdn-icons-png.flaticon.com/128/10817/10817310.png',
        aiPrompt: "Generate a functional code snippet based on the given programming language and problem statement.",
        slug: 'write-code',
        form: [
            {
                label: 'Enter programming language',
                field: 'input',
                name: 'language',
                required: true
            },
            {
                label: 'Describe the functionality',
                field: 'textarea',
                name: 'functionality',
            }
        ]
    },
    {
        name: 'Explain Code',
        description: 'AI Model to explain programming code in any language.',
        category: 'Code',
        icon: 'https://cdn-icons-png.flaticon.com/128/4260/4260895.png',
        aiPrompt: "Explain the given code snippet in simple terms, breaking down each function and logic step by step.",
        slug: 'explain-code',
        form: [
            {
                label: 'Paste your code snippet',
                field: 'textarea',
                name: 'code_snippet',
                required: true
            }
        ]
    }
];



