import { useState } from "react";

import { Container } from "@styles/components/Container.styled";

import { ReactComponent as Logo } from "@assets/react.svg";

import { StyledCounter } from "./Counter.styled";


interface CounterProps {
  initialCount?: number;
}

export const Counter = ({ initialCount }: CounterProps) => {
  const [count, setCount] = useState(initialCount ?? 0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  const switchSign = () => {
    setCount(count * -1);
  };

  return (
    <StyledCounter>
      <Container>
        <nav>
          <h2>rtsc-template</h2>
          <Logo />
        </nav>

        <div className="content">
          <div className="header">
            <h1>
              Count: <span data-testid="count">{count}</span>
            </h1>
          </div>

          <div className="body">
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={switchSign}>Switch sign</button>
          </div>
        </div>
      </Container>
    </StyledCounter>
  );
};
