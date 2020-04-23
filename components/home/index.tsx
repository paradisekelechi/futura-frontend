import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../commons/Header';
import Colors from '../utils/Colors';
import Image from '../../static/images/Landing1.svg';

export interface HomeProps {

}

export interface HomeState {

}

const Section = styled.div<{ color: string }>`
    width: 100%;
    height: 500px;
    background-color: ${props => props.color};
`;

const Content = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
`;

const LeftPortion = styled.div`
    width: 45%;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const RightPortion = styled.div`
    width: 40%;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const H1 = styled.h1`
    font-family: 'Berkshire Swash', cursive;
    font-size: 48px;
    color: ${Colors.darkGrey};
    font-weight: 400;
    margin: 0px;
`;

const P = styled.p`
    margin: 0px;
    color: ${Colors.darkGrey};
    font-weight: 400;
`;

const Button = styled.button`
    width: 230px;
    padding: 16px;
    box-sizing: border-box;
    color: ${Colors.white};
    font-weight: 400;
    background-color: ${Colors.darkGrey};
    font-size: 14px;
    border-radius: 10px;
    opacity: 1;
    border: 0px;
    margin: 13px 0px;
    cursor: pointer;
`;

const A = styled.a`
`;


class Home extends React.Component<HomeProps, HomeState> {
    state = {}
    render() {
        return (
            <Section color={Colors.skyBlue}>
                <Wrapper>
                    <Content>
                        <LeftPortion>
                            <H1>Long-Term School Insurance Platform</H1>
                            <P>Save for your schooling. Get a schooling loan. Get educated!</P>
                            <A href="#"><Button>Get Started</Button></A>
                        </LeftPortion>
                        <RightPortion>
                            <img src="../../static/images/BlackWoman.svg" alt="" width="480" />
                        </RightPortion>
                    </Content>
                </Wrapper>
            </Section>
        );
    }
}

export default Home;