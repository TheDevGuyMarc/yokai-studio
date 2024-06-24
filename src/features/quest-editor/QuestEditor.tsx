import {Wrapper} from "../../shared/components/Wrapper.styles";
import DialogSidebar from "../dialog-editor/components/DialogSidebar";


export default function QuestEditor() {
    return (
        <>
            <Wrapper className="container">
                <DialogSidebar/>

                <div className="content">
                    <div className="editor">

                    </div>
                    <div className="json-viewer">

                    </div>
                </div>
            </Wrapper>
        </>
    )
}