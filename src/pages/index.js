import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const Index = ({ location }) => {
  return (
    <Layout location={location}>
      <h1>
        Site is under construction. Check out my <Link to="/blog">blog</Link> in
        the meantime.
      </h1>
      <p>
        Also check out current games I've been working{" "}
        <Link to="/games">here.</Link>
      </p>
    </Layout>
  )
}

export default Index
