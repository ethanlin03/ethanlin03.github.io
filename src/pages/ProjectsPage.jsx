import NavBar from "../components/NavBar";
import ProjectCard from "../components/ProjectCard";
import pillpal from "../assets/pillpal.png";
import goodeats from "../assets/goodeats.png";
import invitation from "../assets/invitation.png";
import rps from "../assets/rps.png";

const ProjectsPage = () => {
    return (
        <div>
            <NavBar/>
            <div className="mt-32 flex flex-col items-center gap-8">
            <ProjectCard 
                imageSrc={pillpal}
                title={"PillPal"} 
                skills={[{ text: "React" }, { text: "Flask" }, { text: "Material-UI" }, { text: "MySQL" }, { text: "JavaScript" }, { text: "Python" }]} 
                description="PillPal is an application that allows users to keep track of medications with specifics on date/time taken, dosage, and amount of consumption. Notifications and alerts are sent to users based on low prescription or if medication needs to be taken.
                It helps people that have a hard time remembering when they took their medication and the application provides a solution. 
                PillPal is comprised of medium features: full-text search/auto-complete, bot detection using reCAPTCHA, protection against SQL injection attacks via PreparedStatements, etc."
                link="/pillpal"
            />

            <ProjectCard 
                imageSrc={goodeats}
                title={"GoodEats"} 
                skills={[{ text: "React" }, { text: "Flask" }, { text: "Material-UI" }, { text: "SQL" }, { text: "JavaScript" }, { text: "Python" }]} 
                description="GoodEats is a nutrition tracking app that helps users track daily nutritional intake and curate personalized meals to meet specific goals. 
                Users can log in and input their stats i.e. height, weight, budget, etc. and through the use of Gemini AI it will curate three potential meals with nutritional facts breakdown.
                Additionally, users can regenerate new meals if they feel that the generated ones aren't to their taste!"
                link="/goodeats"
            />

            <ProjectCard 
                imageSrc={invitation}
                title={"Invitation Website"} 
                skills={[{ text: "HTML" }, { text: "CSS" }, { text: "SQL" }, { text: "JavaScript" }, { text: "Python" }]} 
                description="I developed a landing page for an invitation that allows attendees to accept the invitation with the included invitation. Users are met by confetti and a form to fill out. The hosts are able to keep track of who RSVPed
                while giving their family and friends a personalized invitation experience."
                link="/invitation"
            />

            <ProjectCard 
                imageSrc={rps}
                title={"Rock Paper Scissors with AI"} 
                skills={[{ text: "C++" }, { text: "AI" }]} 
                description="I created an AI that uses algorithms and probability to generate the highest winning chance choice per user. I also developed testing that led to optimization for users with low playing time. 
                Users are able to see their winrate as well as other stats like rounds played."
                link="/rps"
            />
            </div>
        </div>
    )
};

export default ProjectsPage;