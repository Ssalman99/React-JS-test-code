const Notification = (props) => {
  //  Write your code here.
  const { src, className } = props;
  return (
    <div className={className}>
      <img src={src} className="image" />
      <p className="pera">Information Message</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <div className="notification-container">
      <div className="d-flex flex-column">
        <Notification
          src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
          className="first-color"
        />
        <Notification
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          className="second-color"
        />
        <Notification
          src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
          className="third-color"
        />
        <Notification
          src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
          className="forth-color"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
