
const courses = [
    {
        id: 1,
        name: "Khoa hoc JS",
        categories: ["js", "beginer"]
    },
    {
        id: 2,
        name: "Khoa hoc React",
        categories: ["js", "beginer", "frontend"]
    },
    {
        id: 3,
        name: "Khoa hoc Next",
        categories: ["js", "advance", "frontend"]
    },
    {
        id: 4,
        name: "Khoa hoc Express",
        categories: ["js", "beginer", "backend"]
    },
    {
        id: 5,
        name: "Khoa hoc Nest",
        categories: ["js", "advance", "backend"]
    },
    {
        id: 6,
        name: "Khoa hoc Python",
        categories: ["Python", "beginer"]
    },
]

export default async function CoursesPage({ params }) {
    const { slug } = await params;
    console.log(slug);

    let coursesFilter = courses;
    if (slug) {
        coursesFilter = courses.filter(course =>
            slug.every(
                catSeg => course.categories.includes(catSeg)
            )
        )
    }

    return (
        <div>
            <h2>Courses List</h2>
            {
                coursesFilter.map((course) => (
                    <div key={course.id}>
                        <h4>ID: {course.id}</h4>
                        <p>{course.name}</p>
                    </div>
                ))
            }
        </div>
    )
}