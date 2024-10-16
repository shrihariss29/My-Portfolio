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
            Supply and demand are crucial to the economy, and India’s high
            demand necessitates robust statistical methods for sustainable
            growth. Our research on a chemical factory’s sales employed the
            SARIMAX model, outperforming machine learning models. Key factors
            included real-time data collection, feature selection, and data
            exploration.
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
            Vinterbash is a dynamic web app developed using JavaScript, designed
            to streamline real-time event management. It simplifies event
            registration, tracks leaderboards, and enhances the overall
            experience of organizing online events. With a user-friendly
            interface, Vinterbash boosts efficiency and ensures seamless
            coordination for participants and organizers alike.
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
            In this project, I implemented several machine learning algorithms
            alongside a convolutional neural network (CNN) on the
            'creditcard.csv' dataset. The results demonstrated that the CNN
            significantly outperformed the machine learning models in terms of
            accuracy, showcasing its superior efficacy for this dataset compared
            to conventional algorithms.
          </h6>
        </div>
      </div>
      <div className="projectcard">
        <img src={require("../assets/dapic.jpg")} alt="DT Pic" />
        <div className="projectcontent">
          <h2>Assessment of the probability of pursuing higher education.</h2>
          <h6>
            I created a Python project simulating student profiles based on
            demographics, academic metrics, and socioeconomic factors. Utilizing
            libraries like Pandas, NumPy, Seaborn, and Matplotlib, I analyzed
            the data to uncover insights into educational trajectories,
            particularly the likelihood of pursuing higher studies like master’s
            degrees.
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
