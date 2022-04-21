// Styled Component
import styled from "styled-components";

export const LoaderElement = styled.div`
  /* 
    This loader was maded by jh3y - jheytompkins.com

    Check it out on this GitHub Repo: https://github.com/jh3y/whirl
  */
  /**
  * Cascade
  *
  * @author jh3y - jheytompkins.com
*/
  /**
  * Eclipse
  *
  * @author jh3y - jheytompkins.com
*/
  .eclipse:before {
    display: block;
    content: "";
    height: 50px;
    width: 50px;
    -webkit-animation: eclipse 1s infinite ease;
    animation: eclipse 1s infinite ease;
    background-color: ${(props) => props.theme.colors.dark_grayish_blue};
    border-radius: 100%;
  }

  @-webkit-keyframes eclipse {
    from {
      -webkit-box-shadow: inset 50px 0 0 0
        ${(props) => props.theme.colors.light_cyan};
      box-shadow: inset 50px 0 0 0 ${(props) => props.theme.colors.light_cyan};
    }
    to {
      -webkit-box-shadow: inset -50px 0 0 0 ${(props) => props.theme.colors.light_cyan};
      box-shadow: inset -50px 0 0 0 ${(props) => props.theme.colors.light_cyan};
    }
  }

  @keyframes eclipse {
    from {
      -webkit-box-shadow: inset 50px 0 0 0
        ${(props) => props.theme.colors.light_cyan};
      box-shadow: inset 50px 0 0 0 ${(props) => props.theme.colors.light_cyan};
    }
    to {
      -webkit-box-shadow: inset -50px 0 0 0 ${(props) => props.theme.colors.light_cyan};
      box-shadow: inset -50px 0 0 0 ${(props) => props.theme.colors.light_cyan};
    }
  }
`;
