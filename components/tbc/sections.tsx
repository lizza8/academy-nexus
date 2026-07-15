const COURSES = [
  {
    title: "iOS Development",
    image: "/assets/images/courses-images/ios-development.png",
    alt: "iOS Development",
  },
  {
    title: "React",
    image: "/assets/images/courses-images/react.jpg",
    alt: "React course",
  },
  {
    title: "Intro to Python",
    image: "/assets/images/courses-images/python.jpg",
    alt: "Intro to Python",
  },
  {
    title: "Advanced Python",
    image: "/assets/images/courses-images/advanced-python.jpg",
    alt: "Advanced Python",
  },
  {
    title: "Advanced Cybersecurity Course",
    image: "/assets/images/courses-images/advanced-cybersecurity.jpg",
    alt: "Advanced Cybersecurity Course",
  },
  {
    title: "ToT - Training of Trainers",
    image: "/assets/images/courses-images/TOT.jpg",
    alt: "ToT - Training of Trainers",
  },
  {
    title: "Blockchain",
    image: "/assets/images/courses-images/blockchain.jpg",
    alt: "Blockchain",
  },
  {
    title: "DevOps",
    image: "/assets/images/courses-images/devops.jpg",
    alt: "DevOps",
  },
  {
    title: "Information Security Governance",
    image: "/assets/images/courses-images/information-security.jpg",
    alt: "Information Security Governance",
  },
]

export function TbcBanner() {
  return (
    <section className="banner-container">
      <div className="container">
        <div className="banner-title">
          <h1>TBC x USAID</h1>
          <h2>ᲢᲔᲥᲜᲝᲚᲝᲒᲘᲣᲠᲘ ᲒᲐᲜᲐᲗᲚᲔᲑᲘᲡᲗᲕᲘᲡ</h2>
        </div>
      </div>
    </section>
  )
}

export function TbcInformation() {
  return (
    <section className="information-container">
      <div className="container">
        <div className="course-description">
          <p>
            „ TBC x USAID - ტექნოლოგიური განათლებისთვის “ პროგრამა საინფორმაციო
            ტექნოლოგიებით დაინტერესებულ ადამიანებს გთავაზობთ სრულად დაფინანსებულ
            ონლაინ საგანმანათლებლო პრაქტიკულ კურსებს სხვადასხვა ICT მიმართულებით.
            წარმატებულ კურსდამთავრებულებს ეძლევათ შესაძლებლობა დასაქმდნენ
            თიბისისა და მის პარტნიორ კომპანიებში.
          </p>
        </div>
        <div className="read-more">
          <a href="#courses" className="read-more-link">
            გაიგე მეტი
          </a>
        </div>
      </div>
    </section>
  )
}

export function TbcCourses() {
  return (
    <section className="learning-courses" id="courses">
      <div className="container">
        <div className="section-title">
          <h2>სასწავლო კურსები</h2>
        </div>
        <div className="courses-container">
          {COURSES.map((course) => (
            <div className="course-box-wrapper" key={course.title}>
              <div className="course-box">
                <div className="course-img">
                  <img src={course.image} alt={course.alt} />
                </div>
                <div className="course-body">
                  <div className="course-body-text">
                    <div className="course-title">
                      <h3>{course.title}</h3>
                    </div>
                    <div className="registration-status">
                      <p>რეგისტრაცია დასრულებულია</p>
                    </div>
                  </div>
                  <div className="course-details">
                    <img
                      src="/assets/images/common-images/arrow.svg"
                      alt="course details arrow"
                    />
                    <a href="#">კურსის დეტალები</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
