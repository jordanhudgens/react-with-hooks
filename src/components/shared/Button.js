import styled from "styled-components";

export default styled.a`
  border-radius: 5px;
  background: white;
  border: 1px solid #42454a;
  color: #42454a;
  padding: 0.5rem 1rem;
  margin: 0.5rem 1rem;
  font-size: 1.5rem;
  font-weight: 900;
  transition: 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  }
`;
