import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'Ik ben Nick Schepers, een gepassioneerde, groeiende developer. In mijn vrije tijd hou ik mij bezig met mezelf nieuwe dingen aan te leren, zowel IT-gerelateerde als niet-IT-gerelateerd. Zo hou ik mij ook bezig met het luisteren naar muziek of het bespelen van mijn gitaar of piano. '}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'Mijn creativiteit steek ik niet alleen in het muzikale gedeelte van mezelf, maar gebruik ik ook in beeldmateriaal: Dit kan gaan van het bewerken van een goede vriend zijn gaming-streams, tot het photoshoppen van mijn eigen profielfoto \'s.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || 'Door de grote groei in de IT-wereld, heb ik ervoor gekozen om op avontuurlijk pad te gaan en te kiezen voor Digital Innovation in de IT Factory Thomas More Kempen. Om dit avontuur in de toekomst verder te zetten, zou ik graag voor een bedrijf willen werken dat zich focust op deze groei.'}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
