import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Project from "../components/project"
import Layout from "../components/layout"
import SEO from "../components/seo"

const WorkDetail = ({ data }) => {
  console.log(data)
  const project = data.contentfulProject
  return (
    <Layout>
      <SEO title={`Bistro Studios | Handcrafted Design and Web | ${project.title}`}/>
      <Project project={project}></Project>
    </Layout>
  )
}

export default WorkDetail

export const query = graphql`
  query ProjectQuery($projectId: String) {
    contentfulProject(id: { eq: $projectId }) {
      id
      title
      slug
      description {
        content {
          content {
            value
          }
        }
      }
      thumbnail {
        fluid {
          src
        }
      }
      images {
        fluid {
          src
        }
      }
      types {
        type
      }
      childContentfulProjectDescriptionRichTextNode {
        description
      }
    }
  }
`
