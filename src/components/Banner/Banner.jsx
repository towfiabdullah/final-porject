
import { Link } from 'react-router-dom';

const Banner = () => {
    return (

        <div className="mx-5 lg:mx-0 flex flex-col-reverse lg:flex-row lg:h-[554px] lg:w-full banner-bg playfair-display-font lg:mt-[52px] px-5 py-5 lg:px-[120px] lg:py-[80px]">

            <div className="space-y-5 lg:space-y-12 pt-14 text-center lg:text-left">
                <h1 className="lg:text-[56px] font-bold ">
                    Books to freshen up your bookshelf
                </h1>

                <div>
                    <Link to="/listBook">
                        <button className="nav-btn1 px-4 lg:px-6 py-2 lg:py-4 text-xl font-bold text-white">View The List</button>
                    </Link>
                </div>
            </div>

            <img className="mx-auto h-[200px] lg:h-[394px] w-[180px] lg:w-[318px]" src="https://i.ibb.co/7nt4h4H/pngwing-1.png" alt="" />
        </div>
    );
};


export default Banner;