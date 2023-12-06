const Courses = [
    {
        id: 1, // Unique identifier for the course
        name: 'Introduction to React Native',
        instructor: 'John Doe', // Name of the course instructor
        description: 'Learn the basics of React Native development and build your first mobile app.',
        enrollmentStatus: 'Open', // Can be 'Open', 'Closed', or 'In Progress'
        thumbnail: 'https://img.freepik.com/free-photo/programming-background-collage_23-2149901765.jpg', //Link to the course thumbnail
        duration: '8 weeks', // Duration of the course
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to React Native',
                content: 'Overview of React Native, setting up your development environment.'
            },
            {
                week: 2,
                topic: 'Building Your First App',
                content: 'Creating a simple mobile app using React Native components.'
            },
            // Additional weeks and topics...
        ],
        students: [
            {
                id: 101,
                name: 'Alice Johnson',
                email: 'alice@example.com',
            },
            {
                id: 102,
                name: 'Bob Smith',
                email: 'bob@example.com',
            },
        ]
    },
    {
        id: 2,
        name: 'Full Stack JavaScript Development',
        instructor: 'David Smith',
        description: 'Master full-stack development using JavaScript, including Node.js and Express.',
        enrollmentStatus: 'Open',
        thumbnail: 'https://thumbs.dreamstime.com/b/globalization-computer-technology-communication-47033019.jpg',
        duration: '12 weeks',
        schedule: 'Tuesdays and Thursdays, 7:00 PM - 9:00 PM',
        location: 'Online',
        prerequisites: ['Web Development Fundamentals'],
        syllabus: [
            {
                week: 1,
                topic: 'Server-Side JavaScript with Node.js',
                content: 'Building server-side applications using Node.js.',
            },
            {
                week: 2,
                topic: 'Express.js Framework',
                content: 'Introduction to the Express.js framework for building web applications.',
            },
            // Additional weeks and topics...
        ],
        students: [
            {
                id: 201,
                name: 'Grace Williams',
                email: 'grace@example.com',
            },
            {
                id: 202,
                name: 'Daniel Brown',
                email: 'daniel@example.com',
            },
        ],
    },
    {
        id: 3,
        name: 'Python for Data Science',
        instructor: 'Sophia Miller',
        description: 'Explore Python programming for data analysis, machine learning, and visualization.',
        enrollmentStatus: 'Closed',
        thumbnail: 'https://bsmedia.business-standard.com/_media/bs/img/article/2016-01/24/full/1453649981-83.jpg',
        duration: '8 weeks',
        schedule: 'Mondays and Wednesdays, 6:30 PM - 8:30 PM',
        location: 'Online',
        prerequisites: ['Basic Python knowledge'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Data Science',
                content: 'Overview of data science and its applications.',
            },
            {
                week: 2,
                topic: 'Data Analysis with Pandas',
                content: 'Using Pandas library for data manipulation and analysis.',
            },
            // Additional weeks and topics...
        ],
        students: [
            {
                id: 301,
                name: 'Oliver Taylor',
                email: 'oliver@example.com',
            },
            {
                id: 302,
                name: 'Isabella Martinez',
                email: 'isabella@example.com',
            },
        ],
    },
    {
        id: 4,
        name: 'Cybersecurity Essentials',
        instructor: 'Alex Johnson',
        description: 'Learn the fundamentals of cybersecurity, including ethical hacking and network security.',
        enrollmentStatus: 'Open',
        thumbnail: 'https://media.istockphoto.com/id/1335295270/photo/global-connection.jpg?s=612x612&w=0&k=20&c=pVIatR8XcihqKTDnISYXNWvSkpZkdeJJa3YNfk9zC6g=',
        duration: '10 weeks',
        schedule: 'Fridays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic IT knowledge'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Cybersecurity',
                content: 'Understanding the importance of cybersecurity in today\'s digital world.',
            },
            {
                week: 2,
                topic: 'Ethical Hacking Basics',
                content: 'Exploring ethical hacking techniques for securing systems.',
            },
            // Additional weeks and topics...
        ],
        students: [
            {
                id: 401,
                name: 'Liam Anderson',
                email: 'liam@example.com',
            },
            {
                id: 402,
                name: 'Sophie Turner',
                email: 'sophie@example.com',
            },
        ],
    },
    // Course 5
    {
        id: 5,
        name: 'Mobile App Development with Flutter',
        instructor: 'Emily Davis',
        description: 'Build cross-platform mobile apps with Flutter framework and Dart programming language.',
        enrollmentStatus: 'Open',
        thumbnail: 'https://content.cdn.sap.com/is/image/sap/286899:1958x1648?wid=640&hei=512&fit=stretch,1',
        duration: '8 weeks',
        schedule: 'Saturdays, 10:00 AM - 12:00 PM',
        location: 'Online',
        prerequisites: ['Basic programming knowledge'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Flutter',
                content: 'Getting started with Flutter framework and Dart language.',
            },
            {
                week: 2,
                topic: 'Building UI with Flutter',
                content: 'Creating responsive and beautiful user interfaces for mobile apps.',
            },
            // Additional weeks and topics...
        ],
        students: [
            {
                id: 501,
                name: 'Elijah Clark',
                email: 'elijah@example.com',
            },
            {
                id: 502,
                name: 'Ava Green',
                email: 'ava@example.com',
            },
        ],
    },
    // Course 6
    {
        id: 6,
        name: 'Cloud Computing Fundamentals',
        instructor: 'Matthew Turner',
        description: 'Understand the basics of cloud computing and popular cloud platforms.',
        enrollmentStatus: 'Open',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcUpgndqIjnGb0WkUxgDpcCpgWlhk1L7z0cA&usqp=CAU',
        duration: '6 weeks',
        schedule: 'Thursdays, 7:00 PM - 9:00 PM',
        location: 'Online',
        prerequisites: ['Basic IT knowledge'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Cloud Computing',
                content: 'Overview of cloud computing and its key concepts.',
            },
            {
                week: 2,
                topic: 'Popular Cloud Platforms',
                content: 'Exploring major cloud service providers and their services.',
            },
            // Additional weeks and topics...
        ],
        students: [
            {
                id: 601,
                name: 'Jackson Lee',
                email: 'jackson@example.com',
            },
            {
                id: 602,
                name: 'Zoe Carter',
                email: 'zoe@example.com',
            },
        ],
    },
    // Course 7
    {
        id: 7,
        name: 'Artificial Intelligence: From Basics to Applications',
        instructor: 'Sophie Brown',
        description: 'Delve into the world of artificial intelligence, machine learning, and deep learning.',
        enrollmentStatus: 'In Progress',
        thumbnail: 'https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_1280.jpg',
        duration: '12 weeks',
        schedule: 'Tuesdays and Fridays, 6:30 PM - 8:30 PM',
        location: 'Online',
        prerequisites: ['Basic programming knowledge'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to AI and ML',
                content: 'Understanding the fundamentals of artificial intelligence and machine learning.',
            },
            {
                week: 2,
                topic: 'Deep Learning with Neural Networks',
                content: 'Exploring deep learning concepts and neural network architectures.',
            },
            // Additional weeks and topics...
        ],
        students: [
            {
                id: 701,
                name: 'Logan Taylor',
                email: 'logan@example.com',
            },
            {
                id: 702,
                name: 'Aria Martinez',
                email: 'aria@example.com',
            },
        ],
    },
    {
        id: 8, // Unique identifier for the course
        name: 'Introduction to React Native',
        instructor: 'John Doe', // Name of the course instructor
        description: 'Learn the basics of React Native development and build your first mobile app.',
        enrollmentStatus: 'Open', // Can be 'Open', 'Closed', or 'In Progress'
        thumbnail: 'https://community.nasscom.in/sites/default/files/media/images/New%20Technologies%20in%20Computer%20Science%20What%27s%20Trending.jpg', //Link to the course thumbnail
        duration: '8 weeks', // Duration of the course
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to React Native',
                content: 'Overview of React Native, setting up your development environment.'
            },
            {
                week: 2,
                topic: 'Building Your First App',
                content: 'Creating a simple mobile app using React Native components.'
            },
            // Additional weeks and topics...
        ],
        students: [
            {
                id: 101,
                name: 'Alice Johnson',
                email: 'alice@example.com',
            },
            {
                id: 102,
                name: 'Bob Smith',
                email: 'bob@example.com',
            },
        ]
    },
    {
        id: 9, // Unique identifier for the course
        name: 'Introduction to React Native',
        instructor: 'John Doe', // Name of the course instructor
        description: 'Learn the basics of React Native development and build your first mobile app.',
        enrollmentStatus: 'Open', // Can be 'Open', 'Closed', or 'In Progress'
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3eP9k2bW-d3xGmfI8kUq8Yayd7X1NqKsDmw&usqp=CAU', //Link to the course thumbnail
        duration: '8 weeks', // Duration of the course
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to React Native',
                content: 'Overview of React Native, setting up your development environment.'
            },
            {
                week: 2,
                topic: 'Building Your First App',
                content: 'Creating a simple mobile app using React Native components.'
            },
            // Additional weeks and topics...
        ],
        students: [
            {
                id: 101,
                name: 'Alice Johnson',
                email: 'alice@example.com',
            },
            {
                id: 102,
                name: 'Bob Smith',
                email: 'bob@example.com',
            },
        ]
    },
    {
        id: 10, // Unique identifier for the course
        name: 'Introduction to React Native',
        instructor: 'John Doe', // Name of the course instructor
        description: 'Learn the basics of React Native development and build your first mobile app.',
        enrollmentStatus: 'Closed', // Can be 'Open', 'Closed', or 'In Progress'
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8rYpa6-QHYeFhUTbOtYYFNZL9Hjp5MM-8Ww&usqp=CAU', //Link to the course thumbnail
        duration: '8 weeks', // Duration of the course
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to React Native',
                content: 'Overview of React Native, setting up your development environment.'
            },
            {
                week: 2,
                topic: 'Building Your First App',
                content: 'Creating a simple mobile app using React Native components.'
            },
            // Additional weeks and topics...
        ],
        students: [
            {
                id: 101,
                name: 'Alice Johnson',
                email: 'alice@example.com',
            },
            {
                id: 102,
                name: 'Bob Smith',
                email: 'bob@example.com',
            },
        ]
    }
]
export { Courses }