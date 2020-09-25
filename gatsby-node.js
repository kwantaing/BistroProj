const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const queryResults = await graphql(`
    query initialProjectsQuery {
      allContentfulProject {
        nodes {
          id
          title
          slug
        }
      }
    }
  `)
  const workDetailPage = path.resolve("./src/templates/work-detail.js")

  const allWork = queryResults.data.allContentfulProject.nodes;

  allWork.forEach(Project => {
      createPage({
          path: `/${Project.slug}`,
          component: workDetailPage,
          context: {
              projectId : Project.id,
              projectTitle: Project.title
          }
      })
  })
}
