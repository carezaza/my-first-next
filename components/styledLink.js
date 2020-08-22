import Link from "next/link";
import { withRouter } from "next/router";
import styled from "styled-components";

const StyledLink = styled.a`
  color: ${({ color, active, theme }) => {
    if (active) {
      return theme.colors.primary;
    }
    return color ? color : "inherit";
  }};
  cursor: pointer;
  padding: 8px;
  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

function styledLink({ router, children, color, ...restProps }) {
  return (
    <Link {...restProps}>
      <StyledLink active={router.pathname === restProps.href} color={color}>
        {children}
      </StyledLink>
    </Link>
  );
}

export default withRouter(styledLink);
