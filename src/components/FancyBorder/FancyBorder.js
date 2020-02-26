import React, { Component } from "react";

class FancyBorder extends Component {
  render() {
    const childrenWithExtraProps = React.Children.map(
      this.props.children,
      child => {
        return React.cloneElement(child, {
          metatype: "React.Children"
        });
      }
    );
    

    return (
      <div className={this.props.color}>
        hii {childrenWithExtraProps}
        {/* Composite model - Containment 
            {props.children} */}
      </div>
    );
  }
}

export default FancyBorder;
