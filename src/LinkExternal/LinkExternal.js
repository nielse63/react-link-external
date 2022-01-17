import classnames from 'classnames';
import PropTypes from 'prop-types';
import * as React from 'react';
import styles from './LinkExternal.module.scss';

const propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
};

class LinkExternal extends React.Component {
  render() {
    const { props } = this;
    const className = classnames(styles.LinkExternal, props.className);

    return (
      <a {...props} target="_blank" rel="noreferrer" className={className}>
        {props.children}
      </a>
    );
  }
}

LinkExternal.propTypes = propTypes;

export default LinkExternal;
