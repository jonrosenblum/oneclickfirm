import React from "react";
import "../Styles/dashboard.css"

export default function Dashboard() {
    return(
        <div className="centered-content">
            <div className="task-manager-container">
                <div className="sidebar has-background-white">
                    <h1 className="title has-text-primary">
                        Clients
                    </h1>
                </div>

                <div className="task-list-container has-background-light">
                    <h1 className="title has-text-primary">
                        Client Information
                    </h1>
                </div>
            </div>
        </div>
    )
}