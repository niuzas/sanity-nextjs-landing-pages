export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60229c30b32b2801144ec39d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ks59zzqq',
                  apiId: '3d317eb7-496f-4642-b725-528538865573'
                },
                {
                  buildHookId: '60229c3053868800a77705e7',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-vk48jzhr',
                  apiId: 'cbdc4777-86c0-4dd9-bbfc-0a16489fb3dd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/niuzas/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-vk48jzhr.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
