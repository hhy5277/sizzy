import styled from 'styled-components';
import flex from 'styles/flex';
import {toolbarHeight} from 'styles/sizes';

export const Sizzy = styled.div`
  ${flex.horizontal}
  height: calc(100vh - ${toolbarHeight}px);
  max-height: calc(100vh - ${toolbarHeight}px);
`;

export const Devices = styled.div`
  ${flex.horizontal}
  ${flex.wrap}
  padding: 30px;
  overflow-y: scroll;
  flex: 1;
`;
