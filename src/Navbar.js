import React from 'react';
import { Row, Col } from 'react-bootstrap';

function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sections = [
    { id: 'videos-artistas', label: 'Videos para Artistas' },
    { id: 'videos-empresas', label: 'Videos para Empresas' },
    { id: 'grabacion', label: 'Grabacion' },
    { id: 'mezcla-mastering', label: 'Mezcla y Mastering' },
    { id: 'contacto', label: 'Contactanos' },
  ];

  return (
    <Row className="m-0">
      {sections.map((section) => (
        <Col xs={12} md={4} lg={2} className="p-0" key={section.id}>
          <button
            className="nav-button w-100 h-100 position-relative"
            onClick={() => scrollToSection(section.id)}
          >
            <h3 className="text-center">{section.label}</h3>
          </button>
        </Col>
      ))}
    </Row>
  );
}

export default Navbar;
