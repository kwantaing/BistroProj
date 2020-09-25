import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const Gallery = props => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allContentfulProject {
        nodes {
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
        }
      }
    }
  `)
  console.log(data)
  const allProjects = data.allContentfulProject.nodes
  return (
    <section id="gallery" className="">
      <div className="container g0l g0r">
        <div className="col-sm-12 g0l g0r">
          <div
            className="itemlist display-custom-work-item itemlist-work"
            id="itemlist-1691"
          >
            {allProjects.map(Project => {
              return (
                <div className="item custom-grid display-item col-sm-6  gHr-xs gHl-xs">
                  <div className="positioning">
                    <Link
                      className={`item-image-link ${Project.slug}`}
                      to={Project.slug}
                    >
                      <div
                        className="display-image"
                        data-src=""
                        style={{
                          backgroundImage: `url("${Project.thumbnail.fluid.src}")`,
                        }}
                      ></div>
                      <div className="display-fields">
                        <div className="field field-name">
                          <h3 className="field-title">{Project.title}</h3>
                          {Project.types.map(type => {
                            return <span className="display-1">{type.type}</span>
                          })}
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )
            })}
            {/* <div className="item custom-grid display-item col-sm-6  gHr-xs gHl-xs">
              <div className="positioning">
                <a
                  className="item-image-link work-rockenwagner"
                  href="work-rockenwagner"
                >
                  <div
                    className="display-image"
                    data-src=""
                    style={{
                      backgroundImage:
                        "url('http://res.cloudinary.com/convergencecms/image/upload/v1/bistro/templates/items/43207/ro-1')",
                    }}
                  ></div>
                  <div className="display-fields">
                    <div className="field field-name">
                      <h3 className="field-title">Rockenwagner</h3>
                      <span className="display-0">Identity</span>
                      <span className="display-0">Branding</span>
                      <span className="display-1">Web</span>
                      <span className="display-0">E-Commerce</span>
                      <span className="display-0">Environmental</span>
                      <span className="display-0">Collateral Design</span>
                    </div>
                  </div>
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
