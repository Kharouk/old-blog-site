import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

const Index = props => {
  return (
    <Layout location={props.location}>
      <h1>
        Site is under construction. Check out my <Link to="/blog">blog</Link> in
        the meantime.
      </h1>
    </Layout>
  )
}

export default Index
