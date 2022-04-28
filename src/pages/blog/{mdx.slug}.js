import React from "react";
import Layout from "../../components/layout";
import { graphql } from 'gatsby';
import { MDXRenderer } from "gatsby-plugin-mdx";

export default function BLogPost({data}) {
    return (
        <Layout pageTitle={'Super Cool Blog Posts'}>
            <h2>{data.mdx.frontmatter.title}</h2>
            <p>Ngay Dang: {data.mdx.frontmatter.date}</p>
            <MDXRenderer>
                {data.mdx.body}
            </MDXRenderer>
        </Layout>
    )    
}

export const query = graphql`
query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`
