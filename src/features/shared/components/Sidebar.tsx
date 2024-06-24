export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <h2>Assets</h2>
                <hr/>
                <div className="assets">
                    Assets go here
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