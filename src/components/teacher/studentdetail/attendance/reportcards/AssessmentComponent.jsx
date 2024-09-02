 import PropTypes from "prop-types"
// Reusable Component for Assessment Category
const AssessmentCategory = ({ category, weight, gradingScale, points, totalPoints, passingPoints, assessments }) => {
  return (
    <div className="p-4 rounded-lg border-r-2  mb-6">
      <div className='flex items-center justify-between my-5'>
      <h3 className="font-[400] mb-2">{category}</h3>
          <p className="text-sm">Weight = {weight}</p>
        </div>
      <div className="flex w-full  border-b border-t py-2  justify-between mb-4">
        <div className='grid grid-cols-2 gap-3  w-full'>
          <p className="text-sm">Grading Scale: </p>  <p>{gradingScale}</p> 
          <p className="text-sm">Points: </p>  <p>{points}</p>
          <p className="text-sm">Total Points: </p> <p>{totalPoints}</p>
          <p className="text-sm">Passing Points: </p> <p>{passingPoints}</p>
        </div>
       
      <div className="w-[80%] px-8 border-l-2">
        {assessments.map((assessment, index) => (
          <div key={index} className="grid grid-cols-2 w-full">
            <p>{assessment.name}</p>
            <p>{assessment.score}</p>
          </div>
        ))}
      </div>
      </div>
      <div className="flex justify-between text-sm items-center">
        <h3 className="font-[400] text-sm mb-2">Assessment Total</h3>
        <p>{20}</p>
      </div>
    </div>
  );
};

AssessmentCategory.propTypes = {
    category: PropTypes.string.isRequired,
    weight: PropTypes.number.isRequired,
    gradingScale: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
    totalPoints: PropTypes.number.isRequired,
    passingPoints: PropTypes.number.isRequired,
    assessments: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired
    })).isRequired,
  };

// Reusable Component for Teacher Info
const TeacherInfo = ({ teacherName, teacherImage }) => {
  return (
    <div className="p-4 rounded-lg  mb-6">
      <h3 className="font-semibold mb-2">Teachers</h3>
      <div className="flex items-center space-x-4">
        <img src={teacherImage} alt={teacherName} className="w-12 h-12 rounded-full" />
        <p>{teacherName}</p>
      </div>
    </div>
  );
};

TeacherInfo.propTypes = {
    teacherName: PropTypes.string.isRequired,
    teacherImage: PropTypes.string.isRequired,

}

// Reusable Component for Final Score
const FinalScore = ({ score }) => {
  return (
    <div className=" p-4 rounded-lg  mb-6 flex justify-center items-center">
      <p className="text-4xl font-semibold">{score}</p>
    </div>
  );
};

FinalScore.propTypes = {
    score: PropTypes.number.isRequired,
}

// Reusable Component for Comments
const Comments = ({ text }) => {
  return (
    <div className=" p-4 rounded-lg mb-6">
      <h3 className="font-semibold mb-2">Comments</h3>
      <p>{text}</p>
    </div>
  );
};

Comments.propTypes = {
    text: PropTypes.string.isRequired,
}

// Reusable Component for the Overall Score Table
const ScoreTable = ({ subject, hw, test, exam, overall }) => {
  return (
    <table className="min-w-full bg-white rounded-lg overflow-hidden  mb-6">
      <thead>
        <tr className="bg-gray-100 text-gray-600 text-sm">
          <th className="py-3 px-6 text-left">Subject</th>
          <th className="py-3 px-6 text-left">HW (4)</th>
          <th className="py-3 px-6 text-left">Test</th>
          <th className="py-3 px-6 text-left">Exam</th>
          <th className="py-3 px-6 text-left">Overall</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-gray-200 hover:bg-gray-100">
          <td className="py-3 px-6 text-left">{subject}</td>
          <td className="py-3 px-6 text-left">{hw}</td>
          <td className="py-3 px-6 text-left">{test}</td>
          <td className="py-3 px-6 text-left">{exam}</td>
          <td className="py-3 px-6 text-left">{overall}</td>
        </tr>
      </tbody>
    </table>
  );
};

ScoreTable.propTypes ={
    subject: PropTypes.string.isRequired,
    hw: PropTypes.string.isRequired,
    test: PropTypes.string.isRequired,
    exam: PropTypes.string.isRequired,
    overall: PropTypes.string.isRequired,
}

const AssessmentComponent = () => {
  const assessmentsHomework = [
    { name: 'Homework 1', score: 5 },
    { name: 'Homework 2', score: 4 },
    { name: 'Homework 3', score: 4 },
    { name: 'Homework 4', score: 5 },
  ];

  const assessmentsTest = [{ name: 'Test', score: 9 }];

  const assessmentsExam = [{ name: 'Exam', score: 50 }];

  return (
    <div className="p-6 border shadow-md rounded-xl text-gray-600 min-h-screen">
      <h2 className="text-2xl font-[500] mb-6">Mathematics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <AssessmentCategory
            category="Assessment Category: Homework"
            weight="20.0000%"
            gradingScale="Rubric"
            points={5}
            totalPoints={20}
            passingPoints={2.5}
            assessments={assessmentsHomework}
          />
          <AssessmentCategory
            category="Assessment Category: Test"
            weight="10.0000%"
            gradingScale="Rubric"
            points={10}
            totalPoints={10}
            passingPoints={5}
            assessments={assessmentsTest}
          />
          <AssessmentCategory
            category="Assessment Category: Exam"
            weight="70.0000%"
            gradingScale="Grades"
            points={70}
            totalPoints={70}
            passingPoints={30}
            assessments={assessmentsExam}
          />
        </div>

        <div>
          <FinalScore score="A" />
          <TeacherInfo teacherName="Johnny Smith" teacherImage="/student.svg" />
          <Comments text="Excellent work, pays attention in class and asks questions." />
        </div>
      </div>

      <ScoreTable
        subject="Mathematics"
        hw="18/20"
        test="09/10"
        exam="50/70"
        overall="A"
      />

      <ScoreTable
        subject="Mathematics"
        hw="-"
        test="-"
        exam="-"
        overall="-"
      />
    </div>
  );
};

export default AssessmentComponent;
