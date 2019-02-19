import React, {Component} from 'react';
import Layout from '../components/commons/Layout';
import {Link} from 'next/link';

class SkillmatrixIndex extends Component {


    // Initial PROPS
    static getInitialProps ({ reduxStore, req }) {

        return {}
    }

    render() {


        return (

            <Layout>
                <div>
                    <link
                        rel="stylesheet"
                        href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
                    />

                    <h1>Anda</h1>

                </div>

            </Layout>
        );
    }
}


export default SkillmatrixIndex