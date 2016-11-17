import React from 'react';
import { PrismCode } from 'react-prism';
import { Button, Container, Row, Col, Jumbotron } from 'reactstrap';
import { Link } from 'react-router';
import BasicExample from '../examples/import-basic';
import FullExample from '../examples/import-full';

const importBasic = require('!!raw!../examples/import-basic');
const importFull = require('!!raw!../examples/import-full');

export default () => {
  return (
    <div>
      <Jumbotron tag="section" className="jumbotron-header text-xs-center m-b-3">
        <Container fluid>
          <Row>
            <Col>
              <p className="lead">
                <img src="/assets/logo.png" alt="" width="150px" />
              </p>
              <h1 className="jumbotron-heading display-4">Video-React</h1>
              <p className="lead">
                The web video player built from the ground up for an HTML5 world using React library.
              </p>
              <p>
                <Button outline color="danger" href="https://github.com/video-react/video-react">View on Github</Button>
                <Button color="danger" tag={Link} to="/components/">View Components</Button>
                
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Container fluid>
        <Row>
          <Col sm={{ size: 8, offset: 2 }}>
            <h2>Installation</h2>
            <hr />
            <h3>NPM</h3>
            <p>Install video-react and peer dependencies via NPM</p>
            <pre>
              <PrismCode className="language-bash">npm install --save video-react react react-dom</PrismCode>
            </pre>
            <h3>Basic example</h3>
            <p>The basic player</p>
            <div className="docs-example">
              <BasicExample />
            </div>
            <p>import css in your app or add video-react styles in your page</p>
            <pre>
              <PrismCode className="language-jsx">
                import "node_modules/video-react/dist/video-react.css"; // import css
              </PrismCode>
            </pre>
            <pre>
              <PrismCode className="language-jsx">
                @import "~video-react/styles/scss/video-react"; // or import scss
              </PrismCode>
            </pre>
            <pre>
              <PrismCode className="language-html">
                &lt;link rel="stylesheet" href="/css/video-react.css" /&gt;
              </PrismCode>
            </pre>
            <pre>
              <PrismCode className="language-jsx">
                {importBasic}
              </PrismCode>
            </pre>
            <h3>Full example</h3>
            <p>Customize the control bar buttons.</p>

            <div className="docs-example">
              <FullExample />
            </div>
            <pre>
              <PrismCode className="language-jsx">
                {importFull}
              </PrismCode>
            </pre>

            <h2 className="m-t-3">Development</h2>
            <hr />
            <p>Install dependencies:</p>
            <pre>
              <PrismCode className="language-bash">npm install</PrismCode>
            </pre>
            <p>
            Run examples at [http://localhost:9000/](http://localhost:9000/) with webpack dev server:
            </p>
            <pre>
              <PrismCode className="language-bash">npm start</PrismCode>
            </pre>
            <p>
              Run tests & coverage report:
            </p>
            <pre>
              <PrismCode className="language-bash">npm test</PrismCode>
            </pre>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
