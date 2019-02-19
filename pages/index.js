import Link from "next/link";
import {connect} from "react-redux";
import Header from "../components/header";

const _index = (props) => (
    <main>
        <Header/>
        <section>
            <Link href="/about">
                <a>Go to About Me</a>
            </Link>
        </section>
    </main>
);

const mapStateToProps = (state) => {
    return {...state};
};

export default connect(mapStateToProps)(_index)