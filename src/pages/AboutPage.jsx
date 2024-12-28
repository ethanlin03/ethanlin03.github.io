import NavBar from "../components/NavBar";

const AboutPage = () => {
    return (
        <div>
            <NavBar />
            <div className="max-w-2xl mx-auto mt-32">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="font-bold text-xl -ml-80">About Me</h1>
                    <p className="max-w-lg text-left mt-4">
                        Hi, I'm Ethan! I'm a Computer Science student at University of California, Irvine with a passion for web development. My journey for programming started in 2015 where my curiosity of games
                        met my love for creativity and creation. Since then I've expanded my knowledge and skills through many technologies and languages.
                    </p>
                    <p className="max-w-lg text-left mt-4">
                        I've been able to use my skills to create a twist on a classic game, Rock Paper Scissors, to creating a website to help track my medications. 
                        Through each project I've been able to build upon my technical skills while pushing my innovativeness and creativeness.
                        Let's connect and create fresh, exciting applications for the world!
                    </p>

                    <h1 className="font-bold text-xl -ml-80">Education</h1>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;