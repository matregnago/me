// enum Status {
//   Active,
//   Complete,
//   InProgress,
// }

// export type Project = {
//   name: string;
//   status: Status;
//   summary: string;
//   description: string;
//   source: string;
//   link?: string;
// }

export type Experience = {
    role: string;
    company: string;
    location: string;
    type: string;
    startDate: string;
    endDate: string;
    description: string;
  responsibilities: string[];
  stack?: Array<{ name: string; color: string }>;
};

// export type Education = {
//   name: string;
//   school: string;
//   type: string;
//   field: string;
//   startDate: string;
//   endDate: string;
//   description: string;
// }
