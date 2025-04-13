import { Link } from "react-router"

function WelcomeSection() {
    return (
        <div className='welcomeSection w-full h-90'>
        {/* <img src="./images/welcome-section.jpg" className="" /> */}
        {/* tiltle & button */}
        <div className='bg-[#FFFFFF] h-2/5'></div>
        <div className='bg-[#FFFBF3] h-3/5'>
          <div className='w-1/2 float-right'>
            <h1>名畫檔案</h1>
          </div>
        </div>
        {/* <h1 className='ml-10'>名畫檔案</h1> */}
        <div></div>
        <img src="../images/welcome-section.svg" className="relative -top-7/8 h-4/5 ml-25" />
      </div>
        
    );
}

export default WelcomeSection;