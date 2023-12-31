import { bearCss } from '@bearon/utils';

//TODO: change css to use CSS in JS
export const commonTextStyle = ({
  size,
  color,
  align,
  weight,
}: {
  size?: string;
  color?: string;
  align?: string;
  weight?: string;
}) => bearCss`
font-size: ${(() => {
  if (size === 'xs') return 'var(--fontSizeBodyXs)';
  return '';
})()};


    &[data-size='xs'] {
    font-size: var(--fontSizeBodyXs);
  }
  &[data-size='s'] {
    font-size: var(--fontSizeBodyS);
  }
  &[data-size='m'] {
    font-size: var(--fontSizeBodyM);
  }
  &[data-size='l'] {
    font-size: var(--fontSizeBodyL);
  }
  &[data-size='xl'] {
    font-size: var(--fontSizeBodyXL);
  }
  &[data-size='2xl'] {
    font-size: var(--fontSizeBody2xl);
  }
  &[data-size='3xl'] {
    font-size: var(--fontSizeBody3xl);
  }

  &[data-level='0'],
  &[data-level='h0'] {
    letter-spacing: -0.05em;
    font-size: var(--fontSizeH0);
  }

  &[data-level='1'],
  &[data-level='h1'] {
    letter-spacing: -0.05em;
    font-size: var(--fontSizeH1);
  }

  &[data-level='2'],
  &[data-level='h2'] {
    font-size: var(--fontSizeH2);
    letter-spacing: -0.04em;
  }

  &[data-level='3'],
  &[data-level='h3'] {
    font-size: var(--fontSizeH3);
    letter-spacing: -0.02em;
  }

  &[data-level='4'],
  &[data-level='h4'] {
    font-size: var(--fontSizeH4);
    letter-spacing: -0.01em;
  }

  &[data-level='5'],
  &[data-level='h5'] {
    font-size: var(--fontSizeH5);
  }

  &[data-align='auto'] {
    text-align: inherit;
  }
  &[data-align='start'] {
    text-align: start;
  }
  &[data-align='center'] {
    text-align: center;
  }

  &[data-weight='auto'] {
    font-weight: inherit;
  }
  &[data-weight='regular'] {
    font-weight: var(--fontWeightRegular);
  }
  &[data-weight='medium'] {
    font-weight: var(--fontWeightMedium);
  }
  &[data-weight='bold'] {
    font-weight: var(--fontWeightBold);
  }
`;
