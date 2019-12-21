import React from "react";
import Style from "./style"
const webAppHeader = () => {
    return (
        <div className="web-app-header">
            <div className="web-app-header-overlay"></div>
                <div className="web-app-line">
                    <hr/>
                    <h4>We don't work with everyone - we partner
                    selectively with innovative clients
                    </h4>
                </div>
            <Style/>
        </div>
    )
}
export default webAppHeader;