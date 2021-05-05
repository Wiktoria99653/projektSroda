import React from "react";
import { Row, Col } from "react-bootstrap";
import anna from "../images/anne.jpg";

const HomePage = () => {
  return (
    <div className="home">
      <h3>Nagroda Akademii Filmowej</h3>
      <div className="home_content">
        <Row>
          <Col md={5} lg={5}>
            <img className="img-responsive home_img" src={anna} alt="oscar" />
          </Col>
          <Col md={7} lg={7}>
            <p className="home_text">
              Nagroda przyznawana corocznie przez Amerykańską Akademię Sztuki i
              Wiedzy Filmowej w dziedzinie filmu. Pierwsze rozdanie nagród
              odbyło się w 1929, tak więc historia tej prestiżowej nagrody sięga
              już niemal 100 lat. Nagradzane są wstępnie nominowane filmy, które
              w poprzedzającym roku kalendarzowym były wyświetlane w
              amerykańskich kinach. Uroczystość wręczenia Oscarów odbywa się
              zwykle wczesną wiosną. Oscary, z wyłączeniem jednej kategorii,
              przyznawane są przeważnie filmom anglojęzycznym. Ceremonia
              rozdania Oscarów od 2002 roku odbywa się w Teatrze Dolby w
              Hollywood (wcześniej teatr ten nosił nazwę Kodak Theatre-Teatr
              Kodaka). Nagroda ta jest uznawana za najważniejszą nagrodę
              filmową, pomimo że dotyczy głównie kinematografii amerykańskiej.
              Oscary wraz z telewizyjnymi Emmy, muzycznymi Grammy i teatralnymi
              Tony tworzą top 4 wsród nagród amerykańskiego przemysłu
              rozrywkowego.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} lg={12}>
            <p className="home_text">
              Nagrody Akademii Filmowej ufundowano w tym samym roku (1927), co
              samą Akademię, skupiającą amerykańskich filmowców. Pierwsze
              nagrody zostały zaprezentowane w 1929 roku w Hollywood Roosevelt
              Hotel przy udziale 250 osób, ówczesna gala trwała zaledwie 15
              minut. Początkowo Oscary budziły umiarkowane zainteresowanie, a
              przedstawiciele mediów opuścili pierwszą galę jeszcze przed jej
              zakończeniem. Do zwiększenia popularności nagród przyczyniły się
              media, radio, a następnie telewizja. Podczas pierwszej dekady
              wyniki były podawane do gazet do publikacji o godzinie 23.00 w noc
              gali. Przestano stosować tę metodę, gdy Los Angeles Times
              zapowiedział zwycięzców, zanim rozpoczęła się ceremonia. Do tego
              incydentu doszło w 1940 roku. W rezultacie od tego czasu Akademia
              stosuje zapieczętowane koperty do wyjawiania nazwisk zwycięzców.
              Poza kopertami zmieniło się także miejsce gali. Na początku lat
              40. z hoteli uroczystość przeniesiono do teatrów. Pierwszym z
              teatrów, w jakich się odbyła, był Grauman’s Chinese Theatre, a
              odbywająca się w nim w 1944 roku ceremonia była pierwszą
              transmitowaną poza granice Stanów Zjednoczonych. Od 2002 roku
              nagrody są przyznawane w nowo zbudowanym Teatrze Dolby. Pierwsze
              gale wręczenia nagród Akademii miały najczęściej miejsce na
              przełomie marca i kwietnia. Począwszy od roku 2004 uroczystości
              odbywają się w ostatnią niedzielę lutego (z wyjątkiem roku 2006).
              Ogłaszaną z dużym wyprzedzeniem datę ceremonii przekładano w 1938
              roku z powodu powodzi, jakie nawiedziły Los Angeles, w 1968 z
              powodu pogrzebu Martina Luthera Kinga, w 1981 z powodu próby
              zabójstwa Ronalda Reagana oraz w 2020 roku z powodu pandemii
              koronawirusa. Nagrodą jest statuetką przedstawiającą rycerza
              opierającego się na dwuręcznym mieczu, stojącego na rolce filmu
              posiadającej pięć szprych, z której każda symbolizuje jedną z grup
              zawodowych reprezentowanych w Akademii: aktorów, scenarzystów,
              reżyserów, producentów i techników. Statuetka waży ok. 3,9 kg (8,5
              funta) i ma ok. 35 cm (13,5 cala) wysokości. Wykonana jest z tzw.
              „britannium”, czyli stopu cyny (93%), antymonu (5%) i miedzi (2%),
              pokrytego 24-karatowym złotem. Statuetkę zaprojektował Cedric
              Gibbons w 1928 r. (według legendy pierwszy szkic wykonał na
              serwetce podczas bankietu), a jej odlew wykonał rzeźbiarz George
              Stanley. W latach 1942, 1943 i 1944 statuetki zamiast z metalu
              wykonano z gipsu. Było to wyrazem troski Akademii Filmowej o losy
              wojny. Statuetki gipsowe wymieniono laureatom na metalowe w 1946
              r. Statuetki są wykonywane przez jedną z fabryk w Chicago.
              Oficjalnie nagroda Akademii nazywana jest Academy Award of Merit,
              jednak od roku 1931 używa się potocznej nazwy Oscar, która została
              uznana za oficjalną w 1939. Pochodzi ona według jednej z legend od
              uwagi wygłoszonej w roku 1931 przez Margaret Herrick,
              bibliotekarkę Akademii, która na widok statuetki stwierdziła, że
              przypomina jej wuja Oscara Pierce’a. Usłyszeć to miał hollywoodzki
              dziennikarz Sidney Skolsky, któremu bardzo spodobało się to
              określenie i zaczął go używać w felietonach. Inna legenda głosi,
              że nazwę Oscar statuetce nadała aktorka Bette Davis.
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HomePage;
