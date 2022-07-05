import User from "./User";
import Suggestions from "./Suggestions";
import Footer from './Footer'

function Sidebar () {
    return (
        <div className="w-[293px] sticky top-24">
            <User />
            <Suggestions/>
            <Footer />
        </div>
    )
}

export default Sidebar;