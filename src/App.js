import React, { Component } from 'react';
import { 
  Box,
  Heading, 
  Image,
  Grommet, 
  ResponsiveContext 
} from 'grommet';
import AppBar from './components/common/AppBar';
import styled from 'styled-components';
import SideBarHeading from './components/common/sidebarHeading';

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: 'Roboto',
      size: '20px',
      height: '30px',
    },
    color: 'white'
  },
};


const WrapInitialBox = styled(Box)`
  background: url(/BGWIN2.jpg)no-repeat;
  background-size:cover;
`

const WrapSideBox = styled(Box) `
  opacity: .85;
  width:100%;
  display:table;
  padding:1em 0;
  &:hover{
    opacity: 1;
  }
`;

const WrapBody = styled.div`
  float:left;
  display:table;
`

const WrapBodyLeft = styled.div `
  width: 11%;
  display:table-cell;
  vertical-align: middle;
  line-height: 0;
  @media (max-width: 768px) {
    display: block;
    width: 85%;
    margin: auto;
  }
  @media (max-width: 1024px) {
    width: 20%
  }
`;

const WrapBodyRight = styled.div `
  width: 89%;
  display:table-cell;
  vertical-align: middle;
  padding-left: 1%;
  @media (max-width: 768px) {
    width: 96%;
    margin: 0 7px;
    display: block;
  }
  @media (max-width: 1024px) {
    width: 80%;
    font-size: 12px;
  }
`;

const WrapImage = styled(Image)`
  width:100%;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
  border-radius: 10px;
  @media (max-width: 768px) {
    width:100%;
  }
`

const WrapBody2 = styled.div`
  width: 100%;
`

const WrapDivisor = styled.div `
  height: 20px;
  background: black;
  width: 100%;
  min-height: 70px;
  margin-bottom: 25px;
  h2{
    max-width:100%;
    line-height: 14px;
  }
`

const WrapHeadingReview = styled(Heading)`
  background-color: white;
  max-width:200px;
  border-radius:10px;
  padding-left:10px;
`

const WrapParagraph = styled.p`
  margin-right: 25px;
  background-color: white;
  border-radius: 10px;
  padding: 0 20px;
  opacity: 0.9;
  margin-bottom: 50px;
  width: 89%;
`

class App extends Component {
  render() {

    const arrProjects = [
      {'companyName': 'Janeiro Digital', 'technologies' : ['C#', 'MS SQL', 'Azure', 'React.js', 'Phyton']},
      {'companyName': 'Mapache Apps', 'technologies' : ['React.js', 'React-Redux', 'Redux-Thunk', 'Mbox', 'D3.js', 'React-Bootstrap','Styled-Components','Node.js', 'Express', 'Tedius', 'MS SQL']},
      {'companyName': 'Baires Dev', 'technologies' : ['React.js', 'React-Redux', 'Redux-Thunk', 'Jasmine', 'Docker']},
      {'companyName': 'See Saw Labs', 'technologies' : ['React.js', 'React-Redux', 'Redux-Thunk', 'React Native', 'MongoDB', 'SASS', 'LESS' ]},
      {'companyName': 'Qwinix', 'technologies' : ['Angular 1.x', 'Ruby', 'PostgreSQL', 'Moment.js', 'CSS3', 'HTML5']},
      {'companyName': 'Other knowledge', 'technologies' : ['Next.js' ,'Vue.js', 'ASP MVC 5', 'Reporting Services (SSRS)', 'C++','Action Script', 'Visual Basic']},
    ]
    return (
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
        {size => (
          <Box fill>
            <AppBar>
                <Heading level='1' margin='none' color='aqua' >Luis Diego Jimenez - Senior Full Stack Developer</Heading>
            </AppBar>
            <WrapInitialBox direction='row' flex overflow={{ horizontal: 'hidden' }}>
              <Box flex align='center' justify='start'>
                <WrapBody>
                  <WrapBodyLeft>
                    <WrapImage src='/myphoto.jpg'></WrapImage>
                  </WrapBodyLeft>
                  <WrapBodyRight>
                    <WrapHeadingReview level='2' color='black'>Review</WrapHeadingReview>
                    <WrapParagraph>
                    I am a developer with more than 17 years of experience, throughout my career I have participated in different types of projects such as point of sale, 
                    ecommerce web sites, marketing intelligence solutions and mobile applications among others.<br/>
                    In recent years, I have been working with native react and react as frontend and backend with Node.js and C # developing applications with different tools 
                    and associated libraries.<br/>
                    I have formed different types of extensive work of 40 or more developers or individuals. I have had to work with environments where I have had to develop 
                    all the solution for a client from the taking of requirements, prototyping, backend, frontend and implementation. Most of the projects where the work teams 
                    are large I have had to work with pure Agile mode or with their different adaptations to the environment.<br/>
                    As a developer I try to focus on the requirements of the clients to be able to create solutions that meet their needs and thus be able to create agile and modern 
                    applications.
                    </WrapParagraph>
                  </WrapBodyRight>
                </WrapBody>
                <WrapDivisor>
                  <Heading level="2" color="white" textAlign="center">Last Projects & Technologies</Heading>
                </WrapDivisor>
                <WrapBody2>
                  <WrapSideBox
                      flex
                      width='medium'
                      elevation='small'
                      align='center'
                      justify='center'
                      color='white'
                    >
                    {
                      arrProjects.map((project, i)=>{
                        return <SideBarHeading key={i} level='3' color='black' headingTitle={project.companyName} arrList={project.technologies} />  
                      })
                    }
                  </WrapSideBox>
                </WrapBody2>
              </Box>
            </WrapInitialBox>
          </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

export default App;
