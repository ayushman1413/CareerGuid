export const quizData = {
  questions: [
    {
      id: "q1",
      question: "What type of activities do you enjoy most in your free time?",
      description: "Think about what naturally draws your interest and energy.",
      options: [
        {
          text: "Reading, writing, or creating content",
          description: "Books, blogs, stories, or artistic projects",
          categories: ["arts", "social"],
        },
        {
          text: "Building, fixing, or experimenting with things",
          description: "Hands-on projects, gadgets, or mechanical work",
          categories: ["technology", "science"],
        },
        {
          text: "Helping others or volunteering",
          description: "Community service, mentoring, or social causes",
          categories: ["social", "healthcare"],
        },
        {
          text: "Planning events or leading group activities",
          description: "Organizing, coordinating, or managing projects",
          categories: ["business", "social"],
        },
      ],
    },
    {
      id: "q2",
      question: "Which school subjects do you find most engaging?",
      options: [
        {
          text: "Mathematics and Physics",
          categories: ["science", "technology"],
        },
        {
          text: "Literature and History",
          categories: ["arts", "social"],
        },
        {
          text: "Biology and Chemistry",
          categories: ["science", "healthcare"],
        },
        {
          text: "Economics and Business Studies",
          categories: ["business"],
        },
      ],
    },
    {
      id: "q3",
      question: "What kind of work environment appeals to you most?",
      options: [
        {
          text: "A quiet office or laboratory",
          categories: ["science", "technology"],
        },
        {
          text: "A creative studio or collaborative space",
          categories: ["arts", "business"],
        },
        {
          text: "Outdoors or in the field",
          categories: ["science", "social"],
        },
        {
          text: "A hospital or clinic setting",
          categories: ["healthcare"],
        },
      ],
    },
    {
      id: "q4",
      question: "How do you prefer to solve problems?",
      options: [
        {
          text: "Through logical analysis and data",
          categories: ["science", "technology"],
        },
        {
          text: "Through creative and innovative approaches",
          categories: ["arts", "business"],
        },
        {
          text: "Through collaboration and discussion",
          categories: ["social", "business"],
        },
        {
          text: "Through careful observation and diagnosis",
          categories: ["healthcare", "science"],
        },
      ],
    },
    {
      id: "q5",
      question: "What motivates you most in your work?",
      options: [
        {
          text: "Making discoveries or innovations",
          categories: ["science", "technology"],
        },
        {
          text: "Expressing creativity and originality",
          categories: ["arts"],
        },
        {
          text: "Helping people and making a difference",
          categories: ["social", "healthcare"],
        },
        {
          text: "Achieving financial success and recognition",
          categories: ["business"],
        },
      ],
    },
    // Add more questions...
    {
      id: "q6",
      question: "Which of these activities sounds most appealing?",
      options: [
        {
          text: "Conducting research experiments",
          categories: ["science"],
        },
        {
          text: "Designing websites or apps",
          categories: ["technology", "arts"],
        },
        {
          text: "Teaching or training others",
          categories: ["social"],
        },
        {
          text: "Managing a team or project",
          categories: ["business"],
        },
      ],
    },
    {
      id: "q7",
      question: "What type of impact do you want to have?",
      options: [
        {
          text: "Advance scientific knowledge",
          categories: ["science"],
        },
        {
          text: "Create beautiful or meaningful art",
          categories: ["arts"],
        },
        {
          text: "Improve people's health and wellbeing",
          categories: ["healthcare"],
        },
        {
          text: "Build successful businesses or organizations",
          categories: ["business"],
        },
      ],
    },
    {
      id: "q8",
      question: "How do you handle stress and pressure?",
      options: [
        {
          text: "I work methodically through problems",
          categories: ["science", "technology"],
        },
        {
          text: "I find creative outlets to express myself",
          categories: ["arts"],
        },
        {
          text: "I talk to others and seek support",
          categories: ["social"],
        },
        {
          text: "I focus on practical solutions and results",
          categories: ["business", "healthcare"],
        },
      ],
    },
  ],
  careerPaths: {
    science: {
      title: "Scientific Research & Development",
      description:
        "Pursue careers in research, laboratory work, and scientific discovery across various fields like physics, chemistry, and environmental science.",
      salary: "₹6-15 LPA",
      growth: "High",
      education: "Bachelor's + Master's",
      skills: ["Analytical Thinking", "Research Methods", "Data Analysis", "Problem Solving"],
    },
    technology: {
      title: "Technology & Engineering",
      description:
        "Build the future through software development, engineering, and technological innovation in areas like AI, robotics, and computer science.",
      salary: "₹8-25 LPA",
      growth: "Very High",
      education: "Bachelor's in Engineering/CS",
      skills: ["Programming", "System Design", "Innovation", "Technical Problem Solving"],
    },
    arts: {
      title: "Creative Arts & Design",
      description: "Express creativity through visual arts, writing, design, media, and entertainment industries.",
      salary: "₹4-12 LPA",
      growth: "Moderate",
      education: "Bachelor's in Arts/Design",
      skills: ["Creativity", "Visual Design", "Communication", "Artistic Expression"],
    },
    business: {
      title: "Business & Management",
      description:
        "Lead organizations, manage teams, and drive business growth through strategy, marketing, and entrepreneurship.",
      salary: "₹7-20 LPA",
      growth: "High",
      education: "Bachelor's + MBA",
      skills: ["Leadership", "Strategic Thinking", "Communication", "Financial Analysis"],
    },
    social: {
      title: "Social Services & Education",
      description:
        "Make a difference in people's lives through education, social work, counseling, and community development.",
      salary: "₹4-10 LPA",
      growth: "Moderate",
      education: "Bachelor's in relevant field",
      skills: ["Empathy", "Communication", "Teaching", "Community Building"],
    },
    healthcare: {
      title: "Healthcare & Medicine",
      description:
        "Improve human health and wellbeing through medical practice, nursing, pharmacy, and health research.",
      salary: "₹8-30 LPA",
      growth: "High",
      education: "Medical/Nursing Degree",
      skills: ["Medical Knowledge", "Patient Care", "Attention to Detail", "Compassion"],
    },
  },
}
