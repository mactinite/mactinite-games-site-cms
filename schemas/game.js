export default {
    name: 'game',
    title: 'Game',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      { 
        name: 'summary',
        title: "Summary",
        type: "string",
      },
      {
        name: 'link',
        title: 'Link',
        type: 'url',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'thumbnail',
        title: 'Thumbnail',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'screens',
        title: 'Screens',
        type: 'array',
        of: [
          {
            title: 'Screenshot',
            type: 'image',
          },
        ],
      },
      {
        type: "markdown",
        description: "A Github flavored markdown field with image uploading",
        name: "details",
        title: "Details"
      },
    ],
    preview: {
      select: {
        title: 'title',
        media: 'thumbnail',
      },
    },
  }
  