import styled from 'styled-components';

const Card = styled.div`
  width: 326px;
  height: 175px;
  box-shadow: 0px 4.74877px 17.8079px rgba(240, 161, 180, 0.4);
  backdrop-filter: blur(124.655px);
  border-radius: 14.2463px;

  &.reclamacao {
    background: radial-gradient(
      143.86% 887.35% at -10.97% -22.81%,
      #ffb339 0%,
      #c67a00 100%
    );
  }

  &.sugestao {
    background: radial-gradient(
      143.86% 887.35% at -10.97% -22.81%,
      #f99bda 0%,
      #c936ff 100%
    );
  }

  &.duvida {
    background: radial-gradient(
      143.86% 887.35% at -10.97% -22.81%,
      #a0d3f9 0%,
      #4d4dff 100%
    );
  }
`;

export default function FaleConosco() {
  return (
    <div>
      <Card className="reclamacao">aaa</Card>
      <Card className="sugestao">aaa</Card>
      <Card className="duvida">aaa</Card>
    </div>
  );
}
