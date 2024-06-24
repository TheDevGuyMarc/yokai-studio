import {Wrapper} from "../../shared/components/Wrapper.styles";
import UtilityBarComponent from "../../shared/components/UtilityBarComponent";
import Sidebar from "../shared/components/Sidebar";
import DialogToolBar from "./components/DialogToolBar";

export default function DialogEditor() {
    return (
        <>
            <Wrapper className="container">
                <Sidebar/>

                <div className="content">
                    <div className="editor">
                        <div className="toolbar">
                            <DialogToolBar/>
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