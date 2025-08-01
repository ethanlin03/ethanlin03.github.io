import NavBar from "../components/NavBar";
import ProjectCard from "../components/ProjectCard";
import pillpal from "../assets/pillpal.png";
import goodeats from "../assets/goodeats.png";
import invitation from "../assets/invitation.png";
import checkers from "../assets/checkers.svg";
import rps from "../assets/rps.png";
import kapechat from "../assets/kapechat.png";
import moviereview from "../assets/movie-review.png";
import { motion } from "framer-motion";

const ProjectsSection = ({ needNavBar }) => {
    return (
        <section id="projects" className="scroll-mt-32">
            {needNavBar && <NavBar/>}
            <motion.h1 
                initial={{ opacity: 0, y: -60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-center font-bold text-[26px]"
            >
                Projects
            </motion.h1>
            <div className="mt-10 flex flex-col items-center gap-8 p-6 lg:p-8 mb-20">
                <ProjectCard 
                    imageSrc={moviereview}
                    title={"Movie Reviews AI"} 
                    skills={[{ text: "Python" }, { text: "Numpy" }, { text: "Pandas" }, { text: "AI" }]} 
                    description="Movie Reviews AI is a sentiment analysis project where multiple AI models were developed to classify movie reviews as positive or negative. 
                    The project leveraged Python along with libraries like NumPy and Pandas for data processing on a dataset of 50,000 reviews. 
                    A variety of machine learning algorithms were used—including Feedforward Neural Networks, Random Forest, K-Nearest Neighbors (KNN), and Logistic Regression—were implemented and tested to optimize performance.
                    The models saw an average ~80% accuracy and the highest having ~90% accuracy on test data.
                    "
                />
                <ProjectCard 
                    imageSrc={kapechat}
                    title={"KapeChat"} 
                    skills={[{ text: "React" }, { text: "TailwindCSS" }, { text: "JavaScript" }, { text: "Firebase" }, { text: "Fastify" }]} 
                    description="KapeChat is a web-based platform designed to focus on mentorship and community through casual, planned coffee chats. Job seekers can explore and network all within a warm, user-friendly interface. 
                    It aims to help people with developing their career and tackling the job market with a friendly face.
                    "
                />
                <ProjectCard 
                    imageSrc={pillpal}
                    title={"PillPal"} 
                    skills={[{ text: "React" }, { text: "Flask" }, { text: "Material-UI" }, { text: "MySQL" }, { text: "JavaScript" }, { text: "Python" }]} 
                    description="PillPal is an application that allows users to keep track of medications with specifics on date/time taken, dosage, and amount of consumption. Notifications and alerts are sent to users based on low prescription or if medication needs to be taken.
                    It helps people that have a hard time remembering when they took their medication and the application provides a solution. 
                    PillPal is comprised of medium features: full-text search/auto-complete, bot detection using reCAPTCHA, protection against SQL injection attacks via PreparedStatements, etc."
                />

                <ProjectCard 
                    imageSrc={goodeats}
                    title={"GoodEats"} 
                    skills={[{ text: "React" }, { text: "Flask" }, { text: "Material-UI" }, { text: "SQL" }, { text: "JavaScript" }, { text: "Python" }]} 
                    description="GoodEats is a nutrition tracking app that helps users track daily nutritional intake and curate personalized meals to meet specific goals. 
                    Users can log in and input their stats i.e. height, weight, budget, etc. and through the use of Gemini AI it will curate three potential meals with nutritional facts breakdown.
                    Additionally, users can regenerate new meals if they feel that the generated ones aren't to their taste!"
                />

                <ProjectCard 
                    imageSrc={checkers}
                    title={"Checkers AI"} 
                    skills={[{ text: "Python" }, { text: "AI" }, { text: "MCTS" }, { text: "MiniMax" }]} 
                    description="I utilized Python and its libraries to create an AI capable of a 60% win rate against players in Checkers. For the AI's decision-making, it utilizes Minimax with AlphaBeta pruning and MCTS.
                    I also provided players the option to keep playing or end the round with player data like rounds played, rounds won, ties, etc."
                />

                <ProjectCard 
                    imageSrc={invitation}
                    title={"Invitation Website"} 
                    skills={[{ text: "HTML" }, { text: "CSS" }, { text: "SQL" }, { text: "JavaScript" }, { text: "Python" }]} 
                    description="I developed a landing page for an invitation that allows attendees to accept the invitation with the included invitation. Users are met by confetti and a form to fill out. The hosts are able to keep track of who RSVPed
                    while giving their family and friends a personalized invitation experience."
                />

                <ProjectCard 
                    imageSrc={rps}
                    title={"Rock Paper Scissors with AI"} 
                    skills={[{ text: "C++" }, { text: "AI" }]} 
                    description="I created an AI that uses algorithms and probability to generate the highest winning chance choice per user. I also developed testing that led to optimization for users with low playing time. 
                    Users are able to see their winrate as well as other stats like rounds played."
                />
            </div>
        </section>
    )
};

export default ProjectsSection;