import React from "react";
import { Row, Col } from "react-bootstrap";
import anna from "../images/5.jpeg";

const HomePage = () => {
  return (
    <div className="home">
      <h3>Nagroda Emmy</h3>
      <div className="home_content">
        <Row>
          <Col md={5} lg={5}>
            <img className="img-responsive home_img" src={anna} alt="oscar" />
          </Col>
          <Col md={7} lg={7}>
            <p className="home_text">
            Amerykańska nagroda honorująca osiągnięcia przemysłu telewizyjnego. 
            Określana mianem „telewizyjnego Oscara” jest jedną z nagród EGOT – czterech najważniejszych nagród kulturalnych w USA,
            obok Oscara (film), Grammy (muzyka) i Tony (teatr).
            Przyznawana jest corocznie na różnych galach za osiągnięcia w poszczególnych branżach tego przemysłu.
            Nagrody Emmy przyznane zostały po raz pierwszy w 1949 roku. Statuetka przedstawia uskrzydloną kobietę z modelem atomu w uniesionych rękach,
             skrzydła symbolizują muzę sztuki zaś atom i jego elektrony reprezentują naukę i technikę nowego ówcześnie medium.
             Amerykańska Akademia Telewizyjna przyznała nagrody Emmy 2020. Tryumfatorem gali była stacja HBO, która otrzymała 30 statuetek. Jej "Sukcesję" okrzyknięto najlepszym serialem obyczajowym,
             "Sukcesja" produkcji HBO została najlepszym serialem obyczajowym, pokonując seriale Netfliksa "Zadzwoń do Saula",
            "The Crown", "Ozark", "Stranger Things". W tej kategorii nominowano również  "Opowieść podręcznej",
            "Obsesja Eve" oraz "The Mandalorian. "Sukcesja" otrzymała takę Emmy dla najlepszej aktorki w występie
            gościnnym w serialu obyczajowym (Cherry Jones), najlepszego scenariusza serialu obyczajowego (Jesse Armstrong),
            za najlepszą reżyserię serialu obyczajowego (Andrij Parekh) oraz dla najlepszego castingu w serialu obyczajowym



            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HomePage;
