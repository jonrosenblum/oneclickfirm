import React from "react";
import "../Styles/dashboard.css"

export default function Dashboard() {
    return(
        <div className="centered-content">
            <div className="task-manager-container">
                <div className="sidebar has-background-white">
                    <h1 className="title">
                        Clients
                    </h1>

                    <div className="list-menu">
                        <a className="list-menu-item is-active">
                            <p>Steven Stabile</p>
                        </a>
                        <a className="list-menu-item">
                            <p>Colene Stabile</p>
                        </a>
                        <a className="list-menu-item">
                            <p>Stephanie Rosenblum</p>
                        </a>
                        <a className="list-menu-item">
                            <p>Barbara Stabile</p>
                        </a>
                    </div>

                    <button className="button">+ New Client</button>

                </div>

                <div className="task-list-container has-background-light">
                    <h1 className="title">
                        Client Information
                    </h1>

                    <div className="task">
                        <p>Credit Card Authorization Form</p>
                    </div>
                    <div className="task">
                        <p>Representation Letter Form</p>
                    </div>
                    <div className="task">
                        <p>Discovery Letter Form</p>
                    </div>
                    <div className="task">
                        <p>Retainer Agreement Form</p>
                    </div>
                </div>
            </div>
        </div>
    )
}