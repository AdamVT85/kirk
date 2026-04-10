import { defineConfig } from 'tinacms'

const branch = process.env.TINA_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || 'main'

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID || '',
  token: process.env.TINA_TOKEN || '',

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'home',
        label: 'Homepage',
        path: 'content/home',
        format: 'json',
        fields: [
          {
            type: 'object',
            name: 'hero',
            label: 'Hero Section',
            fields: [
              { type: 'string', name: 'badge', label: 'Badge Text' },
              { type: 'string', name: 'titleLine1', label: 'Title Line 1' },
              { type: 'string', name: 'titleLine2', label: 'Title Line 2' },
              { type: 'string', name: 'description', label: 'Description', ui: { component: 'textarea' } },
              { type: 'string', name: 'established', label: 'Established Text' },
              { type: 'string', name: 'cornerBox', label: 'Corner Box Text' },
            ],
          },
          {
            type: 'object',
            name: 'solutions',
            label: 'Strategic Solutions',
            fields: [
              { type: 'string', name: 'heading', label: 'Section Heading' },
              { type: 'string', name: 'counter', label: 'Counter Label' },
              {
                type: 'object',
                name: 'cards',
                label: 'Solution Cards',
                list: true,
                fields: [
                  { type: 'string', name: 'label', label: 'Label' },
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'description', label: 'Description', ui: { component: 'textarea' } },
                  { type: 'string', name: 'icon', label: 'Material Icon Name' },
                  { type: 'string', name: 'slug', label: 'URL Slug' },
                ],
              },
              { type: 'image', name: 'featureImage', label: 'Feature Image' },
              { type: 'string', name: 'featureTitle', label: 'Feature Title' },
            ],
          },
          {
            type: 'object',
            name: 'expertise',
            label: 'Our Expertise',
            fields: [
              { type: 'string', name: 'heading', label: 'Section Heading' },
              { type: 'string', name: 'description', label: 'Description', ui: { component: 'textarea' } },
              {
                type: 'object',
                name: 'metrics',
                label: 'Metrics',
                list: true,
                fields: [
                  { type: 'string', name: 'value', label: 'Value' },
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'subtitle', label: 'Subtitle' },
                  { type: 'boolean', name: 'highlight', label: 'Highlight (Primary Color)' },
                ],
              },
            ],
          },
          {
            type: 'object',
            name: 'clientImpact',
            label: 'Client Impact',
            fields: [
              { type: 'string', name: 'heading', label: 'Section Heading' },
              {
                type: 'object',
                name: 'caseStudies',
                label: 'Case Studies',
                list: true,
                fields: [
                  { type: 'string', name: 'type', label: 'Type (quote or highlight)' },
                  { type: 'string', name: 'label', label: 'Label' },
                  { type: 'string', name: 'quote', label: 'Quote Text', ui: { component: 'textarea' } },
                  { type: 'string', name: 'headline', label: 'Headline' },
                  { type: 'string', name: 'author', label: 'Author' },
                  { type: 'string', name: 'company', label: 'Company' },
                  { type: 'string', name: 'outcome', label: 'Outcome' },
                ],
              },
            ],
          },
          {
            type: 'object',
            name: 'intelligence',
            label: 'Latest Intelligence',
            fields: [
              { type: 'string', name: 'heading', label: 'Section Heading' },
              {
                type: 'object',
                name: 'articles',
                label: 'Articles',
                list: true,
                fields: [
                  { type: 'string', name: 'category', label: 'Category' },
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'description', label: 'Description', ui: { component: 'textarea' } },
                  { type: 'image', name: 'image', label: 'Image' },
                ],
              },
            ],
          },
          {
            type: 'object',
            name: 'cta',
            label: 'Call to Action',
            fields: [
              { type: 'string', name: 'heading', label: 'Heading' },
              { type: 'string', name: 'primaryButton', label: 'Primary Button Text' },
              { type: 'string', name: 'secondaryButton', label: 'Secondary Button Text' },
            ],
          },
        ],
      },
      {
        name: 'consultation',
        label: 'Consultation Page',
        path: 'content/consultation',
        format: 'json',
        fields: [
          {
            type: 'object', name: 'hero', label: 'Hero Section',
            fields: [
              { type: 'string', name: 'badge', label: 'Badge' },
              { type: 'string', name: 'titleLine1', label: 'Title Line 1' },
              { type: 'string', name: 'titleLine2', label: 'Title Line 2' },
              { type: 'string', name: 'cornerIcon', label: 'Corner Icon' },
              { type: 'string', name: 'cornerText', label: 'Corner Text', ui: { component: 'textarea' } },
            ],
          },
          {
            type: 'object', name: 'form', label: 'Contact Form',
            fields: [
              { type: 'string', name: 'heading', label: 'Form Heading' },
              { type: 'string', name: 'description', label: 'Form Description', ui: { component: 'textarea' } },
              { type: 'string', name: 'submitButton', label: 'Submit Button Text' },
            ],
          },
          {
            type: 'object', name: 'imagery', label: 'Imagery',
            fields: [
              { type: 'image', name: 'heroImage', label: 'Hero Image' },
              { type: 'string', name: 'decorativeLabel', label: 'Decorative Label' },
            ],
          },
          {
            type: 'object', name: 'offices', label: 'Offices',
            fields: [
              {
                type: 'object', name: 'primary', label: 'Primary Office',
                fields: [
                  { type: 'string', name: 'label', label: 'Label' },
                  { type: 'string', name: 'address', label: 'Address', ui: { component: 'textarea' } },
                  { type: 'string', name: 'phone', label: 'Phone' },
                ],
              },
            ],
          },
          {
            type: 'object', name: 'metrics', label: 'Metrics', list: true,
            fields: [
              { type: 'string', name: 'value', label: 'Value' },
              { type: 'string', name: 'label', label: 'Label' },
              { type: 'boolean', name: 'highlight', label: 'Highlight' },
            ],
          },
        ],
      },
      {
        name: 'insights',
        label: 'Insights Page',
        path: 'content/insights',
        format: 'json',
        fields: [
          {
            type: 'object', name: 'hero', label: 'Hero Section',
            fields: [
              { type: 'string', name: 'badge', label: 'Badge' },
              { type: 'string', name: 'titleLine1', label: 'Title Line 1' },
              { type: 'string', name: 'titleLine2', label: 'Title Line 2' },
              { type: 'string', name: 'description', label: 'Description', ui: { component: 'textarea' } },
            ],
          },
          { type: 'string', name: 'filters', label: 'Filter Categories', list: true },
          {
            type: 'object', name: 'featured', label: 'Featured Article',
            fields: [
              { type: 'string', name: 'badge', label: 'Badge' },
              { type: 'string', name: 'category', label: 'Category' },
              { type: 'string', name: 'readTime', label: 'Read Time' },
              { type: 'string', name: 'title', label: 'Title' },
              { type: 'string', name: 'description', label: 'Description', ui: { component: 'textarea' } },
              { type: 'string', name: 'linkText', label: 'Link Text' },
              { type: 'image', name: 'image', label: 'Image' },
            ],
          },
          {
            type: 'object', name: 'gridArticles', label: 'Grid Articles', list: true,
            fields: [
              { type: 'string', name: 'category', label: 'Category' },
              { type: 'string', name: 'date', label: 'Date' },
              { type: 'string', name: 'title', label: 'Title' },
              { type: 'image', name: 'image', label: 'Image' },
            ],
          },
          {
            type: 'object', name: 'newsletter', label: 'Newsletter Section',
            fields: [
              { type: 'string', name: 'titleLine1', label: 'Title Line 1' },
              { type: 'string', name: 'titleLine2', label: 'Title Line 2' },
              { type: 'string', name: 'description', label: 'Description', ui: { component: 'textarea' } },
              { type: 'string', name: 'buttonText', label: 'Button Text' },
            ],
          },
        ],
      },
      {
        name: 'solutions',
        label: 'Solution Landing Pages',
        path: 'content/solutions',
        format: 'json',
        fields: [
          {
            type: 'object', name: 'hero', label: 'Hero Section',
            fields: [
              { type: 'string', name: 'badge', label: 'Badge' },
              { type: 'string', name: 'title', label: 'Title' },
              { type: 'string', name: 'subtitle', label: 'Subtitle' },
              { type: 'string', name: 'description', label: 'Description', ui: { component: 'textarea' } },
            ],
          },
          {
            type: 'object', name: 'overview', label: 'Overview',
            fields: [
              { type: 'string', name: 'heading', label: 'Heading' },
              { type: 'string', name: 'description', label: 'Description', ui: { component: 'textarea' } },
              {
                type: 'object', name: 'features', label: 'Features', list: true,
                fields: [
                  { type: 'string', name: 'icon', label: 'Material Icon Name' },
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'description', label: 'Description', ui: { component: 'textarea' } },
                ],
              },
            ],
          },
          {
            type: 'object', name: 'sectors', label: 'Sectors (Optional)',
            fields: [
              { type: 'string', name: 'heading', label: 'Heading' },
              { type: 'string', name: 'description', label: 'Description', ui: { component: 'textarea' } },
              {
                type: 'object', name: 'items', label: 'Sector Items', list: true,
                fields: [
                  { type: 'string', name: 'name', label: 'Sector Name' },
                  { type: 'string', name: 'icon', label: 'Material Icon Name' },
                ],
              },
            ],
          },
          {
            type: 'object', name: 'firstAid', label: 'First Aid Courses (Optional)',
            fields: [
              { type: 'string', name: 'heading', label: 'Heading' },
              { type: 'string', name: 'description', label: 'Description', ui: { component: 'textarea' } },
              {
                type: 'object', name: 'courses', label: 'Courses', list: true,
                fields: [
                  { type: 'string', name: 'title', label: 'Course Title' },
                  { type: 'string', name: 'duration', label: 'Duration' },
                ],
              },
            ],
          },
          {
            type: 'object', name: 'approach', label: 'Approach',
            fields: [
              { type: 'string', name: 'heading', label: 'Heading' },
              {
                type: 'object', name: 'steps', label: 'Steps', list: true,
                fields: [
                  { type: 'string', name: 'number', label: 'Step Number' },
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'description', label: 'Description', ui: { component: 'textarea' } },
                ],
              },
            ],
          },
          {
            type: 'object', name: 'cta', label: 'Call to Action',
            fields: [
              { type: 'string', name: 'heading', label: 'Heading' },
              { type: 'string', name: 'description', label: 'Description', ui: { component: 'textarea' } },
              { type: 'string', name: 'buttonText', label: 'Button Text' },
            ],
          },
        ],
      },
      {
        name: 'service',
        label: 'Service Page',
        path: 'content/service',
        format: 'json',
        fields: [
          {
            type: 'object', name: 'hero', label: 'Hero Section',
            fields: [
              { type: 'string', name: 'badge', label: 'Badge' },
              { type: 'string', name: 'titleLine1', label: 'Title Line 1' },
              { type: 'string', name: 'titleLine2', label: 'Title Line 2' },
              { type: 'string', name: 'description', label: 'Description', ui: { component: 'textarea' } },
              { type: 'image', name: 'backgroundImage', label: 'Background Image' },
            ],
          },
          {
            type: 'object', name: 'metrics', label: 'Metrics', list: true,
            fields: [
              { type: 'string', name: 'label', label: 'Label' },
              { type: 'string', name: 'value', label: 'Value' },
            ],
          },
          {
            type: 'object', name: 'competencies', label: 'Core Competencies',
            fields: [
              { type: 'string', name: 'heading', label: 'Heading' },
              { type: 'string', name: 'description', label: 'Description', ui: { component: 'textarea' } },
              { type: 'string', name: 'matrixLabel', label: 'Matrix Label' },
              {
                type: 'object', name: 'cards', label: 'Competency Cards', list: true,
                fields: [
                  { type: 'string', name: 'icon', label: 'Icon' },
                  { type: 'string', name: 'title', label: 'Title' },
                  { type: 'string', name: 'description', label: 'Description', ui: { component: 'textarea' } },
                ],
              },
            ],
          },
          {
            type: 'object', name: 'philosophy', label: 'Philosophy / Quote',
            fields: [
              { type: 'string', name: 'label', label: 'Section Label' },
              { type: 'string', name: 'quote', label: 'Quote', ui: { component: 'textarea' } },
              { type: 'string', name: 'highlightedPhrase', label: 'Highlighted Phrase' },
              { type: 'string', name: 'authorName', label: 'Author Name' },
              { type: 'string', name: 'authorTitle', label: 'Author Title' },
              { type: 'image', name: 'authorImage', label: 'Author Image' },
              { type: 'image', name: 'buildingImage', label: 'Building Image' },
              { type: 'string', name: 'overlayText', label: 'Overlay Text' },
            ],
          },
          {
            type: 'object', name: 'consultation', label: 'Consultation Form',
            fields: [
              { type: 'string', name: 'heading', label: 'Heading' },
              { type: 'string', name: 'headingHighlight', label: 'Heading Highlight' },
              { type: 'string', name: 'description', label: 'Description', ui: { component: 'textarea' } },
              { type: 'string', name: 'phone', label: 'Phone' },
              { type: 'string', name: 'email', label: 'Email' },
              { type: 'string', name: 'submitButton', label: 'Submit Button Text' },
            ],
          },
        ],
      },
    ],
  },
})
