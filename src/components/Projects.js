function Projects() {
  return (
    <div className="project">
      <h1>A few projects driven by enthusiasm:</h1>
      <div className="projectcard">
        <img src={require("../assets/Mldlpic.jpg")} alt="ML Pic" />
        <div className="projectcontent">
          <h2>
            Comparison of Machine Learning, Deep Learning and Time series models
          </h2>
          <h6>
            Supply and demand are essential to the economy, and India's high
            demand requires strong statistical methods for sustainable growth.
            Our research utilized the SARIMAX model for a chemical factory's
            sales, outperforming machine learning models through effective data
            collection and analysis.
          </h6>
        </div>
      </div>
      <div className="projectcard">
        <img src={require("../assets/Htmlpic.jpg")} alt="HTML tag Pic" />
        <div className="projectcontent">
          <h2>
            <a href="https://vinterbash.in" target="_blank" rel="noreferrer">
              Vinterbash
            </a>
            - a real time event managing website
          </h2>
          <h6>
            Vinterbash is a dynamic web app created with JavaScript for
            real-time event management. It streamlines event registration,
            tracks leaderboards, and enhances the organizing experience. With a
            user-friendly interface, it boosts efficiency and ensures seamless
            coordination for all users.
          </h6>
        </div>
      </div>
      <div className="projectcard">
        <img src={require("../assets/decisiontree.jpg")} alt="DT Pic" />
        <div className="projectcontent">
          <h2>
            Credit card fraud detection using machine learning and deep learning
          </h2>
          <h6>
            In this project, I applied various machine learning algorithms and a
            convolutional neural network (CNN) to the 'creditcard.csv' dataset.
            The results showed that the CNN significantly outperformed
            traditional models in accuracy, highlighting its superior
            effectiveness for this dataset.
          </h6>
        </div>
      </div>
      <div className="projectcard">
        <img src={require("../assets/dapic.jpg")} alt="DT Pic" />
        <div className="projectcontent">
          <h2>Assessment of the probability of pursuing higher education.</h2>
          <h6>
            I developed a Python project that simulates student profiles using
            demographics, academic metrics, and socioeconomic factors. By
            employing libraries like Pandas, NumPy, Seaborn, and Matplotlib, I
            analyzed the data to reveal insights into educational paths and
            pursuing higher studies.
          </h6>
        </div>
      </div>
      <h4>
        Several other projects that I have worked on :{" "}
        <a
          href="https://github.com/shrihariss29"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          Github
        </a>
      </h4>
    </div>
  );
}

export default Projects;
