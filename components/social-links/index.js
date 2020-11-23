/** @jsx jsx */
import React from 'react';
import { Flex, jsx } from "theme-ui";
import { arrayOf, object, shape, string } from "prop-types";

import Link from '../link'
import { Icons } from "../../assets/icons";

const SocialLinks = ({channels, styles}) => (
  <Flex sx={{
    backgroundColor: 'background',
    justifyContent: 'center',
    marginTop: 'auto',
    padding: '20px'
  }}>
    {channels.map(({name, url}) => {
      const iconName =
        name.charAt(0).toUpperCase() + name.slice(1);
      return (
        <Link variant="icon" href={url}>
          {React.createElement(Icons[iconName], styles)}
        </Link>
      );
    })}
  </Flex>
)

SocialLinks.propTypes = {
  /** A list of social channels
   * Example - { name: 'Twitter', url: 'http://twitter.com/user }
   * with name and url  */
  channels: arrayOf(
    shape({
      name: string.isRequired,
      url: string.isRequired,
    })
  ).isRequired,
  styles: object,
}

SocialLinks.defaultProps = {
  styles: {
    fontSize: '16px'
  }
}

export default SocialLinks
