import React, { Component } from "react";

class Rep extends Component {
  render() {
    return (
      <div className="card rep-card">
        <header>
          <div className="avatar">
            <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="Jhon Doe" />
          </div>
        </header>

        <h3>Jhon Doe</h3>
        <div className="desc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit et cupiditate deleniti.
        </div>
        <div className="contacts">
          <a href=""><i className="fa fa-plus"></i></a>
          <a href=""><i className="fab fa-whatsapp"></i></a>
          <a href=""><i className="fa fa-envelope"></i></a>
          <div className="clear"></div>
        </div>

        <footer>
          <a href=""><i className="fab fa-facebook"></i></a>
          <a href=""><i className="fab fa-linkedin"></i></a>
          <a href=""><i className="fab fa-twitter"></i></a>
          <a href=""><i className="fab fa-instagram"></i></a>
          <a href=""><i className="fa fa-desktop"></i></a>
        </footer>
      </div>
    );
  }
}

export default Rep;
