import { atom } from 'recoil';

const initialData = [
  {
    name: "John Doe",
    designation: "Software Engineer",
    companyUid: "JD123",
    github: "https://github.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
    bio: "John Doe is a seasoned Software Engineer with over 8 years of experience in designing and developing robust and scalable applications. He has a strong passion for solving complex problems and optimizing performance. Throughout his career, John has worked on a variety of projects across different domains, from fintech to e-commerce, gaining expertise in full-stack development and cloud technologies. He is proficient in JavaScript, Python, and Java, and has a deep understanding of modern frameworks like React and Node.js. John is dedicated to continuous learning and enjoys contributing to open-source projects.",
    email: "john.doe@example.com",
    mobile: "+1 123 456 7890",
    clientStatus: "Deliverables Assigned",
    pic: "../profilepics/man1.png"
  },
  {
    name: "Jane Smith",
    designation: "Product Manager",
    companyUid: "JS456",
    github: "https://github.com/janesmith",
    linkedin: "https://linkedin.com/in/janesmith",
    bio: "Jane Smith is a dynamic Product Manager with a proven track record of leading cross-functional teams to deliver innovative products. With a background in engineering and a passion for user-centric design, Jane excels in defining product visions and strategies that align with customer needs and business goals. She brings extensive experience from her roles in both startups and established tech companies, where she successfully launched and scaled multiple products. Jane is known for her analytical mindset, strategic thinking, and ability to drive results through collaboration and effective communication.",
    email: "jane.smith@example.com",
    mobile: "+1 234 567 8901",
    clientStatus: "Payment Pending",
    pic: "../profilepics/woman1.png"
  },
  {
    name: "Alice Johnson",
    designation: "Data Scientist",
    companyUid: "AJ789",
    github: "https://github.com/alicejohnson",
    linkedin: "https://linkedin.com/in/alicejohnson",
    bio: "Alice Johnson is a passionate Data Scientist specializing in machine learning and data-driven decision making. With a background in statistics and a PhD in computer science, Alice has a deep understanding of algorithms, statistical modeling, and data analysis techniques. She has a proven track record of applying advanced machine learning algorithms to solve real-world problems across various industries, including healthcare and finance. Alice is skilled in programming languages like Python and R, and is proficient in tools such as TensorFlow and scikit-learn. She is dedicated to advancing the field of data science through research and practical applications.",
    email: "alice.johnson@example.com",
    mobile: "+1 345 678 9012",
    clientStatus: "Work Agreement Signed",
    pic: "../profilepics/woman2.png"
  },
  {
    name: "Michael Brown",
    designation: "UI/UX Designer",
    companyUid: "MB456",
    github: "https://github.com/michaelbrown",
    linkedin: "https://linkedin.com/in/michaelbrown",
    bio: "Michael Brown is a creative UI/UX Designer with a passion for crafting intuitive and visually appealing user interfaces. With over 10 years of experience in digital design, Michael has led design teams and collaborated with developers to create seamless user experiences across web and mobile platforms. He is skilled in user research, prototyping, and interaction design, and has a strong understanding of front-end development technologies such as HTML, CSS, and JavaScript frameworks. Michael stays updated with design trends and best practices to deliver designs that enhance usability and delight users.",
    email: "michael.brown@example.com",
    mobile: "+1 456 789 0123",
    clientStatus: "Payment Recieved",
    pic: "../profilepics/man2.png"
  },
  {
    name: "Sarah Lee",
    designation: "Marketing Manager",
    companyUid: "SL123",
    github: "https://github.com/sarahlee",
    linkedin: "https://linkedin.com/in/sarahlee",
    bio: "Sarah Lee is a strategic Marketing Manager with expertise in digital marketing strategies and brand management. She brings a wealth of experience from leading marketing teams in fast-paced environments, developing and executing multi-channel marketing campaigns that drive customer acquisition and engagement. Sarah is skilled in market analysis, campaign optimization, and leveraging data-driven insights to achieve marketing goals. Her creative approach and strong analytical skills enable her to develop innovative marketing strategies that resonate with target audiences and differentiate brands in competitive markets.",
    email: "sarah.lee@example.com",
    mobile: "+1 567 890 1234",
    clientStatus: "Deliverables Completed",
    pic: "../profilepics/woman3.png"
  },
  {
    name: "David Wilson",
    designation: "Financial Analyst",
    companyUid: "DW789",
    github: "https://github.com/davidwilson",
    linkedin: "https://linkedin.com/in/davidwilson",
    bio: "David Wilson is a detail-oriented Financial Analyst with a strong background in analyzing financial data and providing strategic insights for decision-making. With experience in financial modeling, forecasting, and risk assessment, David has supported senior management in making informed business decisions and optimizing financial performance. He has worked in diverse industries, including banking and consulting, where he developed expertise in financial reporting standards and regulatory compliance. David is committed to accuracy and thoroughness in financial analysis, ensuring stakeholders have reliable information for effective decision-making.",
    email: "david.wilson@example.com",
    mobile: "+1 678 901 2345",
    clientStatus: "Meeting Scheduled",
    pic: "../profilepics/man3.png"
  },
  {
    name: "Emily Taylor",
    designation: "Software Developer",
    companyUid: "ET123",
    github: "https://github.com/emilytaylor",
    linkedin: "https://linkedin.com/in/emilytaylor",
    bio: "Emily Taylor is a dedicated Software Developer focused on building scalable and efficient software solutions. With a background in computer science and several years of experience in software development, Emily is proficient in programming languages such as JavaScript, Python, and Java. She has a strong interest in backend development and has contributed to the architecture and implementation of robust server-side applications. Emily is passionate about leveraging technology to solve complex problems and is committed to continuous learning and professional growth.",
    email: "emily.taylor@example.com",
    mobile: "+1 789 012 3456",
    clientStatus: "Deliverables Assigned",
    pic: "../profilepics/woman4.png"
  },
  {
    name: "Robert Johnson",
    designation: "Data Engineer",
    companyUid: "RJ456",
    github: "https://github.com/robertjohnson",
    linkedin: "https://linkedin.com/in/robertjohnson",
    bio: "Robert Johnson is a skilled Data Engineer specializing in designing and implementing data pipelines. With a background in computer engineering and hands-on experience in data warehousing and ETL processes, Robert excels in transforming raw data into valuable insights for business decision-making. He is proficient in tools like Apache Spark, Hadoop, and SQL databases, and has a deep understanding of data modeling and optimization techniques. Robert is passionate about data-driven solutions and enjoys collaborating with cross-functional teams to deliver impactful data projects.",
    email: "robert.johnson@example.com",
    mobile: "+1 890 123 4567",
    clientStatus: "Payment Pending",
    pic: "../profilepics/man4.png"
  },
  {
    name: "Sophia Clark",
    designation: "UI/UX Designer",
    companyUid: "SC789",
    github: "https://github.com/sophiaclark",
    linkedin: "https://linkedin.com/in/sophiaclark",
    bio: "Sophia Clark is a seasoned UI/UX Designer with a passion for creating user-centric designs that elevate digital experiences. With extensive experience in interface design, prototyping, and usability testing, Sophia has led design projects from concept to implementation across various industries. She is skilled in Adobe Creative Suite, Sketch, and Figma, and has a keen eye for detail and aesthetics. Sophia stays updated with design trends and user behavior insights to deliver intuitive and visually appealing designs that meet user needs and business objectives.",
    email: "sophia.clark@example.com",
    mobile: "+1 901 234 5678",
    clientStatus: "Payment Recieved",
    pic: "../profilepics/woman5.png"
  },
  {
    name: "Daniel Brown",
    designation: "Product Manager",
    companyUid: "DB123",
    github: "https://github.com/danielbrown",
    linkedin: "https://linkedin.com/in/danielbrown",
    bio: "Daniel Brown is a strategic Product Manager with a passion for driving product development and innovation. With a background in engineering and business administration, Daniel excels in defining product roadmaps and leading cross-functional teams to deliver market-leading products. He brings a wealth of experience from his roles in tech startups and Fortune 500 companies, where he successfully launched and scaled products that address customer pain points and drive revenue growth. Daniel is known for his entrepreneurial mindset, analytical skills, and ability to align product strategies with business objectives.",
    email: "daniel.brown@example.com",
    mobile: "+1 012 345 6789",
    clientStatus: "Work Agreement Signed",
    pic: "../profilepics/man5.png"
  },
  {
    name: "Jessica White",
    designation: "Marketing Specialist",
    companyUid: "JW456",
    github: "https://github.com/jessicawhite",
    linkedin: "https://linkedin.com/in/jessicawhite",
    bio: "Jessica White is a results-driven Marketing Specialist with expertise in executing digital marketing campaigns that drive brand awareness and customer engagement. With a background in marketing communications and a passion for storytelling, Jessica excels in creating compelling content and optimizing digital channels to reach target audiences effectively. She brings experience from her roles in digital agencies and corporate marketing teams, where she has successfully managed campaigns across social media, email marketing, and paid advertising platforms. Jessica is committed to delivering measurable results and continuous learning in the dynamic field of digital marketing.",
    email: "jessica.white@example.com",
    mobile: "+1 123 456 7890",
    clientStatus: "Meeting Scheduled",
    pic: "../profilepics/woman6.png"
  }
];


const clientStatusExamples = [
  "Work Agreement Signed",
  "Deliverables Assigned",
  "Deliverables Completed",
  "Payment Pending",
  "Payment Recieved",
];

export const userData = atom({
    key: 'userData',
    default: initialData, 
});

export const filteredUserData = atom({
    key: 'filteredUserData',
    default: initialData, 
});

export const searchData = atom({
    key : 'searchData',
    default : "",
})

export const currentEmployeeState = atom({
    key : 'currentEmployeeState',
    default : {
      name: "Jessica White",
      designation: "Marketing Specialist",
      companyUid: "JW456",
      github: "https://github.com/jessicawhite",
      linkedin: "https://linkedin.com/in/jessicawhite",
      bio: "Jessica White is a results-driven Marketing Specialist with expertise in executing digital marketing campaigns that drive brand awareness and customer engagement. With a background in marketing communications and a passion for storytelling, Jessica excels in creating compelling content and optimizing digital channels to reach target audiences effectively. She brings experience from her roles in digital agencies and corporate marketing teams, where she has successfully managed campaigns across social media, email marketing, and paid advertising platforms. Jessica is committed to delivering measurable results and continuous learning in the dynamic field of digital marketing.",
      email: "jessica.white@example.com",
      mobile: "+1 123 456 7890",
      clientStatus: "Meeting Scheduled",
      pic: "../profilepics/woman6.png"
    }
})

export const clientStatusListState = atom({
    key : 'clientStatusListState',
    default : clientStatusExamples,
})