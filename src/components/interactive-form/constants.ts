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
  { value: "Less than 2 years" },
  { value: "2 - 5 years" },
  { value: "5 - 10 years" },
  { value: "Greater than 10 years" },
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

export const mentorshipFrquencyData = [
  { value: "Once a week" },
  { value: "Biweekly" },
  { value: "Once a month" },
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
