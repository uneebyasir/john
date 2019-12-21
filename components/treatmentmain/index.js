import React from "react";
import KnowledgeCard from "../treatmentknowledge";
import Treatmentfirst from "../treatmentfirstsection";
import Decision from "../treatmentdecision";
import Audit from "../treatmentaudit"
const treatmentMain = () => {
    return (
        <div>
            <Treatmentfirst/>
            <KnowledgeCard/>
            <Decision/>
            <Audit/>

        </div>
    )
}
export default treatmentMain