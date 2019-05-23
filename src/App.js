import React, { Component } from 'react';
import { 
  Box,
  Button,
  Collapsible,
  CheckBox,
  Heading, 
  Image,
  Grommet, 
  Layer,
  ResponsiveContext
} from 'grommet';
import AppBar from './components/common/AppBar';
import styled from 'styled-components';
import SideBarHeading from './components/common/sidebarHeading';
import ReactRevealText from 'react-reveal-text';
import Jump from 'react-reveal/Jump';
import Flip from 'react-reveal/Flip';
import { FormClose, Notification } from 'grommet-icons';

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
  background: ${(props) => 'url(' + props.imageurl+ '/BGWIN2.jpg)no-repeat;'}
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
  
  @media (max-width: 1024px) {
    width: 20%
  }
  @media (max-width: 768px) {
    display: block;
    width: 100%;
    margin: auto;
  }
`;

const WrapBodyRight = styled.div `
  width: 89%;
  display:table-cell;
  vertical-align: middle;
  padding-left: 1%;
  
  @media (max-width: 1024px) {
    width: 80%;
    font-size: 12px;
  }

  @media (max-width: 768px) {
    width: 96%;
    margin: 0 7px;
    display: block;
  }
`;

const WrapImage = styled(Image)`
  width:100%;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
  border-radius: 10px;
  @media (max-width: 768px) {
    width:50%;
    margin: auto;
    display: block;
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
  padding: 10px 20px;
  opacity: 0.9;
  margin-bottom: 50px;
  width: 88%;
`

const WrapAppBar = styled(AppBar)`
  @media (max-width: 768px) {
    display: block!important;
    label{
      float: right;
    }
  }
`
const WrapDivCollapsible = styled.div`
  background: silver;
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  outline: 0;
  width: 20%;
  opacity:0.9;
  padding-bottom: 20px;
  border-radius: 10px;
  @media (max-width: 768px) {
    display: none;
  }
  button{
    float: right;
    svg{
      width: 45px;
      height: 45px;
    }
  }
`

const WrapHeadingTitle2 = styled(Heading)`
  @media (max-width: 768px) {
    font-size:20px;
  }
`

class App extends Component {
  state = {language: 0, show: false, showSidebar: false,}

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, 500);
  }

  render() {
    const { showSidebar } = this.state;
    const arrLanguage = [
      {
        'title1': 'Review', 
        'paragraph1': 'I am a developer with more than 17 years of experience.',
        'paragraph2': 'Throughout my career, I have participated in different types of projects involving Point Of Sale, eCommerce, Digital Marketing and Mobile Apps among others.',
        'paragraph3': 'In the recent years, I have been working with React and React Native technologies, as with Angular and Next.js (Front End). ',
        'paragraph4': 'Have had very good combination experiences by mixing them with C#, NodeJS and other types of libraries (helpers)*.',
        'paragraph5': 'I have formed different types of extensive work of 40 or more developers or single developer.',
        'paragraph6': 'Also worked in environments where I had to built the entire solution for a client from the taking of requirements, manage those within project standards, coding both front end and back end, prototyping, all through final implementation.',
        'paragraph7': 'Most of the projects where I worked were large teams within pure Agile methodologies (mostly Scrum) and/or with their different adaptations to the environment.',
        'paragraph8': 'One of my strengths is being able to see things as any kind of user (system users, regular users, support users), to understand best all the requirements and provide feasible solutions according to client needs.',
        'title2': 'Latest Projects and Technologies',
        'title3': 'Other knowledge',
        'title4': 'Contact Info',
        'title5': 'Email',
        'explanation1' : 'In azure we created pipeline functions to receive data (sensor readings) from another application and store this data in another database which was analyzed in Phyton to determine the extended stops. A React site was also created that consumed azure APIs to display the stored data.',
        'explanation2' : 'In this project, a solution was created for order handling. The process begins when an order is placed on an external platform and its cycle ends when it is delivered or canceled.',
        'explanation3' : 'With Baires Dev I was working for one of their clients called Instructure, they have a product called canvas built with React. In this project participated in the team that solve problems. I also participated in the creation of tests with Jasmine.',
        'explanation4' : 'In See Saw labs I was in several projects of React and Native React among them Tripaly an application mobile for a traveling agency designed for Android and iOS which consumed a WordPress API and deployed the available travel.',
        'explanation5' : 'In Qwinix I participated in a project called Sling for Dish which I was from the beginning of the creation of the website. This site was built with Angular.'
      },
      {
        'title1': 'Reseña',
        'paragraph1': 'Soy un desarrollador con más de 17 años de experiencia.',
        'paragraph2': 'A lo largo de mi carrera, he participado en diferentes tipos de proyectos que incluyen puntos de venta, comercio electrónico, marketing digital y aplicaciones móviles, entre otros.',
        'paragraph3': 'En los últimos años, he estado trabajando con las tecnologías React y React Native, como con Angular y Next.js (Front End).',
        'paragraph4': 'He tenido muy buenas experiencias de combinación al mezclarlas con C#, NodeJS y otros tipos de bibliotecas (helpers) *.',
        'paragraph5': 'He formado diferentes tipos de trabajo extenso de 40 o más desarrolladores o un solo desarrollador.',
        'paragraph6': 'También trabajé en entornos en los que tuve que crear la solución completa para un cliente a partir de la toma de requerimientos, administrarlos dentro de los estándares del proyecto, codificar el frontend y el backend, la creación de prototipos, todo hasta la implementación final.',
        'paragraph7': 'La mayoría de los proyectos en los que trabajé fueron grandes equipos dentro de metodologías ágiles puras (en su mayoría Scrum) y / o con sus diferentes adaptaciones al entorno.',
        'paragraph8': 'Una de mis fortalezas es poder ver las cosas como cualquier tipo de usuario (usuarios del sistema, usuarios habituales, usuarios de soporte), para comprender mejor todos los requisitos y brindar soluciones viables según las necesidades del cliente.',
        'title2': 'Últimos proyectos y tecnologías',
        'title3': 'Otros conocimientos',
        'title4': 'Información del contacto',
        'title5': 'Correo',
        'explanation1' : 'En azure creamos funciones pipeline para recibir datos (lecturas de sensores) de otra aplicación y guardar estos datos en otra base de datos la cual es analizada mediante Phyton para determinar las paradas extendidas. También se creó un sitio web React que consumía APIs de azure para desplegar la data almacenada.',
        'explanation2' : 'En este proyecto se creó una solución completa frontend y backend para el manejo de pedidos. El proceso empieza cuando en una plataforma externa una orden pasa a ser pedido y su ciclo finaliza cuando es entregado o cancelado.',
        'explanation3' : 'Con Baires Dev estuve trabajando para uno de sus clientes llamado Instructure, ellos tienen un producto llamado canvas construido con React. En este proyecto participé en el equipo que resuelven problemas. También tuve participación en la creación de test con Jasmine.',
        'explanation4' : 'En See Saw labs estuve en varios proyectos de React y React Native, entre ellos Tripaly una aplicación mobile para una agencia de viajes diseñada para Android y iOS la cual consumía un WordPress API y desplegaba los viajes displonibles.',
        'explanation5' : 'En Qwinix participé en un proyecto llamado Sling para Dish en el cual estuve desde el inicio de la creación del sitio web. Este sitio fue construído con Angular.'
      }
    ]

    const {title1, paragraph1, paragraph2, paragraph3, paragraph4, paragraph5, paragraph6, paragraph7, paragraph8,title2, 
      title3, title4, title5, explanation1, explanation2, explanation3, explanation4, explanation5} = arrLanguage[this.state.language]
    const arrParagraph = [paragraph1, paragraph2, paragraph3, paragraph4, paragraph5, paragraph6,paragraph7,paragraph8];
    const arrProjects = [
      {'companyName': 'Janeiro Digital', 'technologies' : ['C#', 'MS SQL', 'Azure', 'React.js', 'Phyton'], 'explanation' : `${explanation1}`},
      {'companyName': 'Mapache Apps', 'technologies' : ['React.js', 'React-Redux', 'Redux-Thunk', 'Mbox', 'D3.js', 'React-Bootstrap','Styled-Components','Node.js', 'Express', 'Tedius', 'MS SQL'], 'explanation' : `${explanation2}`},
      {'companyName': 'Baires Dev', 'technologies' : ['React.js', 'React-Redux', 'Redux-Thunk', 'Jasmine', 'Docker'], 'explanation' : `${explanation3}`},
      {'companyName': 'See Saw Labs', 'technologies' : ['React.js', 'React-Redux', 'Redux-Thunk', 'React Native', 'MongoDB', 'SASS', 'LESS', 'Jekyll' ], 'explanation' : `${explanation4}`},
      {'companyName': 'Qwinix', 'technologies' : ['Angular 1.x', 'Ruby', 'PostgreSQL', 'Moment.js', 'CSS3', 'HTML5', 'Mocha'],'explanation' : `${explanation5}`},
      {'companyName': `${title3}`, 'technologies' : ['Next.js' ,'Vue.js', 'ASP MVC 5', 'Reporting Services (SSRS)', 'C++','Action Script', 'Visual Basic'], 'explanation' : ''},
    ]
    
    return (
      
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
        {size => (
          <Box fill>
            <WrapAppBar>
                <Heading level='1' margin='none' color='aqua' ><ReactRevealText show={this.state.show}>Luis Diego Jimenez - Senior Full Stack Developer</ReactRevealText></Heading>
                <CheckBox toggle={true} label='Español'  onChange={event => this.setState({language: event.target.checked? 1:0})}/>
                <Button icon={<Notification />} onClick={() => this.setState({ showSidebar: !this.state.showSidebar })} />
            </WrapAppBar>
            <WrapInitialBox direction='row' flex overflow={{ horizontal: 'hidden' }} imageurl={process.env.PUBLIC_URL}>
              <Box flex align='center' justify='start'>
                <WrapBody>
                  <WrapBodyLeft>
                    <WrapImage src={process.env.PUBLIC_URL + '/myphoto.jpg'}></WrapImage>
                  </WrapBodyLeft>
                  <WrapBodyRight>
                    <WrapHeadingReview level='2' color='black'>{title1}</WrapHeadingReview>
                    {(size !== 'small') ? (
                    <Flip left>
                    <WrapParagraph>
                      {
                        arrParagraph.map((paragraph, key) => {
                          return <span key={key}>
                              {paragraph}
                              <br/>
                            </span>
                        })
                      }
                    </WrapParagraph></Flip>):(
                      <WrapParagraph>
                      {
                        arrParagraph.map((paragraph, key) => {
                          return <span key={key}>
                              {paragraph}
                              <br/>
                            </span>
                        })
                      }
                      </WrapParagraph>)}
                  </WrapBodyRight>
                  {(!showSidebar || size !== 'small') ? (
                    <Collapsible direction="horizontal" open={showSidebar}>
                      <WrapDivCollapsible>
                      <Button
                        icon={<FormClose />}
                        onClick={() => this.setState({ showSidebar: false })}
                      />
                        <Heading level='2' color='aqua' textAlign="center">{title4}</Heading>
                        <Box flex align='center' justify='start' color='yellow' round='medium'>
                          <span>Email: luijimor@gmail.com</span>
                        </Box>
                        <Box flex align='center' justify='start' color='yellow' round='medium'>
                          Phone: (506) 88233585
                        </Box>
                        <Box flex align='center' justify='start' color='yellow' round='medium'>
                          Skype: luijimor
                        </Box>
                      </WrapDivCollapsible>
                    </Collapsible>
                    ): (
                    <Layer>
                      <Box
                        background='light-2'
                        tag='header'
                        justify='end'
                        align='center'
                        direction='row'
                      >
                        <Button
                          icon={<FormClose />}
                          onClick={() => this.setState({ showSidebar: false })}
                        />
                      </Box>
                      <Box
                        background='light-2'
                        tag='header'
                        justify='end'
                        align='center'
                      >
                        <Heading level='2' color='aqua'>{title4}</Heading>
                        <Box flex align='center' justify='start' color='yellow' round='medium'>
                          {title5}: luijimor@gmail.com
                        </Box>
                        <Box flex align='center' justify='start' color='yellow' round='medium'>
                          Phone: (506) 88233585
                        </Box>
                        <Box flex align='center' justify='start' color='yellow' round='medium'>
                          Skype: luijimor
                        </Box>
                      </Box>
                    </Layer>
                  )}
                </WrapBody>
                <WrapDivisor>
                 <Jump><WrapHeadingTitle2 level="2" color="white" textAlign="center">{title2}</WrapHeadingTitle2></Jump>
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
                        return <SideBarHeading key={i} level='3' color='black' headingTitle={project.companyName} arrList={project.technologies} position={'left'} explanation={project.explanation}/>
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
