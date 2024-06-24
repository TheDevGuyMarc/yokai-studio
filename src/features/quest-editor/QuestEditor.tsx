import {Wrapper} from "../../shared/components/Wrapper.styles";
import UtilityBarComponent from "../../shared/components/UtilityBarComponent";
import Sidebar from "../shared/components/Sidebar";


export default function QuestEditor() {
    return (
        <>
            <Wrapper className="container">
                <Sidebar/>

                <div className="content">
                    <div className="editor">

                    </div>
                    <div className="utility-bar ">
                        <UtilityBarComponent/>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}