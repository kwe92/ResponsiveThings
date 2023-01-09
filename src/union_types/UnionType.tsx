import styled, {StyledComponent} from "styled-components";

// Unioned Generic Type Alias

type CustomStyledComponent<T extends object> = StyledComponent<"div", any, T, never> | StyledComponent<"nav", any, T, never>;

interface ContainerProps{
    primary: boolean;
}

export const Container: CustomStyledComponent<ContainerProps> = styled.div<ContainerProps>`

display: flex;

height: 6rem;

width: 6rem;

`;

// Why is this allowed?
export const Image: StyledComponent<"div", any, {}, never> = styled.img`

max-width: 100%;

`;




