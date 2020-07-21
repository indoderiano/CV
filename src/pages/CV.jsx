import React, {Component} from 'react'
import {Container,Grid,Image,Header, Icon, Button, Label, List, Message, Segment, Responsive} from 'semantic-ui-react'
import { Link } from 'react-router-dom';



class CurriculumVitae extends Component {
    state = { 
        paperWidth:950,
        minHorizontalPadding:20,

        isTablet:false,
        isMobile:false,
        pdf:false
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
                }}
            >
            <div
                style={{
                    // backgroundColor:'rgba(0,0,0,.1)',
                    // padding: this.state.pdf?'0':'5vh 5vw',
                    // textAlign: 'center',
                    // width: this.state.isTablet||this.state.isMobile?'100%':`${this.state.paperWidth}px`,
                    maxWidth:`${this.state.paperWidth}px`,
                    padding:'0',
                    margin:'auto',
                    borderRadius:'2px',
                    overflow:'hidden',
                    boxShadow:'0px 2px 8px 2px rgba(0,0,0,0.5)'
                }}
                // compact
                // piled
            >
                <Grid style={{
                    width: isDesktop?`${this.state.paperWidth}px`:'100%',
                    // width: `${this.state.paperWidth}px`,
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
                                padding:this.state.isMobile?'50px 0 20px':'50px 20px 20px',
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
                                        display:'inline-block',
                                        margin:'auto'
                                        // margin:isDesktop?'0':'0 2em'
                                    }}>
                                        <Image 
                                            // src='https://react.semantic-ui.com/images/wireframe/image.png' 
                                            src='/profile-pic.jpg'
                                            // size='small' 
                                            style={{
                                                display:'inline-block',
                                                // marginBottom:'30px',
                                                // marginRight:isDesktop?'0':'5em',
                                                // margin:isDesktop?'auto':'',
                                                width:this.state.isMobile?'150px':'200px',
                                                height:this.state.isMobile?'150px':'200px',
                                                borderRadius:'100px'
                                            }}
                                            
                                        />
                                    </div>

                                    <div 
                                        style={{
                                            textAlign:'left',
                                            display:'inline-block',
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
                                        <div><span style={{fontWeight:'500',marginRight:'auto'}}>Gender :</span> <span style={{float:'right',fontWeight:'300'}}>Male</span></div>
                                        <div><span style={{fontWeight:'500',marginRight:'auto'}}>Nationality :</span> <span style={{float:'right',fontWeight:'300'}}>Indonesia</span></div>
                                        {/* <div><span style={{fontWeight:'500',marginRight:'auto'}}>Ethnicity :</span> <span style={{float:'right',fontWeight:'300'}}>Chinese Indonesian</span></div> */}
                                        <div><span style={{fontWeight:'500',marginRight:'auto'}}>Birth :</span> <span style={{float:'right',fontWeight:'300'}}>Jakarta, 12 October 1987</span></div>
                                        
                                        {/* <div><span style={{fontWeight:'bold'}}>Email</span>: mde50526@gmail.com</div>
                                        <div><span style={{fontWeight:'bold'}}>Whatsapp</span>: +6281999041167</div> */}
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
                                            <p style={{textAlign:'left'}}>Jalan Rambai no.9, Kebayoran Baru, Jakarta Selatan, 12130</p>
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




                                <div style={{
                                    marginBottom:this.state.isMobile?'60px':'40px',
                                    // textAlign:!this.state.isMobile?'left':'center'
                                }}>
                                    <Header as={'h4'} style={{color:'white'}}>Language</Header>
                                    <div><Icon name="circle" style={{fontSize:'8px',verticalAlign:'2px'}}></Icon>Bahasa Indonesia</div>
                                    <div><Icon name="circle" style={{fontSize:'8px',verticalAlign:'2px'}}></Icon>English: Conversational </div>
                                </div>



                                {/* <div style={{marginBottom:'40px'}}>
                                    <Header as={'h4'} style={{color:'white'}}>About Me</Header>
                                    <p>Hello, as coding enthusiast, I have a lot of passion for solving problems using analytical and logical thinking. Quote from Steve Jobs, "Everybody should learn to program a computer, because it teaches you how to think."</p>
                                </div> */}


                                <div style={{
                                    marginBottom:this.state.isMobile?'60px':'40px',
                                    width:this.state.isMobile?'80%':'100%',
                                    display:this.state.isMobile?'inline-block':'block'
                                    // textAlign:!this.state.isMobile?'left':'center'
                                    }}>
                                    <Header as={'h4'} style={{color:'white'}}>Skills</Header>
                                    <Label style={style.skillLabel}>HTML/CSS</Label>
                                    <Label style={style.skillLabel}>Javascript</Label>
                                    <Label style={style.skillLabel}>React JS</Label>
                                    <Label style={style.skillLabel}>Node JS/Express</Label>
                                    <Label style={style.skillLabel}>My Sql</Label>
                                    <Label style={style.skillLabel}>React Native</Label>
                                    <Label style={style.skillLabel}>"Debugging"</Label>
                                    
                                </div>

                                <div style={{
                                    marginBottom:this.state.isMobile?'60px':'40px',
                                    // width:this.state.isMobile?'70%':'100%',
                                    // display:this.state.isMobile?'inline-block':'block'
                                }}>
                                    <Header as={'h4'} style={{color:'white',margin:'0'}}>Portfolios</Header>
                                    {/* <Message size='tiny'>Due to sleep mode on the host, the sites will take a moment before showing</Message> */}
                                    <List 
                                        divided 
                                        selection={!this.state.pdf} 
                                        inverted 
                                        // celled
                                        style={{
                                            fontSize:'14px',
                                            display:this.state.isMobile?'inline-block':'block',
                                            textAlign:'left'
                                        }}
                                    >
                                        <List.Item 
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
                                        </List.Item>
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
                                width:isDesktop?'650px':'100%',
                                padding:this.state.isMobile?'40px 20px 45px':'40px 40px 45px',
                                color:'rgba(0,0,0,.8)'
                            }}
                        >
                            
                            <div style={{
                                display:isDesktop?'block':'none',
                                margin:this.state.pdf?'20px 0 30px':'30px 0',
                                border:'0px solid black'
                                }}>
                                <Header as={'h1'} style={{fontSize:'51px',fontWeight:'300',marginBottom:this.state.pdf?'20px':'40px'}}>Indo Halim</Header>


                                <div style={{
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
                                            paddingRight:'20px',
                                            maxWidth:'170px'
                                    }}>
                                        <Icon name='map marker alternate' style={{marginBottom:'5px',fontSize:'18px'}}/>
                                        <p style={{textAlign:'left'}}>Jalan Rambai no.9, Kebayoran Baru, Jakarta Selatan, 12130</p>
                                    </div>
                                </div>

                                <div style={{
                                    width:'100%',
                                    height:'2px',
                                    background:'rgba(0,0,0,.5)',
                                    margin:'0px 0'
                                }}/>

                                
                                {/* <div style={{fontSize:'18px',marginBottom:'5px'}}>Email: mde50526@gmail.com</div>
                                <div style={{fontSize:'18px'}}>Whatsapp: +6281999041167</div> */}
                            </div>

                            <div style={{marginBottom:'20px',border:'0px solid black'}}>
                                <h1 style={{fontWeight:'400',letterSpacing:'3px',marginBottom:'.2em'}}>About Me</h1>
                                <div style={{fontSize:'15px'}}>
                                    Hello, as coding enthusiast, I have a lot of passion for solving problems using analytical and logical thinking because it teaches me how to think. Therefore, I am keen to pursue a career in programming to improve my way of thinking in order to be a better person individually and in community.
                                </div>
                            </div>

                            <div style={{marginBottom:'20px',border:'0px solid black'}}>
                                <h1 style={{fontWeight:'400',letterSpacing:'3px',marginBottom:'.2em'}}>Education</h1>
                                <div>
                                    {/* <div>2006 - 2009</div> */}
                                    <div style={{fontSize:'15px',fontWeight:'600',marginBottom:'5px'}}>King's College, University of London (2006 - 2009)</div>
                                    <div style={{fontSize:'15px',fontWeight:'400'}}>Bachelor of Engineering </div>
                                    <div>Electronic & engineering</div>
                                    <div>Grade: upper second class degree (or equal to GPA 3.3<span style={{fontSize:'12px',verticalAlign:'2px'}}>+</span>)</div>

                                </div>

                                <div>
                                    <div style={{fontSize:'15px',fontWeight:'600',margin:'10px 0 5px'}}>
                                        <div>Purwadhika, Digital Technology School (January 2020 - July 2020)</div>
                                        {/* <div>January 2020 - July 2020</div> */}
                                        <a 
                                            href='https://www.purwadhika.com/job-connector-web-mobile-development' 
                                            target="_blank"
                                            style={{
                                                fontSize:'13px',
                                                // textDecoration:'underline'
                                            }}
                                        >
                                            {
                                                this.state.pdf?
                                                'www.purwadhika.com/job-connector-web-mobile-development'
                                                :
                                                'More About Purwadhika '
                                            }
                                            {
                                                !this.state.pdf?
                                                <Icon name='angle double right' style={{verticalAlign:'-1px'}}/>
                                                : null
                                            }
                                        </a>
                                    </div>
                                    <div style={{fontSize:'15px',fontWeight:'400'}}>Web And Mobile Development Course</div>
                                    {/* <div>Electronic & engineering</div> */}
                                    <div>Grade: <span style={{fontWeight:'700',marginLeft:'.3em'}}>94</span></div>

                                </div>
                            </div>

                            <div style={{
                                border:'0px solid white',
                                position:'relative',
                                marginBottom:'40px',
                                // maxWidth:'570px',
                                }}>
                                <h1 style={{fontWeight:'400',letterSpacing:'3px'}}>Experience</h1>
                                <Grid style={{border:'0px solid red'}}>
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
                                                    2020
                                                </div>
                                                <div style={{
                                                    position:'relative',
                                                    padding:this.state.isMobile?'0 0 0 10px':'0 0 0 20px',
                                                    marginTop:this.state.isMobile?'98px':'60px',
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
                                                    2018
                                                </div>
                                                <div style={{
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
                                                </div>
                                            </div>
                                        </Grid.Column>
                                        <Grid.Column width={13} style={{height:this.state.pdf?'200px':'auto',border:'0px solid yellow'}}>
                                            <div style={{
                                                marginBottom:'10px',
                                                height:isDesktop?'auto':this.state.isTablet?'82.33px':'121px'
                                                }}>
                                                <div style={{fontSize:'15px',fontWeight:'600'}}>Web Designer</div>
                                                <div style={{color:'rgba(0,0,0,.4)',fontWeight:'500',marginBottom:'5px'}}>Hawila Berkat Anugrah Ltd</div>
                                                <div>Designed a static company website as part of villa rental in Bali, deployed with Google Cloud Platform</div>
                                            </div>
                                            <div>
                                                <div style={{fontSize:'15px',fontWeight:'600'}}>Operational</div>
                                                <div style={{color:'rgba(0,0,0,.4)',fontWeight:'500',marginBottom:'5px'}}>Hawila Berkat Anugrah Ltd</div>
                                                <div>Managed workers for construction work in residence area, including to get involved with local organization regarding the project</div>
                                            </div>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </div>

                            <div style={{position:'relative'}}>
                                <h1 style={{fontWeight:'400',letterSpacing:'3px'}}>Volunteer Experience</h1>
                                <Grid>
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
                                                {/* <div style={{position:'relative',padding:'0 0 0 20px',marginTop:'60px'}}>
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
                                            {/* <div style={{marginBottom:'10px'}}>
                                                <div style={{fontSize:'15px',fontWeight:'600'}}>Coach Assistant</div>
                                                <div style={{color:'rgba(0,0,0,.6)',marginBottom:'5px'}}>Active Football Academy</div>
                                                <div>Assisted children age of between 6 to 16 years old using movement drills for their trainings</div>
                                            </div>
                                            <div>
                                                <div style={{fontSize:'15px',fontWeight:'600'}}>Asian Games 2018 Volunteer</div>
                                                <div style={{color:'rgba(0,0,0,.6)',marginBottom:'5px'}}>Inasgoc</div>
                                                <div>Assisted athletes, officials, and spectators from many countries</div>
                                            </div> */}
                                            
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </div>
                        
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

    },
}
 
export default CurriculumVitae;

