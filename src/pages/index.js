import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Headline from "../components/headline";
import Gallery from "../components/gallery"

const IndexPage = () => (
  <Layout>
    <SEO title= "Bistro Studios | Handcrafted Design and Web"/>
    <Headline/>
    <Gallery/>
  </Layout>
)

export default IndexPage
