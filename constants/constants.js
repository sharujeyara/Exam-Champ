const onboarding_screens = [
    {
        id: 1,
        backgroundImage: require("../assets/images/bg.png"),
        bannerImage: require("../assets/images/work.png"),
        title: "Crack Your Exams",
        description: "“If you think you can do a thing or think you can’t do a thing, you’re right.”"
    },
    {
        id: 2,
        backgroundImage: require("../assets/images/bg.png"),
        bannerImage: require("../assets/images/onboarding.png"),
        title: "Stay Home & Study Hard",
        description: "“If you don’t do your revision properly, you know what’ll happen? YOU SHALL NOT PASS!”"
    },
    {
        id: 3,
        backgroundImage: require("../assets/images/bg.png"),
        bannerImage: require("../assets/images/work.png"),
        title: "Receive Exam Details",
        description: "“Keep your dreams alive. Understand to achieve anything requires faith and belief in yourself, vision, hard work, determination, and dedication.”"
    }
]

const register_options = [
    {
        id: 0,
        label: "STUDENT"
    },
    {
        id: 1,
        label: "TUTOR"
    }
]

const walkthrough = [
    {
        id: 0,
        title: "Explore Online Courses",
        sub_title: "All types of educational & professional courses available online.",
        image: require("../assets/images/work.png")
    },
    {
        id: 1,
        title: "Explore Online Courses",
        sub_title: "All types of educational & professional courses available online.",
        image: require("../assets/images/work.png")
    },
    {
        id: 2,
        title: "Explore Online Courses",
        sub_title: "All types of educational & professional courses available online.",
        image: require("../assets/images/work.png")
    },
]

const categories = [
    {
        id: 0,
        label: "Mobile Design",
        icon: require("../assets/icons/mobile.png")
    },
    {
        id: 1,
        label: "3D Modeling",
        icon: require("../assets/icons/model_3d.png")
    },
    {
        id: 2,
        label: "Web Designing",
        icon: require("../assets/icons/web_design.png")
    },
    {
        id: 3,
        label: "Illustrations",
        icon: require("../assets/icons/illustration.png")
    },
    {
        id: 4,
        label: "Drawing",
        icon: require("../assets/icons/drawing.png")
    },
    {
        id: 5,
        label: "Animation",
        icon: require("../assets/icons/animation.png")
    },
    {
        id: 6,
        label: "Education",
        icon: require("../assets/icons/education.png")
    },
    {
        id: 7,
        label: "Networking",
        icon: require("../assets/icons/networking.png")
    },
    {
        id: 8,
        label: "Coding",
        icon: require("../assets/icons/coding.png")
    },
]

const screens = {
    home: "Home",
    search: "Search",
    profile: "Profile"
}

const bottom_tabs = [
    {
        id: 0,
        label: screens.home,
        icon: require("../assets/icons/home.png")
    },
    {
        id: 1,
        label: screens.search,
        icon: require("../assets/icons/search.png")
    },
    {
        id: 2,
        label: screens.profile,
        icon: require("../assets/icons/profile.png")
    }
]

const class_types = [
    {
        id: 0,
        label: "All",
        icon: require("../assets/icons/all.png")
    },
    {
        id: 1,
        label: "Staff Pick",
        icon: require("../assets/icons/staff_pick.png")
    },
    {
        id: 2,
        label: "Original",
        icon: require("../assets/icons/original.png")
    },
]

const class_levels = [
    {
        id: 0,
        label: "Beginner"
    },
    {
        id: 1,
        label: "Intermediate"
    },
    {
        id: 2,
        label: "Advanced"
    }
]

const created_within = [
    {
        id: 0,
        label: "All Time"
    },
    {
        id: 1,
        label: "This Month"
    },
    {
        id: 2,
        label: "This Week"
    },
    {
        id: 3,
        label: "This Day"
    },
    {
        id: 4,
        label: "2 Months"
    },
    {
        id: 5,
        label: "4 Months"
    }
]

const course_details_tabs = [
    {
        id: 0,
        label: "Chapters",
    },
    {
        id: 1,
        label: "Files",
    },
    {
        id: 2,
        label: "Discussions",
    }
]

export default {
    onboarding_screens,
    register_options,
    walkthrough,
    categories,
    screens,
    bottom_tabs,
    class_types,
    class_levels,
    created_within,
    course_details_tabs
}