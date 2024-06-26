import {useLocation} from "react-router-dom";
import {Grid, TextField} from "@mui/material";


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
            <>
                <Grid container rowSpacing={1} columnSpacing={1}>
                    <Grid item xs={6}>
                        <TextField id="npc" label="NPC" variant="outlined" fullWidth={true} required={true} color={"warning"} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="parent-dialog" label="Parent Dialog" variant="outlined" fullWidth={true} color={"warning"} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="dialog" label="Dialog Text" variant="outlined" multiline={true} minRows={16} fullWidth={true} required={true} color={"warning"} />
                    </Grid>
                </Grid>
            </>
        )
    } else if (location.pathname === '/quest-editor') {
        return (
            <>
                <Grid container rowSpacing={1} columnSpacing={1}>
                    <Grid item xs={6}>
                        <TextField id="npc" label="NPC" variant="outlined" fullWidth={true} required={true} color={"warning"} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="parent-quest" label="Parent Quest" variant="outlined" fullWidth={true} color={"warning"} />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField id="quest-money" label="Money Reward" variant="outlined" fullWidth={true} color={"warning"} />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField id="quest-item" label="Item Reward" variant="outlined" fullWidth={true} color={"warning"} />
                    </Grid>
                    <Grid item xs={3}>

                    </Grid>
                    <Grid item xs={3}>

                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="quest-text" label="Quest Text" variant="outlined" multiline={true} minRows={16} fullWidth={true} required={true} color={"warning"} />
                    </Grid>
                </Grid>
            </>
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
