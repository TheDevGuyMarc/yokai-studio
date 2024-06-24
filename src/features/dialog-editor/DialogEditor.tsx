import {Wrapper} from "../../shared/components/Wrapper.styles";
import DialogSidebar from "../shared/components/DialogSidebar";

export default function DialogEditor() {
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