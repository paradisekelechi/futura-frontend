import React from 'react';
import Header from '../commons/Header';

export interface LandingLayoutProps {

}

export interface LandingLayoutState {

}

class LandingLayout extends React.Component<LandingLayoutProps, LandingLayoutState> {
    state = {}
    render() {
        const { children } = this.props;
        return (
            <div>
                <Header />
                {children}
            </div>
        );
    }
}

export default LandingLayout;