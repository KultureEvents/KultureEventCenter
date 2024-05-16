export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'These images will be displayed in the footer of the website.',
    },
    {
      name: 'footerImages',
      title: 'footerImages',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        layout: 'grid', // Display images in a grid layout
      },
    },
  ],
  preview: {
    select: {
      media: 'images.0', // Display the first image in the gallery as preview
    },
  },
}
