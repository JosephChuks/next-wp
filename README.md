# Next WP - WordPress Blog Integration with Next.js

**Next WP** is a free, open-source blogging application built using Next.js and designed to seamlessly integrate with the WordPress REST API. It allows users to quickly display WordPress posts, categories, comments, and search features using a clean, customizable template with SEO and performance in mind. It can be easily configured to work with any WordPress blog's JSON API and deployed on any Node.js server.
# Next WP - WordPress Blog Integration with Next.js

**Next WP** is a free, open-source blogging application built using Next.js and designed to seamlessly integrate with the WordPress REST API. It allows users to quickly display WordPress posts, categories, comments, and search features using a clean, customizable template with SEO and performance in mind. It can be easily configured to work with any WordPress blog's JSON API and deployed on any Node.js server.

## Features


- **WordPress API Integration**: Fetches and displays WordPress posts, categories, comments, and search results from any WordPress blog via the `/wp-json/wp/v2` endpoint.
- **SEO Optimized**: Designed with SEO best practices, including metadata for Facebook, Twitter, and schema.org to enhance search engine visibility and social sharing.
- **Google AdSense Integration**: Built-in support for 3 ad slot placements to easily integrate banner ads and monetize your content.
- **Google Analytics Integration**: Track user interactions and traffic with Google Analytics.
- **Dynamic Language Translator**: An integrated language translator ensures your blog is accessible to a global audience.
- **Customizable Layout**: Modify colors, fonts, menus, and logos through a simple `settings.json` file.
- **Responsive Design**: Mobile and desktop optimized with separate menu configurations.
- **Floating Telegram Icon**: Easily connect with your audience using a floating Telegram icon that links to your chat or group.
- **Err


## Benefits

- **Quick and Easy Setup**: With a simple `settings.json` file, you can easily configure your blog API, customize the layout, and start displaying posts in minutes.
- **SEO-Friendly**: Automatically injects necessary SEO metadata, ensuring your blog is indexed correctly by search engines and shared optimally on social media platforms.
- **Ad Monetization**: Integrate Google AdSense seamlessly to start earning from your content.
- **Performance Optimized**: Built with Next.js for fast page loads, server-side rendering (SSR), and static site generation (SSG) where applicable.
- **Multi-Language Support**: The integrated translator makes your blog content accessible to users from different regions, boosting global engagement.
- **Deploy Anywhere**: Designed to run on any Node.js server, complete with a `server.js` file to simplify deployment.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NODE_ENV`

`PORT`


## Installation

### Prerequisites

- Node.js installed (v12.x or later recommended)
- A WordPress blog with JSON API enabled (typically `/wp-json/wp/v2`)

### Step-by-Step Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/josephchuks/next-wp.git
   cd next-wp
   ```
2. **Install dependencies**

   ```npm install```

3. **Configure the Application**

Update the `settings.json` file with your WordPress API link, Google AdSense details, Google Analytics ID, and custom configurations:

```{
  "api": "https://yourwordpresssite.com/wp-json/wp/v2",
  "logo": "/images/logo.png", // upload logo to public folder
  "icon": "/images/icon.png", // upload icon to public folder
  "comments": {
    "show": true, // Show Wordpress Comments
    "post": false // Allow posting of comments - It opens original wordpress link
  },
  "contact": {
    "email": "contact@yourdomain.com", // Contact Email
    "whatsapp": "+1234567890" // Contact Whatsapp
  },
  "telegram": {
    "username": "yourTelegramUsername", // Telegram username or channel
    "notice": "Contact Us" // Telegram icon message
  },
  "seo": {
    "title": "Your Blog Title",
    "tagline": "Your Blog Tagline",
    "description": "A brief description of your blog",
    "keywords": "your,blog,keywords",
    "author": "Your Name",
    "twitter": "@yourtwitterhandle"
  },
  "colors": {
    "primary": "#ff5733",
    "background": "#f0eeee",
    "navBackground": "#000",
    "navColor": "#fff",
    "containerBackground": "#faf9f9",
    "searchBackground": "#f4f2f2",
    "inputPlaceholder": "#999"
  },
  "fonts": {
    "main": "Roboto, sans-serif",
    "heading": "'Roboto', sans-serif",
    "googleFonts": [
      "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
    ]
  },
  // Sidebar and Mobile Menu uses the default wordpress archive permalink to fetch posts from the category selected. Enter the Label and make sure the url matches the category slug in the WordPress site.
  "sidebarMenu": [
    {
      "label": "Latest",
      "url": "/category/latest"
    },
    {
      "label": "Main",
      "url": "/category/main
    },
    ...
  ],
  "mobileMenu": [
    {
      "label": "Latest",
      "url": "/category/latest"
    },
    {
      "label": "Main",
      "url": "/category/main"
    },
    ....
  ],
  "googleAnalytics": "G-XXXXXXXXXX",
  "googleAdsenseId": "ca-pub-XXXXXXXXXX",
  "adSlotOne": "1234567890", // Horizontal banner
  "adSlotTwo": "1234567890", // Square banner
  "adSlotThree": "1234567890" // Vertical banner
}
```
## Run Locally

Start the development server using:

```bash
  npm run dev
```

Visit http://localhost:3000 to see your blog in action!
## Deployment

If you're ready to deploy the app, use the provided server.js file to start the application on any Node.js server:

```bash
  npm run build
  node server.js
```


## Authors

- [@josephchuks](https://www.github.com/josephchuks)


## Contributing

If you'd like to contribute to this project, please fork the repository and use a feature branch. Pull requests are warmly welcome.

