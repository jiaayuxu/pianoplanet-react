import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import {  Header,List,Grid,Menu,Button,Image, Container,Icon} from 'semantic-ui-react';




class Divider extends React.Component {
  render() {
    return (

          <Container fluid id = "phone" textAlign ='right' margin-top ="10px" >

            <Container id ="phonefont"
>
             Call Us Today! 808-537-337


            </Container>


          </Container>




    )
  }
}

class HeaderMenu extends React.Component {
  render() {
    return (

        <Menu borderless className = "HeaderMenu" >
          <Container id ="Aloha">
            <Image src='//pianoplanethawaii.com/wp-content/uploads/2016/03/pp_logo-300x70.png' centered/>




          </Container>


          <Menu.Item right>Home</Menu.Item>
          <Menu.Item right>Current Promotions</Menu.Item>
          <Menu.Item right>New Pianos</Menu.Item>
          <Menu.Item right>Preowned Pianos</Menu.Item>
          <Menu.Item right>About</Menu.Item>
          <Menu.Item right>Contact</Menu.Item>
          <Menu.Item right><Icon name ="search" right/></Menu.Item>





        </Menu>




    )
  }
}

class Slide extends React.Component {
  render() {
    return (
        <Container id = "Middle" textAlign="left">
        <Image src='//pianoplanethawaii.com/wp-content/uploads/2018/10/Piano-Planet-Free-Roland-Web-Banner-370x1060-1.jpg' centered/>
        </Container>
    )
  }
}


class AboutUs extends React.Component {
  render() {
    return (
        <Grid >
          <Grid.Row>
            <Grid.Column id = "about" floated='centered' width={6} >


              <Header id = 'fonts' as='h1'>Aloha and welcome to Piano Planet, the exclusive Steinway & Sons dealership in Hawaii.</Header>




              For over 40 years we have been successful at providing our customers with “The Intelligent Buying Experience” and only the best in quality products and services. This is the strongest product line up in our industry, all in one comfortable showroom.  From the beginner to the concert pianist, we cover it all. We look forward to guiding you to the right instrument.  Contact us today to begin your exciting musical journey.


            </Grid.Column>



            <Grid.Column id = "signup" width={4}>


                <Header id ="fonts" as ='h1' textAlign ="left">Join Our Piano Lover’s Club</Header>




               Sign-up for exclusive offers, invitations to recitals, concerts and more. Join the Steinway & Sons Hawaii Family today!



              <Container id ="Aloha">
              <Button id ="brown" >SIGN UP TODAY!</Button>
              </Container>



              <Image src = '//pianoplanethawaii.com//wp-content/uploads/2015/02/unnamed.png' right width="180" height="180" />
            </Grid.Column>



          </Grid.Row>


        </Grid>




    )
  }
}



class FooterMenu extends React.Component {
  render() {
    return (

        <Grid className ="footer-background" >

          <Grid.Column width={3} id ="foot">
            <Menu.Item className ='header' id = "fonts">GIVE US A CALL!</Menu.Item>


            <List  id = "footfont" textAlign ='left'>
              <List.Item>On Oahu:</List.Item>
              <List.Item> Phone: 808-537-3373</List.Item>
              <List.Item> Fax: 808-537-3374</List.Item>

            </List>


          </Grid.Column>


          <Grid.Column width={3}>
            <Menu.Item className ='header' id = "fonts">SHOWROOM LOCATION</Menu.Item>

            <List  id = "footfont" textAlign ='left'>
              <List.Item >Na Lama Kukui Building:</List.Item>
              <List.Item>     560 North Nimitz Highway Suite 115A</List.Item>
              <List.Item>Honolulu, HI 96817: </List.Item>



            </List>

            <a href="url" >Get Directions On Google Maps</a>

          </Grid.Column>


          <Grid.Column width={3}>
            <Menu.Item className = 'header' id="fonts" >STORE HOURS</Menu.Item>



            <List id = "footfont" textAlign ='left' >

              <List.Item > Monday – Friday:</List.Item>
              <List.Item> 10am – 6pm</List.Item>
              <List.Item>Saturday:</List.Item>
              <List.Item>10am – 5pm</List.Item>
              <List.Item>Sunday:</List.Item>

              <List.Item>12pm – 5pm</List.Item>





            </List>



          </Grid.Column>


          <Grid.Column width = {3}>


            <List id = "footfont" textAlign ='left'>

              <List.Item> <Image src='http://dyn.yelpcdn.com/extimg/en_US/rrc/qaAfRxbivING4GAA8tEm6g.png' height ="55" width ="125"/></List.Item>



              <Icon  bordered name ="facebook f" size = "large"/>
              <Icon bordered name ="twitter" size ="large"/>
              <Icon bordered name ="yelp" size = "large"/>



            </List>




          </Grid.Column>





        </Grid>

    )
  }
}

class PianoPlanet extends React.Component {

  render() {
    return (
        <div>
          <Divider/>

          <HeaderMenu/>
          <Slide/>
          <AboutUs/>
          <FooterMenu/>
        </div>
    );
  }
}












ReactDOM.render(<PianoPlanet/>, document.getElementById('root'));
