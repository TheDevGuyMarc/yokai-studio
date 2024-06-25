import {Wrapper} from "../../shared/components/Wrapper.styles";
import UtilityBarComponent from "../../shared/components/UtilityBarComponent";
import Sidebar from "../shared/components/Sidebar";
import EditorToolbar from "../../shared/components/EditorToolbar";
import EditorComponent from "../../shared/components/EditorComponent";

export default function DialogEditor() {
    return (
        <>
            <Wrapper className="container">
                <Sidebar/>

                <div className="content">
                    <div className="editor">
                        <div className="toolbar">
                            <EditorToolbar/>
                        </div>

                        <div className="editor-content">
                            <EditorComponent/>
                        </div>
                    </div>
                    <div className="utility-bar">
                        <UtilityBarComponent/>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}