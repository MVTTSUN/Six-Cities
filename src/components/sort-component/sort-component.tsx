import { useState } from 'react';

export default function SortComponent() {
  const [isActive, setIsActive] = useState(false);
  const [optionId, setOptionId] = useState(1);
  const sortOptions = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];
  const clickButtonHandler = () => setIsActive(!isActive);
  const clickItemHandler = (i: number) => {
    clickButtonHandler();
    setOptionId(i + 1);
  };

  return (
    <>
      <span onClick={clickButtonHandler} className="places__sorting-type" tabIndex={0}>
        &nbsp;{sortOptions[optionId - 1]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {
        isActive && (
          <ul className="places__options places__options--custom places__options--opened">
            {sortOptions.map((option, i) => (
              <li
                onClick={() => clickItemHandler(i)}
                key={`${i + 1}`}
                className={
                  optionId - 1 === i
                    ? 'places__option places__option--active'
                    : 'places__option'
                }
                tabIndex={0}
              >
                {option}
              </li>
            ))}
          </ul>
        )
      }
    </>
  );
}
