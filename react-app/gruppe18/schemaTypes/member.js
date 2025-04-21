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
      {
        name: 'logEntries',
        title: 'Loggføringer',
        type: 'array',
        of: [
          {
            title: 'Loggføring',
            type: 'object',
            fields: [
              {
                name: 'description',
                title: 'Beskrivelse',
                type: 'string',
              },
              {
                name: 'logDate',
                title: 'Dato for loggføring',
                type: 'date',
                options: {
                  dateFormat: 'DD.MM.YYYY',
                },
                initialValue: () => new Date().toISOString().substring(0, 10),
              },
              {
                name: 'hours',
                title: 'Timer brukt',
                type: 'number',
                description: 'Hvor mange timer brukt på oppgaven?',
                validation: Rule => Rule.min(0).max(24)
              }
            ],
            preview: {
              select: {
                title: 'description',
                subtitle: 'logDate',
              },
              prepare(selection) {
                const { title, subtitle } = selection;
                const formattedDate = subtitle
                  ? new Date(subtitle).toLocaleDateString('nb-NO', { day: '2-digit', month: '2-digit', year: 'numeric' })
                  : 'Ingen dato';
                return {
                  title: title || 'Ingen beskrivelse',
                  subtitle: formattedDate,
                };
              }
            }
          }
        ],
        description: 'Liste over arbeidsoppgaver utført av dette medlemmet.',
      }
    ],
    preview: {
      select: {
        title: 'name',
        media: 'profileImage',
      },
    },
  }