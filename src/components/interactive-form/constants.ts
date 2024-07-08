export const genderData = [
  { value: "Male" },
  { value: "Female" },
  { value: "Other" },
];

export const levelOfEducationData = [
  { id: "1", value: "High School Diploma", title: "High School Diploma" },
  { id: "2", value: "Associate's Degree", title: "Associate's Degree" },
  { id: "3", value: "Bachelor's Degree", title: "Bachelor's Degree" },
  { id: "4", value: "Master's Degree", title: "Master's Degree" },
  { id: "5", value: "Doctorate Degree", title: "Doctorate Degree" },
];

export const yearsOfWorkExperienceData = [
  { id: 1, value: "Less than 2 years", title: "Less than 2 years" },
  { id: 2, value: "2 - 5 years", title: "2 - 5 years" },
  { id: 3, value: "5 - 10 years", title: "5 - 10 years" },
  { id: 4, value: "Greater than 10 years", title: "Greater than 10 years" },
];

export const areaOfExpertiseData = [
  "Agriculture, Food, and Natural Resources",
  "Architecture and Construction",
  "Arts, Audio/Video Technology, and Communications",
  "Business Management and Administration",
  "Education and Training",
  "Finance",
  "Government and Public Administration",
  "Health Science",
  "Hospitality and Tourism",
  "Human Services",
  "Information Technology",
  "Law, Public Safety, Corrections, and Security",
  "Manufacturing",
  "Marketing",
  "Science, Technology, Engineering, and Mathematics",
  "Transportation, Distribution, and Logistics",
];

export const primaryMotivationData = [
  "Personal fulfillment and passion",
  "Family influence or tradition",
  "Financial stability",
  "Opportunity to make a positive impact on society",
  "Others (please specify)",
];

export const workingInYourFieldData = [
  "I'm practising",
  "No, Couldn't find a job",
  "Lost Interest",
  "Was never my choice",
  "It's complicated",
  "Others (please specify)",
];

export const sdgData = [
  {
    title: "No Poverty",
    href: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-01.jpg",
  },
  {
    title: "Zero Hunger",
    href: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-02.jpg",
  },
  {
    title: "Good Health",
    href: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-03.jpg",
  },
  {
    title: "Quality Education",
    href: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-04.jpg",
  },
  {
    title: "Gender Equality",
    href: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-05.jpg",
  },
  {
    title: "Clean Water And Sanitation",
    href: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-06.jpg",
  },
  {
    title: "Affordable And Clean Energy",
    href: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-07.jpg",
  },
  {
    title: "Decent Work And Economic Growth",
    href: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-08.jpg",
  },
  {
    title: "Industry, Innovation and Infrastructure",
    href: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-09.jpg",
  },
  {
    title: "Reduced Inequalities",
    href: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-10.jpg",
  },
  {
    title: "Sustainable Cities and Communities",
    href: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-11.jpg",
  },
  {
    title: "Responsible Consumption and Production",
    href: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-12.jpg",
  },
  {
    title: "Climate Action",
    href: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-13.jpg",
  },
  {
    title: "Life Below Water",
    href: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-14.jpg",
  },
  {
    title: "Life On Land",
    href: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-15.jpg",
  },
  {
    title: "Peace Justice and Strong Institutions",
    href: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-16.jpg",
  },
  {
    title: "Partnership For The Goals",
    href: "https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-17.jpg",
  },
];

export const mentorshipFrequencyData = [
  { id: 1, value: "Once a week", title: "Once a week" },
  { id: 2, value: "Biweekly", title: "Biweekly" },
  { id: 3, value: "Once a month", title: "Once a month" },
];

export const fmVariants = {
  viewOpacity: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
  },
  viewMotion: {
    initial: { opacity: 0, y: 200 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  },
  transition: { type: "spring", stiffness: 300, delay: 0.3 },
};
