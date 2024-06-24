import {Wrapper} from "../../shared/components/Wrapper.styles";
import Sidebar from "../shared/components/Sidebar";

export default function NPCEditor() {
    return (
        <>
            <Wrapper className="container">
                <Sidebar/>

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