import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../commons/Header';
import Colors from '../utils/Colors';
import Image from '../../static/images/Landing1.svg';

export interface HomeProps {

}

export interface HomeState {

}

const Section = styled.div<{ color?: string }>`
    width: 100%;
    height: 600px;
    background-color: ${props => props.color ? props.color : 'inherit'};
`;

const Content = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
`;

const LeftPortion = styled.div`
    width: 35%;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const RightPortion = styled.div`
    width: 50%;
    min-height: 400px;
    display: flex;
    justify-content: flex-end;
`;

const HeaderText = styled.h3<{ level: number, weight: 'bold' | 'regular' | 'thin' }>`
    font-family: 'Kodchasan', 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    font-size: ${props => props.level === 1 ? '2em' : props.level === 3 ? '1.5em' : '1.2em'};
    font-weight: ${props => props.weight === 'bold' ? 700 : props.weight === 'regular' ? 400 : 300};
    color: ${Colors.darkGrey};
    margin: 18px 0px;
`;

const P = styled.p<{ isBold?: boolean, isSmall?: boolean, color?: string }>`
    margin: 0px;
    color: ${props => props.color ? props.color : Colors.darkGrey};
    font-weight: ${props => props.isBold ? 700 : 400};
    line-height: 24px;
    font-size: ${props => props.isSmall ? '13px' : '16px'};
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

const CardWrapper = styled.div<{ isRight?: boolean }>`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: ${props => props.isRight ? 'flex-end' : 'flex-start'};
`;

const ContentWrapper = styled.div<{ isRight?: boolean }>`
    width: 50%;
    display: flex;
    justify-content: ${props => props.isRight ? 'flex-end' : 'flex-start'};
    align-items: center;
`;

const TextWrapper = styled.div`
    padding: 20px;
    box-sizing: border-box;
    width: 85%;
`;

const TimelineWrapper = styled.div`
    width: 100%;
`;

const RowContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const LeftRowContent = styled.div`
    width: 15%;
`;

const Box = styled.div`
    background: rgba(164, 213, 244, 0.50) 0% 0% no-repeat padding-box;
    border-radius: 5px;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Vertical = styled.div`
    border-left: 2px solid ${Colors.paleGrey};
    height: 40px;
    margin: 10px 29px;
`;



const RightRowContent = styled.div`
    width: 77%;
`;






class Home extends React.Component<HomeProps, HomeState> {
    state = {}
    render() {
        return (
            <div>
                <Section color={Colors.skyBlue}>
                    <Wrapper>
                        <Content>
                            <LeftPortion>
                                <HeaderText level={1} weight='bold'>Long-Term School Insurance Platform</HeaderText>
                                <P>Save for your schooling. Get a schooling loan. Get educated!</P>
                                <A href="#"><Button>Get Started</Button></A>
                            </LeftPortion>
                            <RightPortion>
                                <img src="../../static/images/Img1.svg" alt="" width="620" />
                            </RightPortion>
                        </Content>
                    </Wrapper>
                </Section>
                <Section>
                    <Wrapper>
                        <Content>
                            <CardWrapper>
                                <img src="../../static/images/Img2.svg" alt="" width="420" />
                            </CardWrapper>
                            <ContentWrapper>
                                <TextWrapper>
                                    <HeaderText level={3} weight='bold'>Start Saving for Education</HeaderText>
                                    <P>
                                        As a parent or guardian, you can start saving for the schooling of your ward or child(ren). Financial security begins with planning for the future. Save in bits now and enjoy the fruit tomorrow!
                                    </P>
                                </TextWrapper>
                            </ContentWrapper>
                        </Content>
                    </Wrapper>
                </Section>

                <Section>
                    <Wrapper>
                        <Content>
                            <ContentWrapper isRight={false}>
                                <TextWrapper>
                                    <HeaderText level={3} weight='bold'>Quick Sign up Process</HeaderText>
                                    <TimelineWrapper>
                                        <RowContent>
                                            <LeftRowContent>
                                                <Box>
                                                    <P isBold={true}>01</P>
                                                </Box>
                                                <Vertical></Vertical>
                                            </LeftRowContent>
                                            <RightRowContent>
                                                <HeaderText level={4} weight='bold'>Create a User Profile</HeaderText>
                                                <P isSmall={true} color={Colors.paleGrey}>
                                                    Get started by signing up on the platform with your details. Now is your time to start saving for education
                                                </P>
                                            </RightRowContent>
                                        </RowContent>
                                    </TimelineWrapper>

                                    <TimelineWrapper>
                                        <RowContent>
                                            <LeftRowContent>
                                                <Box>
                                                    <P isBold={true}>02</P>
                                                </Box>
                                                <Vertical></Vertical>
                                            </LeftRowContent>
                                            <RightRowContent>
                                                <HeaderText level={4} weight='bold'>Start a Savings Project</HeaderText>
                                                <P isSmall={true} color={Colors.paleGrey}>
                                                    Get started by signing up on the platform with your details. Now is your time to start saving for education
                                                </P>
                                            </RightRowContent>
                                        </RowContent>
                                    </TimelineWrapper>

                                    <TimelineWrapper>
                                        <RowContent>
                                            <LeftRowContent>
                                                <Box>
                                                    <P isBold={true}>03</P>
                                                </Box>
                                                <Vertical></Vertical>
                                            </LeftRowContent>
                                            <RightRowContent>
                                                <HeaderText level={4} weight='bold'>Update your Account Details</HeaderText>
                                                <P isSmall={true} color={Colors.paleGrey}>
                                                    Get started by signing up on the platform with your details. Now is your time to start saving for education
                                                </P>
                                            </RightRowContent>
                                        </RowContent>
                                    </TimelineWrapper>

                                    <TimelineWrapper>
                                        <RowContent>
                                            <LeftRowContent>
                                                <Box>
                                                    <P isBold={true}>04</P>
                                                </Box>
                                            </LeftRowContent>
                                            <RightRowContent>
                                                <HeaderText level={4} weight='bold'>Make a widthdrawal when due</HeaderText>
                                                <P isSmall={true} color={Colors.paleGrey}>
                                                    Get started by signing up on the platform with your details. Now is your time to start saving for education
                                                </P>
                                            </RightRowContent>
                                        </RowContent>
                                    </TimelineWrapper>
                                </TextWrapper>
                            </ContentWrapper>
                            <CardWrapper isRight={true}>
                                <img src="../../static/images/Img3.svg" alt="" width="500" />
                            </CardWrapper>
                        </Content>
                    </Wrapper>
                </Section>
            </div>
        );
    }
}

export default Home;