function Course({ course }) {
  const getTotal = () => {
    const parts = course.parts;
    return parts.reduce((s, p) => (s = s + p.exercises), 0);
  };
  return (
    <div>
      <h1>{course.name}</h1>
      {course.parts.map((part) => (
        <p key={part.id}>
          {part.name} {part.exercises}
        </p>
      ))}
      <h3>total of {getTotal()} exercises</h3>
    </div>
  );
}

export default Course;
