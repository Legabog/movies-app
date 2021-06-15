import styled from "styled-components";

const Wrapper = styled.div``;

const Svg = styled.svg.attrs({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 100 100",
})`
  width: 50px;
  height: 50px;
  background: none;
`;

export const Preloader = (props) => {
  return (
    <Wrapper>
      <Svg>
        <g transform="translate(50,50)">
          <g ng-attr-transform="scale({{config.scale}})" transform="scale(0.7)">
            <circle
              cx="0"
              cy="0"
              r="50"
              ng-attr-fill="{{config.c1}}"
              fill="#ffdb00"
            ></circle>
            <circle
              cx="0"
              ng-attr-cy="{{config.cy}}"
              ng-attr-r="{{config.r}}"
              ng-attr-fill="{{config.c2}}"
              cy="-28"
              r="15"
              fill="#fdfdfd"
              transform="rotate(316.364)"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                calcMode="linear"
                values="0 0 0;360 0 0"
                keyTimes="0;1"
                dur="1.1s"
                begin="0s"
                repeatCount="indefinite"
              ></animateTransform>
            </circle>
          </g>
        </g>
      </Svg>
    </Wrapper>
  );
};
