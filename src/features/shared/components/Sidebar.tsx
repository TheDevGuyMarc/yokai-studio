import SidebarTopMenuComponent from "../../../shared/components/SidebarTopMenuComponent";
import SidebarBottomMenuComponent from "../../../shared/components/SidebarBottomMenuComponent";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <SidebarTopMenuComponent/>
            </div>
            <div className="sidebar-bottom">
                <SidebarBottomMenuComponent/>
            </div>
        </div>
    );
}