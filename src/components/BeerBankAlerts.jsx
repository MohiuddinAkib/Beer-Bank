import React, { PureComponent, Fragment } from "react";
import { withAlert } from "react-alert";

class BeerBankAlerts extends PureComponent {
  componentDidUpdate = (prevProps, prevState) => {
    const { msg, status, alert } = this.props;
    if (prevProps.msg !== msg && prevProps.status !== status) {
      if (msg !== null && status !== null) {
        switch (status) {
          case 400:
          case 401:
          case 403:
          case 404:
          case 405:
          case 406:
          case 407:
          case 500:
            alert.error(msg);
            break;
          case 200:
          case 201:
          case 202:
            alert.success(msg);
            break;
          default:
            alert.show(msg);
        }
      }
    }
  };

  render() {
    return <Fragment />;
  }
}

export default withAlert()(BeerBankAlerts);
