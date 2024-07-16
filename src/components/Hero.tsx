import { Plus, X } from "lucide-react";
import AddPostForm from "./AddPost";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

interface HeroProps {
    isHomePage: boolean;
}

const Hero = ({
    isHomePage
}: HeroProps) => {
    return(
        <div className="flex flex-col justify-center items-center pt-10">
            <div>
            <img className="h-[100px] md:h-[200px] " src="risidio_logo.svg" alt="My SVG" />
            </div>
           
            <div className="pt-10">
                <Link to={isHomePage?'/create-post':'/'}>
                    <Button variant='outline' className="bg-[#111827]  md:text-lg text-white p-4 md:p-6 rounded-full font-semibold hover:bg-blue-300">
                        {isHomePage?<Plus/>:<X/>}
                        {isHomePage?"Create a post":"Cancel"}
                    </Button>
                </Link>
           
            </div>
        </div>
    )
}

export default Hero;