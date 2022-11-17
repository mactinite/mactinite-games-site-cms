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
          source: 'name',
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
        name: 'details',
        title: 'Details',
        type: 'array',
        of: [
          {
            title: 'Block',
            type: 'block',
            styles: [{title: 'Normal', value: 'normal'}],
            lists: [],
          },
        ],
      },
    ],
    preview: {
      select: {
        title: 'title',
        media: 'thumbnail',
      },
    },
  }
  