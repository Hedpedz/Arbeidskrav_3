export default {
    name: 'groupMember',
    title: 'Gruppemedlem',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Navn',
        type: 'string',
      },
      {
        name: 'email',
        title: 'E-post',
        type: 'string',
      },
      {
        name: 'picture',
        title: 'Bilde',
        type: 'image',
      },
      {
        name: 'interests',
        title: 'Interesser',
        type: 'array',
        of: [{ type: 'string' }],
      },
      {
        name: 'biography',
        title: 'Biografi',
        type: 'text',
      },
    ],
  };