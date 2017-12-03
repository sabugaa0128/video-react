import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { PrismCode } from 'react-prism';
import { Table, Alert } from 'reactstrap';
import Layout from '../../components/ComponentsLayout';
import ShortcutExample from '../../examples/Shortcut';

export default class ShortcutPage extends React.Component {
  static async getInitialProps ({ query }) {
    const response = await fetch(`http://localhost:9000/code/Shortcut.js`)
    const ShortcutExampleSource = await response.text()
    return { ShortcutExampleSource }
  }

  render() {
    const { ShortcutExampleSource } = this.props;
    return (
      <Layout page="Shortcut">
        <Head>
          <title>Video-React - Shortcut</title>
        </Head>
        <h3>Shortcut</h3>
        <p>
          Using keyboard shortcut to control the player.
        </p>

        <Alert color="warning">
          <strong>Warning!</strong>The shortcut can work only if the player is in active.
        </Alert>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
{`Shortcut.propTypes = {

  // Add your own shortcuts
  shortcuts: PropTypes.array,

}`}
          </PrismCode>
        </pre>
        <h4>Keyboard Shortcuts</h4>
        <Table>
          <thead>
            <tr>
                <th>
                    <font size="3">Action</font>
                </th>
                <th>
                    <font size="3">Shortcut </font>
                </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Toggle play/pause the video</td>
              <td>k or Spacebar</td>
            </tr>
            <tr>
              <td>Go back 5 seconds</td>
              <td>Left arrow</td>
            </tr>
            <tr>
              <td>Go back 10 seconds</td>
              <td>j</td>
            </tr>
            <tr>
              <td>Go forward 5 seconds</td>
              <td>Right arrow</td>
            </tr>
            <tr>
              <td>Go forward 10 seconds</td>
              <td>l</td>
            </tr>
            <tr>
              <td>Restart video</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Go to Full Screen mode</td>
              <td>f</td>
            </tr>
            <tr>
              <td>Exit Full Screen mode</td>
              <td>Escape</td>
            </tr>
            <tr>
              <td>Increase volume 5%</td>
              <td>Up arrow</td>
            </tr>
            <tr>
              <td>Decrease volume 5%</td>
              <td>Down arrow</td>
            </tr>
            <tr>
              <td>Increase speed</td>
              <td>Shift + {'>'}</td>
            </tr>
            <tr>
              <td>Decrease speed</td>
              <td>Shift + {'<'}</td>
            </tr>
          </tbody>
        </Table>
        <h4>Example</h4>
        <div className="docs-example">
          <ShortcutExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ShortcutExampleSource}
          </PrismCode>
        </pre>
      </Layout>
    );
  }
}
