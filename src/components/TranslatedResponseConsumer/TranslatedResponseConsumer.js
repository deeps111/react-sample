import React , { Component } from "react";
import NewChild from "../NewChild/NewChild";
import RenderPropsExample from "../RenderPropsExample/RenderPropsExample";
import { TranslatedContext } from "../TranslatedResposeProvider/TranslatedResposeProvider";

const TranslatedResponseConsumer = Comp => {
  return class Translation extends Component {
    render() {
      return (
        <TranslatedContext.Consumer>
          {TranslatedContext => <Comp {...this.props}  />}
        </TranslatedContext.Consumer>
      );
    }
  };
};

export default TranslatedResponseConsumer;
