export default function DialogSidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <h2>Hierarchy</h2>
                <hr/>
                <div className="hierarchy">
                    Dialog Hierarchy goes here
                </div>
            </div>
            <div className="sidebar-bottom">
                <h2>Properties</h2>
                <hr/>
                <div className="properties">
                    <ul>
                        <li>Property A</li>
                        <li>Property B</li>
                        <li>Property C</li>
                        <li>Property D</li>
                        <li>Property E</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}