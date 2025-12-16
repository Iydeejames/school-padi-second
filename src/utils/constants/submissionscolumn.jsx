export const submissions_column = [
    {
      title: "Student",
      key: "student",
      render: (data) => (
        <div className="flex items-center gap-2">
          <img className="w-8 h-8 rounded-full" src={data.avatar} alt="Avatar" />
          <span>{data.student}</span>
        </div>
      ),
    },
    {
      title: "Class",
      key: "class",
      render: (data) => <span>{data.class}</span>,
    },
    {
      title: "Subject",
      key: "subject",
      render: (data) => <span>{data.subject}</span>,
    },
    {
      title: "Date",
      key: "date",
      render: (data) => <span>{data.date}</span>,
    },
  ];
  