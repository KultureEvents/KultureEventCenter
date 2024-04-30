export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
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
