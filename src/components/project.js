import React from "react"
import marked from "marked"
import * as contentful from "contentful"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
import { doc } from "prettier"

const Project = props => {
  console.log(props.project)
  const Project = props.project
  const images = Project.images
  console.log(images)
  const descriptionJSON = JSON.parse(
    Project.childContentfulProjectDescriptionRichTextNode.description
  )
  const description = documentToHtmlString(descriptionJSON)
  return (
    <div className={`page-${Project.slug}`}>
      <section id="content" className="detail">
        <div className="container g01-xs g0r-xs">
          <div className="col-sm-12 g01 g0r main">
            <h1>{Project.title}</h1>
            <div
              className="col-sm-12 col-md-10 col-md-push-1 g01 g0r description"
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
            {/* work row 1 */}
            <div className="item custom-grid col-sm-6 g01 half-1">
              <div
                className="display-image"
                style={{ backgroundImage: `url(${images[0].fluid.src})` }}
              ></div>
            </div>
            <div className="item custom-grid col-sm-6 g0r hasquote-0 half-1">
              <div
                className="display-image"
                style={{ backgroundImage: `url(${images[1].fluid.src})` }}
              ></div>
            </div>
            <div className="cl" />
            {/* work row 2*/}
            <div className="display-1">
              <div className="item custom-grid col-sm-12 g0l g0r">
                <div
                  className="display-image"
                  style={{ backgroundImage: `url(${images[2].fluid.src})` }}
                ></div>
              </div>
            </div>
            <div className="cl"></div>

            {/* work row 3*/}
            <div className="display-1">
              <div className="item custom-grid col-sm-6 g0l half-1">
                <div
                  className="display-image"
                  style={{ backgroundImage: `url(${images[3].fluid.src})` }}
                ></div>
              </div>
              <div className="item custom-grid col-sm-6 g0r hasquote-0 half-1">
                <div
                  className="display-image"
                  style={{ backgroundImage: `url(${images[4].fluid.src})` }}
                ></div>
                {/* <blockquote></blockquote> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    // <body className="page-work-rockenwagner">
    //   <section id="content" className="detail">
    //     <div className="container g0l-xs g0r-xs">
    //       {/* <!-- MAIN -->         */}
    //       <div className="col-sm-12 g0l g0r main">
    //         <h1>Rockenwagner</h1>
    //         <div className="col-sm-12 col-md-10 col-md-push-1 g0l g0r description">
    //           <p>
    //             <a href="https://rockenwagner.com/" target="_blank">
    //               Rockenwagner
    //             </a>{" "}
    //             was a dream project for two reasons. 1) We got to work with the
    //             insanely talented{" "}
    //             <a href="http://thecreativepack.com/" target="_blank">
    //               Creative Pack
    //             </a>
    //             , a design and packaging firm in LA. 2) We got to sample
    //             pretzels and baked goods, and they...are...amazing.&nbsp;
    //           </p>
    //         </div>
    //         {/* <!-- Work row 1 --> */}

    //         {/* <!-- Display 50% if there is a second image, 100% if no 2nd image --> */}
    //         <div className="item custom-grid col-sm-6 g0l half-1">
    //           <div
    //             className="display-image"
    //             style={{
    //               backgroundImage:
    //                 "url(http://res.cloudinary.com/convergencecms/image/upload/v1/bistro/templates/items/43207/ro-1)",
    //             }}
    //           ></div>
    //         </div>

    //         <div className="item custom-grid col-sm-6 g0r hasquote-0 half-1">
    //           <div
    //             className="display-image"
    //             style={{
    //               backgroundImage:
    //                 "url(http://res.cloudinary.com/convergencecms/image/upload/v1/bistro/templates/items/43207/ro-2)",
    //             }}
    //           ></div>
    //           {/* <blockquote></blockquote> */}
    //         </div>
    //         <div className="cl"></div>

    //         {/* <!-- Work row 2 --> */}
    //         <div className="display-1">
    //           <div className="item custom-grid col-sm-12 g0l g0r">
    //             <div
    //               className="display-image"
    //               style={{
    //                 backgroundImage:
    //                   "url(http://res.cloudinary.com/convergencecms/image/upload/v1/bistro/templates/items/43207/ro-3)",
    //               }}
    //             ></div>

    //           </div>
    //         </div>
    //         <div className="cl"></div>

    //         {/* <!-- Work row 3 --> */}
    //         <div className="display-1">
    //           <div className="item custom-grid col-sm-6 g0l half-1">
    //             <div
    //               className="display-image"
    //               style={{
    //                 backgroundImage:
    //                   "url(http://res.cloudinary.com/convergencecms/image/upload/v1/bistro/templates/items/43207/ro-4)",
    //               }}
    //             ></div>
    //           </div>
    //           <div className="item custom-grid col-sm-6 g0r hasquote-0 half-1">
    //             <div
    //               className="display-image"
    //               style={{
    //                 backgroundImage:
    //                   "url(http://res.cloudinary.com/convergencecms/image/upload/v1/bistro/templates/items/43207/ro-5)",
    //               }}
    //             ></div>
    //             {/* <blockquote></blockquote> */}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </body>
  )
}

export default Project
