import React, {Component} from 'react'
import {Container,Grid,Image,Header, Icon, Button, Label, List, Message, Segment, Responsive} from 'semantic-ui-react'
import { Link } from 'react-router-dom';



class CurriculumVitae extends Component {
    state = { 
        paperWidth:950,
        paperHeight:1227,
        minHorizontalPadding:20,

        isTablet:false,
        isMobile:false,
        pdf:true
     }

    componentDidMount=()=>{
        this.checkWidth()
    }

    
    getWidth = () => {
        const isSSR = typeof window === 'undefined'

        // console.log(typeof window)
        // console.log(isSSR)
        // console.log(Responsive.onlyTablet.minWidth)
        
        return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
    }

    checkWidth=()=>{
        console.log('check width')

        var width=this.getWidth()
        console.log('width',width)

        if(width>=this.state.paperWidth){
            this.setState({isTablet:false,isMobile:false})
        }
        
        if(width<this.state.paperWidth+2*this.state.minHorizontalPadding){
            this.setState({isTablet:true,isMobile:false})
        }
        if(width<650+2*this.state.minHorizontalPadding){
            this.setState({isMobile:true,isTablet:false})
        }
    }

    renderTarget = () => {
        return (
            <span style={{
                border: '2px solid rgba(110,110,110,1)',
                backgroundColor: 'rgba(230,230,230,1)',
                // background:'rgba(110,110,110,1)',
                width:'10px',
                height:'10px',
                // borderRadius:'10px',
                display:'inline-block',
                position:'absolute',
                top:'50%',
                left:'-0px',
                transform:'translate(-50%,-50%) rotate(45deg)'
            }}>
                <span
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%,-50%)',
                        width: '4px',
                        height: '4px',
                        backgroundColor: 'rgb(110,110,110)',
                        // borderRadius: '10px',
                        // overflow: 'hidden'
                    }}
                />
            </span>
        )

        return (
            <span style={{
                // border: '2px solid rgba(110,110,110,1)',
                // backgroundColor: 'rgba(230,230,230,1)',
                background:'rgba(110,110,110,1)',
                width:'10px',
                height:'10px',
                borderRadius:'10px',
                display:'inline-block',
                position:'absolute',
                top:'50%',
                left:'-0px',
                transform:'translate(-50%,-50%)'
            }}>
                {/* <span
                    style={{
                        position: 'absolute',
                        top: 'calc( 50% + 0px )',
                        left: 'calc( 50% + 0px )',
                        transform: 'translate(-50%,-50%)',
                        width: '5px',
                        height: '5px',
                        backgroundColor: 'rgb(110,110,110)',
                        borderRadius: '10px',
                        overflow: 'hidden'
                    }}
                /> */}
            </span>
        )
    }
    

    render() { 
        console.log(this.state.isTablet)
        console.log(this.state.isMobile)
        var isDesktop=true
        if(this.state.isTablet||this.state.isMobile){
            isDesktop=false
        }else{
            isDesktop=true
        }

        return (
            <Responsive
                as={'div'}
                onUpdate={this.checkWidth}
                style={{
                    // minWidth:`${this.state.paperWidth}px`,
                    background:'rgba(0,0,0,.7)',
                    padding: this.state.pdf?'0':`5vh ${this.state.minHorizontalPadding}px 5vh`,
                    // transform: this.state.pdf?'scale(.85)':''
                }}
            >
            <div
                style={{
                    // backgroundColor:'rgba(0,0,0,.1)',
                    // padding: this.state.pdf?'0':'5vh 5vw',
                    // textAlign: 'center',
                    // width: this.state.isTablet||this.state.isMobile?'100%':`${this.state.paperWidth}px`,
                    maxWidth:`${this.state.paperWidth}px`,
                    // height: `${this.state.paperHeight}px`,
                    padding:'0',
                    margin:'auto',
                    borderRadius:'2px',
                    overflow:'hidden',
                    boxShadow:'0px 2px 8px 2px rgba(0,0,0,0.5)',
                    // transform: this.state.pdf?'scale(.85)':''
                }}
                // compact
                // piled
            >
                <Grid style={{
                    width: isDesktop?`${this.state.paperWidth}px`:'100%',
                    height: isDesktop?`${this.state.paperHeight}px`:'auto',
                    margin:'auto',
                    padding: '0',
                    // backgroundColor:'rgba(0,0,0,.1)'
                }}>
                    <Grid.Row style={{padding:'0'}}>



                        {/* ************************** */}
                        {/* ****Profile Section**** */}
                        {/* ************************** */}
                        <Grid.Column 
                            // width={4} 
                            style={{
                                // backgroundColor:'rgba(0,0,0,.6)',
                                backgroundColor:'rgba(105,105,105,1)',
                                width:isDesktop?'300px':'100%'
                            }}
                        >
                            <div style={{
                                padding:this.state.isMobile?'50px 0 20px':'30px 20px 20px',
                                textAlign:isDesktop?'left':this.state.isTablet?'left':'center',
                                color:'white',
                                fontWeight:'300',
                                fontSize:'15px'
                                }}>
                                
                                <div
                                    style={{
                                        marginBottom:'30px',
                                        textAlign:isDesktop?'left':this.state.isTablet?'left':'center',
                                    }}
                                >
                                    <div style={{
                                        textAlign:'center',
                                        width:isDesktop?'100%':this.state.isTablet?'250px':'100%',
                                        paddingTop: '100%',
                                        position: 'relative',
                                        display:'inline-block',
                                        margin:'auto',
                                        borderRadius: '150px',
                                        overflow: 'hidden'
                                        // margin:isDesktop?'0':'0 2em'
                                    }}>
                                        <Image 
                                            // src='https://react.semantic-ui.com/images/wireframe/image.png' 
                                            src='/profile-pic-2.jpg'
                                            // size='small' 
                                            style={{
                                                display:'inline-block',
                                                width:this.state.isMobile?'150px':'100%',
                                                // height:this.state.isMobile?'150px':'271.25636px',
                                                // height:this.state.isMobile?'150px':'200px',
                                                position: 'absolute',
                                                top: '-15px',
                                                left: '0'
                                            }}
                                            
                                        />
                                    </div>

                                    <div 
                                        style={{
                                            textAlign:'left',
                                            display:isDesktop?'block':'inline-block',
                                            // minWidth:isDesktop?'0':'250px',
                                            maxWidth:'350px',
                                            width:isDesktop?'auto':this.state.isTablet?'calc(100% - 250px - 40px)':'100%',
                                            verticalAlign:'top',
                                            margin:isDesktop?'20px 0 0':this.state.isTablet?'0 20px':'0'
                                        }}
                                    >
                                        {
                                            !isDesktop?
                                            <Header 
                                                as={'h1'} 
                                                inverted 
                                                style={{
                                                    fontSize:'42px',
                                                    fontWeight:'300',
                                                    margin:'20px 0px',
                                                    textAlign:this.state.isTablet?'left':'center'
                                                }}
                                            >
                                                Indo Halim
                                            </Header>
                                            : null
                                        }

                                        {/* Hacktiv8 Career Development */}
                                        {/* this part is not needed */}
                                        {/* <div><span style={{fontWeight:'500',marginRight:'auto'}}>Gender :</span> <span style={{float:'right',fontWeight:'300'}}>Male</span></div> */}
                                        {/* <div><span style={{fontWeight:'500',marginRight:'auto'}}>Nationality :</span> <span style={{float:'right',fontWeight:'300'}}>Indonesia</span></div> */}
                                        {/* <div><span style={{fontWeight:'500',marginRight:'auto'}}>Ethnicity :</span> <span style={{float:'right',fontWeight:'300'}}>Chinese Indonesian</span></div> */}
                                        {/* <div><span style={{fontWeight:'500',marginRight:'auto'}}>Birth :</span> <span style={{float:'right',fontWeight:'300'}}>Jakarta, 12 October 1987</span></div> */}
                                        


                                        {/* <div><span style={{fontWeight:'bold'}}>Email</span>: mde50526@gmail.com</div>
                                        <div><span style={{fontWeight:'bold'}}>Whatsapp</span>: +6281999041167</div> */}
                                    </div>
                                </div>

                                <div
                                    style={{
                                        fontSize: '15px',
                                        marginBottom: '40px'
                                    }}
                                >
                                    <div
                                        style={{
                                            marginBottom: '.5em',
                                            display: 'flex',
                                            flexDirection: 'row'
                                        }}
                                    >
                                        <Icon name='mail' style={{marginRight: '1.5em'}}/>
                                        <span>
                                            mde50526@gmail.com
                                        </span>
                                    </div>
                                    <div
                                        style={{
                                            marginBottom: '.5em',
                                            display: 'flex',
                                            flexDirection: 'row'
                                        }}
                                    >
                                        <Icon name='phone' style={{marginRight: '1.5em'}}/>
                                        <span >
                                            +6281999041167
                                        </span>
                                    </div>
                                    <div
                                        style={{
                                            marginBottom: '.5em',
                                            display: 'flex',
                                            flexDirection: 'row'
                                        }}
                                    >
                                        <Icon name='map marker alternate' style={{marginRight: '1.5em', verticalAlign: 'top'}}/>
                                        <div style={{display: 'inline-block'}}><p>Kramat Pela,</p>Jakarta Selatan</div>
                                    </div>
                                    <div
                                        style={{
                                            marginBottom: '.5em',
                                            display: 'flex',
                                            flexDirection: 'row'
                                        }}
                                    >
                                        <Icon name='linkedin' style={{marginRight: '1.75em', marginLeft: '.15em'}}/>
                                        <span style={{wordBreak: 'break-word', wordWrap: ''}}>
                                            https://www.linkedin.com/in/indo-halim-8132971a5
                                        </span>
                                    </div>
                                    <div
                                        style={{
                                            marginBottom: '.5em',
                                            display: 'flex',
                                            flexDirection: 'row'
                                        }}
                                    >
                                        <Icon name='github' style={{marginRight: '1.75em', marginLeft: '.1em'}}/>
                                        <span style={{wordBreak: 'break-word', wordWrap: ''}}>
                                            https://github.com/indoderiano
                                        </span>
                                    </div>

                                </div>

                                {
                                    !isDesktop?
                                    <>
                                    <div style={{
                                        width:'95%',
                                        height:'1px',
                                        background:'rgba(255,255,255,.7)',
                                        margin:'0px 0 3px'
                                    }}/>
                                    <div style={{
                                        width:'100%',
                                        height:'1px',
                                        background:'rgba(255,255,255,.7)',
                                        margin:'0px 0 2em'
                                    }}/>
                                    <div style={{
                                        // display:'inline-block',
                                        display:this.state.isTablet?'flex':'block',
                                        justifyContent:'space-between',
                                        width:this.state.isTablet?`95%`:'100%',
                                        paddingBottom:'15px',
                                        border:'1px solid rgba(255,255,255,.7)',
                                        borderTop:'0',
                                        borderLeft:'0',
                                        borderRight:'0',
                                        marginBottom:'3px',
                                        marginTop:this.state.isTablet?'0':'3em',
                                        // fontSize:this.state.isTablet?'13px':'inherit'
                                    }}>
                                        <div 
                                            style={{
                                                // width:`${100/3}%`,
                                                // float:'left',
                                                display:this.state.isTablet?'inline-block':'block',
                                                verticalAlign:'top',
                                                textAlign:'center',
                                                justifiyContent:'center',
                                                borderLeft: '0',
                                                borderTop:'0',
                                                borderBottom:'0',
                                                margin:this.state.isTablet?'0':'2em 0 4em',
                                                // marginRight:'10%'
                                        }}>
                                            <Icon name='mail' style={{marginBottom:'5px',fontSize:'18px'}}/>
                                            <p>
                                                mde50526@gmail.com
                                            </p>
                                        </div>
                                        <div 
                                            style={{
                                                // width:`${100/3}%`,
                                                // float:'left',
                                                display:this.state.isTablet?'inline-block':'block',
                                                verticalAlign:'top',
                                                // display:'flex',
                                                textAlign:'center',
                                                // alignItems:'center',
                                                justifyContent:'center',
                                                // border:'1px solid rgba(0,0,0,.7)',
                                                borderLeft: '0',
                                                borderTop:'0',
                                                borderBottom:'0',
                                                margin:this.state.isTablet?'0':'4em 0',
                                                // padding:'28px 14px',
                                                // marginRight:'10%'
                                        }}>
                                            <Icon name='phone' style={{marginBottom:'5px',fontSize:'18px'}}/>
                                            <p style={{marginBottom:'0px'}}>
                                                +6281999041167
                                            </p>
                                            <span style={{fontSize:'10px'}}>
                                                available via whatsapp
                                            </span>
                                        </div>
                                        <div 
                                            style={{
                                                // width:`${100/3}%`,
                                                display:this.state.isTablet?'inline-block':'block',
                                                verticalAlign:'top',
                                                // float:'left',
                                                // border:'1px solid gray',
                                                textAlign:'center',
                                                borderLeft: '0',
                                                borderTop:'0',
                                                borderBottom:'0',
                                                // padding:'28px 14px',
                                                // marginRight:'5%',
                                                margin:this.state.isTablet?'0 5% 0 0':'4em auto 2em',
                                                minWidth:'169px',
                                                maxWidth:'170px'
                                        }}>
                                            <Icon name='map marker alternate' style={{marginBottom:'5px',fontSize:'18px'}}/>
                                            <div style={{textAlign:'center'}}><p>Gandaria,</p>Jakarta Selatan</div>
                                        </div>
                                    </div>
    
                                    <div style={{
                                        width:'100%',
                                        height:'1px',
                                        background:'rgba(255,255,255,.7)',
                                        margin:'0px 0 4em'
                                    }}/>
                                    </>
                                    : null
                                }



                                {/* Hacktiv8 Career Development */}
                                {/* this part is not needed */}
                                {/* <div style={{
                                    marginBottom:this.state.isMobile?'60px':'40px',
                                    // textAlign:!this.state.isMobile?'left':'center'
                                }}>
                                    <Header as={'h4'} style={{color:'white'}}>Language</Header>
                                    <div><Icon name="circle" style={{fontSize:'8px',verticalAlign:'2px'}}></Icon>Bahasa Indonesia</div>
                                    <div><Icon name="circle" style={{fontSize:'8px',verticalAlign:'2px'}}></Icon>English: Conversational </div>
                                </div> */}


                                {/* <div style={{marginBottom:'40px'}}>
                                    <Header as={'h4'} style={{color:'white'}}>About Me</Header>
                                    <p>Hello, as coding enthusiast, I have a lot of passion for solving problems using analytical and logical thinking. Quote from Steve Jobs, "Everybody should learn to program a computer, because it teaches you how to think."</p>
                                </div> */}


                                {/* <div style={{
                                    marginBottom:this.state.isMobile?'60px':'40px',
                                    width:this.state.isMobile?'80%':'100%',
                                    display:this.state.isMobile?'inline-block':'block'
                                    }}>

                                    <Header as={'h4'} style={{color:'white'}}>Front End Skills</Header>

                                    <Label style={style.skillLabel}>HTML/CSS</Label>
                                    <Label style={style.skillLabel}>Javascript</Label>
                                    <Label style={style.skillLabel}>React JS</Label>
                                    <Label style={style.skillLabel}>Vue JS</Label>
                                    <Label style={style.skillLabel}>React Native</Label>

                                    <Header as={'h4'} style={{color:'white', marginTop: '20px'}}>Back End Skills</Header>
                                    <Label style={style.skillLabel}>Node JS/Express</Label>
                                    <Label style={style.skillLabel}>My Sql</Label>
                                    <Label style={style.skillLabel}>Postgre Sql</Label>
                                    <Label style={style.skillLabel}>Sequelize</Label>
                                    <Label style={style.skillLabel}>Redis</Label>
                                    <Label style={style.skillLabel}>Socket IO</Label>
                                    <Label style={style.skillLabel}>Apollo GraphQL</Label>

                                    <Header as={'h4'} style={{color:'white', marginTop: '20px'}}>Other Skills</Header>
                                    <Label style={style.skillLabel}>Git</Label>
                                    <Label style={style.skillLabel}>Google Auth</Label>
                                </div> */}

                                <div style={{
                                    marginBottom:this.state.isMobile?'60px':'40px',
                                    // width:this.state.isMobile?'70%':'100%',
                                    // display:this.state.isMobile?'inline-block':'block'
                                }}>
                                    <Header as={'h2'} style={{color:'white',margin:'0 0 5px'}}>Portfolios</Header>
                                    {/* <Message size='tiny'>Due to sleep mode on the host, the sites will take a moment before showing</Message> */}
                                    <List 
                                        divided 
                                        selection={!this.state.pdf} 
                                        inverted 
                                        // celled
                                        style={{
                                            fontSize:'14px',
                                            display:this.state.isMobile?'inline-block':'block',
                                            textAlign:'left',
                                            margin: '0'
                                        }}
                                    >
                                        {/* {
                                            this.state.pdf?
                                            <List.Item 
                                                as={'a'} 
                                                href='https://cv-indohalim.web.app/' 
                                                target="_blank"
                                            >
                                                <div>cv (online)</div>
                                                cv-indohalim.web.app
                                            </List.Item>
                                            : null
                                        } */}

                                        <List.Item
                                            style={{
                                                padding: '.6em 0',
                                                borderBottom: '1px solid rgba(255,255,255,.3)',
                                            }}
                                        >
                                            <Header>Tango Store</Header>
                                            <p
                                                style={{margin: '.5em 0'}}
                                            >A simple E-commerce Web App</p>
                                            <a
                                                href='https://tango-ecommerce.web.app/'
                                                target="_blank"
                                            >popstore-indo.herokuapp.com</a>
                                            <div style={{marginTop: '.5em'}}>
                                                <Label style={style.skillLabelMini}>Vue JS</Label>
                                                <Label style={style.skillLabelMini}>Node JS</Label>
                                                <Label style={style.skillLabelMini}>Express</Label>
                                                {/* <Label style={style.skillLabelMini}>Nodemailer</Label> */}
                                                <Label style={style.skillLabelMini}>Postresql</Label>
                                                {/* <Label style={style.skillLabelMini}>Cloudinary</Label> */}
                                            </div>
                                        </List.Item>

                                        {/* <List.Item
                                            style={{
                                                padding: '.6em 0',
                                                borderBottom: '1px solid white',
                                            }}
                                        >
                                            <Header>Popstore</Header>
                                            <p
                                                style={{margin: '.5em 0'}}
                                            >E-commerce Web App with different type of users, visit website for more info</p>
                                            <a
                                                href='https://popstore-indo.herokuapp.com/' 
                                                target="_blank"
                                            >popstore-indo.herokuapp.com</a>
                                            <div style={{marginTop: '.5em'}}>
                                                <Label style={style.skillLabelMini}>React JS</Label>
                                                <Label style={style.skillLabelMini}>Node JS</Label>
                                                <Label style={style.skillLabelMini}>Express</Label>
                                                <Label style={style.skillLabelMini}>Nodemailer</Label>
                                                <Label style={style.skillLabelMini}>Mysql</Label>
                                                <Label style={style.skillLabelMini}>Cloudinary</Label>
                                            </div>
                                        </List.Item> */}

                                        <List.Item
                                            style={{
                                                padding: '.6em 0',
                                                borderBottom: '1px solid rgba(255,255,255,.3)',
                                                marginTop: '.2em',
                                                borderTop: '1px solid rgba(255,255,255,.3)',
                                            }}
                                        >
                                            <Header>Kanban</Header>
                                            <p
                                                style={{margin: '.5em 0'}}
                                            >Kanban app, with cool feature, drag and drop by vue</p>
                                            <a
                                                style={{whiteSpace: 'nowrap'}}
                                                href='https://kanban-project-hacktiv8.web.app/' 
                                                target="_blank"
                                            >kanban-project-hacktiv8.web.app</a>
                                            <div style={{marginTop: '.5em'}}>
                                                <Label style={style.skillLabelMini}>Vue JS</Label>
                                                <Label style={style.skillLabelMini}>Node JS</Label>
                                                <Label style={style.skillLabelMini}>Express</Label>
                                                <Label style={style.skillLabelMini}>Google Sign In</Label>
                                                <Label style={style.skillLabelMini}>Socket IO</Label>
                                            </div>
                                        </List.Item>

                                        <List.Item
                                            style={{
                                                padding: '.6em 0',
                                                borderBottom: '1px solid rgba(255,255,255,.3)',
                                                marginTop: '.2em',
                                                borderTop: '1px solid rgba(255,255,255,.3)',
                                            }}
                                        >
                                            <Header>Jamboore</Header>
                                            <p
                                                style={{margin: '.5em 0'}}
                                            >A simple ecommerce store built in Android App. Visit my personal website for more info</p>
                                            <a
                                                style={{whiteSpace: 'nowrap'}}
                                                href='https://indo-halim.web.app/' 
                                                target="_blank"
                                            >indo-halim.web.app</a>
                                            <div style={{marginTop: '.5em'}}>
                                                <Label style={style.skillLabelMini}>React Native</Label>
                                                <Label style={style.skillLabelMini}>Node JS</Label>
                                                <Label style={style.skillLabelMini}>Express</Label>
                                            </div>
                                        </List.Item>

                                        <List.Item
                                            style={{
                                                padding: '1em 0',
                                                marginTop: '.2em',
                                                borderTop: '1px solid rgba(255,255,255,.3)',
                                            }}
                                        >
                                            {/* <Header>Jamboore</Header> */}
                                            <p
                                                style={{marginBottom: '.5em', paddingTop: '3em'}}
                                            >More portfolios on my personal website</p>
                                            <div
                                                style={{marginTop: '.5em'}}
                                            >
                                                <Icon name='hand point right outline'/>
                                                <a
                                                    style={{whiteSpace: 'nowrap', float: 'right'}}
                                                    href='https://indo-halim.web.app/' 
                                                    target="_blank"
                                                >indo-halim.web.app</a>

                                            </div>
                                        </List.Item>


                                        {/* <List.Item 
                                            as={'a'} 
                                            href='https://popstore-indo.herokuapp.com/' 
                                            target="_blank"
                                        >
                                            {
                                                this.state.pdf?
                                                <>
                                                <div>(web app)</div>
                                                popstore-indo.herokuapp.com
                                                </>
                                                :
                                                'Popstore (marketplace)'
                                            }
                                        </List.Item>
                                        <List.Item 
                                            as={'a'} 
                                            href='https://jamboree-indo.herokuapp.com/' 
                                            target="_blank"
                                        >
                                            {
                                                this.state.pdf?
                                                <>
                                                <div>(web app)</div>
                                                jamboree-indo.herokuapp.com
                                                </>
                                                :
                                                'Jamboree (web app)'
                                            }
                                        </List.Item>
                                        <List.Item 
                                            as={'a'} 
                                            href='https://purihawila-f1c1f.web.app/' 
                                            target="_blank"
                                        >
                                            {
                                                this.state.pdf?
                                                <>
                                                <div>(web app)</div>
                                                purihawila-f1c1f.web.app
                                                </>
                                                :
                                                'Puri Hawila (static)'
                                            }
                                            <Label color='blue' size='small' style={{marginLeft:this.state.pdf?'0':'1em',padding:'3px 6px'}}>
                                                responsive
                                            </Label>
                                        </List.Item>
                                        <List.Item 
                                            as={'a'} 
                                            href='https://shifu-indo.herokuapp.com/' 
                                            target="_blank"
                                        >
                                            {
                                                this.state.pdf?
                                                <>
                                                <div>(web app)</div>
                                                shifu-indo.herokuapp.com
                                                </>
                                                :
                                                'Shifu (web app)'
                                            }
                                        </List.Item>
                                        <List.Item 
                                            as={'a'} 
                                            href='https://github.com/indoderiano/Jamboree' 
                                            target="_blank"
                                        >
                                            {
                                                this.state.pdf?
                                                <>
                                                <div>(android app)</div>
                                                github.com/indoderiano/Jamboree
                                                </>
                                                :
                                                'Jamboree (android app via github)'
                                            }
                                        </List.Item> */}
                                    </List>
                                </div>


                            </div>
                        </Grid.Column>


                        {/* ************************** */}
                        {/* ****Details Section**** */}
                        {/* ************************** */}
                        <Grid.Column 
                            // width={12}
                            style={{
                                // backgroundColor:'rgba(0,0,0,.1)',
                                backgroundColor:'rgba(230,230,230,1)',
                                width:isDesktop?`${this.state.paperWidth-300}px`:'100%',
                                padding:this.state.isMobile?'40px 20px 60px':'20px 30px 30px 40px',
                                color:'rgba(0,0,0,.8)',
                                position: 'relative',
                            }}
                        >

                            {/* <div
                                style={{
                                    position: 'absolute',
                                    top: '40%',
                                    left: '70%',
                                    width: '60%',
                                    paddingTop: '60%',
                                    // height: '30%',
                                    // backgroundColor: 'rgba(0,0,0,.07)',
                                    border: '10px solid rgba(0,0,0,.07)',
                                    transform: 'rotate(45deg)',
                                    transformOrigin: '50% 50%'
                                }}
                            /> */}

                            {/* <div
                                style={{
                                    position: 'absolute',
                                    top: '40%',
                                    left: '80%',
                                    width: '60%',
                                    paddingTop: '60%',
                                    // height: '30%',
                                    backgroundColor: 'rgba(0,0,0,.07)',
                                    border: '10px solid rgba(0,0,0,.0)',
                                    transform: 'rotate(45deg)',
                                    transformOrigin: '50% 50%'
                                }}
                            /> */}

                            {/* <div
                                style={{
                                    position: 'absolute',
                                    top: '40%',
                                    left: '95%',
                                    width: '60%',
                                    paddingTop: '60%',
                                    // height: '30%',
                                    backgroundColor: 'rgba(0,0,0,.07)',
                                    border: '10px solid rgba(0,0,0,.0)',
                                    transform: 'rotate(45deg)',
                                    transformOrigin: '50% 50%'
                                }}
                            /> */}

                            {/* <div
                                style={{
                                    position: 'absolute',
                                    top: '40%',
                                    left: '110%',
                                    width: '60%',
                                    paddingTop: '60%',
                                    // height: '30%',
                                    backgroundColor: 'rgba(0,0,0,.07)',
                                    border: '10px solid rgba(0,0,0,.0)',
                                    transform: 'rotate(45deg)',
                                    transformOrigin: '50% 50%'
                                }}
                            /> */}


                            {/* <div
                                style={{
                                    position: 'absolute',
                                    top: '-40%',
                                    left: '30%',
                                    width: '550%',
                                    paddingTop: '550%',
                                    // height: '30%',
                                    backgroundColor: 'rgba(0,0,0,.07)',
                                    borderRadius: '2000px',
                                    overflow: 'hidden'
                                }}
                            /> */}

                            {/* <div
                                style={{
                                    position: 'absolute',
                                    top: '-30%',
                                    left: '70%',
                                    width: '550%',
                                    paddingTop: '550%',
                                    // height: '30%',
                                    backgroundColor: 'rgba(0,0,0,.07)',
                                    borderRadius: '2000px',
                                    overflow: 'hidden'
                                }}
                            /> */}

                            {/* <div
                                style={{
                                    position: 'absolute',
                                    top: '-20%',
                                    left: '70%',
                                    width: '550%',
                                    paddingTop: '550%',
                                    // height: '30%',
                                    backgroundColor: 'rgba(0,0,0,.07)',
                                    borderRadius: '2000px',
                                    overflow: 'hidden'
                                }}
                            /> */}

                            {/* <div
                                style={{
                                    position: 'absolute',
                                    top: '0%',
                                    left: '0%',
                                    width: '100%',
                                    height: '100%',
                                    backgroundImage: "url('https://semantic-ui.com/images/backgrounds/14.jpg')",
                                    backgroundSize: 'cover',
                                    overflow: 'hidden',
                                    opacity: '.4'
                                }}
                            /> */}

                            
                            <div style={{
                                display:isDesktop?'block':'none',
                                margin:this.state.pdf?'0px 0 20px':'30px 0',
                                border:'0px solid black'
                                }}>
                                <Header as={'h1'} style={{fontSize:'60px',fontWeight:'200', margin: '0 0 0 -5px'}}>Indo Halim</Header>
                                <Header as={'h4'}
                                    style={{
                                        margin:'0 0 20px',
                                        color: 'rgba(0,0,0,.7)',
                                        fontWeight: '300',
                                        fontSize: '27px'
                                    }}>Web Fullstack Developer</Header>

                                <div
                                    style={{
                                        border:'1.5px solid rgba(0,0,0,.25)',
                                        borderTop:'0',
                                        borderLeft:'0',
                                        borderRight:'0',
                                        paddingBottom: '15px',
                                        marginBottom: '3px',

                                        display: 'flex',
                                        flexDirection: 'row',

                                    }}
                                >
                                    <Grid>
                                        <Grid.Column width={6}>
                                            <Header as={'h4'} style={{color:'rgba(0,0,0,.7)'}}>Front End Skills</Header>

                                            <Label style={style.skillLabel}>HTML/CSS</Label>
                                            <Label style={style.skillLabel}>Javascript</Label>
                                            <Label style={style.skillLabel}>React JS</Label>
                                            <Label style={style.skillLabel}>Vue JS</Label>
                                            <Label style={style.skillLabel}>React Native</Label>
                                            <Label style={style.skillLabel}>
                                                Yew
                                                {/* <Label as='a' basic size='tiny'
                                                    style={{
                                                        backgroundColor: "white!important",
                                                    }}
                                                >
                                                    Rust
                                                </Label> */}
                                                <span
                                                    style={{
                                                        background: "white",
                                                        letterSpacing: "1px",
                                                        padding: "2px 4px",
                                                        marginLeft: "1em",
                                                        // border: "1px solid orange",
                                                        borderRadius: "3px",
                                                        fontSize: "10px",
                                                        fontWeight: "bolder",
                                                        // color: "orange",
                                                        color:'rgba(0,0,0,.6)',
                                                        verticalAlign: "1px"
                                                    }}
                                                >
                                                    Rust
                                                </span>
                                            </Label>
                                        </Grid.Column>
                                        <Grid.Column width={7}>
                                            <Header as={'h4'} style={{color:'rgba(0,0,0,.7)'}}>Back End Skills</Header>
                                            <Label style={style.skillLabel}>Node JS/Express</Label>
                                            <Label style={style.skillLabel}>My Sql</Label>
                                            <Label style={style.skillLabel}>Postgre Sql</Label>
                                            <Label style={style.skillLabel}>MongoDB</Label>
                                            <Label style={style.skillLabel}>Sequelize</Label>
                                            <Label style={style.skillLabel}>Redis</Label>
                                            <Label style={style.skillLabel}>Socket IO</Label>
                                            {/* <Label style={style.skillLabel}>Apollo GraphQL</Label> */}
                                        </Grid.Column>
                                        <Grid.Column width={3}>
                                            <Header as={'h4'} style={{color:'rgba(0,0,0,.7)'}}>Other</Header>
                                            {/* <Label style={style.skillLabel}>Git</Label> */}
                                            {/* <Label style={style.skillLabel}>Google Auth</Label> */}
                                            <Label style={style.skillLabel}>Cloudinary</Label>
                                        </Grid.Column>
                                    </Grid>


                                </div>

                                {/* <div style={{
                                    display:'inline-block',
                                    paddingBottom:'15px',
                                    border:'2px solid rgba(0,0,0,.5)',
                                    borderTop:'0',
                                    borderLeft:'0',
                                    borderRight:'0'
                                }}>
                                    <div 
                                        style={{
                                            float:'left',
                                            // display:'flex',
                                            textAlign:'center',
                                            justifiyContent:'center',
                                            // flexDirection:'column',
                                            // alignItems:'center',
                                            // border:'1px solid rgba(0,0,0,.7)',
                                            borderLeft: '0',
                                            borderTop:'0',
                                            borderBottom:'0',
                                            // padding:'28px 14px'
                                            paddingRight:'45px'
                                    }}>
                                        <Icon name='mail' style={{marginBottom:'5px',fontSize:'18px'}}/>
                                        <p>
                                            mde50526@gmail.com
                                        </p>
                                    </div>
                                    <div 
                                        style={{
                                            float:'left',
                                            // display:'flex',
                                            textAlign:'center',
                                            // alignItems:'center',
                                            justifyContent:'center',
                                            // border:'1px solid rgba(0,0,0,.7)',
                                            borderLeft: '0',
                                            borderTop:'0',
                                            borderBottom:'0',
                                            // padding:'28px 14px',
                                            paddingRight:'45px'
                                    }}>
                                        <Icon name='phone' style={{marginBottom:'5px',fontSize:'18px'}}/>
                                        <p style={{marginBottom:'0px'}}>
                                            +6281999041167
                                        </p>
                                        <span style={{fontSize:'10px'}}>
                                            available via whatsapp
                                        </span>
                                    </div>
                                    <div 
                                        style={{
                                            float:'left',
                                            // border:'1px solid gray',
                                            textAlign:'center',
                                            borderLeft: '0',
                                            borderTop:'0',
                                            borderBottom:'0',
                                            // padding:'28px 14px',
                                            paddingRight:'50px',
                                            maxWidth:'170px',
                                            marginBottom: '10px'
                                    }}>
                                        <Icon name='map marker alternate' style={{marginBottom:'5px',fontSize:'18px'}}/>
                                        <div style={{textAlign:'center'}}><p>Gandaria,</p>Jakarta Selatan</div>
                                    </div>
                                    <div 
                                        style={{
                                            float:'left',
                                            // border:'1px solid gray',
                                            textAlign:'center',
                                            borderLeft: '0',
                                            borderTop:'0',
                                            borderBottom:'0',
                                            // padding:'28px 14px',
                                            paddingRight:'50px',
                                            maxWidth:'170px',
                                            wordWrap: 'break-word'
                                    }}>
                                        <Icon name='map marker alternate' style={{marginBottom:'5px',fontSize:'18px'}}/>
                                        <div style={{textAlign:'center'}}><p>https://www.linkedin.com/in/indo-halim-8132971a5/</p></div>
                                    </div>
                                    <div 
                                        style={{
                                            float:'left',
                                            // border:'1px solid gray',
                                            textAlign:'center',
                                            borderLeft: '0',
                                            borderTop:'0',
                                            borderBottom:'0',
                                            // padding:'28px 14px',
                                            paddingRight:'50px',
                                            maxWidth:'170px',
                                            wordWrap: 'break-word'
                                    }}>
                                        <Icon name='map marker alternate' style={{marginBottom:'5px',fontSize:'18px'}}/>
                                        <div style={{textAlign:'center'}}><p>https://github.com/indoderiano</p></div>
                                    </div>
                                </div> */}

                                <div style={{
                                    width:'95%',
                                    height:'1.5px',
                                    background:'rgba(0,0,0,.25)',
                                    margin:'0px 0'
                                }}/>

                                {/* <div style={{fontSize:'18px',marginBottom:'5px'}}>Email: mde50526@gmail.com</div>
                                <div style={{fontSize:'18px'}}>Whatsapp: +6281999041167</div> */}
                            </div>

                            <div style={{marginBottom:'20px',border:'0px solid black'}}>
                                <h1 style={{fontWeight:'400',letterSpacing:'3px',marginBottom:'.4em'}}>About Me</h1>
                                <div style={{fontSize:'15px', marginLeft:'15px'}}>
                                    Hello, as coding enthusiast, I have a lot of passion for solving problems using analytical and logical thinking because it teaches me how to think. And I am keen to improve my way of thinking in order to be a better person individually and in community.
                                </div>
                            </div>

                            <div style={{marginBottom:'20px',border:'0px solid black'}}>
                                <h1 style={{fontWeight:'400',letterSpacing:'3px',marginBottom:'.4em'}}>Education</h1>
                                <div style={{marginLeft:'15px', marginBottom: '15px'}}>
                                    <div style={{fontSize:'15px',fontWeight:'600',margin:'10px 0 5px'}}>
                                        <div>Hacktiv8 (November 2020 - March 2021)</div>
                                        
                                    </div>
                                    <div style={{fontSize:'15px',fontWeight:'400'}}>Fullstack Web Development Javascript</div>
                                    <div>Grade: <span style={{fontWeight:'700',marginLeft:'.3em'}}>95%</span></div>
                                    {/* <div>Electronic & engineering</div> */}
                                    {/* <div>Grade: <span style={{fontWeight:'700',marginLeft:'.3em'}}>94</span></div> */}

                                </div>
                                {/* <div style={{marginLeft:'15px', marginBottom: '15px'}}>
                                    <div style={{fontSize:'15px',fontWeight:'600',margin:'10px 0 5px'}}>
                                        <div>Purwadhika, Digital Technology School (January 2020 - July 2020)</div>
                                        
                                    </div>
                                    <div style={{fontSize:'15px',fontWeight:'400'}}>Web And Mobile Development Course</div>
                                    
                                    <div>Grade: <span style={{fontWeight:'700',marginLeft:'.3em'}}>94%</span></div>

                                </div> */}
                                <div style={{marginLeft:'15px', marginTop: '10px'}}>
                                    {/* <div>2006 - 2009</div> */}
                                    <div style={{fontSize:'15px',fontWeight:'600',marginBottom:'5px'}}>King's College, University of London (2006 - 2009)</div>
                                    <div style={{fontSize:'15px',fontWeight:'400'}}>
                                        Bachelor of Engineering 
                                        <span style={{fontSize:'15px'}}> (Electronic & Engineering)</span>
                                    </div>
                                    {/* <div>Electronic & engineering</div> */}
                                    <div>Grade: upper second class degree (or equal to GPA 3.3<span style={{fontSize:'12px',verticalAlign:'2px'}}>+</span>)</div>

                                </div>

                            </div>

                            <div style={{
                                border:'0px solid white',
                                position:'relative',
                                marginBottom:'40px',
                                // maxWidth:'570px',
                                }}>
                                <h1 style={{fontWeight:'400',letterSpacing:'3px'}}>Experience</h1>
                                <Grid style={{border:'0px solid red', marginLeft:'6px'}}>
                                    <Grid.Row>
                                        <Grid.Column width={3}>
                                            <div style={{
                                                height:'100%',
                                                position:'relative',
                                                fontWeight:'500',
                                                color:'rgba(0,0,0,.7)',
                                                fontFamily:'Montserrat',
                                                minWidth:this.state.pdf?'0':'50px',
                                                // padding:'0 0 0 20px',
                                                // border:'4px solid rgba(0,0,0,.3)', 
                                                // borderTop:'0px',
                                                // borderBottom:'0',
                                                // borderRight:'0'
                                            }}>
                                                <span style={{
                                                    width:'1.4px',
                                                    height:'97%',
                                                    display:'inline-block',
                                                    background:'rgba(130,130,130,1)',
                                                    position:'absolute',
                                                    top:'3%',
                                                    left:'0px',
                                                    transform:'translate(-50%,0)'
                                                }}>
                                                </span>

                                                <div style={{position:'relative',padding:this.state.isMobile?'0 0 0 10px':'0 0 0 20px'}}>
                                                    {
                                                        this.renderTarget()
                                                    }
                                                    Present
                                                    {/* 2020 <p style={{fontSize: '12px'}}>September</p> */}
                                                </div>
                                                <div style={{
                                                    position:'relative',
                                                    padding:this.state.isMobile?'0 0 0 10px':'0 0 0 20px',
                                                    marginTop:'310px',
                                                    marginBottom: '35px',
                                                }}>
                                                    {
                                                        this.renderTarget()
                                                    }
                                                    2021 <p style={{fontSize: '12px'}}>May</p>
                                                </div>

                                                <div
                                                    style={{
                                                        position:'relative',
                                                        padding:this.state.isMobile?'0 0 0 10px':'0 0 0 20px',
                                                        // marginBottom: '45px',
                                                }}>
                                                    {
                                                        this.renderTarget()
                                                    }
                                                    2020 <p style={{fontSize: '12px'}}>September</p>
                                                </div>
                                                {/* <div style={{
                                                    position:'relative',
                                                    padding:this.state.isMobile?'0 0 0 10px':'0 0 0 20px',
                                                    marginTop:'50px'
                                                }}>
                                                    {
                                                        this.renderTarget()
                                                    }
                                                    2020 <p style={{fontSize: '12px'}}>August</p>
                                                </div> */}

                                                {/* <div style={{
                                                    position:'relative',
                                                    padding:this.state.isMobile?'0 0 0 10px':'0 0 0 20px',
                                                    marginTop:'11.5px'
                                                }}>
                                                    <p style={{color: 'rgba(0,0,0,.4)', fontWeight: '400'}}>-----------</p>
                                                    <p style={{color: 'rgba(0,0,0,.4)', fontWeight: '400', marginTop: '18.5px'}}>-----------</p>
                                                </div> */}
                                                
                                                {/* <div style={{
                                                    position:'relative',
                                                    padding:this.state.isMobile?'0 0 0 10px':'0 0 0 20px',
                                                    marginTop:this.state.isMobile?'98px':'25px',
                                                    }}>
                                                    {
                                                        this.renderTarget()
                                                    }
                                                    2020
                                                    <p style={{fontSize: '12px'}}>January</p>
                                                </div> */}
                                                <div style={{
                                                    position:'relative',
                                                    padding:this.state.isMobile?'0 0 0 10px':'0 0 0 20px',
                                                    marginTop:this.state.isMobile?'98px':'85px',
                                                    }}>
                                                    {
                                                        this.renderTarget()
                                                    }
                                                    2019
                                                    <p style={{fontSize: '12px'}}>October</p>
                                                </div>
                                                {/* <div style={{
                                                    position:'relative',
                                                    padding:this.state.isMobile?'0 0 0 10px':'0 0 0 20px',
                                                    marginTop:this.state.isMobile?'130px':'93px'
                                                    }}>
                                                    <span style={{
                                                        background:'rgba(110,110,110,1)',
                                                        width:'10px',
                                                        height:'10px',
                                                        borderRadius:'10px',
                                                        display:'inline-block',
                                                        position:'absolute',
                                                        top:'50%',
                                                        left:'-0px',
                                                        transform:'translate(-50%,-50%)'
                                                    }}></span>
                                                    2016
                                                </div> */}
                                            </div>
                                        </Grid.Column>
                                        <Grid.Column width={13} style={{height:this.state.pdf?'auto':'auto',border:'0px solid yellow'}}>
                                            <div style={{
                                                marginBottom:'10px',
                                                height:isDesktop?'auto':this.state.isTablet?'82.33px':'121px'
                                                }}>
                                                <div style={{fontSize:'15px',fontWeight:'600'}}>Web Developer - Front End</div>
                                                <div style={{color:'rgba(0,0,0,.4)',fontWeight:'500',marginBottom:'5px'}}>Telkom Indonesia</div>
                                                <Label style={style.skillLabel}>
                                                    Yew
                                                    <span
                                                        style={{
                                                            background: "white",
                                                            letterSpacing: "1px",
                                                            padding: "2px 4px",
                                                            marginLeft: "1em",
                                                            // border: "1px solid orange",
                                                            borderRadius: "3px",
                                                            fontSize: "10px",
                                                            fontWeight: "bolder",
                                                            // color: "orange",
                                                            color:'rgba(0,0,0,.6)',
                                                            verticalAlign: "1px"
                                                        }}
                                                    >
                                                        Rust
                                                    </span>
                                                </Label>
                                                <div class="ui list">
                                                    <div class="item">
                                                        <i class="check square icon"></i>
                                                        <div class="content">
                                                            {/* <div class="header">site</div> */}
                                                            <div class="description">Developed and maintain web application with rust based language, including user interface and responsive design</div>
                                                        </div>
                                                    </div>
                                                    <div class="item">
                                                        <i class="check square icon"></i>
                                                        <div class="content">
                                                            <div class="description">Integrated with backend logic and APIs</div>
                                                        </div>
                                                    </div>
                                                    <div class="item">
                                                        <i class="check square icon"></i>
                                                        <div class="content">
                                                            <div class="description">Performed thorough testing and debugging to ensure error-free applications</div>
                                                        </div>
                                                    </div>
                                                    <div class="item">
                                                        <i class="check square icon"></i>
                                                        <div class="content">
                                                            <div class="description">Conducted in code reviews to maintain code quality</div>
                                                        </div>
                                                    </div>
                                                    <div class="item">
                                                        <i class="check square icon"></i>
                                                        <div class="content">
                                                            <div class="description">Mentor junior frontend developers to enhance their coding skills and contribute effectively to project development.</div>
                                                        </div>
                                                    </div>
                                                    <div class="item">
                                                        <i class="star icon"></i>
                                                        <div class="content">
                                                            <div class="header">Achievements</div>
                                                            <div class="list">
                                                                <div class="item">
                                                                    <i class="check square icon"></i>
                                                                    <div class="content">
                                                                        <div class="description">Successfully integrated a complex API, enhancing the website's functionality.</div>
                                                                    </div>
                                                                </div>
                                                                <div class="item">
                                                                    <i class="check square icon"></i>
                                                                    <div class="content">
                                                                        <div class="description">Improved development times by 30% through performance optimization method</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <div style={{marginBottom: '.5em'}}>Developed and maintained web application with rust based language, Created and designed web application, provided training, and assigned tasks to team members</div> */}
                                            </div>
                                            
                                            {/* <div style={{
                                                marginBottom:'30px',
                                                height:isDesktop?'auto':this.state.isTablet?'82.33px':'121px'
                                                }}>
                                                <div style={{fontSize:'15px',fontWeight:'600'}}>Freelancer - Front End</div>
                                                <div style={{color:'rgba(0,0,0,.4)',fontWeight:'500',marginBottom:'5px'}}>Yourpay Indonesia</div>
                                                <div style={{marginBottom: '.5em'}}>Improved website application as part of company's internal application system</div>
                                                <Label style={style.skillLabel}>Vue JS</Label>
                                            </div> */}

                                            <div style={{marginBottom: '15px', color:'rgba(0,0,0,.4)'}}>
                                                <p style={{marginBottom: '0'}}>-------------------------------------------------------------------------------</p>
                                                <p style={{marginBottom: '0'}}>Hacktiv8, Fullstack Web Development Course</p>
                                                <p style={{marginBottom: '0'}}>-------------------------------------------------------------------------------</p>
                                            </div>


                                            <div style={{
                                                marginBottom:'10px',
                                                height:isDesktop?'auto':this.state.isTablet?'82.33px':'121px'
                                                }}>
                                                <div style={{fontSize:'15px',fontWeight:'600'}}>Web Designer</div>
                                                {/* <div style={{color:'rgba(0,0,0,.4)',fontWeight:'500',marginBottom:'5px'}}>Hawila Berkat Anugrah Ltd</div> */}
                                                <div
                                                    style={{marginBottom: '.5em'}}
                                                >Created and design static websites</div>
                                                <Label style={style.skillLabel}>HTML/CSS</Label>
                                                <Label style={style.skillLabel}>Javascript</Label>
                                                <Label style={style.skillLabel}>Google Cloud Platform</Label>
                                            </div>

                                            {/* <div style={{
                                                marginBottom:'10px',
                                                height:isDesktop?'auto':this.state.isTablet?'82.33px':'121px'
                                                }}>
                                                <div style={{fontSize:'15px',fontWeight:'600'}}>Web Designer</div>
                                                <div style={{color:'rgba(0,0,0,.4)',fontWeight:'500',marginBottom:'5px'}}>Hawila Berkat Anugrah Ltd</div>
                                                <div>Designed a static company website as part of villa rental in Bali, deployed with Google Cloud Platform</div>
                                            </div>
                                            <div style={{
                                                marginBottom:'10px',
                                                height:isDesktop?'auto':this.state.isTablet?'82.33px':'121px'
                                                }}>
                                                <div style={{fontSize:'15px',fontWeight:'600'}}>Web Designer (as freelancer)</div>
                                                <div style={{color:'rgba(0,0,0,.4)',fontWeight:'500',marginBottom:'5px'}}>via Freelancer.com</div>
                                                <div>Worked on online projects, improved user experience and web layout</div>
                                            </div>
                                            <div style={{
                                                marginBottom:'10px',
                                                height:this.state.isMobile?'101px':'auto'
                                                }}>
                                                <div style={{fontSize:'15px',fontWeight:'600'}}>Web Designer</div>
                                                <div style={{color:'rgba(0,0,0,.4)',fontWeight:'500',marginBottom:'5px'}}>Active Football Academy</div>
                                                <div>Developed a static web for a small business of football training programs for children</div>
                                            </div> */}
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </div>

                            {/* <div style={{position:'relative'}}>
                                <h1 style={{fontWeight:'400',letterSpacing:'3px'}}>Volunteer Experience</h1>
                                <Grid style={{marginLeft:'6px'}}>
                                    <Grid.Row>
                                    <Grid.Column width={3}>
                                            <div style={{
                                                height:'100%',
                                                position:'relative',
                                                fontWeight:'500',
                                                color:'rgba(0,0,0,.7)',
                                                fontFamily:'Montserrat',
                                                minWidth:'50px',
                                                // padding:'0 0 0 20px',
                                                // border:'4px solid rgba(0,0,0,.3)', 
                                                // borderTop:'0px',
                                                // borderBottom:'0',
                                                // borderRight:'0'
                                            }}>
                                                <span style={{
                                                    width:'4px',
                                                    height:'95%',
                                                    display:'inline-block',
                                                    background:'rgba(0,0,0,.3)',
                                                    position:'absolute',
                                                    top:'5%',
                                                    left:'0px',
                                                    transform:'translate(-50%,0)'
                                                }}>
                                                </span>
                                                <div style={{position:'relative',padding:this.state.isMobile?'0 0 0 10px':'0 0 0 20px'}}>
                                                    <span style={{
                                                        background:'rgba(110,110,110,1)',
                                                        width:'10px',
                                                        height:'10px',
                                                        borderRadius:'10px',
                                                        display:'inline-block',
                                                        position:'absolute',
                                                        top:'50%',
                                                        left:'-0px',
                                                        transform:'translate(-50%,-50%)'
                                                    }}></span>
                                                    2019
                                                </div>
                                                <div style={{position:'relative',padding:this.state.isMobile?'0 0 0 10px':'0 0 0 20px',marginTop:isDesktop?'150px':this.state.isTablet?'150px':'210px'}}>
                                                    <span style={{
                                                        background:'rgba(110,110,110,1)',
                                                        width:'10px',
                                                        height:'10px',
                                                        borderRadius:'10px',
                                                        display:'inline-block',
                                                        position:'absolute',
                                                        top:'50%',
                                                        left:'-0px',
                                                        transform:'translate(-50%,-50%)'
                                                    }}></span>
                                                    2018
                                                </div>
                                            </div>
                                        </Grid.Column>
                                        <Grid.Column width={13} >
                                            
                                            <div style={{
                                                marginBottom:'10px',
                                                height:isDesktop?'auto':this.state.isTablet?'82.33px':'121px'
                                                }}>
                                                <div style={{fontSize:'15px',fontWeight:'600'}}>Web Designer (as freelancer)</div>
                                                <div style={{color:'rgba(0,0,0,.4)',fontWeight:'500',marginBottom:'5px'}}>via Freelancer.com</div>
                                                <div>Worked on online projects, improved user experience and web layout</div>
                                            </div>
                                            <div style={{
                                                marginBottom:'10px',
                                                height:this.state.isMobile?'101px':'auto'
                                                }}>
                                                <div style={{fontSize:'15px',fontWeight:'600'}}>Web Designer</div>
                                                <div style={{color:'rgba(0,0,0,.4)',fontWeight:'500',marginBottom:'5px'}}>Active Football Academy</div>
                                                <div>Developed a static web for a small business of football training programs for children</div>
                                            </div>
                                            
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </div> */}
                        
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
            </Responsive>
         );
    }
}

const style={
    skillLabel:{
        margin:'0 .3em .3em 0',
        background: '#007580',
        color: 'white'
    },
    skillLabelMini: {
        margin:'0 .3em .3em 0',
        fontSize: '10px'
    }
}
 
export default CurriculumVitae;

