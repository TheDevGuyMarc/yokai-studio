import {Wrapper} from "../../shared/components/Wrapper.styles";
import Sidebar from "../shared/components/Sidebar";
import UtilityBarComponent from "../../shared/components/UtilityBarComponent";

export default function NPCEditor() {
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