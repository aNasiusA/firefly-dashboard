import { Center } from "@/components/instructor/dashboard/CenterStats";
import { Instructor } from "@/components/instructor/dashboard/InstructorCard";
import { Session } from "@/components/instructor/dashboard/Sessions";
import { Notification } from "@/components/instructor/dashboard/NotificationCard";
import { TrainingCenter } from "@/components/instructor/trainingCenters/TrainingCenterCard";
import { Statistic } from "@/components/instructor/analytics/StatCard";
import { MonthlyPerformance } from "@/components/instructor/analytics/AveragePerformance";
import { Assessments } from "@/components/instructor/analytics/TotalAssessments";
import { AgeGenderData } from "@/components/instructor/analytics/AgeAndGenderChart";
import { Reports } from "@/components/instructor/reports/TotalReports";


export const centers: Center[] = [
  {
    id: "center-a",
    name: "Accra Training Hub",
    director: "Mr. Cyril Ado",
    region: "Greater Accra",
    numberOfStudents: 30,
    numberOfMales: 12,
    numberOfFemales: 18,
  },
  {
    id: "center-b",
    name: "Kumasi Innovation Center",
    director: "Ms. Ama Boakye",
    region: "Ashanti",
    numberOfStudents: 25,
    numberOfMales: 10,
    numberOfFemales: 15,
  },
  {
    id: "center-c",
    name: "Tamale Digital Hub",
    director: "Mr. Haruna Alhassan",
    region: "Northern",
    numberOfStudents: 20,
    numberOfMales: 13,
    numberOfFemales: 7,
  },
  {
    id: "center-d",
    name: "Takoradi Tech Space",
    director: "Mrs. Linda Essel",
    region: "Western",
    numberOfStudents: 22,
    numberOfMales: 8,
    numberOfFemales: 14,
  },
  {
    id: "center-e",
    name: "Cape Coast Coding Club",
    director: "Mr. Kofi Mensah",
    region: "Central",
    numberOfStudents: 18,
    numberOfMales: 6,
    numberOfFemales: 12,
  },
  {
    id: "center-f",
    name: "Ho ICT Academy",
    director: "Ms. Efua Nyarko",
    region: "Volta",
    numberOfStudents: 24,
    numberOfMales: 11,
    numberOfFemales: 13,
  },
];

export const instructor: Instructor = {
  name: "Robertson Doe",
  position: "Robotics Trainer",
  region: "Greater Accra",
  center: "Accra Training Hub",
  imageUrl: "/profile.png",
};

export const sessions: Session[] = [
  {
    id: "session-1",
    month: "January",
    total: 10,
    completed: 8,
    pending: 2,
  },
  {
    id: "session-2",
    month: "February",
    total: 8,
    completed: 4,
    pending: 4,
  },
  {
    id: "session-3",
    month: "March",
    total: 12,
    completed: 10,
    pending: 2,
  },
  {
    id: "session-4",
    month: "April",
    total: 9,
    completed: 7,
    pending: 2,
  },
  {
    id: "session-5",
    month: "May",
    total: 11,
    completed: 9,
    pending: 2,
  },
  {
    id: "session-6",
    month: "June",
    total: 13,
    completed: 12,
    pending: 1,
  },
  {
    id: "session-7",
    month: "July",
    total: 10,
    completed: 7,
    pending: 3,
  },
  {
    id: "session-8",
    month: "August",
    total: 14,
    completed: 13,
    pending: 1,
  },
  {
    id: "session-9",
    month: "September",
    total: 12,
    completed: 9,
    pending: 3,
  },
  {
    id: "session-10",
    month: "October",
    total: 11,
    completed: 8,
    pending: 3,
  },
  {
    id: "session-11",
    month: "November",
    total: 9,
    completed: 6,
    pending: 3,
  },
  {
    id: "session-12",
    month: "December",
    total: 10,
    completed: 10,
    pending: 0,
  },
];

export const notifications: Notification[] = [
  {
    id: "1",
    title: "Report Submission Reminder",
    date: "Jan 10",
    time: "11:30 pm",
    content:
      "Reminder to submit your training report for the session conducted on December 12, 2024. Ensure submission by December 20, 2024. Thank you.",
  },
  {
    id: "2",
    title: "Project Upload Notice",
    date: "Jan 12",
    time: "4:00 pm",
    content: "Upload your final project by Jan 15 to avoid late penalties.",
  },
  {
    id: "3",
    title: "Orientation Session",
    date: "Feb 01",
    time: "9:00 am",
    content:
      "There will be an orientation for all new participants on February 3rd at the main hall. Attendance is mandatory.",
  },
  {
    id: "4",
    title: "System Downtime Notice",
    date: "Feb 10",
    time: "3:45 pm",
    content:
      "The online portal will be down for maintenance on February 12 from 1:00 am to 5:00 am. Please plan accordingly.",
  },
  {
    id: "5",
    title: "Certificate Collection",
    date: "Mar 05",
    time: "2:15 pm",
    content:
      "Certificates for the December batch are now available. Collect yours from the admin office between 9am and 4pm.",
  },
  {
    id: "6",
    title: "Training Feedback Form",
    date: "Mar 08",
    time: "10:00 am",
    content:
      "Please complete the training feedback form sent to your email. Your input helps improve future sessions.",
  },
];

export const reports = [
  {
    id: "1",
    title: "January Week 1 Report",
    date: "Jan 07, 2025",
    time: "10:00am",
    summary:
      "Summary of team activities and project milestones achieved in the first week of January.",
  },
  {
    id: "2",
    title: "January Week 2 Report",
    date: "Jan 14, 2025",
    time: "2:30pm",
    summary:
      "Detailed insights into the ongoing development work and blockers encountered.",
  },
  {
    id: "3",
    title: "January Week 3 Report",
    date: "Jan 21, 2025",
    time: "11:45am",
    summary:
      "Updates on resolved issues, completed tasks, and next week's roadmap.",
  },
  {
    id: "4",
    title: "January Week 4 Report",
    date: "Jan 21, 2025",
    time: "11:45am",
    summary:
      "Updates on resolved issues, completed tasks, and next week's roadmap.",
  },
];

export const quizStatus = [
  { title: "Math Quiz 1", status: "Completed" },
  { title: "Science Quiz", status: "Pending" },
  { title: "History Quiz", status: "Completed" },
  { title: "Geography Quiz", status: "Pending" },
  { title: "English Quiz", status: "Completed" },
  { title: "Biology Quiz", status: "Pending" },
  { title: "Computer Quiz", status: "Completed" },
];

export const trainingCenters: TrainingCenter[] = [
  {
    name: "Accra Digital Center",
    location: "Accra, Greater Accra Region",
    directorName: "Mr. Cyril Ado",
    phoneNumber: "+233 20 123 4567",
    email: "ado.cyril@adc.edu.gh",
    uniqueId: "center-accra-001",
  },
  {
    name: "Kumasi Tech Hub",
    location: "Kumasi, Ashanti Region",
    directorName: "Ms. Ama Nyarko",
    phoneNumber: "+233 24 987 6543",
    email: "ama.nyarko@kth.edu.gh",
    uniqueId: "center-kumasi-002",
  },
  {
    name: "Tamale Learning Institute",
    location: "Tamale, Northern Region",
    directorName: "Mr. Suleiman Bawa",
    phoneNumber: "+233 55 321 7890",
    email: "s.bawa@tli.edu.gh",
    uniqueId: "center-tamale-003",
  },
  {
    name: "Takoradi Innovation Center",
    location: "Takoradi, Western Region",
    directorName: "Mrs. Esi Armah",
    phoneNumber: "+233 27 654 3210",
    email: "esi.armah@tic.edu.gh",
    uniqueId: "center-takoradi-004",
  },
  {
    name: "Koforidua Tech Center",
    location: "Koforidua, Eastern Region",
    directorName: "Mr. Kojo Mensah",
    phoneNumber: "+233 50 112 3344",
    email: "kojo.mensah@ktc.edu.gh",
    uniqueId: "center-koforidua-005",
  },
  {
    name: "Ho Digital Training Center",
    location: "Ho, Volta Region",
    directorName: "Ms. Akosua Fiador",
    phoneNumber: "+233 23 445 6677",
    email: "akosua.fiador@hdtc.edu.gh",
    uniqueId: "center-ho-006",
  },
];

export const statistics: Statistic[] = [
  {
    title: "Total Active Students",
    iconUrl: "/activeStudents.png",
    value: 130,
    current: 100,
    previous: 100,
    data: [1, 90, 50, 150, 30, 130],
    color: "#3b82f6",
  },
  {
    title: "Total Assessments",
    iconUrl: "/totalAssessments.png",
    value: 45,
    current: 45,
    previous: 30,
    data: [1, 100, 2, 130, 3, 150],
    color: "#10b981",
  },
  {
    title: "Total Number of Sessions",
    iconUrl: "/totalSessions.png",
    value: 20,
    current: 20,
    previous: 25,
    data: [30, 28, 27, 25, 23, 20],
    color: "#f97316",
  },
];

export const groupedStudentPerformances: MonthlyPerformance[] = [
  {
    month: "January",
    performances: [
      { studentName: "Akosua Mensah", averageScore: 85.2 },
      { studentName: "Kwame Boateng", averageScore: 78.4 },
      { studentName: "Efua Asante", averageScore: 91.6 },
      { studentName: "Daniel Osei", averageScore: 74.3 },
      { studentName: "Rita Agyekum", averageScore: 80.1 },
      { studentName: "Samuel Takyi", averageScore: 68.9 },
      { studentName: "Gloria Addo", averageScore: 87.5 },
    ],
  },
  {
    month: "February",
    performances: [
      { studentName: "Yaw Owusu", averageScore: 67.3 },
      { studentName: "Abena Kyei", averageScore: 88.5 },
      { studentName: "Kojo Antwi", averageScore: 73.9 },
      { studentName: "Veronica Danso", averageScore: 82.2 },
      { studentName: "Isaac Mensah", averageScore: 77.0 },
      { studentName: "Emelia Darkwah", averageScore: 91.4 },
      { studentName: "Kelvin Armah", averageScore: 69.8 },
    ],
  },
  {
    month: "March",
    performances: [
      { studentName: "Ama Serwaa", averageScore: 95.1 },
      { studentName: "Kofi Asamoah", averageScore: 82.7 },
      { studentName: "Nana Yaa Darko", averageScore: 89.3 },
      { studentName: "Joshua Dapaah", averageScore: 75.5 },
      { studentName: "Cynthia Appiah", averageScore: 83.9 },
      { studentName: "Dennis Badu", averageScore: 90.6 },
      { studentName: "Esther Asare", averageScore: 78.1 },
    ],
  },
  {
    month: "April",
    performances: [
      { studentName: "Yaw Agyeman", averageScore: 76.8 },
      { studentName: "Linda Ofori", averageScore: 84.5 },
      { studentName: "Peter Amoako", averageScore: 79.2 },
      { studentName: "Juliet Nartey", averageScore: 88.0 },
      { studentName: "Michael Adjei", averageScore: 70.5 },
      { studentName: "Patience Quaye", averageScore: 93.4 },
      { studentName: "Daniela Teye", averageScore: 86.6 },
    ],
  },
  {
    month: "May",
    performances: [
      { studentName: "Adwoa Bediako", averageScore: 88.1 },
      { studentName: "Emmanuel Tetteh", averageScore: 80.9 },
      { studentName: "Mavis Osei", averageScore: 92.3 },
      { studentName: "Selina Kumah", averageScore: 83.0 },
      { studentName: "Gabriel Owusu", averageScore: 77.4 },
      { studentName: "Akua Nyamekye", averageScore: 89.0 },
      { studentName: "Desmond Opoku", averageScore: 81.7 },
    ],
  },
  {
    month: "June",
    performances: [
      { studentName: "Felix Aidoo", averageScore: 74.8 },
      { studentName: "Patience Nyarko", averageScore: 87.6 },
      { studentName: "Richard Appiah", averageScore: 79.4 },
      { studentName: "Sandra Koomson", averageScore: 85.7 },
      { studentName: "Nana Kwaku", averageScore: 80.2 },
      { studentName: "Christabel Annor", averageScore: 91.0 },
      { studentName: "Eric Boateng", averageScore: 73.6 },
    ],
  },
];

export const assessmentsData: Assessments[] = [
  { month: "January", total: 30, completed: 25, inProgress: 5 },
  { month: "February", total: 28, completed: 20, inProgress: 8 },
  { month: "March", total: 35, completed: 30, inProgress: 5 },
  { month: "April", total: 40, completed: 33, inProgress: 7 },
  { month: "May", total: 38, completed: 35, inProgress: 3 },
  { month: "June", total: 32, completed: 26, inProgress: 6 },
  { month: "July", total: 29, completed: 24, inProgress: 5 },
  { month: "August", total: 31, completed: 27, inProgress: 4 },
  { month: "September", total: 34, completed: 30, inProgress: 4 },
  { month: "October", total: 36, completed: 29, inProgress: 7 },
  { month: "November", total: 33, completed: 31, inProgress: 2 },
  { month: "December", total: 27, completed: 22, inProgress: 5 },
];

export const ageGenderData: AgeGenderData[] = [
  { age: "10", male: 3, female: 5 },
  { age: "11", male: 11, female: 8 },
  { age: "12", male: 8, female: 15 },
  { age: "13", male: 16, female: 6 },
  { age: "14", male: 5, female: 8 },
  { age: "15", male: 7, female: 4 },
  { age: "16", male: 15, female: 6 },
  { age: "17", male: 12, female: 3 },
  { age: "18+", male: 11, female: 12 },
];

export const reportz: Reports[] = [
  { id: "rpt-jan", month: "January", total: 120, completed: 90, pending: 30 },
  { id: "rpt-feb", month: "February", total: 100, completed: 70, pending: 30 },
  { id: "rpt-mar", month: "March", total: 130, completed: 110, pending: 20 },
  { id: "rpt-apr", month: "April", total: 115, completed: 85, pending: 30 },
  { id: "rpt-may", month: "May", total: 140, completed: 125, pending: 15 },
  { id: "rpt-jun", month: "June", total: 150, completed: 100, pending: 50 },
  { id: "rpt-jul", month: "July", total: 160, completed: 130, pending: 30 },
  { id: "rpt-aug", month: "August", total: 145, completed: 115, pending: 30 },
  {
    id: "rpt-sep",
    month: "September",
    total: 135,
    completed: 100,
    pending: 35,
  },
  { id: "rpt-oct", month: "October", total: 125, completed: 95, pending: 30 },
  { id: "rpt-nov", month: "November", total: 110, completed: 80, pending: 30 },
  { id: "rpt-dec", month: "December", total: 105, completed: 95, pending: 10 },
];
