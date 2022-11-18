export default {
    name: 'featuredGames',
    title: 'Featured Games',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
          name: 'subHead',
          title: 'Sub Heading',
          type: 'string',
      },
      {
        name: 'games',
        title: 'Games',
        type: 'array',
        of: [{type: 'reference', to: {type: 'game'}}],
      },
    ],
    preview: {
      select: {
        title: 'title',
      }
    },
  }
  