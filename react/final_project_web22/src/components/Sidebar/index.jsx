import User from "./User";
import Suggestions from "./Suggestions";
import Footer from './Footer'

function Sidebar () {
    return (
        <div className="w-[293px] lg:block lg:sticky lg:top-24 hidden">
            <User />
            <Suggestions/>
            <Footer />
        </div>
    )
}

export default Sidebar;