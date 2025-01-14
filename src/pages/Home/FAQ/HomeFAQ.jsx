import homeFAQ_image from "../../../assets/Home/homeFAQ_image.jpg";

const HomeFAQ = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse items-center">
      <div className="flex-1">
        <img src={homeFAQ_image} alt="" />
      </div>
      <div className="flex-1">
        {/* FAQ 1 */}
        <div
          tabIndex={0}
          className="collapse collapse-plus border-base-300 border"
        >
          <div className="collapse-title text-xl font-medium">
            What is the primary purpose of Lumeno?
          </div>
          <div className="collapse-content">
            <p>
              Lumeno is designed to create a Collaborative Study Platform where
              students, tutors, and administrators can connect to streamline
              study session scheduling, resource sharing, and user management.
              It focuses on enhancing collaboration, improving access to study
              materials, and simplifying the management of educational
              activities.
            </p>
          </div>
        </div>
        {/* FAQ 2 */}
        <div
          tabIndex={0}
          className="collapse collapse-plus border-base-300 border"
        >
          <div className="collapse-title text-xl font-medium">
            How does the role-based access control work?
          </div>
          <div className="collapse-content">
            <p>
              Role-based access control ensures secure and personalized user
              experiences: <br />
              1. Students: Book sessions, create/manage personal notes, and
              access study materials for booked sessions. <br />
              2. Tutors: Create/manage study sessions, upload materials, and
              view feedback on rejected sessions. Admins: Manage users,
              approve/reject sessions, and review uploaded materials to ensure
              quality.
            </p>
          </div>
        </div>
        {/* FAQ 3 */}
        <div
          tabIndex={0}
          className="collapse collapse-plus border-base-300 border"
        >
          <div className="collapse-title text-xl font-medium">
            What happens if a session is free?
          </div>
          <div className="collapse-content">
            <p>
              If a session has a registration fee of 0, students can book it
              immediately without payment. For paid sessions, booking will only
              be completed after successful payment processing.
            </p>
          </div>
        </div>
        {/* FAQ 4 */}
        <div
          tabIndex={0}
          className="collapse collapse-plus border-base-300 border"
        >
          <div className="collapse-title text-xl font-medium">
            How can tutors and students manage study materials?
          </div>
          <div className="collapse-content">
            <p>
              Students: Access materials for their booked sessions,
              view/download images, and visit links (e.g., Google Drive
              resources). <br /> Tutors: Upload materials for their approved
              sessions, including images and resource links. They can also
              update or delete uploaded materials. <br /> Admins: Review all
              materials and remove any inappropriate or outdated content.
            </p>
          </div>
        </div>
        {/* FAQ 5 */}
        <div
          tabIndex={0}
          className="collapse collapse-plus border-base-300 border"
        >
          <div className="collapse-title text-xl font-medium">
            Can students access study materials for sessions they haven’t
            booked?
          </div>
          <div className="collapse-content">
            <p>
              No, students can only access materials for the study sessions they
              have booked. The platform ensures this by filtering materials
              based on session IDs tied to the student’s bookings. This helps
              maintain the privacy and exclusivity of session resources.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFAQ;
