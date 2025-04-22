export default {
    name: 'member',
    title: 'Gruppemedlem',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Navn',
        type: 'string',
        description: 'Fullt navn på gruppemedlemmet',
        validation: Rule => Rule.required(),
      },
      {
        name: 'firstName',
        title: 'Fornavn',
        type: 'string',
        description: 'Kun fornavn for bruk i menyen',
      },
      {
        name: 'slug',
        title: 'Slug (URL-vennlig navn)',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 96,
        },
      },
      {
        name: 'email',
        title: 'E-postadresse',
        type: 'string',
      },
      {
        name: 'profileImage',
        title: 'Profilbilde',
        type: 'image',
      },
      {
        name: 'interests',
        title: 'Interesser',
        type: 'array',
        of: [{ type: 'string' }],
        description: 'En liste med medlemmets interesser',
      },
      {
        name: 'bio',
        title: 'Biografi',
        type: 'text',
        description: 'En kort biografi om medlemmet',
      },
    ]} 
