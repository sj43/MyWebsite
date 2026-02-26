import type { ProjectData } from '../../types';

const projectData: ProjectData = {
        "projects": [{
                "name": "ME.NU",
                "url": "",
                "github": "https://github.com/sj43/me.nu",
                "techStack": ["Python", "Flask", "MongoDB", "Docker", "Redis", "AWS Elastic Beanstalk", "AWS ECR", "AWS S3", "AWS CodePipeline", "JWT"],
                "category": "fullstack",
                "description": [
                        "Ingredient-based personal and customized dish recommendation service across restaurants in Houston",
                        "Built RESTful-API Backend Service with Python Flask and MongoDB database",
                        "Utilized JWT security tokens and Redis in-memory database to authenticate and block access, refresh tokens",
                        "Used Docker to containerize backend application & Set up CD with CodePipeline (Github - CodeBuild - Elastic Beanstalk)",
                        "Continuation of HackRice 9 Hackathon 2019 Winning Project",
                        "[Python] & [Flask | Docker | MongoDB | Redis | AWS Elastic Beanstalk, ECR, S3, CodePipeline | JWT]"
                ]
        }, {
                "name": "Hackathons",
                "url": "",
                "github": "",
                "techStack": ["Python", "NLTK", "Data Analysis", "React", "JavaScript"],
                "category": "ml",
                "description": [
                        "Rice Datathon 2020 | Winner | \"Course Evaluation Analytics\" - a pipeline that empowers the user to play with, analyze, and draw conclusions from over half a million course evaluations, so that the student can learn about courses, the instructor can learn about students, and the registrar can learn about professors.",
                        "HackRice 9 Hackathon 2019 | Winner | \"Me.nu\" - web app that recommends users what to order at restaurants based on their preferences and highly rated items on other platforms",
                        "HackRice 8.5 Hackathon 2018 | 1st place in Fintech Track | Cryptocurrency Trading Management Program",
                        "PennApps XX Hackathon 2019 | \"Aware\" - Inter-Car Communication Application"
                ]
        }, {
                "name": "Py-JMB",
                "url": "",
                "github": "https://github.com/sj43/py-jmb",
                "techStack": ["Python"],
                "category": "tool",
                "description": [
                        "A project to translate JMB (a book on algorithmic problem-solving strategies) written using C++ into Python 2.7, following pep8 standards"
                ]
        }, {
                "name": "International Collegiate Programming Competition (ICPC)",
                "url": "",
                "github": "",
                "techStack": ["C++", "Algorithms", "Data Structures"],
                "category": "competitive",
                "description": [
                        "Represented Rice University in 2018 USA South Central Regional ICPC",
                        "Top 20 contestant in Two Sigma ICPC Challenge"
                ]
        }
        ]
}
export default projectData
