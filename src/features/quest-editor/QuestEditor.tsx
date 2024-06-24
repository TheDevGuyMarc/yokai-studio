import {Wrapper} from "../../shared/components/Wrapper.styles";
import DialogSidebar from "../shared/components/DialogSidebar";
import UtilityBarComponent from "../../shared/components/UtilityBarComponent";


export default function QuestEditor() {
    return (
        <>
            <Wrapper className="container">
                <DialogSidebar/>

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