import React from "react";
import { CountItem } from "../../mock/countUp";
import { Box, Container, IconWrap, Wrapper } from "./style";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Count = () => {
  const [counterOn, setCounterOn] = useState(false);
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Container>
        {CountItem.map((value) => {
          return (
            <Box key={value.id}>
              <IconWrap>
                <svg
                  width="44"
                  height="43"
                  viewBox="0 0 44 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.89297 5.90427C15.2778 -1.93567 28.5231 -2.11145 37.0486 6.23826C38.3055 7.47753 36.4861 9.49904 35.0798 8.12793C27.6266 0.885654 16.1128 1.07023 8.80901 7.84668C7.37638 9.17384 5.60096 7.11718 6.89297 5.90427ZM15.5855 42.6957C17.2818 43.1967 18.1607 40.6215 16.2798 40.059C6.41836 37.0795 0.828444 26.9016 3.31578 17.1193C3.75524 15.3966 1.12728 14.6495 0.66145 16.4952C-2.15987 27.6926 4.2738 39.3295 15.5855 42.6957ZM28.6022 42.5199C39.3162 38.9867 45.5565 27.8508 43.0516 16.9435C42.6561 15.212 39.9842 15.7306 40.4149 17.6378C42.5418 27.1037 37.1541 36.7894 27.8288 39.9096C25.9655 40.5248 26.9147 43.0737 28.6022 42.5199ZM23.0738 35.5765L23.0914 29.2659C23.0914 28.5452 22.5113 27.9651 21.7906 27.9651C21.0699 27.9651 20.4898 28.554 20.4898 29.2659L20.4722 35.5765C20.4722 36.2972 21.0523 36.8773 21.773 36.8773C22.4938 36.8773 23.0738 36.2972 23.0738 35.5765ZM29.3141 11.9336C29.4987 19.923 29.7272 23.5266 21.7994 23.5793C13.6694 23.5178 14.1616 19.6857 14.2847 11.9336C14.2847 10.0176 11.4282 10.211 11.4282 11.9336V18.2267C11.4282 24.3176 16.7632 26.216 21.7994 26.1457C26.8356 26.216 32.1706 24.3176 32.1706 18.2267V11.9336C32.1706 10.211 29.3141 10.0176 29.3141 11.9336Z"
                    fill="white"
                  />
                </svg>
              </IconWrap>

              <Box.Number>
                <ScrollTrigger
                  onEnter={() => setCounterOn(true)}
                  onExit={() => setCounterOn(false)}
                >
                  {counterOn && <CountUp end={value.number} duration={5} />}
                </ScrollTrigger>
              </Box.Number>
              <Box.Title>{t(value.title)}</Box.Title>
            </Box>
          );
        })}
      </Container>
    </Wrapper>
  );
};

export default Count;
