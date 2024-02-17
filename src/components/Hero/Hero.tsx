import "./Hero.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import img from '../../assets/background-img.jpg'
import logo from '../../assets/Group.svg'
const Hero:React.FC = () => {
  return (
    <header style={{backgroundImage:`url(${img})`}}>
        <div className=" color-overlay d-flex justify-content-center align-items-center "> 
           <div className="container ">
                <div className="row flex-column-reverse flex-lg-row text-center">
                    <div className="col-12 col-lg-6 d-flex align-items-center justify-content-around">
                        
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className=" right-pane ">
                            <h1 className="text-white fst-regular fw-light">
                            Welcome to <br></br><span className="font-monospace website-title">"Legacy Community Center"</span>.
                            <hr id="break-line"></hr>
                            <div >
                                <span className="text-slogan">
                                    We aid to your satisfaction 
                                </span>
                            </div>
                            </h1>
                        </div>

                        <button className="btn btn-primary px-md-5 py-2 m-5">
                            <span id="get-started">Get Started</span>
                        </button>
                    </div>
                </div>
                <div className="img-logo">
                <img src={logo} alt="" className="logo img-thu"/>
            </div> 
           </div>
                
            
        </div>
    </header>
  )
}

export default Hero
