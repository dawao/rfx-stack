import React, { Component } from 'react';
import { connect } from '../state/context';
import cx from 'classnames';

@connect
export default class MatchMedia extends Component {

  render() {
    const bp = this.context.store.ui.breakpoints;
    return (
      <div>
        <br />
        <br />
        <br />
        <h1>MatchMedia + MobX</h1>
        <h5>Resize your browser window to see the breakpoints changing automatically.</h5>
        <p>The breakpoints are customizables in /src/store/ui.js</p>
        <hr />
        <table>
          <tbody>
            <tr>
              <td>xs</td>
              <td className={cx('white', { 'bg-lime': bp.xs, 'bg-red': !bp.xs })}>
                {bp.xs ? 'YES' : 'NO'}
              </td>
              <td>Extra small devices</td>
            </tr>
            <tr>
              <td>su</td>
              <td className={cx('white', { 'bg-lime': bp.su, 'bg-red': !bp.su })}>
                {bp.su ? 'YES' : 'NO'}
              </td>
              <td>Small devices and UP</td>
            </tr>
            <tr>
              <td>md</td>
              <td className={cx('white', { 'bg-lime': bp.md, 'bg-red': !bp.md })}>
                {bp.md ? 'YES' : 'NO'}
              </td>
              <td>Medium devices</td>
            </tr>
            <tr>
              <td>mu</td>
              <td className={cx('white', { 'bg-lime': bp.mu, 'bg-red': !bp.mu })}>
                {bp.mu ? 'YES' : 'NO'}
              </td>
              <td>Medium devices and UP</td>
            </tr>
            <tr>
              <td>lg</td>
              <td className={cx('white', { 'bg-lime': bp.lg, 'bg-red': !bp.lg })}>
                {bp.lg ? 'YES' : 'NO'}
              </td>
              <td>Large devices and UP</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
