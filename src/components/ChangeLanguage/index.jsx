import React from "react";
import "./style.css";

const ChangeLanguage = () => {
  return (
    <div>
      <div class="select-box">
        <div class="select-box__current" tabindex="1">
          <div class="select-box__value">
            <input
              class="select-box__input"
              type="radio"
              id="0"
              value="1"
              name="Ben"
              checked="checked"
            />
            <p class="select-box__input-text">UZB</p>
          </div>
          <div class="select-box__value">
            <input
              class="select-box__input"
              type="radio"
              id="1"
              value="2"
              name="Ben"
              checked="checked"
            />
            <p class="select-box__input-text">RUS</p>
          </div>
          <div class="select-box__value">
            <input
              class="select-box__input"
              type="radio"
              id="2"
              value="3"
              name="Ben"
              checked="checked"
            />
            <p class="select-box__input-text">ENG</p>
          </div>

          <img
            class="select-box__icon"
            src="http://cdn.onlinewebfonts.com/svg/img_295694.svg"
            alt="Arrow Icon"
            aria-hidden="true"
          />
        </div>
        <ul class="select-box__list">
          <li>
            <label class="select-box__option" for="0" aria-hidden="aria-hidden">
              UZB
            </label>
          </li>
          <li>
            <label class="select-box__option" for="1" aria-hidden="aria-hidden">
              RUS
            </label>
          </li>
          <li>
            <label class="select-box__option" for="2" aria-hidden="aria-hidden">
              ENG
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ChangeLanguage;
