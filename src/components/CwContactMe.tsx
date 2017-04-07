import React, {Component, ReactElement} from 'react';
import './CwContactMe.scss';

export class CwContactMe extends Component<void, void> {
  public render(): ReactElement<HTMLDivElement> {
    let formContent: ReactElement<HTMLElement>|null = null;

    return <div className="cw-contact-me">
      <div className="cw-contact-me--grid">
        <div className="cw-contact-me--form-grid-item">
          <div className="cw-contact-me--form-panel">
            {formContent}
          </div>
        </div>

        <div className="cw-contact-me--explanation-grid-item">
          <div className="cw-contact-me--explanation-panel">
            <p className="cw-contact-me--explanation-panel-text">
              By giving me your contact details I can get back to you at my earliest convenience.
            </p>
            <p className="cw-contact-me--explanation-panel-text">
              Please feel free to contact me with regards to any programming questions, open-source projects or
              freelance
              work.
            </p>
          </div>
        </div>
      </div>
    </div>;
  }
}
