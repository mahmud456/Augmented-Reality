// ===== Global Variables =====
let currentLanguage = 'en';
let isDarkMode = false;
let currentQuizQuestion = 0;
let quizAnswers = [];
let quizStarted = false;
let quizFinished = false;

// ===== Translations =====
const translations = {
    en: {
        // Navigation
        home: "Home",
        whatIsAr: "What is AR?",
        applications: "Applications",
        benefits: "Benefits & Limitations",
        arVsVr: "AR vs VR",
        caseStudies: "Case Studies",
        future: "Future Trends",
        demo: "Demo",
        quiz: "Quiz",
        faq: "FAQ",
        resources: "Resources",
        community: "Community",
        contact: "Contact",
        
        // Hero Section
        heroTitle: "Augmented Reality in Medicine",
        heroSubtitle: "Transforming Healthcare Through Digital Innovation",
        heroDescription: "Discover how AR technology is revolutionizing medical education, surgery, and patient care.",
        getStarted: "Get Started",
        learnMore: "Learn More",
        
        // What is AR Section
        whatIsArTitle: "What is Augmented Reality?",
        whatIsArDescription: "Augmented Reality (AR) overlays digital information onto the real world, enhancing our perception and interaction with the environment.",
        arDefinition: "AR combines real-world views with computer-generated images, sounds, and other sensory inputs to create an enhanced interactive experience.",
        
        // Applications Section
        applicationsTitle: "Applications in Medicine",
        surgeryTraining: "Surgery Training",
        surgeryTrainingDesc: "Practice complex procedures in a risk-free environment with real-time feedback.",
        anatomyVisualization: "Anatomy Visualization",
        anatomyVisualizationDesc: "Explore 3D anatomical models overlaid on real patients for better understanding.",
        patientEducation: "Patient Education",
        patientEducationDesc: "Help patients understand their conditions and treatments through interactive visualizations.",
        // Badges
        trainingBadge: "Training",
        educationBadge: "Education",
        careBadge: "Care",
        patientCareBadge: "Patient Care",
        surgeryBadge: "Surgery",
        
        // Benefits & Limitations
        benefitsTitle: "Benefits & Limitations",
        benefits: {
            accuracy: "Improved Accuracy",
            accuracyDesc: "Enhanced precision in medical procedures and diagnostics.",
            education: "Better Education",
            educationDesc: "Interactive learning experiences for medical students and professionals.",
            costEffective: "Cost-Effective Training",
            costEffectiveDesc: "Reduce costs associated with traditional training methods.",
            accessibility: "Increased Accessibility",
            accessibilityDesc: "Remote access to expert guidance and training resources."
        },
        limitations: {
            cost: "High Initial Cost",
            costDesc: "Expensive hardware and software implementation.",
            accessibility: "Limited Accessibility",
            accessibilityDesc: "Not all healthcare facilities can afford AR technology.",
            technical: "Technical Issues",
            technicalDesc: "Hardware limitations and software glitches can disrupt procedures.",
            training: "Training Required",
            trainingDesc: "Staff need proper training to use AR systems effectively."
        },
        
        // AR vs VR
        arVsVrTitle: "How AR Differs from VR",
        arTitle: "Augmented Reality (AR)",
        arDesc: "Enhances the real world with digital elements",
        arFeatures: ["Real environment", "Digital overlays", "Aware of surroundings", "Mobile devices", "Medical applications"],
        vrTitle: "Virtual Reality (VR)",
        vrDesc: "Creates a completely digital environment",
        vrFeatures: ["Virtual environment", "Full immersion", "Isolated from reality", "Headset required", "Gaming & simulation"],
        
        // Case Studies
        caseStudiesTitle: "Case Studies & Examples",
        case1: "Stanford Medical School",
        case1Desc: "Using AR for anatomy education and surgical training.",
        case2: "Mayo Clinic",
        case2Desc: "Implementing AR for patient education and treatment planning.",
        case3: "Johns Hopkins Hospital",
        case3Desc: "AR-guided surgeries with improved precision and outcomes.",
        
        // Future Trends
        futureTitle: "Future Trends",
        remoteSurgery: "Remote Surgery",
        remoteSurgeryDesc: "AR-enabled remote surgical assistance and guidance.",
        telemedicine: "Telemedicine Integration",
        telemedicineDesc: "AR-enhanced virtual consultations and diagnostics.",
        simulationLabs: "Advanced Simulation Labs",
        simulationLabsDesc: "Next-generation AR medical training facilities.",
        
        // Demo Section
        demoTitle: "Interactive Demo",
        demoDescription: "Experience AR in medical applications through these demonstration videos.",
        
        // Quiz Section
        quizTitle: "AR Medicine Quiz",
        quizDescription: "Test your knowledge about Augmented Reality in medicine.",
        quizStart: "Start Quiz",
        quizNext: "Next Question",
        quizPrevious: "Previous Question",
        quizFinish: "Finish Quiz",
        quizRestart: "Restart Quiz",
        quizQuestion1: "What does AR stand for?",
        quizQuestion2: "Which of these is NOT a common medical application of AR?",
        quizQuestion3: "What is a key difference between AR and VR?",
        quizQuestion4: "Which hospital is known for using AR in surgery?",
        quizQuestion5: "What is one major benefit of AR in medical training?",
        quizQ1Option1: "Augmented Reality",
        quizQ1Option2: "Artificial Reality",
        quizQ1Option3: "Advanced Reality",
        quizQ1Option4: "Automated Reality",
        quizQ2Option1: "Surgery training",
        quizQ2Option2: "Anatomy visualization",
        quizQ2Option3: "Patient education",
        quizQ2Option4: "Weather prediction",
        quizQ3Option1: "AR enhances real world, VR creates virtual world",
        quizQ3Option2: "AR is more expensive than VR",
        quizQ3Option3: "AR requires internet, VR doesn't",
        quizQ3Option4: "AR is only for mobile, VR is only for computers",
        quizQ4Option1: "Stanford Medical School",
        quizQ4Option2: "Johns Hopkins Hospital",
        quizQ4Option3: "Mayo Clinic",
        quizQ4Option4: "All of the above",
        quizQ5Option1: "Reduced training costs",
        quizQ5Option2: "Improved weather prediction",
        quizQ5Option3: "Better coffee making",
        quizQ5Option4: "Faster internet speeds",
        quizScore: "Your Score:",
        quizOutOf: "out of",
        quizExcellent: "Excellent! You're an AR expert!",
        quizGood: "Good job! You have solid knowledge of AR in medicine.",
        quizFair: "Fair effort! Consider learning more about AR in healthcare.",
        quizKeepLearning: "Keep learning about AR in medicine!",
        
        // FAQ
        faqTitle: "Frequently Asked Questions",
        faq1: "What equipment is needed for medical AR?",
        faq1Answer: "Medical AR typically requires tablets, smartphones, or AR glasses, along with specialized software applications.",
        faq2: "How expensive is AR implementation in healthcare?",
        faq2Answer: "Costs vary widely, from basic tablet applications ($500-$2000) to advanced AR systems ($10,000-$50,000+).",
        faq3: "Is AR safe for medical use?",
        faq3Answer: "Yes, when properly implemented and validated, AR is safe and can improve medical outcomes.",
        faq4: "How long does it take to learn AR systems?",
        faq4Answer: "Basic proficiency can be achieved in 1-2 weeks, with advanced mastery taking 1-3 months.",
        
        // Resources
        resourcesTitle: "Resource Hub",
        researchPapers: "Research Papers",
        arTools: "AR Tools & Software",
        trainingApps: "Training Applications",
        
        // Community
        communityTitle: "Community Forum",
        communityDesc: "Connect with healthcare professionals and AR enthusiasts.",
        
        // Contact
        contactTitle: "Contact & Support",
        contactDesc: "Get in touch with our team for collaboration or support.",
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send Message",
        
        // Newsletter
        newsletterTitle: "Stay Updated",
        newsletterDesc: "Subscribe to our newsletter for the latest updates on AR in healthcare.",
        subscribe: "Subscribe",
        
        // Events
        eventsTitle: "Upcoming Events",
        event1: "AR Medical Conference 2024",
        event1Date: "March 15-17, 2024",
        event1Location: "San Francisco, CA",
        event2: "Healthcare Innovation Summit",
        event2Date: "April 22-24, 2024",
        event2Location: "Boston, MA",

        // FAQ Ask AI
        aiFaqTitle: "Ask the AI",
        aiFaqLabel: "Your Question",
        aiFaqPlaceholder: "Type your question...",
        aiFaqButton: "Get Answer",
        aiResponseTitle: "AI Response",
        aiResponseEmpty: "Ask a question to see an answer here."
    },
    bn: {
        // Navigation
        home: "হোম",
        whatIsAr: "এআর কি?",
        applications: "অ্যাপ্লিকেশন",
        benefits: "সুবিধা ও সীমাবদ্ধতা",
        arVsVr: "এআর বনাম ভিআর",
        caseStudies: "কেস স্টাডি",
        future: "ভবিষ্যৎ প্রবণতা",
        demo: "ডেমো",
        quiz: "কুইজ",
        faq: "সাধারণ প্রশ্ন",
        resources: "রিসোর্স",
        community: "কমিউনিটি",
        contact: "যোগাযোগ",
        
        // Hero Section
        heroTitle: "চিকিৎসায় অগমেন্টেড রিয়েলিটি",
        heroSubtitle: "ডিজিটাল ইনোভেশনের মাধ্যমে স্বাস্থ্যসেবা রূপান্তর",
        heroDescription: "আবিষ্কার করুন কিভাবে এআর প্রযুক্তি মেডিকেল শিক্ষা, সার্জারি এবং রোগীর যত্নে বিপ্লব ঘটাচ্ছে।",
        getStarted: "শুরু করুন",
        learnMore: "আরও জানুন",
        
        // What is AR Section
        whatIsArTitle: "অগমেন্টেড রিয়েলিটি কি?",
        whatIsArDescription: "অগমেন্টেড রিয়েলিটি (এআর) বাস্তব বিশ্বের উপর ডিজিটাল তথ্য ওভারলে করে, আমাদের পরিবেশের উপলব্ধি এবং ইন্টারঅ্যাকশন বাড়ায়।",
        arDefinition: "এআর বাস্তব-বিশ্বের দৃশ্যগুলিকে কম্পিউটার-জেনারেটেড চিত্র, শব্দ এবং অন্যান্য সেন্সরি ইনপুটগুলির সাথে একত্রিত করে একটি উন্নত ইন্টারেক্টিভ অভিজ্ঞতা তৈরি করে।",
        
        // Applications Section
        applicationsTitle: "চিকিৎসায় অ্যাপ্লিকেশন",
        surgeryTraining: "সার্জারি প্রশিক্ষণ",
        surgeryTrainingDesc: "রিয়েল-টাইম ফিডব্যাক সহ ঝুঁকিমুক্ত পরিবেশে জটিল পদ্ধতি অনুশীলন করুন।",
        anatomyVisualization: "অ্যানাটমি ভিজ্যুয়ালাইজেশন",
        anatomyVisualizationDesc: "ভালো বোঝার জন্য বাস্তব রোগীদের উপর 3D অ্যানাটমিক্যাল মডেল অন্বেষণ করুন।",
        patientEducation: "রোগী শিক্ষা",
        patientEducationDesc: "ইন্টারেক্টিভ ভিজ্যুয়ালাইজেশনের মাধ্যমে রোগীদের তাদের অবস্থা এবং চিকিত্সা বুঝতে সাহায্য করুন।",
        // Badges
        trainingBadge: "প্রশিক্ষণ",
        educationBadge: "শিক্ষা",
        careBadge: "সেবা",
        patientCareBadge: "রোগী সেবা",
        surgeryBadge: "সার্জারি",
        
        // Benefits & Limitations
        benefitsTitle: "সুবিধা ও সীমাবদ্ধতা",
        benefits: {
            accuracy: "উন্নত নির্ভুলতা",
            accuracyDesc: "মেডিকেল পদ্ধতি এবং ডায়াগনস্টিক্সে উন্নত নির্ভুলতা।",
            education: "উন্নত শিক্ষা",
            educationDesc: "মেডিকেল ছাত্র এবং পেশাদারদের জন্য ইন্টারেক্টিভ লার্নিং অভিজ্ঞতা।",
            costEffective: "সাশ্রয়ী প্রশিক্ষণ",
            costEffectiveDesc: "ঐতিহ্যগত প্রশিক্ষণ পদ্ধতির সাথে সম্পর্কিত খরচ হ্রাস করুন।",
            accessibility: "বর্ধিত অ্যাক্সেসিবিলিটি",
            accessibilityDesc: "বিশেষজ্ঞ নির্দেশিকা এবং প্রশিক্ষণ সংস্থানগুলিতে রিমোট অ্যাক্সেস।"
        },
        limitations: {
            cost: "উচ্চ প্রাথমিক খরচ",
            costDesc: "ব্যয়বহুল হার্ডওয়্যার এবং সফ্টওয়্যার বাস্তবায়ন।",
            accessibility: "সীমিত অ্যাক্সেসিবিলিটি",
            accessibilityDesc: "সমস্ত স্বাস্থ্যসেবা সুবিধা এআর প্রযুক্তি ব্যবহার করতে পারে না।",
            technical: "কারিগরি সমস্যা",
            technicalDesc: "হার্ডওয়্যার সীমাবদ্ধতা এবং সফ্টওয়্যার গ্লিচগুলি পদ্ধতিগুলি ব্যাহত করতে পারে।",
            training: "প্রশিক্ষণ প্রয়োজন",
            trainingDesc: "কর্মীদের এআর সিস্টেমগুলি কার্যকরভাবে ব্যবহার করতে সঠিক প্রশিক্ষণের প্রয়োজন।"
        },
        
        // AR vs VR
        arVsVrTitle: "এআর ভিআর থেকে কিভাবে আলাদা",
        arTitle: "অগমেন্টেড রিয়েলিটি (এআর)",
        arDesc: "ডিজিটাল উপাদান দিয়ে বাস্তব বিশ্বকে উন্নত করে",
        arFeatures: ["বাস্তব পরিবেশ", "ডিজিটাল ওভারলে", "পরিবেশের সচেতনতা", "মোবাইল ডিভাইস", "মেডিকেল অ্যাপ্লিকেশন"],
        vrTitle: "ভার্চুয়াল রিয়েলিটি (ভিআর)",
        vrDesc: "সম্পূর্ণ ডিজিটাল পরিবেশ তৈরি করে",
        vrFeatures: ["ভার্চুয়াল পরিবেশ", "সম্পূর্ণ ইমারশন", "বাস্তবতা থেকে বিচ্ছিন্ন", "হেডসেট প্রয়োজন", "গেমিং এবং সিমুলেশন"],
        
        // Case Studies
        caseStudiesTitle: "কেস স্টাডি ও উদাহরণ",
        case1: "স্ট্যানফোর্ড মেডিকেল স্কুল",
        case1Desc: "অ্যানাটমি শিক্ষা এবং সার্জিকাল প্রশিক্ষণের জন্য এআর ব্যবহার।",
        case2: "মায়ো ক্লিনিক",
        case2Desc: "রোগী শিক্ষা এবং চিকিত্সা পরিকল্পনার জন্য এআর বাস্তবায়ন।",
        case3: "জনস হপকিন্স হাসপাতাল",
        case3Desc: "উন্নত নির্ভুলতা এবং ফলাফল সহ এআর-গাইডেড সার্জারি।",
        
        // Future Trends
        futureTitle: "ভবিষ্যৎ প্রবণতা",
        remoteSurgery: "রিমোট সার্জারি",
        remoteSurgeryDesc: "এআর-সক্ষম রিমোট সার্জিকাল সহায়তা এবং নির্দেশিকা।",
        telemedicine: "টেলিমেডিসিন ইন্টিগ্রেশন",
        telemedicineDesc: "এআর-উন্নত ভার্চুয়াল পরামর্শ এবং ডায়াগনস্টিক্স।",
        simulationLabs: "উন্নত সিমুলেশন ল্যাব",
        simulationLabsDesc: "পরবর্তী প্রজন্মের এআর মেডিকেল প্রশিক্ষণ সুবিধা।",
        
        // Demo Section
        demoTitle: "ইন্টারেক্টিভ ডেমো",
        demoDescription: "এই ডেমোনস্ট্রেশন ভিডিওগুলির মাধ্যমে মেডিকেল অ্যাপ্লিকেশনে এআর অভিজ্ঞতা করুন।",
        
        // Quiz Section
        quizTitle: "এআর মেডিসিন কুইজ",
        quizDescription: "চিকিৎসায় অগমেন্টেড রিয়েলিটি সম্পর্কে আপনার জ্ঞান পরীক্ষা করুন।",
        quizStart: "কুইজ শুরু করুন",
        quizNext: "পরবর্তী প্রশ্ন",
        quizPrevious: "পূর্ববর্তী প্রশ্ন",
        quizFinish: "কুইজ শেষ করুন",
        quizRestart: "কুইজ পুনরায় শুরু করুন",
        quizQuestion1: "এআর-এর পূর্ণরূপ কি?",
        quizQuestion2: "নিচের কোনটি এআর-এর সাধারণ মেডিকেল অ্যাপ্লিকেশন নয়?",
        quizQuestion3: "এআর এবং ভিআর-এর মধ্যে প্রধান পার্থক্য কি?",
        quizQuestion4: "কোন হাসপাতাল সার্জারিতে এআর ব্যবহারের জন্য পরিচিত?",
        quizQuestion5: "মেডিকেল প্রশিক্ষণে এআর-এর একটি প্রধান সুবিধা কি?",
        quizQ1Option1: "অগমেন্টেড রিয়েলিটি",
        quizQ1Option2: "আর্টিফিশিয়াল রিয়েলিটি",
        quizQ1Option3: "অ্যাডভান্সড রিয়েলিটি",
        quizQ1Option4: "অটোমেটেড রিয়েলিটি",
        quizQ2Option1: "সার্জারি প্রশিক্ষণ",
        quizQ2Option2: "অ্যানাটমি ভিজ্যুয়ালাইজেশন",
        quizQ2Option3: "রোগী শিক্ষা",
        quizQ2Option4: "আবহাওয়া পূর্বাভাস",
        quizQ3Option1: "এআর বাস্তব বিশ্বকে উন্নত করে, ভিআর ভার্চুয়াল বিশ্ব তৈরি করে",
        quizQ3Option2: "এআর ভিআর-এর চেয়ে বেশি ব্যয়বহুল",
        quizQ3Option3: "এআর-এর ইন্টারনেট প্রয়োজন, ভিআর-এর প্রয়োজন না",
        quizQ3Option4: "এআর শুধুমাত্র মোবাইলের জন্য, ভিআর শুধুমাত্র কম্পিউটারের জন্য",
        quizQ4Option1: "স্ট্যানফোর্ড মেডিকেল স্কুল",
        quizQ4Option2: "জনস হপকিন্স হাসপাতাল",
        quizQ4Option3: "মায়ো ক্লিনিক",
        quizQ4Option4: "উপরের সবগুলো",
        quizQ5Option1: "হ্রাসকৃত প্রশিক্ষণ খরচ",
        quizQ5Option2: "উন্নত আবহাওয়া পূর্বাভাস",
        quizQ5Option3: "ভালো কফি তৈরি",
        quizQ5Option4: "দ্রুত ইন্টারনেট গতি",
        quizScore: "আপনার স্কোর:",
        quizOutOf: "এর মধ্যে",
        quizExcellent: "অসাধারণ! আপনি একজন এআর বিশেষজ্ঞ!",
        quizGood: "ভালো কাজ! আপনার চিকিৎসায় এআর সম্পর্কে ভালো জ্ঞান আছে।",
        quizFair: "মোটামুটি চেষ্টা! স্বাস্থ্যসেবায় এআর সম্পর্কে আরও শিখুন।",
        quizKeepLearning: "চিকিৎসায় এআর সম্পর্কে শিখতে থাকুন!",
        
        // FAQ
        faqTitle: "সাধারণ প্রশ্নাবলী",
        faq1: "মেডিকেল এআর-এর জন্য কি সরঞ্জাম প্রয়োজন?",
        faq1Answer: "মেডিকেল এআর সাধারণত ট্যাবলেট, স্মার্টফোন, বা এআর চশমা, পাশাপাশি বিশেষায়িত সফ্টওয়্যার অ্যাপ্লিকেশন প্রয়োজন।",
        faq2: "স্বাস্থ্যসেবায় এআর বাস্তবায়ন কত ব্যয়বহুল?",
        faq2Answer: "খরচ ব্যাপকভাবে পরিবর্তিত হয়, বেসিক ট্যাবলেট অ্যাপ্লিকেশন ($500-$2000) থেকে উন্নত এআর সিস্টেম ($10,000-$50,000+) পর্যন্ত।",
        faq3: "মেডিকেল ব্যবহারের জন্য এআর কি নিরাপদ?",
        faq3Answer: "হ্যাঁ, যখন সঠিকভাবে বাস্তবায়িত এবং বৈধকৃত হয়, এআর নিরাপদ এবং মেডিকেল ফলাফল উন্নত করতে পারে।",
        faq4: "এআর সিস্টেম শেখাতে কত সময় লাগে?",
        faq4Answer: "বেসিক দক্ষতা 1-2 সপ্তাহে অর্জন করা যেতে পারে, উন্নত মাস্টারিতে 1-3 মাস সময় লাগে।",
        
        // Resources
        resourcesTitle: "রিসোর্স হাব",
        researchPapers: "গবেষণা পত্র",
        arTools: "এআর টুলস ও সফ্টওয়্যার",
        trainingApps: "প্রশিক্ষণ অ্যাপ্লিকেশন",
        
        // Community
        communityTitle: "কমিউনিটি ফোরাম",
        communityDesc: "স্বাস্থ্যসেবা পেশাদার এবং এআর উত্সাহীদের সাথে সংযোগ করুন।",
        
        // Contact
        contactTitle: "যোগাযোগ ও সহায়তা",
        contactDesc: "সহযোগিতা বা সহায়তার জন্য আমাদের দলের সাথে যোগাযোগ করুন।",
        name: "নাম",
        email: "ইমেল",
        message: "বার্তা",
        send: "বার্তা পাঠান",
        
        // Newsletter
        newsletterTitle: "আপডেট থাকুন",
        newsletterDesc: "স্বাস্থ্যসেবায় এআর-এর সর্বশেষ আপডেটের জন্য আমাদের নিউজলেটার সাবস্ক্রাইব করুন।",
        subscribe: "সাবস্ক্রাইব করুন",
        
        // Events
        eventsTitle: "আসন্ন ইভেন্ট",
        event1: "এআর মেডিকেল কনফারেন্স ২০২৪",
        event1Date: "১৫-১৭ মার্চ, ২০২৪",
        event1Location: "সান ফ্রান্সিসকো, সিএ",
        event2: "হেলথকেয়ার ইনোভেশন সামিট",
        event2Date: "২২-২৪ এপ্রিল, ২০২৪",
        event2Location: "বোস্টন, এমএ",

        // FAQ Ask AI
        aiFaqTitle: "এআই-কে জিজ্ঞাসা করুন",
        aiFaqLabel: "আপনার প্রশ্ন",
        aiFaqPlaceholder: "আপনার প্রশ্ন লিখুন...",
        aiFaqButton: "উত্তর নিন",
        aiResponseTitle: "এআই-এর উত্তর",
        aiResponseEmpty: "এখানে উত্তর দেখতে একটি প্রশ্ন করুন।"
    }
};

// ===== Quiz Questions =====
const quizQuestions = [
    {
        question: "quizQuestion1",
        options: ["quizQ1Option1", "quizQ1Option2", "quizQ1Option3", "quizQ1Option4"],
        correct: 0
    },
    {
        question: "quizQuestion2",
        options: ["quizQ2Option1", "quizQ2Option2", "quizQ2Option3", "quizQ2Option4"],
        correct: 3
    },
    {
        question: "quizQuestion3",
        options: ["quizQ3Option1", "quizQ3Option2", "quizQ3Option3", "quizQ3Option4"],
        correct: 0
    },
    {
        question: "quizQuestion4",
        options: ["quizQ4Option1", "quizQ4Option2", "quizQ4Option3", "quizQ4Option4"],
        correct: 3
    },
    {
        question: "quizQuestion5",
        options: ["quizQ5Option1", "quizQ5Option2", "quizQ5Option3", "quizQ5Option4"],
        correct: 0
    }
];

// ===== DOM Elements =====
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    setupSmoothScrolling();
    setupActiveNavigation();
    loadUserPreferences();
    initializeSidebarState();
}

// ===== Event Listeners =====
function setupEventListeners() {
    // Language dropdown (custom)
    document.querySelectorAll('.lang-menu [data-lang]').forEach(item => {
        item.addEventListener('click', () => {
            changeLanguage(item.dataset.lang);
            updateLanguageUI();
            const dd = document.getElementById('lang-dropdown');
            if (dd) dd.classList.remove('open');
        });
    });
    const langCurrent = document.querySelector('.lang-dropdown .lang-current');
    const langDropdown = document.getElementById('lang-dropdown');
    if (langCurrent && langDropdown) {
        langCurrent.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('open');
        });
        document.addEventListener('click', (e) => {
            if (!langDropdown.contains(e.target)) {
                langDropdown.classList.remove('open');
            }
        });
    }

    // Dark mode toggle
    document.getElementById('dark-mode-toggle').addEventListener('change', function(e) {
        toggleDarkMode(e.target.checked);
    });

    // Contact form
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        handleContactSubmit();
    });

    // Newsletter form
    document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
        e.preventDefault();
        handleNewsletterSubmit();
    });

    // Demo buttons
    document.querySelectorAll('.demo-card button').forEach(button => {
        button.addEventListener('click', function() {
            handleDemoClick(this);
        });
    });

    // Sidebar toggle
    const sidebarToggle = document.getElementById('sidebar-toggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', () => {
            const collapsed = !document.body.classList.contains('sidebar-collapsed');
            document.body.classList.toggle('sidebar-collapsed', collapsed);
            localStorage.setItem('sidebarCollapsed', String(collapsed));
        });

        // Hover to peek open the sidebar when collapsed
        const sidebar = document.getElementById('sidebar');
        let hoverTimer;
        const applyPeek = (enable) => {
            clearTimeout(hoverTimer);
            if (enable) {
                if (document.body.classList.contains('sidebar-collapsed')) {
                    document.body.classList.add('sidebar-peek');
                    sidebarToggle.setAttribute('aria-expanded', 'true');
                }
            } else {
                // delay to allow moving from toggle to sidebar
                hoverTimer = setTimeout(() => {
                    const overToggle = sidebarToggle.matches(':hover');
                    const overSidebar = sidebar && sidebar.matches(':hover');
                    if (!overToggle && !overSidebar) {
                        document.body.classList.remove('sidebar-peek');
                        sidebarToggle.setAttribute('aria-expanded', 'false');
                    }
                }, 150);
            }
        };

        sidebarToggle.addEventListener('mouseenter', () => applyPeek(true));
        sidebarToggle.addEventListener('mouseleave', () => applyPeek(false));
    if (sidebar) {
        sidebar.addEventListener('mouseenter', () => applyPeek(true));
        sidebar.addEventListener('mouseleave', () => applyPeek(false));
    }
    }

    // Close sidebar when a nav link is clicked (mobile usability)
    document.querySelectorAll('#sidebar .nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                document.body.classList.add('sidebar-collapsed');
                document.body.classList.remove('sidebar-peek');
            }
        });
    });

    // FAQ Ask AI form
    const faqAskForm = document.getElementById('faq-ask-form');
    if (faqAskForm) {
        faqAskForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFaqAsk();
        });
    }

    // Back to top button
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

// ===== Language Functions =====
function changeLanguage(lang) {
    currentLanguage = lang;
    updatePageContent();
    localStorage.setItem('language', lang);
    updateLanguageUI();
}

function updatePageContent() {
    const t = translations[currentLanguage];
    
    // Update navigation
    document.querySelectorAll('.nav-link').forEach((link, index) => {
        // Use 'benefitsTitle' to avoid collision with the 'benefits' object
        const keys = ['home', 'whatIsAr', 'applications', 'benefitsTitle', 'arVsVr', 'caseStudies', 'future', 'demo', 'quiz', 'faq', 'resources', 'community', 'contact'];
        if (keys[index]) {
            link.textContent = t[keys[index]];
        }
    });

    // Update hero section
    document.querySelector('.hero-title').textContent = t.heroTitle;
    document.querySelector('.hero-subtitle').textContent = t.heroSubtitle;
    document.querySelector('.hero-description').textContent = t.heroDescription;
    document.querySelector('.hero-buttons .btn-primary').textContent = t.getStarted;
    document.querySelector('.hero-buttons .btn-secondary').textContent = t.learnMore;

    // Update section titles
    updateSectionTitles(t);

    // Update section descriptions where keys exist
    const demoDesc = document.querySelector('#demo .section-description');
    if (demoDesc) demoDesc.textContent = t.demoDescription;
    const communityDesc = document.querySelector('#community .section-description');
    if (communityDesc) communityDesc.textContent = t.communityDesc;
    const contactDesc = document.querySelector('#contact .section-description');
    if (contactDesc) contactDesc.textContent = t.contactDesc;
    const quizDesc = document.querySelector('#quiz .section-description');
    if (quizDesc) quizDesc.textContent = t.quizDescription;

    // Update quiz content if quiz is active
    if (quizStarted) {
        updateQuizContent();
    }

    // Update content-heavy sections
    updateWhatIsArContent(t);
    updateApplicationsContent(t);
    updateBenefitsContent(t);
    updateArVsVrContent(t);
    updateCaseStudiesContent(t);
    updateFutureContent(t);
    updateQuizStaticContent(t);
    updateFaqContent(t);
    updateFaqAskContent(t);
    updateResourcesContent(t);
    updateCommunityContent(t);
    updateContactContent(t);
    updateNewsletterContent(t);
    updateEventsContent(t);
}

// ===== FAQ Ask AI =====
function handleFaqAsk() {
    const textarea = document.getElementById('faq-user-question');
    const content = document.getElementById('ai-response-content');
    if (!textarea || !content) return;
    const q = (textarea.value || '').trim();
    if (!q) {
        showNotification(currentLanguage === 'bn' ? 'একটি প্রশ্ন লিখুন' : 'Please enter a question', 'error');
        return;
    }

    const prev = content.textContent;
    content.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + (currentLanguage === 'bn' ? 'উত্তর তৈরি হচ্ছে...' : 'Generating answer...');
    setTimeout(() => {
        const answer = getAiAnswer(q, currentLanguage);
        content.textContent = answer;
        document.getElementById('faq-ai-response').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 600);
}

function getAiAnswer(question, lang) {
    const q = question.toLowerCase();
    const t = translations[lang];
    // Simple keyword-based responses using existing content
    if (q.includes('what is ar') || q.includes('ar stand') || q.includes('এআর কি') || q.includes('ar ki')) {
        return t.whatIsArDescription || t.arDefinition;
    }
    if (q.includes('application') || q.includes('use') || q.includes('ব্যবহার')) {
        return `${t.applicationsTitle}: ${t.surgeryTraining}, ${t.anatomyVisualization}, ${t.patientEducation}.`;
    }
    if (q.includes('benefit') || q.includes('সুবিধা') || q.includes('advantage')) {
        return `${t.benefitsTitle}: ${t.benefits.accuracy} — ${t.benefits.accuracyDesc}; ${t.benefits.education} — ${t.benefits.educationDesc}.`;
    }
    if (q.includes('limitation') || q.includes('problem') || q.includes('সীমাবদ্ধ') || q.includes('issue')) {
        return `${t.benefitsTitle}: ${t.limitations.cost} — ${t.limitations.costDesc}; ${t.limitations.technical} — ${t.limitations.technicalDesc}.`;
    }
    if (q.includes('difference') || q.includes('vs') || q.includes('পার্থক্য') || q.includes('vr')) {
        return `${t.arVsVrTitle}: ${t.arTitle} — ${t.arDesc}. ${t.vrTitle} — ${t.vrDesc}.`;
    }
    if (q.includes('cost') || q.includes('খরচ')) {
        return `${t.limitations.cost}: ${t.limitations.costDesc}`;
    }
    if (q.includes('safe') || q.includes('নিরাপদ')) {
        return t.faq3Answer;
    }
    if (q.includes('equipment') || q.includes('device') || q.includes('সরঞ্জাম')) {
        return t.faq1Answer;
    }
    // Fallback
    return lang === 'bn' ? 'দুঃখিত, আমি নিশ্চিত নই। অনুগ্রহ করে আরও নির্দিষ্ট করে জিজ্ঞাসা করুন বা উপরের সেকশনগুলি দেখুন।' : 'Sorry, not sure. Please be more specific or check the sections above.';
}

function updateFaqAskContent(t) {
    const title = document.getElementById('ai-faq-title');
    if (title) title.textContent = t.aiFaqTitle || 'Ask the AI';
    const label = document.getElementById('ai-faq-label');
    if (label) label.textContent = t.aiFaqLabel || 'Your Question';
    const textarea = document.getElementById('faq-user-question');
    if (textarea) textarea.placeholder = t.aiFaqPlaceholder || 'Type your question...';
    const btn = document.getElementById('faq-ask-btn');
    if (btn) {
        const icon = btn.querySelector('i');
        btn.textContent = t.aiFaqButton || 'Get Answer';
        if (icon) btn.prepend(icon);
    }
    const respTitle = document.getElementById('ai-response-title');
    if (respTitle) respTitle.textContent = t.aiResponseTitle || 'AI Response';
    const respContent = document.getElementById('ai-response-content');
    if (respContent && (!respContent.textContent || respContent.textContent.trim() === '' || respContent.textContent.includes('Ask a question'))) {
        respContent.textContent = t.aiResponseEmpty || 'Ask a question to see an answer here.';
    }
}

function updateSectionTitles(t) {
    const sections = [
        { id: 'what-is-ar', title: t.whatIsArTitle },
        { id: 'applications', title: t.applicationsTitle },
        { id: 'benefits', title: t.benefitsTitle },
        { id: 'ar-vs-vr', title: t.arVsVrTitle },
        { id: 'case-studies', title: t.caseStudiesTitle },
        { id: 'future', title: t.futureTitle },
        { id: 'demo', title: t.demoTitle },
        { id: 'quiz', title: t.quizTitle },
        { id: 'faq', title: t.faqTitle },
        { id: 'resources', title: t.resourcesTitle },
        { id: 'community', title: t.communityTitle },
        { id: 'contact', title: t.contactTitle }
    ];

    sections.forEach(section => {
        const element = document.querySelector(`#${section.id} .section-title`);
        if (element) {
            element.textContent = section.title;
        }
    });
}

// ===== Dark Mode Functions =====
function toggleDarkMode(enabled) {
    isDarkMode = enabled;
    document.body.classList.toggle('dark', enabled);
    localStorage.setItem('darkMode', enabled);
}

// ===== User Preferences =====
function loadUserPreferences() {
    // Load language preference
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
        updatePageContent();
    }

    // Load dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode !== null) {
        isDarkMode = savedDarkMode === 'true';
        document.getElementById('dark-mode-toggle').checked = isDarkMode;
        document.body.classList.toggle('dark', isDarkMode);
    }
    // Sync language dropdown label
    updateLanguageUI();
}

// Update the language dropdown UI
function updateLanguageUI() {
    const label = document.getElementById('current-lang-label');
    if (label) label.textContent = currentLanguage === 'bn' ? 'বাং' : 'EN';
    document.querySelectorAll('.lang-menu [data-lang]').forEach(item => {
        item.classList.toggle('active', item.dataset.lang === currentLanguage);
    });
}

// ===== Per-section content updates =====
function updateWhatIsArContent(t) {
    const cardTitle = document.querySelector('#what-is-ar .ar-info .card .card-header h3');
    if (cardTitle) cardTitle.textContent = t.whatIsAr;
    const cardDesc = document.querySelector('#what-is-ar .ar-info .card .card-body p');
    if (cardDesc) cardDesc.textContent = t.arDefinition;
}

function updateApplicationsContent(t) {
    const cards = document.querySelectorAll('#applications .applications-grid .application-card');
    const titles = [t.surgeryTraining, t.anatomyVisualization, t.patientEducation];
    const descs = [t.surgeryTrainingDesc, t.anatomyVisualizationDesc, t.patientEducationDesc];
    cards.forEach((card, i) => {
        const h3 = card.querySelector('h3');
        const p = card.querySelector('p');
        if (h3 && titles[i]) h3.textContent = titles[i];
        if (p && descs[i]) p.textContent = descs[i];
    });
}

function updateBenefitsContent(t) {
    const benefitCards = document.querySelectorAll('#benefits .benefits-column:first-child .benefit-card');
    const benefitKeys = [
        ['accuracy', 'accuracyDesc'],
        ['education', 'educationDesc'],
        ['costEffective', 'costEffectiveDesc'],
        ['accessibility', 'accessibilityDesc']
    ];
    benefitCards.forEach((card, i) => {
        const h4 = card.querySelector('h4');
        const p = card.querySelector('p');
        if (h4 && benefitKeys[i]) h4.innerHTML = `<i class="fas fa-star"></i> ${t.benefits[benefitKeys[i][0]]}`;
        if (p && benefitKeys[i]) p.textContent = t.benefits[benefitKeys[i][1]];
    });

    const limitationCards = document.querySelectorAll('#benefits .benefits-column:last-child .limitation-card');
    const limitationKeys = [
        ['cost', 'costDesc'],
        ['accessibility', 'accessibilityDesc'],
        ['technical', 'technicalDesc'],
        ['training', 'trainingDesc']
    ];
    limitationCards.forEach((card, i) => {
        const h4 = card.querySelector('h4');
        const p = card.querySelector('p');
        if (h4 && limitationKeys[i]) h4.innerHTML = `<i class="fas fa-shield-alt"></i> ${t.limitations[limitationKeys[i][0]]}`;
        if (p && limitationKeys[i]) p.textContent = t.limitations[limitationKeys[i][1]];
    });
}

function updateArVsVrContent(t) {
    const arCard = document.querySelector('#ar-vs-vr .ar-card');
    if (arCard) {
        const h3 = arCard.querySelector('.comparison-header h3');
        const p = arCard.querySelector('.comparison-header p');
        if (h3) h3.textContent = t.arTitle;
        if (p) p.textContent = t.arDesc;
        const lis = arCard.querySelectorAll('.feature-list li');
        lis.forEach((li, i) => {
            if (t.arFeatures && t.arFeatures[i]) li.innerHTML = `<i class="fas fa-check"></i> ${t.arFeatures[i]}`;
        });
    }
    const vrCard = document.querySelector('#ar-vs-vr .vr-card');
    if (vrCard) {
        const h3 = vrCard.querySelector('.comparison-header h3');
        const p = vrCard.querySelector('.comparison-header p');
        if (h3) h3.textContent = t.vrTitle;
        if (p) p.textContent = t.vrDesc;
        const lis = vrCard.querySelectorAll('.feature-list li');
        lis.forEach((li, i) => {
            if (t.vrFeatures && t.vrFeatures[i]) li.innerHTML = `<i class="fas fa-check"></i> ${t.vrFeatures[i]}`;
        });
    }
}

function updateCaseStudiesContent(t) {
    const cards = document.querySelectorAll('#case-studies .case-studies-grid .case-study-card');
    const titles = [t.case1, t.case2, t.case3];
    const descs = [t.case1Desc, t.case2Desc, t.case3Desc];
    cards.forEach((card, i) => {
        const h3 = card.querySelector('h3');
        const p = card.querySelector('p');
        if (h3 && titles[i]) h3.textContent = titles[i];
        if (p && descs[i]) p.textContent = descs[i];
    });
}

function updateFutureContent(t) {
    const cards = document.querySelectorAll('#future .future-grid .future-card');
    const titles = [t.remoteSurgery, t.telemedicine, t.simulationLabs];
    const descs = [t.remoteSurgeryDesc, t.telemedicineDesc, t.simulationLabsDesc];
    cards.forEach((card, i) => {
        const h3 = card.querySelector('h3');
        const p = card.querySelector('p');
        if (h3 && titles[i]) h3.textContent = titles[i];
        if (p && descs[i]) p.textContent = descs[i];
    });
}

function updateQuizStaticContent(t) {
    const startTitle = document.querySelector('#quiz-start .card-header h3');
    const startDesc = document.querySelector('#quiz-start .card-header + .card-body p');
    const startBtn = document.querySelector('#quiz-start .btn.btn-primary');
    if (startTitle) startTitle.textContent = t.quizTitle;
    if (startDesc) startDesc.textContent = t.quizDescription;
    if (startBtn) startBtn.textContent = t.quizStart;

    const qText = document.getElementById('question-text');
    if (qText) qText.textContent = translations[currentLanguage]['quizQuestion1'] ? t.quizQuestion1 : qText.textContent;
}

function updateFaqContent(t) {
    const questions = [t.faq1, t.faq2, t.faq3, t.faq4];
    const answers = [t.faq1Answer, t.faq2Answer, t.faq3Answer, t.faq4Answer];
    document.querySelectorAll('#faq .faq-item').forEach((item, i) => {
        const qSpan = item.querySelector('.faq-question span');
        const aP = item.querySelector('.faq-answer p');
        if (qSpan && questions[i]) qSpan.textContent = questions[i];
        if (aP && answers[i]) aP.textContent = answers[i];
    });
}

function updateResourcesContent(t) {
    const cards = document.querySelectorAll('#resources .resources-grid .resource-card');
    const titles = [t.researchPapers, t.arTools, t.trainingApps];
    cards.forEach((card, i) => {
        const h3 = card.querySelector('h3');
        if (h3 && titles[i]) h3.textContent = titles[i];
    });
}

function updateCommunityContent(t) {
    const desc = document.querySelector('#community .section-description');
    if (desc) desc.textContent = t.communityDesc;
}

function updateContactContent(t) {
    const title = document.querySelector('#contact .section-title');
    if (title) title.textContent = t.contactTitle;
    const desc = document.querySelector('#contact .section-description');
    if (desc) desc.textContent = t.contactDesc;
    const labelName = document.querySelector('label[for="name"]');
    if (labelName) labelName.textContent = t.name;
    const labelEmail = document.querySelector('label[for="email"]');
    if (labelEmail) labelEmail.textContent = t.email;
    const labelMessage = document.querySelector('label[for="message"]');
    if (labelMessage) labelMessage.textContent = t.message;
    const sendBtn = document.querySelector('#contact button[type="submit"]');
    if (sendBtn) {
        const icon = sendBtn.querySelector('i');
        sendBtn.textContent = t.send;
        if (icon) sendBtn.prepend(icon);
    }
}

function updateNewsletterContent(t) {
    const h2 = document.querySelector('.newsletter h2');
    if (h2) h2.textContent = t.newsletterTitle;
    const p = document.querySelector('.newsletter p');
    if (p) p.textContent = t.newsletterDesc;
    const btn = document.querySelector('.newsletter-form button[type="submit"]');
    if (btn) btn.textContent = t.subscribe;
}

function updateEventsContent(t) {
    const sectionTitle = document.querySelector('.events-grid')?.closest('.section')?.querySelector('.section-title');
    if (sectionTitle) sectionTitle.textContent = t.eventsTitle;
    const events = document.querySelectorAll('.events-grid .event-card');
    if (events[0]) {
        const date = events[0].querySelector('.event-date');
        const title = events[0].querySelector('h3');
        const loc = events[0].querySelector('.event-location span');
        if (date) date.textContent = t.event1Date;
        if (title) title.textContent = t.event1;
        if (loc) loc.textContent = t.event1Location;
    }
    if (events[1]) {
        const date = events[1].querySelector('.event-date');
        const title = events[1].querySelector('h3');
        const loc = events[1].querySelector('.event-location span');
        if (date) date.textContent = t.event2Date;
        if (title) title.textContent = t.event2;
        if (loc) loc.textContent = t.event2Location;
    }
}

// ===== Sidebar State =====
function initializeSidebarState() {
    const isMobile = window.innerWidth <= 768;
    // Always show on desktop; collapse on mobile
    document.body.classList.toggle('sidebar-collapsed', isMobile);
    document.body.classList.remove('sidebar-peek');
}

// ===== Smooth Scrolling =====
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// ===== Active Navigation =====
function setupActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ===== Quiz Functions =====
function startQuiz() {
    quizStarted = true;
    quizFinished = false;
    currentQuizQuestion = 0;
    quizAnswers = [];
    
    document.getElementById('quiz-start').style.display = 'none';
    document.getElementById('quiz-questions').style.display = 'block';
    document.getElementById('quiz-results').style.display = 'none';
    
    updateQuizContent();
}

function updateQuizContent() {
    const t = translations[currentLanguage];
    const question = quizQuestions[currentQuizQuestion];
    
    document.querySelector('.question-number').textContent = `Question ${currentQuizQuestion + 1}`;
    document.querySelector('.quiz-score').textContent = `${currentQuizQuestion + 1} of ${quizQuestions.length}`;
    document.getElementById('question-text').textContent = t[question.question];
    
    const options = document.querySelectorAll('.quiz-option');
    options.forEach((option, index) => {
        option.textContent = t[question.options[index]];
        option.classList.remove('selected');
        option.onclick = () => selectAnswer(index);
    });
    
    // Update navigation buttons
    const prevBtn = document.querySelector('.quiz-navigation .btn-secondary');
    const nextBtn = document.querySelector('.quiz-navigation .btn-primary');
    
    prevBtn.disabled = currentQuizQuestion === 0;
    prevBtn.textContent = t.quizPrevious;
    
    nextBtn.disabled = quizAnswers[currentQuizQuestion] === undefined;
    nextBtn.textContent = currentQuizQuestion === quizQuestions.length - 1 ? t.quizFinish : t.quizNext;
}

function selectAnswer(answerIndex) {
    quizAnswers[currentQuizQuestion] = answerIndex;
    
    // Update UI
    document.querySelectorAll('.quiz-option').forEach((option, index) => {
        option.classList.toggle('selected', index === answerIndex);
    });
    
    // Enable next button
    document.querySelector('.quiz-navigation .btn-primary').disabled = false;
}

function nextQuestion() {
    if (currentQuizQuestion < quizQuestions.length - 1) {
        currentQuizQuestion++;
        updateQuizContent();
    } else {
        finishQuiz();
    }
}

function previousQuestion() {
    if (currentQuizQuestion > 0) {
        currentQuizQuestion--;
        updateQuizContent();
    }
}

function finishQuiz() {
    quizFinished = true;
    const score = calculateScore();
    const t = translations[currentLanguage];
    
    document.getElementById('quiz-questions').style.display = 'none';
    document.getElementById('quiz-results').style.display = 'block';
    
    document.getElementById('final-score').textContent = `${score}/${quizQuestions.length}`;
    
    let message;
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage >= 80) {
        message = t.quizExcellent;
    } else if (percentage >= 60) {
        message = t.quizGood;
    } else {
        message = t.quizFair;
    }
    
    document.getElementById('score-message').textContent = message;
}

function calculateScore() {
    return quizAnswers.reduce((score, answer, index) => {
        return score + (answer === quizQuestions[index].correct ? 1 : 0);
    }, 0);
}

function restartQuiz() {
    quizStarted = false;
    quizFinished = false;
    currentQuizQuestion = 0;
    quizAnswers = [];
    
    document.getElementById('quiz-start').style.display = 'block';
    document.getElementById('quiz-questions').style.display = 'none';
    document.getElementById('quiz-results').style.display = 'none';
}

// ===== FAQ Functions =====
function toggleFAQ(index) {
    const faqItems = document.querySelectorAll('.faq-item');
    const question = faqItems[index].querySelector('.faq-question');
    const answer = faqItems[index].querySelector('.faq-answer');
    
    const isActive = question.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-question').forEach(q => q.classList.remove('active'));
    document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('active'));
    
    // Open clicked item if it wasn't active
    if (!isActive) {
        question.classList.add('active');
        answer.classList.add('active');
    }
}

// ===== Form Handlers =====
function handleContactSubmit() {
    const form = document.getElementById('contact-form');
    const formData = new FormData(form);
    
    // Simulate form submission
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent!';
        submitBtn.style.backgroundColor = 'var(--success-color)';
        
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            submitBtn.style.backgroundColor = '';
            form.reset();
        }, 2000);
    }, 1500);
}

function handleNewsletterSubmit() {
    const form = document.querySelector('.newsletter-form');
    const email = form.querySelector('input[type="email"]').value;
    
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Subscribing...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        submitBtn.textContent = 'Subscribed!';
        submitBtn.style.backgroundColor = 'var(--success-color)';
        
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.style.backgroundColor = '';
            form.reset();
        }, 2000);
    }, 1500);
}

// ===== Demo Handlers =====
function handleDemoClick(button) {
    const originalText = button.innerHTML;
    
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
    button.disabled = true;
    
    setTimeout(() => {
        button.innerHTML = '<i class="fas fa-external-link-alt"></i> Open in New Tab';
        button.disabled = false;
        
        // Simulate opening demo
        setTimeout(() => {
            button.innerHTML = originalText;
        }, 3000);
    }, 1500);
}

// ===== Utility Functions =====
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// ===== Animation on Scroll =====
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', () => {
    setupScrollAnimations();
});

// ===== Keyboard Navigation =====
document.addEventListener('keydown', function(e) {
    // Quiz navigation
    if (quizStarted && !quizFinished) {
        if (e.key === 'ArrowLeft' && currentQuizQuestion > 0) {
            previousQuestion();
        } else if (e.key === 'ArrowRight' && quizAnswers[currentQuizQuestion] !== undefined) {
            nextQuestion();
        }
    }
    
    // FAQ navigation
    if (e.key === 'Escape') {
        document.querySelectorAll('.faq-question.active').forEach(question => {
            question.classList.remove('active');
            question.nextElementSibling.classList.remove('active');
        });
    }
});

// ===== Print Functionality =====
window.addEventListener('beforeprint', () => {
    document.body.classList.add('print-mode');
});

window.addEventListener('afterprint', () => {
    document.body.classList.remove('print-mode');
});

// ===== Error Handling =====
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.message);
    showNotification('An error occurred. Please refresh the page.', 'error');
});

// ===== Performance Optimization =====
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Handle responsive adjustments for any header inline nav (none by default now)
        const headerNav = document.querySelector('.header .nav-menu');
        if (headerNav) {
            headerNav.style.flexDirection = window.innerWidth < 768 ? 'column' : 'row';
        }
        // Always visible on desktop, collapsed on mobile
        if (window.innerWidth <= 768) {
            document.body.classList.add('sidebar-collapsed');
            document.body.classList.remove('sidebar-peek');
        } else {
            document.body.classList.remove('sidebar-collapsed');
            document.body.classList.remove('sidebar-peek');
        }
    }, 250);
});



// Initialize accessibility
document.addEventListener('DOMContentLoaded', setupAccessibility);

// ===== Service Worker Registration (for PWA) =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('ServiceWorker registration successful');
            })
            .catch(error => {
                console.log('ServiceWorker registration failed:', error);
            });
    });
}
