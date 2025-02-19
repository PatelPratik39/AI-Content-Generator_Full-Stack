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
        icon: 'https://cdn-icons-png.flaticon.com/128/1644/1644133.png',
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
        icon: 'https://cdn-icons-png.flaticon.com/128/2992/2992156.png',
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
        icon: 'https://cdn-icons-png.flaticon.com/128/8361/8361342.png',
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
        icon: 'https://cdn-icons-png.flaticon.com/128/4160/4160766.png',
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
        icon: 'https://cdn-icons-png.flaticon.com/128/5380/5380100.png',
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
    },

    // 1. AI-Powered Email Generator
    {
        name: 'Email Generator',
        description: 'Generate professional and engaging email drafts for any occasion.',
        category: 'Business',
        icon: 'https://cdn-icons-png.flaticon.com/128/2965/2965306.png',
        aiPrompt: "Generate a professional email based on the given purpose and details.",
        slug: 'email-generator',
        form: [
            {
                label: 'Enter email purpose',
                field: 'input',
                name: 'email_purpose',
                required: true
            },
            {
                label: 'Additional details',
                field: 'textarea',
                name: 'additional_details',
            }
        ]
    },

    // 2. LinkedIn Post Generator
    {
        name: 'LinkedIn Post Generator',
        description: 'Generate professional LinkedIn posts with engaging insights.',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/408/408703.png',
        aiPrompt: "Generate a professional and engaging LinkedIn post based on the given topic.",
        slug: 'linkedin-post-generator',
        form: [
            {
                label: 'Enter topic or idea',
                field: 'input',
                name: 'post_topic',
                required: true
            }
        ]
    },

    // 3. Facebook Ad Copy Generator
    {
        name: 'Facebook Ad Copy',
        description: 'Generate compelling ad copies for Facebook marketing campaigns.',
        category: 'Advertising',
        icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968764.png',
        aiPrompt: "Generate a high-converting Facebook ad copy based on the given product or service.",
        slug: 'facebook-ad-copy',
        form: [
            {
                label: 'Enter product/service name',
                field: 'input',
                name: 'product_name',
                required: true
            },
            {
                label: 'Enter key selling points',
                field: 'textarea',
                name: 'selling_points',
            }
        ]
    },

    // 4. Twitter Thread Generator
    {
        name: 'Twitter Thread Generator',
        description: 'Generate engaging Twitter threads to boost engagement.',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/733/733579.png',
        aiPrompt: "Generate an engaging Twitter thread based on the given topic.",
        slug: 'twitter-thread-generator',
        form: [
            {
                label: 'Enter thread topic',
                field: 'input',
                name: 'thread_topic',
                required: true
            }
        ]
    },

    // 5. Resume Summary Generator
    {
        name: 'Resume Summary Generator',
        description: 'Generate a professional resume summary based on experience and skills.',
        category: 'Career',
        icon: 'https://cdn-icons-png.flaticon.com/128/888/888879.png',
        aiPrompt: "Generate a professional and concise resume summary based on the provided experience and skills.",
        slug: 'resume-summary',
        form: [
            {
                label: 'Enter years of experience',
                field: 'input',
                name: 'years_experience',
                required: true
            },
            {
                label: 'List key skills',
                field: 'textarea',
                name: 'key_skills',
            }
        ]
    },

    // 6. Product Description Generator
    {
        name: 'Product Description Generator',
        description: 'Generate compelling product descriptions for eCommerce listings.',
        category: 'E-Commerce',
        icon: 'https://cdn-icons-png.flaticon.com/128/2331/2331779.png',
        aiPrompt: "Generate an engaging and SEO-optimized product description based on the given product details.",
        slug: 'product-description',
        form: [
            {
                label: 'Enter product name',
                field: 'input',
                name: 'product_name',
                required: true
            },
            {
                label: 'Enter product features',
                field: 'textarea',
                name: 'product_features',
            }
        ]
    },

    // 7. AI Story Generator
    {
        name: 'AI Story Generator',
        description: 'Create unique and engaging AI-generated stories.',
        category: 'Creative Writing',
        icon: 'https://cdn-icons-png.flaticon.com/128/4072/4072307.png',
        aiPrompt: "Generate a short creative story based on the given theme and characters.",
        slug: 'ai-story-generator',
        form: [
            {
                label: 'Enter story theme',
                field: 'input',
                name: 'story_theme',
                required: true
            },
            {
                label: 'Enter character names',
                field: 'textarea',
                name: 'character_names',
            }
        ]
    },

    // 8. Instagram Reel Caption Generator
    {
        name: 'Instagram Reel Caption',
        description: 'Generate engaging captions for Instagram Reels.',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/12595/12595897.png',
        aiPrompt: "Generate an engaging Instagram Reel caption based on the given topic.",
        slug: 'instagram-reel-caption',
        form: [
            {
                label: 'Enter topic or mood',
                field: 'input',
                name: 'caption_topic',
                required: true
            }
        ]
    },

    // 9. Sales Pitch Generator
    {
        name: 'Sales Pitch Generator',
        description: 'Generate persuasive sales pitches for products or services.',
        category: 'Business',
        icon: 'https://cdn-icons-png.flaticon.com/128/11485/11485145.png',
        aiPrompt: "Generate a compelling sales pitch based on the given product or service details.",
        slug: 'sales-pitch',
        form: [
            {
                label: 'Enter product/service name',
                field: 'input',
                name: 'product_name',
                required: true
            },
            {
                label: 'Describe the target audience',
                field: 'textarea',
                name: 'target_audience',
            }
        ]
    },

    // 10. Press Release Generator
    {
        name: 'Press Release Generator',
        description: 'Generate well-structured press releases for announcements.',
        category: 'Public Relations',
        icon: 'https://cdn-icons-png.flaticon.com/128/16067/16067683.png',
        aiPrompt: "Generate a professional press release based on the given announcement details.",
        slug: 'press-release',
        form: [
            {
                label: 'Enter announcement details',
                field: 'textarea',
                name: 'announcement_details',
                required: true
            }
        ]
    },

    // 11. TikTok Video Script Generator
    {
        name: 'TikTok Script Generator',
        description: 'Generate engaging video scripts for TikTok content.',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/3046/3046126.png',
        aiPrompt: "Generate an engaging TikTok script based on the given topic.",
        slug: 'tiktok-script',
        form: [
            {
                label: 'Enter video topic',
                field: 'input',
                name: 'video_topic',
                required: true
            }
        ]
    },

    // 12. AI Business Name Generator
    {
        name: 'Business Name Generator',
        description: 'Generate unique and creative business name ideas.',
        category: 'Business',
        icon: 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png',
        aiPrompt: "Generate a list of creative and catchy business name ideas based on the given industry.",
        slug: 'business-name-generator',
        form: [
            {
                label: 'Enter industry/niche',
                field: 'input',
                name: 'industry',
                required: true
            }
        ]
    },
    {
        name: 'AI Recipe Generator',
        description: 'Generate creative and delicious recipes based on available ingredients.',
        category: 'Food',
        icon: 'https://cdn-icons-png.flaticon.com/128/2921/2921825.png',
        aiPrompt: "Create a detailed recipe using the given ingredients, including cooking steps, estimated preparation time, and serving suggestions.",
        slug: 'ai-recipe-generator',
        form: [
            { label: 'Enter available ingredients', field: 'textarea', name: 'ingredients', required: true },
            { label: 'Select cuisine type', field: 'dropdown', name: 'cuisine', options: ['Italian', 'Indian', 'Chinese', 'Mexican', 'American', 'Mediterranean', 'Other'] }
        ]
    },
    {
        name: 'AI Meal Planner',
        description: 'Generate a personalized meal plan based on dietary preferences and goals.',
        category: 'Food',
        icon: 'https://cdn-icons-png.flaticon.com/128/1046/1046750.png',
        aiPrompt: "Create a 7-day meal plan based on the provided dietary preferences and goals.",
        slug: 'ai-meal-planner',
        form: [
            { label: 'Dietary preference', field: 'dropdown', name: 'dietary_preference', options: ['Vegetarian', 'Vegan', 'Keto', 'Paleo', 'Gluten-Free', 'High-Protein'] },
            { label: 'Meal goal', field: 'dropdown', name: 'meal_goal', options: ['Weight Loss', 'Muscle Gain', 'Balanced Diet'] }
        ]
    },
    {
        name: 'Cocktail & Drink Generator',
        description: 'Generate creative drink and cocktail recipes based on available ingredients.',
        category: 'Food',
        icon: 'https://cdn-icons-png.flaticon.com/128/2439/2439663.png',
        aiPrompt: "Create a unique cocktail or non-alcoholic drink recipe based on the given ingredients.",
        slug: 'cocktail-generator',
        form: [{ label: 'Enter available ingredients', field: 'textarea', name: 'drink_ingredients', required: true }]
    },

    // 🔹 Gaming Templates
    {
        name: 'Game Idea Generator',
        description: 'Generate creative game concepts based on the given genre and theme.',
        category: 'Gaming',
        icon: 'https://cdn-icons-png.flaticon.com/128/11882/11882810.png',
        aiPrompt: "Generate an innovative game concept based on the given genre and theme, including gameplay mechanics and storyline.",
        slug: 'game-idea-generator',
        form: [
            { label: 'Select game genre', field: 'dropdown', name: 'game_genre', options: ['Action', 'Adventure', 'RPG', 'Horror', 'Strategy', 'Puzzle', 'Sports', 'Other'] },
            { label: 'Enter game theme', field: 'input', name: 'game_theme', required: true }
        ]
    },
    {
        name: 'Game Character Creator',
        description: 'Generate unique and engaging characters for video games.',
        category: 'Gaming',
        icon: 'https://cdn-icons-png.flaticon.com/128/2822/2822326.png',
        aiPrompt: "Generate a detailed game character description including backstory, personality traits, and special abilities.",
        slug: 'game-character-creator',
        form: [
            { label: 'Enter character role', field: 'input', name: 'character_role', required: true },
            { label: 'Select character type', field: 'dropdown', name: 'character_type', options: ['Hero', 'Villain', 'Sidekick', 'NPC', 'Other'] }
        ]
    },
    {
        name: 'Game Walkthrough Generator',
        description: 'Generate a detailed walkthrough for any video game level or quest.',
        category: 'Gaming',
        icon: 'https://cdn-icons-png.flaticon.com/128/4293/4293997.png',
        aiPrompt: "Generate a step-by-step guide for completing the given game quest or level.",
        slug: 'game-walkthrough-generator',
        form: [
            { label: 'Enter game title', field: 'input', name: 'game_title', required: true },
            { label: 'Enter level or quest name', field: 'input', name: 'quest_name', required: true }
        ]
    },

    // 🔹 Technology Templates
    {
        name: 'Tech Blog Generator',
        description: 'Generate informative and engaging tech-related blog content.',
        category: 'Technology',
        icon: 'https://cdn-icons-png.flaticon.com/128/4233/4233834.png',
        aiPrompt: "Generate an in-depth technology blog post based on the given topic, covering key insights and trends.",
        slug: 'tech-blog-generator',
        form: [{ label: 'Enter technology topic', field: 'input', name: 'tech_topic', required: true }]
    },
    {
        name: 'App Idea Generator',
        description: 'Generate innovative mobile and web app ideas based on a given niche.',
        category: 'Technology',
        icon: 'https://cdn-icons-png.flaticon.com/128/4578/4578414.png',
        aiPrompt: "Generate a creative app concept based on the given niche, including core features and target users.",
        slug: 'app-idea-generator',
        form: [{ label: 'Enter app niche', field: 'input', name: 'app_niche', required: true }]
    },
    {
        name: 'AI Code Debugger',
        description: 'Automatically identify and fix bugs in your code.',
        category: 'Technology',
        icon: 'https://cdn-icons-png.flaticon.com/128/4661/4661255.png',
        aiPrompt: "Analyze the given code for errors and suggest fixes.",
        slug: 'code-debugger',
        form: [{ label: 'Paste code snippet', field: 'textarea', name: 'code_snippet', required: true }]
    },
    {
        name: 'Medium Blog Post Generator',
        description: 'Generate well-structured and engaging Medium blog posts.',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968906.png',
        aiPrompt: "Generate a compelling Medium-style blog post based on the given topic, using an engaging introduction, detailed body, and a thought-provoking conclusion.",
        slug: 'medium-blog-post-generator',
        form: [
            { label: 'Enter blog topic', field: 'input', name: 'blog_topic', required: true },
            { label: 'Enter key points (optional)', field: 'textarea', name: 'key_points' }
        ]
    },
    {
        name: 'Travel Itinerary Generator',
        description: 'Generate a customized travel itinerary based on your destination, duration, and interests.',
        category: 'Travel',
        icon: 'https://cdn-icons-png.flaticon.com/128/201/201623.png',
        aiPrompt: "Generate a day-by-day travel itinerary for the given destination, including must-visit places, activities, and local experiences based on the user's preferences.",
        slug: 'travel-itinerary-generator',
        form: [
            { label: 'Enter destination', field: 'input', name: 'destination', required: true },
            { label: 'Enter number of days', field: 'input', name: 'days', required: true },
            { label: 'Select travel preferences', field: 'checkbox', name: 'preferences', options: ['Adventure', 'Relaxation', 'Cultural', 'Food & Drinks', 'Nature', 'Nightlife'] }
        ]
    },
    {
        name: 'Travel Budget Planner',
        description: 'Plan your travel expenses by generating a detailed budget based on your trip details.',
        category: 'Travel',
        icon: 'https://cdn-icons-png.flaticon.com/128/2082/2082860.png',
        aiPrompt: "Generate a detailed budget breakdown for the given destination, including accommodation, food, transportation, activities, and miscellaneous expenses based on the provided budget range.",
        slug: 'travel-budget-planner',
        form: [
            { label: 'Enter destination', field: 'input', name: 'destination', required: true },
            { label: 'Enter budget (in USD)', field: 'input', name: 'budget', required: true },
            { label: 'Enter duration of trip (days)', field: 'input', name: 'duration', required: true }
        ]
    },
    {
        name: 'Local Restaurant Finder',
        description: 'Discover top-rated restaurants based on cuisine and location.',
        category: 'Food & Travel',
        icon: 'https://cdn-icons-png.flaticon.com/128/8503/8503966.png',
        aiPrompt: "Suggest the best restaurants for the given cuisine in the specified city, including details on price range, ambiance, and top-rated dishes.",
        slug: 'local-restaurant-finder',
        form: [
            { label: 'Enter location (city or neighborhood)', field: 'input', name: 'location', required: true },
            { label: 'Select cuisine type', field: 'dropdown', name: 'cuisine', options: ['Italian', 'Chinese', 'Indian', 'Japanese', 'Mexican', 'Vegan', 'BBQ', 'Seafood', 'Other'] }
        ]
    }





];





