import React from 'react';
import Admonition from '@theme-original/Admonition';
import VerifiedIcon from '@site/static/img/icon_verified.svg'

export default function AdmonitionWrapper(props) {
    if (props.type === 'verified') {
      if (!props.title)
      {
        return <Admonition title="verified" icon={<VerifiedIcon/>} {...props} />;
      }
      return <Admonition icon={<VerifiedIcon/>} {...props} />;
    }
    return <Admonition {...props} />;
}