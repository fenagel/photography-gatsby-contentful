import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements"
import Logo from "../../images/logo.svg"

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulGallery {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  return (
    <>
      <Nav>
        <NavLink to="/">
          <Logo style={{ width: "18rem" }} />
        </NavLink>
        <Bars />
        <NavMenu>
          {data.allContentfulGallery.edges.map(edge => (
            <NavLink to={`/${edge.node.slug}`} key={edge.node.slug}>
              {edge.node.slug.toUpperCase()}
            </NavLink>
          ))}
        </NavMenu>
      </Nav>
    </>
  )
}

export default Navbar
