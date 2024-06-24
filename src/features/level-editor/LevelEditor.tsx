import {Wrapper} from "../../shared/components/Wrapper.styles";
import Sidebar from "./components/Sidebar";


export default function LevelEditor() {
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