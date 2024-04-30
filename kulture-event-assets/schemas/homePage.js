// schemas/homePage.js

const homePage = {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'homeHeroImages',
      title: 'Images for Home Hero',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        layout: 'grid',
      },
    },
    {
      name: 'homeIntroImages',
      title: 'Images for Home Intro',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        layout: 'grid',
      },
    },
    {
      name: 'homeServiceData',
      title: 'Data for Services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
            {
              name: 'itemClass',
              title: 'Item Class',
              type: 'string',
              description: 'CSS class name for styling purposes',
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true, 
              },
            },
          ],
        },
      ],
      options: {
        layout: 'grid',
      },
    },
    {
      name: 'teamImages',
      title: 'Images for Team',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        layout: 'grid',
      },
    },
  ],
}

export default homePage
