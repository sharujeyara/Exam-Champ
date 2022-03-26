const categories = [
    {
        id: 0,
        title: "Service Exam",
        thumbnail: require("../assets/images/bg_1.png")
    },
    {
        id: 1,
        title: "Banking Exam",
        thumbnail: require("../assets/images/bg_2.png")
    },
    {
        id: 2,
        title: "Clerical Exam",
        thumbnail: require("../assets/images/bg_3.png")
    },
    {
        id: 3,
        title: "Pricipal exam",
        thumbnail: require("../assets/images/bg_4.png")
    },
    {
        id: 4,
        title: "Promotion exam",
        thumbnail: require("../assets/images/bg_5.png")
    },
    {
        id: 5,
        title: "University exam",
        thumbnail: require("../assets/images/bg_6.png")
    }
]

const courses_list_1 = [
    {
        id: 0,
        title: "SLAS",
        thumbnail: require("../assets/images/thumbnail_1.png")
    },
    {
        id: 1,
        title: "MA Exam",
        thumbnail: require("../assets/images/thumbnail_2.png")
    },
    {
        id: 2,
        title: "Banking Exam",
        thumbnail: require("../assets/images/thumbnail_1.png")
    },
    {
        id: 3,
        title: "SLEAS",
        thumbnail: require("../assets/images/thumbnail_1.png")
    },
]

const courses_list_2 = [
    {
        id: 0,
        title: "Sri Lanka Administrative Service",
        abbreviation: "SLAS Exam",
        thumbnail: require("../assets/images/bg_1.png")
    },
    {
        id: 1,
        title: "Sri Lanka Education Administrative Service",
        abbreviation: "SLEAS Exam",
        thumbnail: require("../assets/images/bg_1.png")
    },
    {
        id: 2,
        title: "Sri Lanka Engineering Service",
        abbreviation: "SLES Exam",
        thumbnail: require("../assets/images/bg_1.png")
    },
    {
        id: 3,
        title: "Sri Lanka Accountants' Service",
        abbreviation: "SLAcS Exam",
        thumbnail: require("../assets/images/bg_1.png")
    },
    {
        id: 4,
        title: "Sri Lanka Planning Service",
        abbreviation: "SLPS Exam",
        thumbnail: require("../assets/images/bg_1.png")
    },
    {
        id: 5,
        title: "Sri Lanka Scientific Service",
        abbreviation: "SLSS Exam",
        thumbnail: require("../assets/images/bg_1.png")
    },
    {
        id: 6,
        title: "Sri Lanka Architectural Service",
        abbreviation: "SLArS Exam",
        thumbnail: require("../assets/images/bg_1.png")
    }
]

const details = [
    {
        id: 0,
        title: "Description",

        thumbnail: require("../assets/images/bg_1.png")
    },
    {
        id: 1,
        title: "Past paper",
        thumbnail: require("../assets/images/bg_1.png")
    },
    {
        id: 2,
        title: "Model Paper",
        thumbnail: require("../assets/images/bg_1.png")
    },
    {
        id: 3,
        title: "Guidance",
        thumbnail: require("../assets/images/bg_1.png")
    }  
]


const top_searches = [
    {
        id: 0,
       label: "SLAS"
    },
    {
        id: 1,
        label: "SLEAS"
    },
    {
        id: 2,
        label: "bank"
    },
    {
        id: 3,
        label: "Design"
    },
    {
        id: 4,
        label: "Aptitude"
    },
    {
        id: 5,
        label: "MA"
    },
]

const course_details = {
    id: 0,
    title: "The Ultimate Ui/Ux Course Beginner to Advanced",
    number_of_students: "33.5k Students",
    duration: "2h 30m",
    instructor: {
        name: "ByProgrammers",
        title: "Full Stack Programmer"
    },
    videos: [
        {
            title: "1. Introduction",
            duration: "1:37",
            size: "10 MB",
            progress: "100%",
            is_playing: false,
            is_complete: true,
            is_lock: false,
            is_downloaded: false,
        },
        {
            title: "2. User Interface",
            duration: "1:15:00",
            size: "200 MB",
            progress: "100%",
            is_playing: true,
            is_complete: false,
            is_lock: false,
            is_downloaded: true,
        },
        {
            title: "3. User Experience",
            duration: "1:27:00",
            size: "230 MB",
            progress: "0%",
            is_playing: false,
            is_complete: false,
            is_lock: true,
            is_downloaded: false,
        }
    ],
    students: [
        {
            id: 0,
            name: "Student 1",
            thumbnail: require("../assets/images/student_1.png")
        },
        {
            id: 1,
            name: "Student 2",
            thumbnail: require("../assets/images/student_2.png")
        },
        {
            id: 2,
            name: "Student 3",
            thumbnail: require("../assets/images/student_3.png")
        },
        {
            id: 3,
            name: "Student 3",
            thumbnail: require("../assets/images/student_3.png")
        }
    ],
    files: [
        {
            id: 0,
            name: "UI Fundamentals",
            author: "Shared by ByProgrammers",
            upload_date: "13th Sep 2021",
            thumbnail: require("../assets/images/pdf.png")
        },
        {
            id: 1,
            name: "UX Checklist",
            author: "Shared by ByProgrammers",
            upload_date: "11th Sep 2021",
            thumbnail: require("../assets/images/doc.png")
        },
        {
            id: 2,
            name: "Sketch File",
            author: "Shared by ByProgrammers",
            upload_date: "7th Sep 2021",
            thumbnail: require("../assets/images/sketch.png")
        }
    ],
    discussions: [
        {
            id: 0,
            profile: require("../assets/images/profile.png"),
            name: "ByProgrammers",
            no_of_comments: "11 comments",
            no_of_likes: "72 likes",
            posted_on: "5 days ago",
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            replies: [
                {
                    id: 0,
                    profile: require("../assets/images/student_1.png"),
                    name: "ByProgrammers",
                    posted_on: "4 days ago",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                },
                {
                    id: 1,
                    profile: require("../assets/images/student_1.png"),
                    name: "ByProgrammers",
                    posted_on: "4 days ago",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                },
                {
                    id: 2,
                    profile: require("../assets/images/student_1.png"),
                    name: "ByProgrammers",
                    posted_on: "4 days ago",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                },
                {
                    id: 3,
                    profile: require("../assets/images/student_1.png"),
                    name: "ByProgrammers",
                    posted_on: "4 days ago",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                },
            ]
        },
        {
            id: 1,
            profile: require("../assets/images/profile.png"),
            name: "ByProgrammers",
            no_of_comments: "21 comments",
            no_of_likes: "372 likes",
            posted_on: "14 days ago",
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            replies: [
                {
                    id: 0,
                    profile: require("../assets/images/student_1.png"),
                    name: "ByProgrammers",
                    posted_on: "7 days ago",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                },
                {
                    id: 1,
                    profile: require("../assets/images/student_1.png"),
                    name: "ByProgrammers",
                    posted_on: "7 days ago",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                },
                {
                    id: 2,
                    profile: require("../assets/images/student_1.png"),
                    name: "ByProgrammers",
                    posted_on: "7 days ago",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                },
            ]
        }
    ]
}

const notificationByDays = [
    {
        title: "Today",
        data: [
            {
                id: 1,
                avatar: require("../assets/images/student_1.png"),
                name: "Admin",
                created_at: "2h 47m ago",
                message: "Asked to join online courses regarding professional web designing."
            },
            {
                id: 2,
                avatar: require("../assets/images/student_2.png"),
                name: "Customer Care",
                created_at: "3h 02m ago",
                message: "Your 50% discount code is: ON50DIS. Apply on checkout."
            },
            {
                id: 3,
                avatar: require("../assets/images/student_3.png"),
                name: "Lilian Ellis",
                created_at: "4h 32m ago",
                message: "Asked assiged you to watch professional videography course."
            }
        ],

    },
    {
        title: "Yesterday",
        data: [
            {
                id: 4,
                avatar: require("../assets/images/student_1.png"),
                name: "Admin",
                created_at: "16h 47m ago",
                message: "You just signed in from another device check inbox for more details."
            },
            {
                id: 5,
                avatar: require("../assets/images/student_2.png"),
                name: "Customer Care",
                created_at: "20h 02m ago",
                message: "Your 50% discount code is: ON50DIS. Apply on checkout."
            },
        ],

    },
]

export default {
    categories,
    courses_list_1,
    courses_list_2,
    top_searches,
    course_details,
    notificationByDays,
    details
}