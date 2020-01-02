import React, { Component } from 'react'
import { FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa'


export default class NavbarIcons extends Component {
  state = {
    icons: [
      {
        id: 1,
        icon: <FaGithub className="footer-icon" />,
        path: `https://github.com/luciebaker`,
      },
      {
        id: 2,
        icon: <FaTwitter className="footer-icon" />,
        path: `https://twitter.com/LBMedia7`,
      },
      {
        id: 3,
        icon: <FaEnvelope className="footer-icon" />,
        path: `https://lbmedia.netlify.com/contact`,
      },
    ],
  }
  render() {
    return (
      <div>
        {this.state.icons.map(item => (
          <a
            href={item.path}
            key={item.id}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </a>
        ))}
      </div>
    )
  }
}