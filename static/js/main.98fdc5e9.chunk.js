(this.webpackJsonpmypersonalwebsite=this.webpackJsonpmypersonalwebsite||[]).push([[0],{12:function(e,a,t){},13:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(6),o=t.n(r),i=(t(12),t(1)),c=t(2),s=t(3),m=t(4),u=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")))," ")," ",l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},e.name),l.a.createElement("h3",null,e.role),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.facebook.com/shjang956?ref=bookmarks"},l.a.createElement("i",{className:"fa fa-facebook"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/shjang956/?locale=en_US"},l.a.createElement("i",{className:"fa fa-linkedin"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.instagram.com/seunghjang_/?hl=en"},l.a.createElement("i",{className:"fa fa-instagram"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/sj43"},l.a.createElement("i",{className:"fa fa-github"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://devpost.com/sj43?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"},l.a.createElement("i",{className:"fa fa-book"})))))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),t}(n.Component),d=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"images/profilepic.jpeg",alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,"I am a ",e.role,"."),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e.name),l.a.createElement("br",null),l.a.createElement("span",null,e.email),l.a.createElement("br",null),l.a.createElement("span",null,e.phone),l.a.createElement("br",null),l.a.createElement("span",null,e.address))),l.a.createElement("div",{className:"columns download"},l.a.createElement("p",null,l.a.createElement("a",{href:e.resumeLink,className:"button"},l.a.createElement("i",{className:"fa fa-download"}),"Download Resume"))))," ")," "))," ")}}]),t}(n.Component),p=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e=this.props.resumeData,a=this.props.projectData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.education.school),l.a.createElement("p",{className:"info"},e.education.major,l.a.createElement("span",null,"\u2022"),l.a.createElement("em",{className:"date"},e.education.date),l.a.createElement("span",null,"\u2022"),l.a.createElement("em",{className:"date"},"GPA: ",e.education.gpa))))," ")," ")," ",l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},e.experience.map((function(e,a){return l.a.createElement("div",{className:"row item",key:a},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.organization),l.a.createElement("p",{className:"info"},e.position," ",l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.date)),l.a.createElement("p",null,e.description.map((function(e,a){return l.a.createElement("li",{key:a},e)})))))})))," ")," ",l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{className:"bars"},l.a.createElement("h1",null,"Language"),l.a.createElement("p",null," Python, C, C++, Java, HTML, JavaScript, Go, SQL "),l.a.createElement("p",null),l.a.createElement("h1",null,"Framework & Database & Library "),l.a.createElement("p",null," Flask, React, ExpressJs, MongoDB, Redis, Heroku, NLTK, Mkdocs, Slate "),l.a.createElement("p",null),l.a.createElement("h1",null,"Amazon Web Service"),l.a.createElement("p",null," ECS, S3, EMR, CloudFormation, SNS, SQS, Lambda, ElasticSearch, ElasticBeanstalk, CodePipeline, CodeBuild "),l.a.createElement("p",null),l.a.createElement("h1",null,"Development Tool"),l.a.createElement("p",null," Jenkins, Jira, Coverity static analysis, Gerrit code review")))," ")," ",l.a.createElement("div",{className:"row project-activity"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Project & Activity"))),l.a.createElement("div",{className:"nine columns main-col"},a.projects.map((function(e,a){return l.a.createElement("div",{className:"row item",key:a},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.name),l.a.createElement("p",null,e.description.map((function(e,a){return l.a.createElement("li",{key:a},e)})))))})))))," ")}}]),t}(n.Component),E=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"}),l.a.createElement("ul",{className:"copyright"})),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))," ")}}]),t}(n.Component),h={imagebaseurl:"http://localhost:3000/",name:"Seung Hun Jang",role:"Senior @ Rice University, Computer Science Major",phone:"(713)806-8991",address:"Houston, TX",email:"sj43@rice.edu",education:{school:"Rice University",major:"B.S. in Computer Science",year:"Senior",date:"Expected May 2021",gpa:"3.76/4.0"},experience:[{organization:"Expedia Group",location:"(Remote Internship) Houston, Texas",position:"Software Development Intern \u2013 Platform Architecture Team",date:"Jun 2020 - Aug 2020",description:["Participated in Proof of Concept of constructing Expedia\u2019s new cross-organizational platform on Backstage developer portal","Implemented \u2018docs-as-code\u2019 plugin scalable to sustain +10k documentations for Expedia Organization applications and contributed to Spotify\u2019s Backstage.io open source project","Designed and built two microservices: 1) Automatic notification system to notify application owners of documentation change 2) Documentation search, filter functionality & CI pipeline updating index documentation fields on ElasticSearch","[Go | JavaScript | Java] & [AWS S3, CloudFormation, SNS, SQS, Lambda, ElasticSearch | Jenkins | Jira | Mkdocs | Backstage.io]"]},{organization:"V-Silicon Inc.",location:"Fremont, California",position:"Software Engineering Intern",date:"May 2019 - Aug 2019",description:["Built video casting applications for internal smart-TV testing (web / Android / iOS)","Regularly built new patches on Ubuntu and deployed on Jenkins Server","Fixed potential bugs on Platform Abstraction Layer (PAL) using Coverity static analysis tool, Gerrit Code Review, and JIRA issue tracking software","Assisted SW and QE teams in demo setup, issue duplication, documentation, etc","[ Java | JavaScript | HTML] & [ Jenkins | Jira | Coverity static analysis tool | Gerrit code review | Android Studio]"]},{organization:"Migeum Computer and Robotics Learning Center",location:"Yongin, South Korea",position:"Programming Language Teaching Assistant",date:"Apr 2018 - Aug 2018",description:["Prepared and delivered lectures to learning center students on topics such as syntax, container usage, object-oriented design, problem solving skills, and data structures","Assisted in developing prototype of center\u2019s student management tools","[Java | Python | C++]"]},{organization:"U.S. Eighth Army | KATUSA",location:"Camp Humphreys, South Korea",position:"Head of Battalion Command Group Admin",date:"Sep 2016 - Apr 2018",description:["Served in the Eighth Army, Headquarters, and Headquarters Battalion Command Group as KATUSA (Korean Augmentation to the United States Army)","As the team leader, assisted Battalion Commander and Command Sergeant Major in missions","Supervised Soldiers\u2019 administrative action management process","Supported and facilitated move of 8,000+ Soldiers from Camp Yongsan to Camp Humphreys","Resolved technical issues such as ARMY GEARS system VPN, DoD CAC issuance, etc"]}],resumeLink:"https://drive.google.com/file/d/14D7ZbdZ4QoRgwBKtYUZfiswGbZyu5-6D/view?usp=sharing"},v={projects:[{name:"ME.NU",description:["URL: www.eatwithmenu.com","Ingredient-based personal and customized dish recommendation service across restaurants in Houston","Built RESTful-API Backend Service with Python Flask and MongoDB database","Utilized JWT security tokens and Redis in-memory database to authenticate and block access, refresh tokens","Used Docker to containerize backend application & Set up CD with CodePipeline (Github \u2013 CodeBuild - Elastic Beanstalk)","Continuation of HackRice 9 Hackathon 2019 Winning Project","[Python] & [Flask | Docker | MongoDB | Redis | AWS Elastic Beanstalk, ECR, S3, CodePipeline | JWT]"]},{name:"Hackathons",description:["Rice Datathon 2020 | Winner | \u201cCourse Evaluation Analytics\u201c - a pipeline that empowers the user to play with, analyze, and draw conclusions from over half a million course evaluations, so that the student can learn about courses, the instructor can learn about students, and the registrar can learn about professors.","HackRice 9 Hackathon 2019 | Winner | \u201cMe.nu\u201d - web app that recommends users what to order at restaurants based on their preferences and highly rated items on other platforms","HackRice 8.5 Hackathon 2018 | 1st place in Fintech Track | Cryptocurrency Trading Management Program","PennApps XX Hackathon 2019 | \u201cAware\u201d - Inter-Car Communication Application"]},{name:"Py-JMB",description:["A project to translate JMB (a book on algorithmic problem-solving strategies) written using C++ into Python 2.7, following pep8 standards"]},{name:"International Collegiate Programming Competition (ICPC)",description:["Represented Rice University in 2018 USA South Central Regional ICPC","Top 20 contestant in Two Sigma ICPC Challenge"]}]},g=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(u,{resumeData:h}),l.a.createElement(d,{resumeData:h}),l.a.createElement(p,{resumeData:h,projectData:v}),l.a.createElement(E,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},7:function(e,a,t){e.exports=t(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.98fdc5e9.chunk.js.map