export default[
    {
        name:'Blog Title',
        desc:'Create compelling blog content effortlessly with Gemini AI Powered Tool.',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/2537/2537788.png',
        aiPrompt:'Please generate 5 blog topic ideas related to the specified niche. For each topic, provide a detailed outline. The output should be presented in a Rich Text Editor format, with each topic and outline clearly structured for easy readability. ',
        slug:'generate-blog-title',
        form:[
            {
                label:'Enter your Blog niche',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Enter blog outline',
                field:'textarea',
                name:'outline',

            }
        ]
    },
    {
        name: 'Blog Content',
        desc: 'Craft detailed blog posts in no time with our AI-powered tool.',
        category: 'Content Creation',
        icon: 'https://cdn-icons-png.flaticon.com/128/2593/2593549.png',
        aiPrompt: 'Generate a comprehensive blog post based on the specified niche and provided outline. The output should be delivered in a Rich Text Editor format, with well-structured sections, headings, and formatting that enhances readability.',
        slug: 'blog-content-creation',
        form: [
            {
                label: 'Enter your Blog niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Blog Topic Idea',
        desc: 'Spark fresh blog ideas instantly with our AI tool.',
        category: 'Content Creation',
        icon: 'https://cdn-icons-png.flaticon.com/128/2065/2065213.png',
        aiPrompt: 'Generate 5 blog topic ideas in bullet points based on the specified niche. For each topic, provide a brief outline. Present the results in a Rich Text Editor format, with clear formatting for easy reading and editing.',
        slug: 'blog-topic-idea-generation',
        form: [
            {
                label: 'Enter your Blog niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'YouTube SEO Title',
        desc: 'Boost your YouTube reach with AI-generated SEO-friendly titles.',
        category: 'YouTube Optimization',
        icon: 'https://cdn-icons-png.flaticon.com/128/440/440727.png',
        aiPrompt: 'Generate 5 SEO-friendly YouTube video titles based on the specified niche and provided outline. Present the titles in a Rich Text Editor format, ensuring clear and engaging formatting for easy review.',
        slug: 'youtube-seo-title-generation',
        form: [
            {
                label: 'Enter your YouTube niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter video outline',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Text Improver',
        desc: 'Elevate your writing with our AI tool for top-notch text quality.',
        category: 'Text Enhancement',
        icon: 'https://cdn-icons-png.flaticon.com/128/2911/2911230.png',
        aiPrompt: 'Improve the provided text based on the given outline and provide the enhanced text in a Rich Text Editor format.',
        slug: 'text-improver',
        form: [
            {
                label: 'Enter text to improve',
                field: 'textarea',
                name: 'textToImprove',
                required: true
            },
            {
                label: 'Provide additional guidelines (optional)',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'MERN Development',
        desc: 'Accelerate your MERN Stack skills with our AI learning assistant.',
        category: 'Web Development',
        icon: 'https://cdn-icons-png.flaticon.com/128/2721/2721291.png',
        aiPrompt: 'Provide an overview of the MERN stack development process with step-by-step instructions for building a sample application, and present the result in a Rich Text Editor format.',
        slug: 'mern-development-guide',
        form: [
            {
                label: 'Enter your preferred project topic',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Provide specific requirements or focus areas (optional)',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Mobile App Development',
        desc: 'Seamlessly build and deploy mobile apps with React Native using our AI tool.',
        category: 'Mobile Development',
        icon: 'https://cdn-icons-png.flaticon.com/128/2749/2749693.png',
        aiPrompt: 'Provide a step-by-step guide to creating a cross-platform mobile application using React Native, and present the result in a Rich Text Editor format.',
        slug: 'react-native-development-guide',
        form: [
            {
                label: 'Enter your mobile app concept',
                field: 'input',
                name: 'appConcept',
                required: true
            },
            {
                label: 'Specify target platforms (iOS, Android, etc.)',
                field: 'textarea',
                name: 'platforms'
            }
        ]
    },
    {
        name: 'WordPress Theme Development',
        desc: 'Craft unique WordPress themes with ease using our AI-powered tool.',
        category: 'Web Development',
        icon: 'https://cdn-icons-png.flaticon.com/128/3415/3415832.png',
        aiPrompt: 'Generate a guide to developing a custom WordPress theme, including setup, design considerations, and deployment steps. Present the result in a Rich Text Editor format.',
        slug: 'wordpress-theme-development-guide',
        form: [
            {
                label: 'Enter the theme name',
                field: 'input',
                name: 'themeName',
                required: true
            },
            {
                label: 'Specify the core design elements (colors, typography, etc.)',
                field: 'textarea',
                name: 'designElements'
            }
        ]
    },
    {
        name: 'AI-Powered Blog Content Creation',
        desc: 'Create niche-specific blog posts effortlessly with our AI tool.',
        category: 'Content Creation',
        icon: 'https://cdn-icons-png.flaticon.com/128/1085/1085895.png',
        aiPrompt: 'Create a detailed and engaging blog post based on the provided niche, including SEO-optimized headings and content structure. Present the result in a Rich Text Editor format.',
        slug: 'ai-blog-content-creator',
        form: [
            {
                label: 'Enter the blog topic',
                field: 'input',
                name: 'blogTopic',
                required: true
            },
            {
                label: 'List specific keywords or phrases to include (optional)',
                field: 'textarea',
                name: 'keywords'
            }
        ]
    },
    {
        name: 'E-Commerce Website Setup',
        desc: 'Quickly build your online store with our AI tool for popular e-commerce platforms.',
        category: 'E-Commerce',
        icon: 'https://cdn-icons-png.flaticon.com/128/859/859808.png',
        aiPrompt: 'Guide through setting up an e-commerce website, including product listings, payment integration, and deployment. Present the result in a Rich Text Editor format.',
        slug: 'ecommerce-website-setup-guide',
        form: [
            {
                label: 'Enter your store name',
                field: 'input',
                name: 'storeName',
                required: true
            },
            {
                label: 'Specify the product categories you will offer',
                field: 'textarea',
                name: 'productCategories'
            }
        ]
    },
    {
        name: 'AI-Based Social Media Content Generator',
        desc: 'Craft captivating social media posts effortlessly with our AI tool.',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/3063/3063788.png',
        aiPrompt: 'Generate social media posts tailored to your brand and audience, including suggested hashtags and posting schedules. Present the result in a Rich Text Editor format.',
        slug: 'social-media-content-generator',
        form: [
            {
                label: 'Enter the social media platform(s)',
                field: 'input',
                name: 'platforms',
                required: true
            },
            {
                label: 'Provide specific campaign goals or messages (optional)',
                field: 'textarea',
                name: 'campaignGoals'
            }
        ]
    },
    {
        name: 'Rewrite Article (Plagiarism Free)',
        desc: 'Generate original, plagiarism-free articles with ease using this AI tool.',
        category: 'Rewriting Tool',
        icon: 'https://cdn-icons-png.flaticon.com/128/6612/6612250.png',
        aiPrompt: 'Rewrite the article without any plagiarism',
        slug: 'rewrite-article',
        form: [
            {
                label: 'Provide your article or Blog related to any domain.',
                field: 'textarea',
                name: 'article',
                required: true
            }
        ]
    },
    
]