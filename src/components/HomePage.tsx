import Hero from "./Hero";
import PostList from "./PostList"

const HomePage = () => {
    return(
        <div className="h-full bg-[#111827] ">
            <div className="mx-auto max-w-screen h-full w-full">
                <Hero isHomePage={true}/>
                <PostList/>
            </div>
            
        </div>
    )
}

export default HomePage;