import './home.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import { Row, Col, Alert } from 'reactstrap';

import { useAppSelector } from 'app/config/store';
import { PartnersList } from './components/PartnersList/PartnersList';

export const Home = () => {
  const account = useAppSelector(state => state.authentication.account);

  return (
    <>
      <Row>
        <Col md="7" className="pad">
          <span className="hipster rounded" />
        </Col>

        <Col md="2" className="second-col-container">
          <div className="second-col-wrapper">
            <span className="second-col-content">
              Coma bem, pagando pouco <span className="special-content">e de quebra</span>, ajude o meio ambiente
            </span>
          </div>

          <Row className="buttons-row">
            <Col className="buttons-col">
              <Link to="/login" className="btn login-btn">
                LOGIN
              </Link>
            </Col>

            <Col className="buttons-col buttons-separator">
              <span>
                <strong>ou</strong>
              </span>
            </Col>
            <Col className="buttons-col">
              <Link to="/account/register" className="btn register-btn">
                CADASTRE-SE
              </Link>
            </Col>
          </Row>

          {account?.login ? (
            <div>
              <Alert color="success">You are logged in as user &quot;{account.login}&quot;.</Alert>
            </div>
          ) : (
            <div></div>
          )}
        </Col>
      </Row>

      <Row>
        <span className="partners-list-title">
          Empresas que ja aderiram ao <span className="special-content"> movimento</span>
        </span>
      </Row>

      <Row className="partners-row">
        <PartnersList />
      </Row>

      <div className="line" />

      <Row className="about-us-row">
        <Col className="about-us-text">
          <h1 className="about-us-content-title">
            <strong>
              Ajude a combater o <span className="special-content">desperd??cio</span> alimentar
            </strong>
          </h1>
          <p className="about-us-content">
            Estima-se que 931 milh??es de toneladas de alimentos, ou 17% do total de alimentos dispon??veis aos consumidores em 2019, foram
            para o lixo de resid??ncias, varejo, restaurantes e outros servi??os alimentares. ?? o que aponta uma nova pesquisa da ONU que visa
            apoiar os esfor??os globais para reduzir pela metade o desperd??cio de alimentos at?? 2030.
          </p>
          <p className="about-us-content">
            Nossa solu????o visa conectar empresas com ONGs/pessoas para comercializar produtos pr??ximos ao vencimento por um melhor pre??o.
          </p>
          <p className="about-us-content">
            Evitando o desperd??cio de alimentos e levando as empresas evitarem preju??zos financeiros e permitindo que os compradores possam
            adquirir tais produtos com pre??o reduzido.
          </p>
        </Col>

        <Col className="about-us-image">
          <img width="559px" height="559px" src="./content/images/sobre-nos.svg" alt="Sem desperd??cios" />
        </Col>

        <Row>
          <button className="join-us-btn">Fa??a parte desta causa</button>
        </Row>
      </Row>
    </>
  );
};

export default Home;
