import React from 'react';

import Navigation from '../components/Navigation'

const Layout: React.FC = ({children}: any) => (
    <React.Fragment>
        <Navigation />
        {children}
    </React.Fragment>
)

export default Layout