import {useLocation} from "react-router-dom";


export default function EditorComponent() {
    const location = useLocation();

    if(location.pathname === '/level-editor') {
        return (
            <textarea value={"test"}>

            </textarea>
        )
    } else if(location.pathname === '/npc-editor') {
        return (
            <textarea value={"test"}>

            </textarea>
        )
    } else if(location.pathname === '/dialog-editor') {
        return (
            <textarea value={"test"}>

            </textarea>
        )
    } else if(location.pathname === '/quest-editor') {
        return (
            <textarea value={"test"}>

            </textarea>
        )
    } else if(location.pathname === '/item-editor') {
        return (
            <textarea value={"test"}>

            </textarea>
        )
    } else {
        return (
            <>
                <p>
                    Please open a new file to start working :)
                </p>
            </>
        );
    }
}
