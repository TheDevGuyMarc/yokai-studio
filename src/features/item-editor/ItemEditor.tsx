import {Wrapper} from "../../shared/components/Wrapper.styles";
import Sidebar from "../shared/components/Sidebar";
import UtilityBarComponent from "../../shared/components/UtilityBarComponent";
import EditorToolbar from "../../shared/components/EditorToolbar";

export default function ItemEditor() {
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