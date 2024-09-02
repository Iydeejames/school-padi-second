import EnrollmentDropdownItem from "./EnrollmentDropdownItem";

const data = [
  {
    id: 1,
    year: 'SY 2024',
    section: 'SECTION A - Class 3',
    status: 'In progress',
    subjects: [
      { name: 'Mathematics', status: 'Completed' },
      { name: 'English', status: 'In Progress' },
      { name: 'Chemistry', status: 'Pending' },
      { name: 'Physics', status: 'Completed' },
    ],
    electives: [
      { name: 'Biology', status: 'Completed' },
      { name: 'Lab', status: 'Completed' },
      { name: 'Further Math', status: 'Completed' },
    ],
  },
  {
    id: 2,
    year: 'SY 2023',
    section: 'SECTION A - Class 2',
    status: 'Completed',
    subjects: [],
    electives: [],
  },
  {
    id: 3,
    year: 'SY 2022',
    section: 'SECTION A - Class 1',
    status: 'Completed',
    subjects: [],
    electives: [],
  },
];


const EnrollmentDropdownList = () => {
  return (
    <div className="space-y-4">
      {data.map((item) => (
        <EnrollmentDropdownItem
          key={item.id}
          year={item.year}
          section={item.section}
          status={item.status}
          subjects={item.subjects}
          electives={item.electives}
        />
      ))}
    </div>
  );
};

export default EnrollmentDropdownList;
