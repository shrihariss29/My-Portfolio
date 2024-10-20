import Carousel from "react-bootstrap/Carousel";
function About() {
  return (
    <div className="about">
      <h1>Education:</h1>
      <table border="2" cellspacing="0">
        <tr className="table-heading">
          <th>Years of Study</th>
          <th>Institution name</th>
          <th>Percentage obtained</th>
        </tr>
        <tr className="table-content">
          <td>2005 - 2018</td>
          <td>Sai Vidhyalaya</td>
          <td>411/500</td>
        </tr>
        <tr className="table-content">
          <td>2018 - 2020</td>
          <td>Sri Vageesha Vidhyashram</td>
          <td>445/500</td>
        </tr>
        <tr className="table-content">
          <td>2020 - 2024</td>
          <td>Sastra deemed university</td>
          <td>7.7898/10</td>
        </tr>
      </table>
      <h1>About me:</h1>
      <p>
        I’m Shrihari, having completed my B.Tech in Computer Science and
        Engineering from Sastra Deemed University. While I’ve gathered the
        academic essentials, my real takeaway was honing the art of teamwork and
        soft skills - skills you don’t find in textbooks. Fluent in Tamil,
        English, and Hindi, I’m a developer and data analyst at heart, aiming to
        build a career around that.
      </p>
      <p>
        Am a die-hard fan of cricket, a vigil follower of current affairs, and
        enthusiastic learner of history, I enjoy discussions where I can toss in
        my two cents - often with a dash of satire. I believe in being
        open-minded, even if it means unlearning what I thought I already knew.
        Adaptability is key, after all!
      </p>
      <p>
        I have been part of several clubs that greatly enriched my university
        experience and contributed to my career development, particularly in
        areas like management, teamwork, and collaboration.
      </p>
      <h1>Clubs I’ve engaged with : </h1>
      <div className="clubcard">
        <img src={require("../assets/daksh_logo.jpg")} alt="Sts logo" />
        <div className="clubcontent">
          <h2>Daksh</h2>
          <h6>
            I was an organizer for promotions and outreach in our university's
            tech fest, Daksh. This role gave me valuable experience in event
            promotion, teamwork, and navigating internal dynamics like politics
            and organizational challenges, all of which were key to executing a
            successful large-scale event.
          </h6>
        </div>
      </div>
      <div className="clubcard">
        <img src={require("../assets/sts_logo.jpg")} alt="STS logo" />
        <div className="clubcontent">
          <h2>Sastra Tamizh Sangam</h2>
          <h6>
            I started as a performer in Sastra Tamizh Sangam and now serve as an
            organizer. I’ve performed on various stages, representing the club
            and university. This club holds a special place in my heart,
            allowing me to express my artistic side. It’s been a fulfilling
            experience filled with cherished memories.
          </h6>
        </div>
      </div>
      <div className="clubcard">
        <img src={require("../assets/ecell_logo.jpg")} alt="Ecell logo" />
        <div className="clubcontent">
          <h2>Entrepreneurship cell</h2>
          <h6>
            I participated in my university's Entrepreneurship Cell, organizing
            various events with a dedicated team. This rewarding experience
            involved event design and social media management, providing
            valuable insights into creative and strategic event management while
            enhancing my organizational and teamwork skills.
          </h6>
        </div>
      </div>
      <div>
        <Carousel controls={false} interval={3000}>
          <Carousel.Item>
            <img
              src={require(`../assets/pic1.jpg`)}
              alt={`My pic1 in navbar`}
              loading="lazy"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={require(`../assets/pic2.jpg`)}
              alt={`My pic2 in navbar`}
              loading="lazy"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={require(`../assets/pic3.jpg`)}
              alt={`My pic3 in navbar`}
              loading="lazy"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={require(`../assets/pic4.jpg`)}
              alt={`My pic4 in navbar`}
              loading="lazy"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={require(`../assets/pic5.jpg`)}
              alt={`My pic5 in navbar`}
              loading="lazy"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default About;
