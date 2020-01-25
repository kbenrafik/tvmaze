import React from 'react';
// import classNames from 'classnames';
import './ButtonBase.scss';

/**
 * Button base
 * @param {HTMLImageElement} icon
 * @param {String} positionIcon
 * @param {[]} children
 * @param variant
 * @param {ReactElement} component
 * @param {*} other
 * @returns {*}
 * @constructor
 */
const ButtonBase = ({
  icon,
  positionIcon,
  children,
  variant,
  component,
  ...other
}) => {
  /**
   * Render children
   * @returns {*[]|*}
   */
  const renderChildren = () => {
    if (icon) {
      switch (positionIcon) {
        case 'left':
          return (
            <React.Fragment>
              <span className="button__icon button__icon--left">
                <img src={icon} alt=""/>
              </span>
              {children}
            </React.Fragment>
          );
        case 'right':
          return (
            <React.Fragment>
              {children}
              <span className="button__icon button__icon--right">
                <img src={icon} alt=""/>
              </span>
            </React.Fragment>
          );
        default:
          return children;
      }
    }
  };

  const ComponentProp = component;
  return (
    <ComponentProp className="button" {...other}>
      {renderChildren()}
    </ComponentProp>
  );
};

ButtonBase.defaultProps = {
  variant: 'primary',
  component: 'button'
};

export default ButtonBase;