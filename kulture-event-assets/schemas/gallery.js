export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    {
      name: 'galleryImages',
      title: 'galleryImages',
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
