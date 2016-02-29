$(function() {

  CMS.init({

    // Name of your site or location of logo file ,relative to root directory (img/logo.png)
    siteName: 'SECOIA',

    // Tagline for your site
    siteTagline: ' Social ECOnomy Impact Assessement',

    // Email address
    siteEmail: 'martin@erpicum.net',

    // Name
    siteAuthor: 'CaiCai',

    // Navigation items
    siteNavItems: [
      { name: 'Contexte'},
      { name: 'Équipe'}

    ],

    // Posts folder name
    postsFolder: 'posts',

    // Homepage posts snippet length
    postSnippetLength: 120,

    // Pages folder name
          pagesFolder: 'pages',

          // Order of sorting (true for newest to oldest)
          sortDateOrder: true,

    // Site fade speed
    fadeSpeed: 300,

    // Site footer text
    footerText:'Designed and Coded by CaiCai',

    // Mode 'Github' for Github Pages, 'Apache' for Apache server. Defaults
    // to Github
    mode: 'Github',

    // If Github mode is set, your Github username and repo name. Defaults
    // to Github pages branch (gh-pages)
    githubUserSettings: {
      username: 'tinamarre',
      repo: 'cms.js-secoia'
    }

  });

  // Markdown settings
  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
  });

});
